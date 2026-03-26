"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Truck, MapPin, Phone } from "lucide-react";
import Link from "next/link";

interface DriverCardProps {
  driver: any;
}

export default function DriverCard({ driver }: DriverCardProps) {
  return (
    <Card className="p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {/* Driver Image */}
        <div className="w-14 h-14 rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center">
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

        {/* Driver Details */}
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
              {driver.avgRating?.toFixed(1) ?? "0.0"} • {driver.totalTrips ?? 0}{" "}
              trips
            </span>
          </div>

          <p className="text-xs text-gray-400 mt-1">
            Rate: ₦{driver.ratePerKm?.toLocaleString()} / km
          </p>

          {/* Routes */}
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
        <Link href={`/drivers/${driver.user.id}`} className="flex-1">
          <Button variant="outline" className="w-full text-xs h-8">
            View Profile
          </Button>
        </Link>

        <a href={`tel:${driver?.user?.phone}`} className="flex-1">
          <Button className="w-full bg-[#1E3A8A] hover:bg-blue-900 text-xs h-8">
            <Phone className="w-3 h-3 mr-1" />
            Call
          </Button>
        </a>
      </div>
    </Card>
  );
}
