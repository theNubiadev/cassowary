"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  Truck,
  PackageCheck,
  CircleDollarSign,
  Clock,
  CheckCircle2,
  XCircle,
  LogOut,
  User,
  MapPin,
  ChevronRight,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import ProfileSheet from "@/components/ProfileSheet";
interface Booking {
  id: string;
  status: string;
  agreedAmount: number;
  pickupDate: string;
  notes?: string;
  cargoListing: {
    title: string;
    cargoType: string;
    weightTons: number;
    originState: string;
    originCity: string;
    destState: string;
    destCity: string;
  };
  owner: { name: string; phone: string };
}

interface DriverProfile {
  id: string;
  truckType: string;
  truckModel: string;
  isAvailable: boolean;
  avgRating: number;
  totalTrips: number;
  baseCity: string;
  baseState: string;
}

const STATUS_LABELS: Record<
  string,
  { label: string; color: string; bg: string }
> = {
  PENDING: {
    label: "New Request",
    color: "text-yellow-700",
    bg: "bg-yellow-50 border-yellow-200",
  },
  ACCEPTED: {
    label: "Awaiting Payment",
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-200",
  },
  PAYMENT_PENDING: {
    label: "Payment Processing",
    color: "text-orange-700",
    bg: "bg-orange-50 border-orange-200",
  },
  PAID: {
    label: "Ready for Pickup",
    color: "text-green-700",
    bg: "bg-green-50 border-green-200",
  },
  IN_TRANSIT: {
    label: "In Transit",
    color: "text-purple-700",
    bg: "bg-purple-50 border-purple-200",
  },
  DELIVERED: {
    label: "Delivered",
    color: "text-green-800",
    bg: "bg-green-100 border-green-300",
  },
  CANCELLED: {
    label: "Cancelled",
    color: "text-gray-500",
    bg: "bg-gray-50 border-gray-200",
  },
};

