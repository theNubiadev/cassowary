"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  Truck,
  MapPin,
  X,
  ArrowRight,
  Shield,
  Clock,
  Route,
  ChevronUp,
  Banknote,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface DriverCardProps {
  driver: any;
}

// ─── Bottom Sheet ──────────────────────────────────────────────────────────────

function DriverBottomSheet({
  driver,
  open,
  onClose,
}: {
  driver: any;
  open: boolean;
  onClose: () => void;
}) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const currentY = useRef(0);
  const isDragging = useRef(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [closing, setClosing] = useState(false);
  const router = useRouter();
  // Close on backdrop click
  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) triggerClose();
  }

  // Close on Escape
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

  function triggerClose() {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setDragOffset(0);
      onClose();
    }, 300);
  }

  // Drag-to-dismiss
  function onTouchStart(e: React.TouchEvent) {
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
    if (dragOffset > 120) {
      triggerClose();
    } else {
      setDragOffset(0);
    }
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
      onClick={handleBackdropClick}
    >
      <div
        ref={sheetRef}
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
        <div className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        {/* Close button */}
        <button
          onClick={triggerClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[85vh] px-5 pb-8">
          {/* Hero: avatar + name + rating */}
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
              <div className="flex items-center gap-1.5 mt-1">
                <div className="flex items-center gap-0.5">
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
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {driver.avgRating?.toFixed(1) ?? "0.0"}
                </span>
                <span className="text-xs text-gray-400">
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

          {/* Stats row */}
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
              <p className="text-xs text-gray-400 mt-0.5">Yrs Experience</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-[#1E3A8A]">
                {driver.capacityTons}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Tonnes Cap.</p>
            </div>
          </div>

          {/* Truck info */}
          <div className="py-4 border-b border-gray-100 space-y-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
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

          {/* Base location */}
          <div className="py-4 border-b border-gray-100 space-y-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
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
            <div className="py-4 border-b border-gray-100 space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
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
          <div className="py-4 border-b border-gray-100 space-y-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
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
            <div className="py-4 border-b border-gray-100 space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                About
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {driver.bio}
              </p>
            </div>
          )}

          {/* CTA buttons */}
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
              onClick={() => {
                // hook up your booking/select logic here
                router.push(`/book?driverProfileId=${driver.id}`);
                triggerClose();
              }}
            >
              Select This Driver
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Driver Card ───────────────────────────────────────────────────────────────

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
            onClick={() => {
              // hook up your select/book logic here
              //   router.push(`/book?driverProfileId=${driver.id}`);
            }}
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

      {/* Bottom Sheet */}
      <DriverBottomSheet
        driver={driver}
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </>
  );
}
