"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import PostCargoForm from "@/components/PostCargoForm";
import {
  Package,
  Truck,
  CircleDollarSign,
  Clock,
  Search,
  Plus,
  MapPin,
  ChevronRight,
  LogOut,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import DriverCard from "@/components/DriverCard";

interface Booking {
  id: string;
  status: string;
  agreedAmount: number;
  pickupDate: string;
  cargoListing: {
    title: string;
    originState: string;
    originCity: string;
    destState: string;
    destCity: string;
  };
  driver: { name: string; phone: string };
  driverProfile: { truckType: string; truckModel: string };
  transaction?: { status: string };
}

interface CargoListing {
  id: string;
  title: string;
  originState: string;
  destState: string;
  weightTons: number;
  isActive: boolean;
  createdAt: string;
  _count: { bookings: number };
}

const STATUS_CONFIG: Record<
  string,
  { label: string; color: string; bg: string; icon: React.ReactNode }
> = {
  PENDING: {
    label: "Awaiting Driver",
    color: "text-yellow-700",
    bg: "bg-yellow-50 border-yellow-200",
    icon: <Clock className="w-3 h-3" />,
  },
  ACCEPTED: {
    label: "Accepted — Pay Now",
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-200",
    icon: <AlertCircle className="w-3 h-3" />,
  },
  PAYMENT_PENDING: {
    label: "Payment Pending",
    color: "text-orange-700",
    bg: "bg-orange-50 border-orange-200",
    icon: <Clock className="w-3 h-3" />,
  },
  PAID: {
    label: "Paid ✓",
    color: "text-green-700",
    bg: "bg-green-50 border-green-200",
    icon: <CheckCircle2 className="w-3 h-3" />,
  },
  IN_TRANSIT: {
    label: "In Transit 🚛",
    color: "text-purple-700",
    bg: "bg-purple-50 border-purple-200",
    icon: <Truck className="w-3 h-3" />,
  },
  DELIVERED: {
    label: "Delivered ✅",
    color: "text-green-800",
    bg: "bg-green-100 border-green-300",
    icon: <CheckCircle2 className="w-3 h-3" />,
  },
  CANCELLED: {
    label: "Cancelled",
    color: "text-gray-500",
    bg: "bg-gray-50 border-gray-200",
    icon: <XCircle className="w-3 h-3" />,
  },
};

export default function OwnerDashboard() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [listings, setListings] = useState<CargoListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [payLoading, setPayLoading] = useState<string | null>(null);
  const [cancelLoading, setCancelLoading] = useState<string | null>(null);
  const [openSearch, setOpenSearch] = useState(false);
  const [drivers, setDrivers] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [truckType, setTruckType] = useState("");
  const [minCapacity, setMinCapacity] = useState("");
  const [maxRate, setMaxRate] = useState("");
  const [openPostCargo, setOpenPostCargo] = useState(false);

  async function handleDriverSearch() {
    setSearchLoading(true);

    try {
      const params = new URLSearchParams();

      if (origin) params.append("origin", origin);
      if (destination) params.append("destination", destination);
      if (truckType) params.append("truckType", truckType);
      if (minCapacity) params.append("minCapacity", minCapacity);
      if (maxRate) params.append("maxRate", maxRate);

      const res = await fetch(`/api/drivers/search?${params.toString()}`);
      const data = await res.json();

      setDrivers(data.drivers || []);
    } finally {
      setSearchLoading(false);
    }
  }
  const fetchData = async () => {
    try {
      const [bookingsRes, listingsRes] = await Promise.all([
        fetch("/api/bookings"),
        fetch("/api/cargo/listings?mine=true"),
      ]);
      const bookingsData = await bookingsRes.json();
      const listingsData = await listingsRes.json();
      setBookings(bookingsData.bookings ?? bookingsData ?? []);
      setListings(listingsData.listings ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function handlePay(bookingId: string) {
    setPayLoading(bookingId);
    try {
      const res = await fetch("/api/payments/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId }),
      });
      const data = await res.json();
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        alert(data.error || "Payment initiation failed. Please try again.");
      }
    } finally {
      setPayLoading(null);
    }
  }

  async function handleCancel(bookingId: string) {
    if (!confirm("Are you sure you want to cancel this booking?")) return;
    setCancelLoading(bookingId);
    await fetch(`/api/bookings/${bookingId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "CANCEL" }),
    });
    setCancelLoading(null);
    fetchData();
  }

  const active = bookings.filter(
    (b) => !["DELIVERED", "CANCELLED"].includes(b.status),
  );
  const past = bookings.filter((b) =>
    ["DELIVERED", "CANCELLED"].includes(b.status),
  );
  const totalSpent = bookings
    .filter((b) => b.status === "DELIVERED")
    .reduce((s, b) => s + b.agreedAmount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* ── Header ── */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 capitalize">
              Welcome back, {session?.user?.name?.split(" ")[0] ?? "there"}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage your shipments and find drivers
            </p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-gray-500 hover:text-red-500 hover:border-red-200 text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Active Shipments",
              value: active.length,
              icon: <Package className="w-5 h-5" />,
              color: "text-[#1E3A8A]",
              bg: "bg-blue-50",
            },
            {
              label: "My Listings",
              value: listings.length,
              icon: <Truck className="w-5 h-5" />,
              color: "text-[#F97316]",
              bg: "bg-orange-50",
            },
            {
              label: "Trips Completed",
              value: past.filter((b) => b.status === "DELIVERED").length,
              icon: <CheckCircle2 className="w-5 h-5" />,
              color: "text-green-600",
              bg: "bg-green-50",
            },
            {
              label: "Total Spent",
              value: `₦${(totalSpent / 1000).toFixed(0)}k`,
              icon: <CircleDollarSign className="w-5 h-5" />,
              color: "text-purple-600",
              bg: "bg-purple-50",
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

        {/* ── Quick Actions ── */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <Card
            onClick={() => setOpenSearch(true)}
            className="p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center group-hover:bg-[#1E3A8A]/20 transition-colors">
              <Search className="w-5 h-5 text-[#1E3A8A]" />
            </div>

            <div>
              <p className="font-semibold text-sm text-gray-900">
                Find Drivers
              </p>
              <p className="text-xs text-gray-500">Browse available trucks</p>
            </div>

            <ChevronRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-[#1E3A8A] transition-colors" />
          </Card>
          <Card
            onClick={() => setOpenPostCargo(true)}
            className="p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center group-hover:bg-[#F97316]/20 transition-colors">
              <Plus className="w-5 h-5 text-[#F97316]" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Post Cargo</p>
              <p className="text-xs text-gray-500">Create a new listing</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-[#F97316] transition-colors" />
          </Card>

          {/* ── Active Shipments ── */}
          <div className="mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">
              Active Shipments
            </h2>

            {loading ? (
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-28 rounded-xl bg-gray-100 animate-pulse"
                  />
                ))}
              </div>
            ) : active.length === 0 ? (
              <Card className="p-8 text-center shadow-sm">
                <Package className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                <p className="font-medium text-gray-500">No active shipments</p>
                <p className="text-sm text-gray-400 mt-1">
                  Post a cargo listing or find a driver to get started
                </p>
                <div className="flex gap-3 justify-center mt-4">
                  <Link href="/search">
                    <Button variant="outline" size="sm">
                      Find Drivers
                    </Button>
                  </Link>
                  <Link href="/onboarding/shipper">
                    <Button
                      size="sm"
                      className="bg-[#1E3A8A] text-white hover:bg-blue-900"
                    >
                      Post Cargo
                    </Button>
                  </Link>
                </div>
              </Card>
            ) : (
              <div className="space-y-3">
                {active.map((b) => {
                  const st = STATUS_CONFIG[b.status] ?? {
                    label: b.status,
                    color: "text-gray-600",
                    bg: "bg-gray-50 border-gray-200",
                    icon: null,
                  };
                  return (
                    <Card key={b.id} className="p-4 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-gray-900 truncate">
                            {b.cargoListing.title}
                          </p>
                          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            {b.cargoListing.originCity},{" "}
                            {b.cargoListing.originState} →{" "}
                            {b.cargoListing.destCity},{" "}
                            {b.cargoListing.destState}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            Driver: {b.driver.name} · {b.driver.phone}
                          </p>
                          <p className="text-xs text-gray-400">
                            Truck: {b.driverProfile.truckType} ·{" "}
                            {b.driverProfile.truckModel}
                          </p>
                          <p className="text-xs text-gray-400">
                            Pickup:{" "}
                            {new Date(b.pickupDate).toLocaleDateString("en-NG")}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full border font-medium flex items-center gap-1 ${st.color} ${st.bg}`}
                          >
                            {st.icon} {st.label}
                          </span>
                          <p className="font-bold text-[#1E3A8A]">
                            ₦{b.agreedAmount.toLocaleString()}
                          </p>
                          <div className="flex gap-1.5">
                            {b.status === "ACCEPTED" && (
                              <Button
                                size="sm"
                                className="bg-[#1E3A8A] text-white hover:bg-blue-900 h-7 text-xs"
                                disabled={payLoading === b.id}
                                onClick={() => handlePay(b.id)}
                              >
                                {payLoading === b.id
                                  ? "Redirecting..."
                                  : "Pay Now 💳"}
                              </Button>
                            )}
                            {["PENDING", "ACCEPTED"].includes(b.status) && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 text-xs text-gray-500 hover:text-red-500 hover:border-red-200"
                                disabled={cancelLoading === b.id}
                                onClick={() => handleCancel(b.id)}
                              >
                                {cancelLoading === b.id ? "..." : "Cancel"}
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
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── My Cargo Listings ── */}
          {listings.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-gray-900">
                  My Cargo Listings
                </h2>
                {/* <Link href="/onboarding/owner">
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    <Plus className="w-3 h-3 mr-1" /> New
                  </Button>
                </Link> */}
              </div>
              <div className="space-y-2">
                {listings.map((l) => (
                  <Card
                    key={l.id}
                    className="p-3 shadow-sm flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {l.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {l.originState} → {l.destState} · {l.weightTons}t ·{" "}
                        {/* {l._count.bookings} */}
                        {(l._count?.bookings ?? 0) !== 1 ? "s" : ""} booking
                        {/* {l._count.bookings !== 1 ? "s" : ""} */}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                          l.isActive
                            ? "text-green-700 bg-green-50 border-green-200"
                            : "text-gray-500 bg-gray-50 border-gray-200"
                        }`}
                      >
                        {l.isActive ? "Active" : "Inactive"}
                      </span>
                      <Link href={`/cargo/listings/${l.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs"
                        >
                          <ChevronRight className="w-3 h-3" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ── Past Shipments ── */}
          {past.length > 0 && (
            <div>
              <h2 className="font-semibold text-gray-900 mb-3">
                Past Shipments
              </h2>
              <div className="space-y-2">
                {past.slice(0, 5).map((b) => {
                  const st = STATUS_CONFIG[b.status] ?? {
                    label: b.status,
                    color: "text-gray-600",
                    bg: "bg-gray-50 border-gray-200",
                    icon: null,
                  };
                  return (
                    <Card
                      key={b.id}
                      className="p-3 shadow-sm flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {b.cargoListing.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {b.cargoListing.originState} →{" "}
                          {b.cargoListing.destState} ·{" "}
                          {new Date(b.pickupDate).toLocaleDateString("en-NG")}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm text-gray-700">
                          ₦{b.agreedAmount.toLocaleString()}
                        </p>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border font-medium ${st.color} ${st.bg}`}
                        >
                          {st.label}
                        </span>
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
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <Dialog open={openSearch} onOpenChange={setOpenSearch}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Find Drivers</DialogTitle>
            </DialogHeader>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
              <Input
                placeholder="Origin State"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />

              <Input
                placeholder="Destination State"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />

              <Input
                placeholder="Truck Type (e.g FLATBED)"
                value={truckType}
                onChange={(e) => setTruckType(e.target.value)}
              />

              <Input
                placeholder="Min Capacity (tons)"
                value={minCapacity}
                onChange={(e) => setMinCapacity(e.target.value)}
              />

              <Input
                placeholder="Max Rate (₦ per km)"
                value={maxRate}
                onChange={(e) => setMaxRate(e.target.value)}
              />
            </div>

            <div className="flex justify-end mt-4">
              <Button
                onClick={handleDriverSearch}
                className="bg-[#1E3A8A] hover:bg-blue-900"
              >
                {searchLoading ? "Searching..." : "Search"}
              </Button>
            </div>

            {/* Results */}
            <div className="mt-6">
              {searchLoading ? (
                <p className="text-sm text-gray-500">Loading drivers...</p>
              ) : drivers.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No drivers found. Try adjusting your filters.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {drivers.map((d) => (
                    <DriverCard key={d.id} driver={d} />
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
        {/* ================= POST CARGO MODAL ================= */}
        <Dialog open={openPostCargo} onOpenChange={setOpenPostCargo}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Post Cargo</DialogTitle>
            </DialogHeader>

            <PostCargoForm
              onSuccess={() => {
                setOpenPostCargo(false);
                fetchData();
              }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