export default function DriverDashboard() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [profile, setProfile] = useState<DriverProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [availabilityLoading, setAvailabilityLoading] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const fetchData = async () => {
    try {
      const [bookingsRes, profileRes] = await Promise.all([
        fetch("/api/bookings"),
        fetch("/api/drivers/profile"),
      ]);
      const bookingsData = await bookingsRes.json();
      const profileData = await profileRes.json();
      setBookings(bookingsData.bookings ?? bookingsData ?? []);
      setProfile(profileData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function handleAction(bookingId: string, action: string) {
    setActionLoading(bookingId + action);
    await fetch(`/api/bookings/${bookingId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
    });
    setActionLoading(null);
    fetchData();
  }

  async function toggleAvailability() {
    if (!profile) return;
    setAvailabilityLoading(true);
    await fetch("/api/drivers/availability", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isAvailable: !profile.isAvailable }),
    });
    setAvailabilityLoading(false);
    fetchData();
  }

  const pending = bookings.filter((b) => b.status === "PENDING");
  const active = bookings.filter((b) =>
    ["ACCEPTED", "PAYMENT_PENDING", "PAID", "IN_TRANSIT"].includes(b.status),
  );
  const completed = bookings.filter((b) => b.status === "DELIVERED");
  const totalEarned = completed.reduce((sum, b) => sum + b.agreedAmount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* ── Header ── */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Hey, {session?.user?.name?.split(" ")[0] ?? "Driver"} 👋
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Here's your activity overview
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Availability toggle */}
            {profile && (
              <button
                onClick={toggleAvailability}
                disabled={availabilityLoading}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-colors ${
                  profile.isAvailable
                    ? "bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                    : "bg-gray-100 border-gray-200 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {profile.isAvailable ? (
                  <ToggleRight className="w-4 h-4" />
                ) : (
                  <ToggleLeft className="w-4 h-4" />
                )}
                {profile.isAvailable ? "Available" : "Unavailable"}
              </button>
            )}
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-gray-500 hover:text-red-500 hover:border-red-200 text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "New Requests",
              value: pending.length,
              icon: <Clock className="w-5 h-5" />,
              color: "text-yellow-600",
              bg: "bg-yellow-50",
            },
            {
              label: "Active Jobs",
              value: active.length,
              icon: <Truck className="w-5 h-5" />,
              color: "text-[#F97316]",
              bg: "bg-orange-50",
            },
            {
              label: "Trips Done",
              value: completed.length,
              icon: <PackageCheck className="w-5 h-5" />,
              color: "text-green-600",
              bg: "bg-green-50",
            },
            {
              label: "Total Earned",
              value: `₦${(totalEarned / 1000).toFixed(0)}k`,
              icon: <CircleDollarSign className="w-5 h-5" />,
              color: "text-[#1E3A8A]",
              bg: "bg-blue-50",
            },
          ].map((s) => (
            <Card key={s.label} className="p-4 shadow-sm">
              <div className={`inline-flex p-2 rounded-lg ${s.bg} mb-3`}>
                <span className={s.color}>{s.icon}</span>
              </div>
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            </Card>
          ))}
        </div>

        {/* ── Truck profile summary ── */}
        {profile && (
          <Card className="p-4 shadow-sm mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                <Truck className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-900">
                  {profile.truckType} · {profile.truckModel}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {profile.baseCity},{" "}
                  {profile.baseState}
                  {profile.avgRating > 0 && (
                    <span className="ml-2">
                      ⭐ {profile.avgRating.toFixed(1)} · {profile.totalTrips}{" "}
                      trips
                    </span>
                  )}
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              className="text-xs h-8"
              onClick={() => setProfileOpen(true)}
            >
              <User className="w-3 h-3 mr-1" /> Edit Profile
            </Button>
            <ProfileSheet
              open={profileOpen}
              onClose={() => setProfileOpen(false)}
            />
          </Card>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* ── Pending Requests ── */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="font-semibold text-gray-900">New Requests</h2>
              {pending.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#F97316] text-white text-xs flex items-center justify-center font-bold">
                  {pending.length}
                </span>
              )}
            </div>

            {loading ? (
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-32 rounded-xl bg-gray-100 animate-pulse"
                  />
                ))}
              </div>
            ) : pending.length === 0 ? (
              <Card className="p-6 text-center shadow-sm">
                <Clock className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  No new requests right now
                </p>
              </Card>
            ) : (
              <div className="space-y-3">
                {pending.map((b) => (
                  <Card
                    key={b.id}
                    className="p-4 shadow-sm border-l-4 border-l-[#F97316]"
                  >
                    <p className="font-semibold text-sm text-gray-900 mb-1">
                      {b.cargoListing.title}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3" />
                      {b.cargoListing.originCity}, {b.cargoListing.originState}{" "}
                      → {b.cargoListing.destCity}, {b.cargoListing.destState}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">
                      {b.cargoListing.weightTons}t · {b.cargoListing.cargoType}{" "}
                      · Pickup{" "}
                      {new Date(b.pickupDate).toLocaleDateString("en-NG")}
                    </p>
                    {b.notes && (
                      <p className="text-xs italic text-gray-400 mb-2">
                        "{b.notes}"
                      </p>
                    )}
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs text-gray-500">
                        From: {b.owner.name} · {b.owner.phone}
                      </p>
                      <p className="font-bold text-[#F97316]">
                        ₦{b.agreedAmount.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-[#F97316] text-white hover:bg-orange-500 h-8 text-xs"
                        disabled={actionLoading === b.id + "ACCEPT"}
                        onClick={() => handleAction(b.id, "ACCEPT")}
                      >
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        {actionLoading === b.id + "ACCEPT"
                          ? "Accepting..."
                          : "Accept"}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 h-8 text-xs text-gray-500 hover:text-red-500 hover:border-red-200"
                        disabled={actionLoading === b.id + "DECLINE"}
                        onClick={() => handleAction(b.id, "DECLINE")}
                      >
                        <XCircle className="w-3 h-3 mr-1" />
                        {actionLoading === b.id + "DECLINE"
                          ? "Declining..."
                          : "Decline"}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* ── Active Jobs ── */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-3">Active Jobs</h2>

            {loading ? (
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-24 rounded-xl bg-gray-100 animate-pulse"
                  />
                ))}
              </div>
            ) : active.length === 0 ? (
              <Card className="p-6 text-center shadow-sm">
                <Truck className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  No active jobs right now
                </p>
              </Card>
            ) : (
              <div className="space-y-3">
                {active.map((b) => {
                  const st = STATUS_LABELS[b.status] ?? {
                    label: b.status,
                    color: "text-gray-600",
                    bg: "bg-gray-50 border-gray-200",
                  };
                  return (
                    <Card key={b.id} className="p-4 shadow-sm">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className="font-semibold text-sm text-gray-900 flex-1">
                          {b.cargoListing.title}
                        </p>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border font-medium ${st.color} ${st.bg}`}
                        >
                          {st.label}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                        <MapPin className="w-3 h-3" />
                        {b.cargoListing.originState} →{" "}
                        {b.cargoListing.destState}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-[#1E3A8A]">
                          ₦{b.agreedAmount.toLocaleString()}
                        </p>
                        <div className="flex gap-2">
                          {b.status === "PAID" && (
                            <Button
                              size="sm"
                              className="bg-[#1E3A8A] text-white hover:bg-blue-900 h-7 text-xs"
                              disabled={
                                actionLoading === b.id + "MARK_IN_TRANSIT"
                              }
                              onClick={() =>
                                handleAction(b.id, "MARK_IN_TRANSIT")
                              }
                            >
                              {actionLoading === b.id + "MARK_IN_TRANSIT"
                                ? "..."
                                : "Start Trip 🚛"}
                            </Button>
                          )}
                          {b.status === "IN_TRANSIT" && (
                            <Button
                              size="sm"
                              className="bg-green-600 text-white hover:bg-green-700 h-7 text-xs"
                              disabled={
                                actionLoading === b.id + "MARK_DELIVERED"
                              }
                              onClick={() =>
                                handleAction(b.id, "MARK_DELIVERED")
                              }
                            >
                              {actionLoading === b.id + "MARK_DELIVERED"
                                ? "..."
                                : "Mark Delivered ✓"}
                            </Button>
                          )}
                          <Link href={`/bookings/${b.id}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 text-xs"
                            >
                              <ChevronRight className="w-3 h-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* ── Completed trips ── */}
        {completed.length > 0 && (
          <div className="mt-6">
            <h2 className="font-semibold text-gray-900 mb-3">
              Completed Trips
            </h2>
            <div className="space-y-2">
              {completed.slice(0, 5).map((b) => (
                <Card
                  key={b.id}
                  className="p-3 shadow-sm flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {b.cargoListing.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {b.cargoListing.originState} → {b.cargoListing.destState}{" "}
                      · {new Date(b.pickupDate).toLocaleDateString("en-NG")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="font-semibold text-green-600">
                      ₦{b.agreedAmount.toLocaleString()}
                    </p>
                    <span className="text-xs px-2 py-0.5 rounded-full border font-medium text-green-800 bg-green-100 border-green-300">
                      Delivered
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
