"use client";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Truck,
  Package,
  Phone,
  CheckCircle2,
  Clock,
  CircleDollarSign,
  ArrowLeft,
  XCircle,
  AlertCircle,
  Star,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

interface Booking {
  id: string;
  status: string;
  agreedAmount: number;
  pickupDate: string;
  estimatedDelivery: string | null;
  actualDelivery: string | null;
  notes: string | null;
  acceptedAt: string | null;
  createdAt: string;
  cargoListing: {
    id: string;
    title: string;
    cargoType: string;
    weightTons: number;
    originState: string;
    originCity: string;
    destState: string;
    destCity: string;
    neededBy: string;
  };
  owner: { id: string; name: string; email: string; phone: string };
  driver: { id: string; name: string; phone: string; image: string | null };
  driverProfile: {
    id: string;
    truckType: string;
    truckModel: string;
    truckYear: number;
    plateNumber: string;
    capacityTons: number;
    ratePerKm: number;
  };
  transaction: {
    status: string;
    amount: number;
    paymentReference: string | null;
    channel: string | null;
    completedAt: string | null;
  } | null;
  review: { rating: number; comment: string | null } | null;
}

// All possible booking statuses in order
const STATUS_STEPS = [
  {
    key: "PENDING",
    label: "Booking Requested",
    icon: <Clock className="w-4 h-4" />,
  },
  {
    key: "ACCEPTED",
    label: "Driver Accepted",
    icon: <CheckCircle2 className="w-4 h-4" />,
  },
  {
    key: "PAYMENT_PENDING",
    label: "Payment Processing",
    icon: <CircleDollarSign className="w-4 h-4" />,
  },
  {
    key: "PAID",
    label: "Payment Confirmed",
    icon: <CheckCircle2 className="w-4 h-4" />,
  },
  {
    key: "IN_TRANSIT",
    label: "In Transit",
    icon: <Truck className="w-4 h-4" />,
  },
  {
    key: "DELIVERED",
    label: "Delivered",
    icon: <CheckCircle2 className="w-4 h-4" />,
  },
];

const STATUS_ORDER = [
  "PENDING",
  "ACCEPTED",
  "PAYMENT_PENDING",
  "PAID",
  "IN_TRANSIT",
  "DELIVERED",
];

const STATUS_CONFIG: Record<
  string,
  { color: string; bg: string; border: string }
