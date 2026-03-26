"use client";

import Navbar from "@/components/Navbar";
import DriverCard from "@/components/DriverCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function SearchDriversPage() {
  const [drivers, setDrivers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [truckType, setTruckType] = useState("");
  const [minCapacity, setMinCapacity] = useState("");
  const [maxRate, setMaxRate] = useState("");

  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<any>(null);

  async function fetchDrivers(pageNumber = 1) {
    setLoading(true);

    const params = new URLSearchParams();

    if (origin) params.append("origin", origin);
    if (destination) params.append("destination", destination);
    if (truckType) params.append("truckType", truckType);
    if (minCapacity) params.append("minCapacity", minCapacity);
    if (maxRate) params.append("maxRate", maxRate);

    params.append("page", pageNumber.toString());
    params.append("limit", "12");

    const res = await fetch(`/api/drivers/search?${params.toString()}`);
    const data = await res.json();

    setDrivers(data.drivers || []);
    setPagination(data.pagination);
    setLoading(false);
  }

  useEffect(() => {
    fetchDrivers(1);
  }, []);

  function handleSearch() {
    setPage(1);
    fetchDrivers(1);
  }

  function nextPage() {
    if (!pagination?.hasMore) return;
    const newPage = page + 1;
    setPage(newPage);
    fetchDrivers(newPage);
  }

  function prevPage() {
    if (page <= 1) return;
    const newPage = page - 1;
    setPage(newPage);
    fetchDrivers(newPage);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Find Drivers</h1>
        <p className="text-gray-500 text-sm mt-1">
          Search for available trucks and drivers
        </p>

        {/* Filters */}
        <Card className="p-4 shadow-sm mt-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
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
              placeholder="Truck Type (e.g. FLATBED)"
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
              onClick={handleSearch}
              className="bg-[#1E3A8A] hover:bg-blue-900 text-white"
            >
              Search Drivers
            </Button>
          </div>
        </Card>

        {/* Results */}
        <div className="mt-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-44 bg-gray-100 rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : drivers.length === 0 ? (
            <Card className="p-10 text-center shadow-sm">
              <p className="font-semibold text-gray-700">No drivers found</p>
              <p className="text-sm text-gray-500 mt-1">
                Try adjusting your search filters.
              </p>
            </Card>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {drivers.map((d) => (
                  <DriverCard key={d.id} driver={d} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-8">
                <Button
                  variant="outline"
                  disabled={page <= 1}
                  onClick={prevPage}
                >
                  Previous
                </Button>

                <p className="text-sm text-gray-500">
                  Page {pagination?.page ?? page} of{" "}
                  {pagination?.totalPages ?? 1}
                </p>

                <Button
                  variant="outline"
                  disabled={!pagination?.hasMore}
                  onClick={nextPage}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
