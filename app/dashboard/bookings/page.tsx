"use client";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  MapPin,
  Truck,
  Package,
  Clock,
  CheckCircle2,
  XCircle,
  CircleDollarSign,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

interface Booking {
  id: string;
  status: string;
  agreedAmount: number;
  pickupDate: string;
  createdAt: string;
  cargoListing: {
    title: string;
    originState: string;
    originCity: string;
    destState: string;
    destCity: string;
    weightTons: number;
    cargoType: string;
  };
  owner: { name: string; phone: string };
  driver: { name: string; phone: string };
  driverProfile: { truckType: string; truckModel: string };
  transaction?: { status: string; amount: number } | null;
}

const TABS = [
  { label: "All", value: "" },
  { label: "Pending", value: "PENDING" },
  { label: "Accepted", value: "ACCEPTED" },
  { label: "Paid", value: "PAID" },
  { label: "In Transit", value: "IN_TRANSIT" },
  { label: "Delivered", value: "DELIVERED" },
  { label: "Cancelled", value: "CANCELLED" },
];

const STATUS_CONFIG: Record<
  string,
  {
    label: string;
    color: string;
    bg: string;
    border: string;
    icon: React.ReactNode;
  }
> = {
  PENDING: {
    label: "Pending",
    color: "text-yellow-700",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    icon: <Clock className="w-3 h-3" />,
  },
  ACCEPTED: {
    label: "Accepted",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: <CheckCircle2 className="w-3 h-3" />,
  },
  PAYMENT_PENDING: {
    label: "Payment Pending",
    color: "text-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: <CircleDollarSign className="w-3 h-3" />,
  },
  PAID: {
    label: "Paid",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    icon: <CheckCircle2 className="w-3 h-3" />,
  },
  IN_TRANSIT: {
    label: "In Transit",
    color: "text-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-200",
    icon: <Truck className="w-3 h-3" />,
  },
  DELIVERED: {
    label: "Delivered",
    color: "text-green-800",
    bg: "bg-green-100",
    border: "border-green-300",
    icon: <CheckCircle2 className="w-3 h-3" />,
  },
  CANCELLED: {
    label: "Cancelled",
    color: "text-gray-500",
    bg: "bg-gray-50",
    border: "border-gray-200",
    icon: <XCircle className="w-3 h-3" />,
  },
  DISPUTED: {
    label: "Disputed",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
    icon: <XCircle className="w-3 h-3" />,
  },
};

export default function BookingsPage() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("");

  const isDriver = session?.user?.role === "DRIVER";

  const fetchBookings = async (status: string) => {
    setLoading(true);
    try {
      const url = status ? `/api/bookings?status=${status}` : "/api/bookings";
      const res = await fetch(url);
      const data = await res.json();
      setBookings(data.bookings ?? data ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings(activeTab);
  }, [activeTab]);

  // Count per status for badge numbers
  const allBookings = bookings;
  const counts = TABS.reduce(
    (acc, tab) => {
      acc[tab.value] =
        tab.value === ""
          ? allBookings.length
          : allBookings.filter((b) => b.status === tab.value).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* ── Header ── */}
        <div className="flex items-center gap-3 mb-6">
          <Link
            href={isDriver ? "/dashboard/driver" : "/dashboard/shipper"}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {isDriver ? "My Jobs" : "My Shipments"}
            </h1>
            <p className="text-sm text-gray-500">
              {isDriver
                ? "All cargo bookings assigned to you"
                : "All shipments you have booked"}
            </p>
          </div>
        </div>

        {/* ── Status Filter Tabs ── */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex-shrink-0 ${
                activeTab === tab.value
                  ? "bg-[#1E3A8A] text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
              }`}
            >
              {tab.label}
              {activeTab === "" &&
                counts[tab.value] > 0 &&
                tab.value !== "" && (
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                      activeTab === tab.value
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {counts[tab.value]}
                  </span>
                )}
            </button>
          ))}
        </div>

        {/* ── Bookings List ── */}
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-28 rounded-xl bg-gray-100 animate-pulse"
              />
            ))}
          </div>
        ) : bookings.length === 0 ? (
          <Card className="p-12 text-center shadow-sm">
            {isDriver ? (
              <Truck className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            ) : (
              <Package className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            )}
            <p className="font-medium text-gray-500">
              {activeTab
                ? `No ${activeTab.toLowerCase().replace("_", " ")} bookings`
                : "No bookings yet"}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {isDriver
                ? "New booking requests will appear here"
                : "Book a driver to get started"}
            </p>
            {!isDriver && (
              <Link href="/search">
                <Button
                  className="mt-4 bg-[#1E3A8A] text-white hover:bg-blue-900"
                  size="sm"
                >
                  Find a Driver
                </Button>
              </Link>
            )}
          </Card>
        ) : (
          <div className="space-y-3">
            {bookings.map((booking) => {
              const st =
                STATUS_CONFIG[booking.status] ?? STATUS_CONFIG["CANCELLED"];
              return (
                <Link key={booking.id} href={`/bookings/${booking.id}`}>
                  <Card className="p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between gap-3">
                      {/* Left — cargo info */}
                      <div className="flex-1 min-w-0">
                        {/* Status badge */}
                        <div className="flex items-center gap-2 mb-1.5">
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full border font-semibold flex items-center gap-1 ${st.color} ${st.bg} ${st.border}`}
                          >
                            {st.icon} {st.label}
                          </span>
                          {booking.status === "ACCEPTED" && !isDriver && (
                            <span className="text-xs text-blue-600 font-semibold animate-pulse">
                              Pay Now →
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <p className="font-semibold text-sm text-gray-900 truncate mb-1">
                          {booking.cargoListing.title}
                        </p>

                        {/* Route */}
                        <p className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          {booking.cargoListing.originCity},{" "}
                          {booking.cargoListing.originState}
                          {" → "}
                          {booking.cargoListing.destCity},{" "}
                          {booking.cargoListing.destState}
                        </p>

                        {/* Truck / cargo details */}
                        <p className="text-xs text-gray-400">
                          {booking.cargoListing.weightTons}t ·{" "}
                          {booking.cargoListing.cargoType}
                          {" · "}
                          {booking.driverProfile.truckType} ·{" "}
                          {booking.driverProfile.truckModel}
                        </p>

                        {/* Who's on the other side */}
                        <p className="text-xs text-gray-400 mt-0.5">
                          {isDriver
                            ? `Owner: ${booking.owner.name}`
                            : `Driver: ${booking.driver.name}`}
                        </p>
                      </div>

                      {/* Right — amount + date + arrow */}
                      <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        <p className="font-bold text-[#1E3A8A] text-sm">
                          ₦{booking.agreedAmount.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-400">
                          {new Date(booking.pickupDate).toLocaleDateString(
                            "en-NG",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            },
                          )}
                        </p>
                        <ChevronRight className="w-4 h-4 text-gray-300 mt-1" />
                      </div>
                    </div>

                    {/* Payment strip — only show if paid */}
                    {booking.transaction?.status === "SUCCESSFUL" && (
                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5">
                        <CircleDollarSign className="w-3 h-3 text-green-500" />
                        <p className="text-xs text-green-600 font-medium">
                          Payment confirmed · ₦
                          {booking.transaction.amount.toLocaleString()}
                        </p>
                      </div>
                    )}
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
