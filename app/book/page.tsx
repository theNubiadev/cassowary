"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BookingPage() {
  const params = useSearchParams();
  const driverProfileId = params.get("driverProfileId");

  const [cargoListingId, setCargoListingId] = useState("");
  const [amount, setAmount] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const createBooking = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        body: JSON.stringify({
          cargoListingId,
          driverProfileId,
          agreedAmount: Number(amount),
          pickupDate,
          notes,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      alert("Booking sent!");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-lg font-bold">Book Driver</h1>

      <input
        placeholder="Cargo Listing ID"
        value={cargoListingId}
        onChange={(e) => setCargoListingId(e.target.value)}
      />

      <input
        type="number"
        placeholder="Agreed Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        value={pickupDate}
        onChange={(e) => setPickupDate(e.target.value)}
      />

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button onClick={createBooking} disabled={loading}>
        {loading ? "Creating..." : "Send Booking Request"}
      </button>
    </div>
  );
}
