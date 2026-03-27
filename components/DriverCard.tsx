"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Star,
  Truck,
  MapPin,
  X,
  ArrowRight,
  ArrowLeft,
  Shield,
  Clock,
  Route,
  Loader2,
  Package,
  CalendarDays,
  StickyNote,
  Banknote,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DriverCardProps {
  driver: any;
}

interface CargoListing {
  id: string;
  title: string;
  originState: string;
  destState: string;
  weightTons: number;
  cargoType: string;
  neededBy: string;
  budget?: number;
}

// ─── Booking schema ───────────────────────────────────────────────────────────

const bookingSchema = z.object({
  cargoListingId: z.string().min(1, "Please select a cargo listing"),
  pickupDate: z
    .string()
    .min(1, "Pickup date is required")
    .refine((s) => !isNaN(Date.parse(s)), { message: "Invalid date" }),
  agreedAmount: z.coerce
    .number({ invalid_type_error: "Enter a valid amount" })
    .positive("Amount must be greater than 0"),
  estimatedDelivery: z.string().optional(),
  notes: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

// ─── Bottom Sheet ─────────────────────────────────────────────────────────────

function DriverBottomSheet({
  driver,
  open,
  onClose,
}: {
  driver: any;
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [listings, setListings] = useState<CargoListing[]>([]);
  const [listingsLoading, setListingsLoading] = useState(false);
  const [listingsError, setListingsError] = useState("");
  const [selectedListing, setSelectedListing] = useState<CargoListing | null>(
    null,
  );
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [dragOffset, setDragOffset] = useState(0);
  const [closing, setClosing] = useState(false);
  const startY = useRef(0);
  const isDragging = useRef(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<BookingForm>({ resolver: zodResolver(bookingSchema) });

  const watchedListingId = watch("cargoListingId");

  // Fetch the user's cargo listings when stepping to step 2
  async function loadListings() {
    setListingsLoading(true);
    setListingsError("");
    try {
      const res = await fetch("/api/cargo/listings?mine=true");
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to load listings");
      setListings(json.listings ?? []);
    } catch (e: any) {
      setListingsError(e.message);
    } finally {
      setListingsLoading(false);
    }
  }

  function goToStep2() {
    loadListings();
    setStep(2);
  }

  function goToStep1() {
    setStep(1);
    setBookingError("");
    setSelectedListing(null);
    reset();
  }

  // Submit booking
  async function onSubmit(data: BookingForm) {
    setBookingLoading(true);
    setBookingError("");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cargoListingId: data.cargoListingId,
          driverId: driver.userId,
          driverProfileId: driver.id,
          agreedAmount: data.agreedAmount,
          pickupDate: new Date(data.pickupDate).toISOString(),
          estimatedDelivery: data.estimatedDelivery
            ? new Date(data.estimatedDelivery).toISOString()
            : undefined,
          notes: data.notes,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setBookingError(json.error || "Booking failed. Please try again.");
        return;
      }
      setBookingSuccess(true);
      setTimeout(() => triggerClose(), 2000);
    } catch {
      setBookingError("Network error. Please check your connection.");
    } finally {
      setBookingLoading(false);
    }
  }

  // Close helpers
  function triggerClose() {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setDragOffset(0);
      setStep(1);
      setSelectedListing(null);
      setBookingSuccess(false);
      setBookingError("");
      reset();
      onClose();
    }, 300);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") triggerClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Drag-to-dismiss (step 1 only)
  function onTouchStart(e: React.TouchEvent) {
    if (step !== 1) return;
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  }
  function onTouchMove(e: React.TouchEvent) {
    if (!isDragging.current) return;
    const delta = e.touches[0].clientY - startY.current;
    if (delta > 0) setDragOffset(delta);
  }
  function onTouchEnd() {
    isDragging.current = false;
    if (dragOffset > 120) triggerClose();
    else setDragOffset(0);
  }

  if (!open && !closing) return null;

  const translateY = closing
    ? "100%"
    : dragOffset > 0
      ? `${dragOffset}px`
      : "0%";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-all duration-300 ${
        closing ? "bg-black/0" : "bg-black/50"
      } backdrop-blur-sm`}
      onClick={(e) => {
        if (e.target === e.currentTarget) triggerClose();
      }}
    >
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          transform: `translateY(${translateY})`,
          transition: isDragging.current
            ? "none"
            : "transform 0.35s cubic-bezier(0.32,0.72,0,1)",
        }}
        className="w-full max-w-lg bg-white rounded-t-3xl shadow-2xl overflow-hidden"
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        {/* Step indicator pill */}
        <div className="flex justify-center mt-1 mb-0">
          <div className="flex items-center gap-1.5 bg-gray-100 rounded-full px-3 py-1">
            <div
              className={`w-2 h-2 rounded-full transition-colors ${step === 1 ? "bg-[#1E3A8A]" : "bg-gray-300"}`}
            />
            <div
              className={`w-2 h-2 rounded-full transition-colors ${step === 2 ? "bg-[#1E3A8A]" : "bg-gray-300"}`}
            />
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={triggerClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>

        {/* ── STEP 1: Driver Profile ─────────────────────────────────── */}
        {step === 1 && (
          <div className="overflow-y-auto max-h-[85vh] px-5 pb-8">
            {/* Hero */}
            <div className="flex items-center gap-4 py-4 border-b border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 overflow-hidden flex items-center justify-center flex-shrink-0">
                {driver?.user?.image ? (
                  <img
                    src={driver.user.image}
                    alt={driver.user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-gray-400">
                    {driver?.user?.name?.charAt(0) ?? "D"}
                  </span>
                )}
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 leading-tight">
                  {driver?.user?.name}
                </h2>
                <div className="flex items-center gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className={`w-3.5 h-3.5 ${
                        n <= Math.round(driver.avgRating ?? 0)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200 fill-gray-200"
                      }`}
                    />
                  ))}
                  <span className="text-sm font-semibold text-gray-700 ml-1">
                    {driver.avgRating?.toFixed(1) ?? "0.0"}
                  </span>
                  <span className="text-xs text-gray-400 ml-1">
                    ({driver.totalTrips ?? 0} trips)
                  </span>
                </div>
                {driver.isVerified && (
                  <div className="flex items-center gap-1 mt-1">
                    <Shield className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">
                      Verified Driver
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 py-4 border-b border-gray-100">
              <div className="text-center">
                <p className="text-lg font-bold text-[#1E3A8A]">
                  {driver.totalTrips ?? 0}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Trips Done</p>
              </div>
              <div className="text-center border-x border-gray-100">
                <p className="text-lg font-bold text-[#1E3A8A]">
                  {driver.yearsExperience ?? 0}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Yrs Exp.</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-[#1E3A8A]">
                  {driver.capacityTons}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Tonnes Cap.</p>
              </div>
            </div>

            {/* Truck */}
            <div className="py-4 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Truck
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center">
                  <Truck className="w-4 h-4 text-[#1E3A8A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {driver.truckModel} ({driver.truckYear})
                  </p>
                  <p className="text-xs text-gray-500">
                    {driver.truckType} • Plate: {driver.plateNumber}
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="py-4 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Base Location
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#F97316]" />
                </div>
                <p className="text-sm text-gray-700">
                  {driver.baseCity}, {driver.baseState}
                </p>
              </div>
            </div>

            {/* Routes */}
            {driver.servicesRoutes?.length > 0 && (
              <div className="py-4 border-b border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Routes Covered
                </p>
                <div className="space-y-2">
                  {driver.servicesRoutes.map((r: any, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2"
                    >
                      <Route className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">
                        {r.originState}
                      </span>
                      <ArrowRight className="w-3 h-3 text-gray-300 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">
                        {r.destState}
                      </span>
                      <div className="ml-auto flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-400">
                          {r.estimatedDays}d
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rates */}
            <div className="py-4 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Pricing
              </p>
              <div className="flex gap-3">
                <div className="flex-1 bg-gray-50 rounded-xl px-3 py-2.5">
                  <p className="text-xs text-gray-400">Per km</p>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">
                    ₦{driver.ratePerKm?.toLocaleString()}
                  </p>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl px-3 py-2.5">
                  <p className="text-xs text-gray-400">Min. charge</p>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">
                    ₦{driver.minimumCharge?.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            {driver.bio && (
              <div className="py-4 border-b border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  About
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {driver.bio}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="flex gap-3 pt-5">
              <Button
                variant="outline"
                className="flex-1 h-11 text-sm font-semibold border-gray-200"
                onClick={triggerClose}
              >
                Close
              </Button>
              <Button
                className="flex-[2] h-11 text-sm font-semibold bg-[#1E3A8A] hover:bg-blue-900 text-white"
                onClick={goToStep2}
              >
                Select This Driver
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Booking Form ───────────────────────────────────── */}
        {step === 2 && (
          <div className="overflow-y-auto max-h-[85vh] px-5 pb-8">
            {/* Header */}
            <div className="flex items-center gap-3 py-4 border-b border-gray-100">
              <button
                onClick={goToStep1}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <ArrowLeft className="w-4 h-4 text-gray-600" />
              </button>
              <div>
                <h2 className="text-base font-bold text-gray-900">
                  Book {driver?.user?.name}
                </h2>
                <p className="text-xs text-gray-400">
                  {driver.truckType} • {driver.truckModel}
                </p>
              </div>
            </div>

            {/* Success state */}
            {bookingSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Booking Sent!
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Your booking request has been sent to the driver.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 pt-4"
              >
                {/* Cargo listing picker */}
                <div>
                  <Label className="text-[#1E3A8A] font-semibold text-sm flex items-center gap-1.5 mb-2">
                    <Package className="w-4 h-4" /> Select Cargo Listing
                  </Label>

                  {listingsLoading ? (
                    <div className="space-y-2">
                      {[1, 2].map((i) => (
                        <div
                          key={i}
                          className="h-16 bg-gray-100 rounded-xl animate-pulse"
                        />
                      ))}
                    </div>
                  ) : listingsError ? (
                    <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
                      {listingsError}
                    </div>
                  ) : listings.length === 0 ? (
                    <div className="px-4 py-6 rounded-xl bg-gray-50 border border-dashed border-gray-200 text-center">
                      <Package className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                      <p className="text-sm text-gray-500 font-medium">
                        No active cargo listings
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Post a cargo listing first before booking a driver.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {listings.map((listing) => {
                        const isSelected = watchedListingId === listing.id;
                        return (
                          <button
                            type="button"
                            key={listing.id}
                            onClick={() => {
                              setValue("cargoListingId", listing.id, {
                                shouldValidate: true,
                              });
                              setSelectedListing(listing);
                              // Pre-fill agreed amount with budget if available
                              if (listing.budget) {
                                setValue("agreedAmount", listing.budget);
                              }
                            }}
                            className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
                              isSelected
                                ? "border-[#1E3A8A] bg-[#1E3A8A]/5"
                                : "border-gray-100 bg-gray-50 hover:border-gray-200"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-semibold text-gray-800 truncate pr-2">
                                {listing.title}
                              </p>
                              <ChevronRight
                                className={`w-4 h-4 flex-shrink-0 transition-colors ${
                                  isSelected
                                    ? "text-[#1E3A8A]"
                                    : "text-gray-300"
                                }`}
                              />
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {listing.originState} → {listing.destState} •{" "}
                              {listing.weightTons}t
                              {listing.budget &&
                                ` • Budget: ₦${listing.budget.toLocaleString()}`}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {errors.cargoListingId && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cargoListingId.message}
                    </p>
                  )}
                </div>

                {/* Agreed amount */}
                <div>
                  <Label className="text-[#1E3A8A] font-semibold text-sm flex items-center gap-1.5 mb-2">
                    <Banknote className="w-4 h-4" /> Agreed Amount (₦)
                  </Label>
                  <Input
                    type="number"
                    min="1"
                    {...register("agreedAmount")}
                    placeholder={`Min. ₦${driver.minimumCharge?.toLocaleString()}`}
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Driver rate: ₦{driver.ratePerKm?.toLocaleString()}/km • Min:
                    ₦{driver.minimumCharge?.toLocaleString()}
                  </p>
                  {errors.agreedAmount && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.agreedAmount.message}
                    </p>
                  )}
                </div>

                {/* Pickup date */}
                <div>
                  <Label className="text-[#1E3A8A] font-semibold text-sm flex items-center gap-1.5 mb-2">
                    <CalendarDays className="w-4 h-4" /> Pickup Date
                  </Label>
                  <Input
                    type="date"
                    {...register("pickupDate")}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.pickupDate && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.pickupDate.message}
                    </p>
                  )}
                </div>

                {/* Estimated delivery (optional) */}
                <div>
                  <Label className="text-[#1E3A8A] font-semibold text-sm flex items-center gap-1.5 mb-2">
                    <CalendarDays className="w-4 h-4" /> Est. Delivery Date
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </Label>
                  <Input
                    type="date"
                    {...register("estimatedDelivery")}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Notes */}
                <div>
                  <Label className="text-[#1E3A8A] font-semibold text-sm flex items-center gap-1.5 mb-2">
                    <StickyNote className="w-4 h-4" /> Notes
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </Label>
                  <textarea
                    {...register("notes")}
                    rows={2}
                    placeholder="Any special instructions for the driver…"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A]"
                  />
                </div>

                {/* Server error */}
                {bookingError && (
                  <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
                    {bookingError}
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={bookingLoading}
                  className="w-full h-11 text-sm font-semibold bg-[#1E3A8A] hover:bg-blue-900 text-white"
                >
                  {bookingLoading ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Sending
                      Request…
                    </>
                  ) : (
                    <>
                      Confirm Booking <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-gray-400">
                  The driver will accept or decline your request
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Driver Card ──────────────────────────────────────────────────────────────

export default function DriverCard({ driver }: DriverCardProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <Card className="p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center flex-shrink-0">
            {driver?.user?.image ? (
              <img
                src={driver.user.image}
                alt={driver.user.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400 text-sm font-bold">
                {driver?.user?.name?.charAt(0) ?? "D"}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 truncate">
              {driver?.user?.name}
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
              <Truck className="w-3 h-3" />
              <span>
                {driver.truckType} • {driver.truckModel}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
              <MapPin className="w-3 h-3" />
              <span>Capacity: {driver.capacityTons} tons</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
              <Star className="w-3 h-3 text-yellow-500" />
              <span>
                {driver.avgRating?.toFixed(1) ?? "0.0"} •{" "}
                {driver.totalTrips ?? 0} trips
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Rate: ₦{driver.ratePerKm?.toLocaleString()} / km
            </p>
            {driver.servicesRoutes?.length > 0 && (
              <p className="text-xs text-gray-500 mt-2">
                Routes:{" "}
                <span className="font-medium">
                  {driver.servicesRoutes[0].originState} →{" "}
                  {driver.servicesRoutes[0].destState}
                </span>
                {driver.servicesRoutes.length > 1 &&
                  ` +${driver.servicesRoutes.length - 1} more`}
              </p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            className="flex-1 text-xs h-8"
            onClick={() => setSheetOpen(true)}
          >
            Select Truck
          </Button>
          <Button
            className="flex-1 bg-[#1E3A8A] hover:bg-blue-900 text-xs h-8 text-white"
            onClick={() => setSheetOpen(true)}
          >
            View Details
          </Button>
        </div>
      </Card>

      <DriverBottomSheet
        driver={driver}
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </>
  );
}