> = {
  PENDING: {
    color: "text-yellow-700",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  ACCEPTED: {
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  PAYMENT_PENDING: {
    color: "text-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  PAID: {
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  IN_TRANSIT: {
    color: "text-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  DELIVERED: {
    color: "text-green-800",
    bg: "bg-green-100",
    border: "border-green-300",
  },
  CANCELLED: {
    color: "text-gray-500",
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
  DISPUTED: {
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
  },
};

export default function BookingDetailPage() {
  const { data: session } = useSession();
  const params = useParams();
  const router = useRouter();
  const bookingId = params.id as string;

  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [payLoading, setPayLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [reviewForm, setReviewForm] = useState({ rating: 0, comment: "" });
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const paymentResult = searchParams.get("payment");

  const fetchBooking = async () => {
    try {
      const res = await fetch(`/api/bookings/${bookingId}`);
      if (!res.ok) {
        setError("Booking not found or you don't have access.");
        return;
      }
      const data = await res.json();
      setBooking(data);
    } catch {
      setError("Failed to load booking.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (bookingId) fetchBooking();
  }, [bookingId]);

  async function handlePay() {
    setPayLoading(true);
    try {
      const res = await fetch("/api/payments/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId }),
      });

      const data = await res.json();
      console.log("Initiate response:", data);

      if (!res.ok || data.error) {
        alert(data?.error || "Payment initiation failed");
        return;
      }

      if (
        !data.merchantCode ||
        !data.payItemId ||
        !data.txnRef ||
        !data.amount
      ) {
        console.error("Missing payment fields:", data);
        alert("Payment configuration error. Please contact support.");
        return;
      }

      if (typeof window !== "undefined" && (window as any).webpayCheckout) {
        (window as any).webpayCheckout({
          merchant_code: String(data.merchantCode),
          pay_item_id: String(data.payItemId),
          txn_ref: String(data.txnRef),
          amount: Number(data.amount),
          currency: "566",
          site_redirect_url: `${window.location.origin}/api/payments/callback`,
          onComplete: function (response: any) {
            console.log("Payment complete:", response);
            window.location.href = `/dashboard/bookings/${bookingId}?payment=success`;
          },
          onClose: function () {
            console.log("Payment modal closed");
            setPayLoading(false);
          },
        });
      } else {
        // Fallback: redirect flow if SDK not loaded
        window.location.href = data.paymentUrl;
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setPayLoading(false);
    }
  }
  async function handleAction(action: string) {
    setActionLoading(action);
    await fetch(`/api/bookings/${bookingId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
    });
    setActionLoading(null);
    fetchBooking();
  }

  async function handleReview() {
    if (reviewForm.rating === 0) return;
    setReviewLoading(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId, ...reviewForm }),
      });
      if (res.ok) {
        setReviewSubmitted(true);
        fetchBooking();
      }
    } finally {
      setReviewLoading(false);
    }
  }

  const isOwner = session?.user?.id === booking?.owner?.id;
  const isDriver = session?.user?.id === booking?.driver?.id;
  const currentStepIndex = STATUS_ORDER.indexOf(booking?.status ?? "");
  const isCancelled = booking?.status === "CANCELLED";

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-32 rounded-xl bg-gray-100 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 font-medium">
            {error || "Booking not found"}
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Go Back
          </Button>
        </div>
      </div>
    );
  }

  const st = STATUS_CONFIG[booking.status] ?? STATUS_CONFIG["CANCELLED"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Script
        src="https://newwebpay.qa.interswitchng.com/inline-checkout.js"
        strategy="afterInteractive"
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* ── Back + Header ── */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900">Booking Details</h1>
            <p className="text-xs text-gray-400 font-mono">{booking.id}</p>
          </div>
          <span
            className={`text-xs px-3 py-1 rounded-full border font-semibold ${st.color} ${st.bg} ${st.border}`}
          >
            {booking.status.replace("_", " ")}
          </span>
        </div>

        {paymentResult === "success" && (
          <div className="mb-4 px-4 py-3 rounded-xl border border-green-200 bg-green-50 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            <p className="text-sm text-green-700 font-medium">
              Payment successful! Your shipment is confirmed.
            </p>
          </div>
        )}
        {paymentResult === "failed" && (
          <div className="mb-4 px-4 py-3 rounded-xl border border-red-200 bg-red-50 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <p className="text-sm text-red-600">
              Payment was not successful. Please try again.
            </p>
          </div>
        )}
        {/* ── Status Timeline (hidden if cancelled) ── */}
        {!isCancelled && (
          <Card className="p-5 shadow-sm mb-4">
            <h2 className="font-semibold text-gray-900 text-sm mb-4">
              Shipment Progress
            </h2>
            <div className="flex items-center">
              {STATUS_STEPS.map((step, i) => {
                const isDone = i < currentStepIndex;
                const isCurrent = i === currentStepIndex;
                const isPending = i > currentStepIndex;
                return (
                  <div
                    key={step.key}
                    className="flex items-center flex-1 last:flex-none"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isDone
                            ? "bg-green-500 text-white"
                            : isCurrent
                              ? "bg-[#1E3A8A] text-white"
                              : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          step.icon
                        )}
                      </div>
                      <p
                        className={`text-xs mt-1 text-center leading-tight max-w-[60px] ${
                          isCurrent
                            ? "text-[#1E3A8A] font-semibold"
                            : isDone
                              ? "text-green-600"
                              : "text-gray-400"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                    {i < STATUS_STEPS.length - 1 && (
                      <div
                        className={`flex-1 h-0.5 mx-1 mb-5 ${i < currentStepIndex ? "bg-green-400" : "bg-gray-200"}`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {/* ── Cancelled Banner ── */}
        {isCancelled && (
          <div className="mb-4 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 flex items-center gap-3">
            <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              This booking has been cancelled.
            </p>
          </div>
        )}

        {/* ── Action Buttons ── */}
        {!isCancelled && (
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Pay Now — owner, ACCEPTED */}
            {/* {isOwner && booking.status === "ACCEPTED" && (
              <Button
                className="bg-[#1E3A8A] text-white hover:bg-blue-900 flex-1"
                disabled={payLoading}
                onClick={handlePay}
              >
                <CircleDollarSign className="w-4 h-4 mr-2" />
                {payLoading
                  ? "Redirecting to payment..."
                  : "Pay Now — ₦" + booking.agreedAmount.toLocaleString()}
              </Button>
            )} */}

            {/* Pay Now — owner, ACCEPTED or PAYMENT_PENDING (retry) */}
            {isOwner &&
              ["ACCEPTED", "PAYMENT_PENDING"].includes(booking.status) && (
                <Button
                  className="bg-[#1E3A8A] text-white hover:bg-blue-900 flex-1"
                  disabled={payLoading}
                  onClick={handlePay}
                >
                  <CircleDollarSign className="w-4 h-4 mr-2" />
                  {payLoading
                    ? "Loading payment..."
                    : "Pay Now — ₦" + booking.agreedAmount.toLocaleString()}
                </Button>
              )}
            {/* Cancel — owner, before payment */}
            {isOwner && ["PENDING", "ACCEPTED"].includes(booking.status) && (
              <Button
                variant="outline"
                className="text-red-500 border-red-200 hover:bg-red-50"
                disabled={actionLoading === "CANCEL"}
                onClick={() => {
                  if (
                    confirm("Are you sure you want to cancel this booking?")
                  ) {
                    handleAction("CANCEL");
                  }
                }}
              >
                <XCircle className="w-4 h-4 mr-2" />
                {actionLoading === "CANCEL"
                  ? "Cancelling..."
                  : "Cancel Booking"}
              </Button>
            )}

            {/* Accept — driver, PENDING */}
            {isDriver && booking.status === "PENDING" && (
              <Button
                className="bg-[#F97316] text-white hover:bg-orange-500 flex-1"
                disabled={actionLoading === "ACCEPT"}
                onClick={() => handleAction("ACCEPT")}
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                {actionLoading === "ACCEPT" ? "Accepting..." : "Accept Booking"}
              </Button>
            )}

            {/* Decline — driver, PENDING */}
            {isDriver && booking.status === "PENDING" && (
              <Button
                variant="outline"
                className="text-red-500 border-red-200 hover:bg-red-50"
                disabled={actionLoading === "DECLINE"}
                onClick={() => handleAction("DECLINE")}
              >
                <XCircle className="w-4 h-4 mr-2" />
                {actionLoading === "DECLINE" ? "Declining..." : "Decline"}
              </Button>
            )}

            {/* Start Trip — driver, PAID */}
            {isDriver && booking.status === "PAID" && (
              <Button
                className="bg-[#F97316] text-white hover:bg-orange-500 flex-1"
                disabled={actionLoading === "MARK_IN_TRANSIT"}
                onClick={() => handleAction("MARK_IN_TRANSIT")}
              >
                <Truck className="w-4 h-4 mr-2" />
                {actionLoading === "MARK_IN_TRANSIT"
                  ? "Updating..."
                  : "Start Trip 🚛"}
              </Button>
            )}

            {/* Mark Delivered — driver, IN_TRANSIT */}
            {isDriver && booking.status === "IN_TRANSIT" && (
              <Button
                className="bg-green-600 text-white hover:bg-green-700 flex-1"
                disabled={actionLoading === "MARK_DELIVERED"}
                onClick={() => handleAction("MARK_DELIVERED")}
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                {actionLoading === "MARK_DELIVERED"
                  ? "Updating..."
                  : "Mark as Delivered ✓"}
              </Button>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {/* ── Cargo Details ── */}
          <Card className="p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-4 h-4 text-[#1E3A8A]" />
              <h2 className="font-semibold text-gray-900 text-sm">
                Cargo Details
              </h2>
            </div>
            <p className="font-medium text-gray-900 mb-2">
              {booking.cargoListing.title}
            </p>
            <div className="space-y-1.5">
              <Row label="Type" value={booking.cargoListing.cargoType} />
              <Row
                label="Weight"
                value={`${booking.cargoListing.weightTons} tonnes`}
              />
              <Row
                label="Needed by"
                value={new Date(
                  booking.cargoListing.neededBy,
                ).toLocaleDateString("en-NG")}
              />
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-1 font-medium">Route</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 text-xs bg-gray-50 rounded-lg p-2 text-center">
                  <p className="font-semibold text-gray-800">
                    {booking.cargoListing.originCity}
                  </p>
                  <p className="text-gray-500">
                    {booking.cargoListing.originState}
                  </p>
                </div>
                <MapPin className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                <div className="flex-1 text-xs bg-gray-50 rounded-lg p-2 text-center">
                  <p className="font-semibold text-gray-800">
                    {booking.cargoListing.destCity}
                  </p>
                  <p className="text-gray-500">
                    {booking.cargoListing.destState}
                  </p>
                </div>
              </div>
            </div>
            {booking.notes && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-1 font-medium">Notes</p>
                <p className="text-xs text-gray-600 italic">
                  "{booking.notes}"
                </p>
              </div>
            )}
          </Card>

          {/* ── Driver Details ── */}
          <Card className="p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Truck className="w-4 h-4 text-[#F97316]" />
              <h2 className="font-semibold text-gray-900 text-sm">
                Driver & Truck
              </h2>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center font-bold text-[#F97316]">
                {booking.driver.name?.charAt(0) ?? "D"}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {booking.driver.name}
                </p>
                <a
                  href={`tel:${booking.driver.phone}`}
                  className="text-xs text-[#1E3A8A] flex items-center gap-1 hover:underline"
                >
                  <Phone className="w-3 h-3" /> {booking.driver.phone}
                </a>
              </div>
            </div>
            <div className="space-y-1.5">
              <Row
                label="Truck"
                value={`${booking.driverProfile.truckType} · ${booking.driverProfile.truckModel}`}
              />
              <Row
                label="Year"
                value={String(booking.driverProfile.truckYear)}
              />
              <Row label="Plate" value={booking.driverProfile.plateNumber} />
              <Row
                label="Capacity"
                value={`${booking.driverProfile.capacityTons} tonnes`}
              />
              <Row
                label="Rate"
                value={`₦${booking.driverProfile.ratePerKm.toLocaleString()}/km`}
              />
            </div>
          </Card>

          {/* ── Booking Summary ── */}
          <Card className="p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <CircleDollarSign className="w-4 h-4 text-green-600" />
              <h2 className="font-semibold text-gray-900 text-sm">
                Booking Summary
              </h2>
            </div>
            <div className="space-y-1.5">
              <Row
                label="Agreed Amount"
                value={`₦${booking.agreedAmount.toLocaleString()}`}
                bold
              />
              <Row
                label="Pickup Date"
                value={new Date(booking.pickupDate).toLocaleDateString("en-NG")}
              />
              <Row
                label="Booked On"
                value={new Date(booking.createdAt).toLocaleDateString("en-NG")}
              />
              {booking.acceptedAt && (
                <Row
                  label="Accepted On"
                  value={new Date(booking.acceptedAt).toLocaleDateString(
                    "en-NG",
                  )}
                />
              )}
              {booking.actualDelivery && (
                <Row
                  label="Delivered On"
                  value={new Date(booking.actualDelivery).toLocaleDateString(
                    "en-NG",
                  )}
                />
              )}
            </div>
          </Card>

          {/* ── Payment Details ── */}
          <Card className="p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <CircleDollarSign className="w-4 h-4 text-[#1E3A8A]" />
              <h2 className="font-semibold text-gray-900 text-sm">Payment</h2>
            </div>
            {booking.transaction ? (
              <div className="space-y-1.5">
                <Row label="Status" value={booking.transaction.status} bold />
                <Row
                  label="Amount"
                  value={`₦${booking.transaction.amount.toLocaleString()}`}
                />
                {booking.transaction.channel && (
                  <Row label="Channel" value={booking.transaction.channel} />
                )}
                {booking.transaction.paymentReference && (
                  <Row
                    label="Reference"
                    value={booking.transaction.paymentReference}
                    mono
                  />
                )}
                {booking.transaction.completedAt && (
                  <Row
                    label="Paid On"
                    value={new Date(
                      booking.transaction.completedAt,
                    ).toLocaleDateString("en-NG")}
                  />
                )}
              </div>
            ) : (
              <div className="text-center py-4">
                <CircleDollarSign className="w-8 h-8 text-gray-200 mx-auto mb-2" />
                <p className="text-xs text-gray-400">No payment yet</p>
                {isOwner &&
                  ["ACCEPTED", "PAYMENT_PENDING"].includes(booking.status) && (
                    <Button
                      size="sm"
                      className="mt-3 bg-[#1E3A8A] text-white hover:bg-blue-900 h-7 text-xs"
                      disabled={payLoading}
                      onClick={handlePay}
                    >
                      {payLoading ? "Loading..." : "Pay Now"}
                    </Button>
                  )}
              </div>
            )}
          </Card>
        </div>

        {/* ── Contact ── */}
        <Card className="p-4 shadow-sm mt-4">
          <h2 className="font-semibold text-gray-900 text-sm mb-3">Contact</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1 font-medium">
                Cargo Owner
              </p>
              <p className="text-sm font-semibold text-gray-800">
                {booking.owner.name}
              </p>
              <a
                href={`tel:${booking.owner.phone}`}
                className="text-xs text-[#1E3A8A] flex items-center gap-1 hover:underline mt-0.5"
              >
                <Phone className="w-3 h-3" /> {booking.owner.phone}
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1 font-medium">Driver</p>
              <p className="text-sm font-semibold text-gray-800">
                {booking.driver.name}
              </p>
              <a
                href={`tel:${booking.driver.phone}`}
                className="text-xs text-[#1E3A8A] flex items-center gap-1 hover:underline mt-0.5"
              >
                <Phone className="w-3 h-3" /> {booking.driver.phone}
              </a>
            </div>
          </div>
        </Card>

        {/* ── Review (only after delivery, only owner, only once) ── */}
        {isOwner &&
          booking.status === "DELIVERED" &&
          !booking.review &&
          !reviewSubmitted && (
            <Card className="p-4 shadow-sm mt-4 border-[#F97316]/30">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-[#F97316]" />
                <h2 className="font-semibold text-gray-900 text-sm">
                  Rate Your Driver
                </h2>
              </div>
              <p className="text-xs text-gray-500 mb-3">
                How was your experience with {booking.driver.name}?
              </p>
              {/* Star rating */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() =>
                      setReviewForm((f) => ({ ...f, rating: star }))
                    }
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= reviewForm.rating
                          ? "fill-[#F97316] text-[#F97316]"
                          : "text-gray-200"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <textarea
                rows={2}
                placeholder="Leave a comment (optional)..."
                value={reviewForm.comment}
                onChange={(e) =>
                  setReviewForm((f) => ({ ...f, comment: e.target.value }))
                }
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] mb-3"
              />
              <Button
                className="w-full bg-[#F97316] text-white hover:bg-orange-500"
                disabled={reviewForm.rating === 0 || reviewLoading}
                onClick={handleReview}
              >
                {reviewLoading ? "Submitting..." : "Submit Review"}
              </Button>
            </Card>
          )}

        {/* ── Existing review ── */}
        {(booking.review || reviewSubmitted) && (
          <Card className="p-4 shadow-sm mt-4 bg-orange-50 border-orange-100">
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
              <h2 className="font-semibold text-gray-900 text-sm">
                Review Submitted
              </h2>
            </div>
            {booking.review && (
              <>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${s <= booking.review!.rating ? "fill-[#F97316] text-[#F97316]" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                {booking.review.comment && (
                  <p className="text-xs text-gray-600 italic">
                    "{booking.review.comment}"
                  </p>
                )}
              </>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}

// ── Helper component ──
function Row({
  label,
  value,
  bold,
  mono,
}: {
  label: string;
  value: string;
  bold?: boolean;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-500">{label}</span>
      <span
        className={`text-xs ${bold ? "font-bold text-gray-900" : "text-gray-700"} ${mono ? "font-mono" : ""}`}
      >
        {value}
      </span>
    </div>
  );
}
