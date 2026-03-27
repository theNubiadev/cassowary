"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useState } from "react";
import * as z from "zod";

const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const CARGO_TYPES = [
  { value: "GENERAL", label: "General Goods" },
  { value: "PERISHABLE", label: "Perishable / Food" },
  { value: "FRAGILE", label: "Fragile Items" },
  { value: "HAZARDOUS", label: "Hazardous Materials" },
  { value: "LIVESTOCK", label: "Livestock" },
  { value: "LIQUID", label: "Liquid / Bulk" },
  { value: "MACHINERY", label: "Machinery / Equipment" },
  { value: "ELECTRONICS", label: "Electronics" },
];

const TRUCK_TYPES = [
  { value: "FLATBED", label: "Flatbed" },
  { value: "REFRIGERATED", label: "Refrigerated" },
  { value: "TANKER", label: "Tanker" },
  { value: "CONTAINER", label: "Container" },
  { value: "TIPPER", label: "Tipper" },
  { value: "VAN", label: "Van / Closed Body" },
  { value: "LOWBED", label: "Lowbed" },
  { value: "CURTAINSIDER", label: "Curtainsider" },
];

const listingSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().optional(),
  cargoType: z.string().min(1, "Cargo type is required"),
  weightTons: z
    .number({ invalid_type_error: "Weight must be a number" })
    .positive("Weight must be positive"),
  originState: z.string().min(1, "Origin state is required"),
  originCity: z.string().min(1, "Origin city is required"),
  destState: z.string().min(1, "Destination state is required"),
  destCity: z.string().min(1, "Destination city is required"),
  requiredTruck: z.string().optional(),
  neededBy: z
    .string()
    .min(1, "Date is required")
    .refine((s) => !isNaN(Date.parse(s)), {
      message: "Invalid date format",
    }),
  budget: z
    .number({ invalid_type_error: "Budget must be a number" })
    .positive()
    .optional(),
});

type ListingForm = z.infer<typeof listingSchema>;

export default function PostCargoForm({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const { update } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ListingForm>({
    resolver: zodResolver(listingSchema),
  });

  async function onSubmit(data: ListingForm) {
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/cargo/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          weightTons: Number(data.weightTons),
          budget: data.budget ? Number(data.budget) : undefined,
          neededBy: new Date(data.neededBy).toISOString(),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Failed to post cargo. Please try again.");
        return;
      }

      await update();

      setSuccess(true);
      reset();

      setTimeout(() => {
        setSuccess(false);
        onSuccess?.();
      }, 1000);
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="shadow-none border-0 p-0">
      <CardTitle className="text-lg">Cargo Details</CardTitle>
      <CardDescription className="mb-4">
        Fill in the details of the shipment you need to move
      </CardDescription>

      {error && (
        <div className="mb-4 px-4 py-3 rounded-lg text-sm text-red-600 bg-red-50 border border-red-200">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 px-4 py-3 rounded-lg text-sm text-green-700 bg-green-50 border border-green-200">
          ✓ Cargo posted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <Label className="text-[#1E3A8A]">Shipment Title</Label>
          <Input
            {...register("title")}
            placeholder="e.g. 50 bags of rice — Lagos to Abuja"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <Label className="text-[#1E3A8A]">Description (optional)</Label>
          <textarea
            {...register("description")}
            rows={2}
            placeholder="Any special handling instructions..."
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A]"
          />
        </div>

        {/* Cargo Type + Weight */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-[#1E3A8A]">Cargo Type</Label>
            <Select
              onValueChange={(v) =>
                setValue("cargoType", v, { shouldValidate: true })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {CARGO_TYPES.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.cargoType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.cargoType.message}
              </p>
            )}
          </div>

          <div>
            <Label className="text-[#1E3A8A]">Weight (tonnes)</Label>
            <Input
              type="number"
              step="0.1"
              min="0.1"
              {...register("weightTons", { valueAsNumber: true })}
              placeholder="e.g. 2.5"
            />
            {errors.weightTons && (
              <p className="text-red-500 text-sm mt-1">
                {errors.weightTons.message}
              </p>
            )}
          </div>
        </div>

        {/* Origin */}
        <div>
          <Label className="text-[#1E3A8A]">Pickup Location</Label>
          <div className="grid grid-cols-2 gap-3 mt-1">
            <div>
              <Select
                onValueChange={(v) =>
                  setValue("originState", v, { shouldValidate: true })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  {NIGERIAN_STATES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.originState && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.originState.message}
                </p>
              )}
            </div>

            <div>
              <Input {...register("originCity")} placeholder="City / Area" />
              {errors.originCity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.originCity.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Destination */}
        <div>
          <Label className="text-[#1E3A8A]">Delivery Location</Label>
          <div className="grid grid-cols-2 gap-3 mt-1">
            <div>
              <Select
                onValueChange={(v) =>
                  setValue("destState", v, { shouldValidate: true })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  {NIGERIAN_STATES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.destState && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.destState.message}
                </p>
              )}
            </div>

            <div>
              <Input {...register("destCity")} placeholder="City / Area" />
              {errors.destCity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.destCity.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Preferred Truck + Needed By */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-[#1E3A8A]">Preferred Truck</Label>
            <Select onValueChange={(v) => setValue("requiredTruck", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Any truck" />
              </SelectTrigger>
              <SelectContent>
                {TRUCK_TYPES.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-[#1E3A8A]">Needed By</Label>
            <Input
              type="date"
              {...register("neededBy")}
              min={new Date().toISOString().split("T")[0]}
            />
            {errors.neededBy && (
              <p className="text-red-500 text-sm mt-1">
                {errors.neededBy.message}
              </p>
            )}
          </div>
        </div>

        {/* Budget */}
        <div>
          <Label className="text-[#1E3A8A]">Budget (₦) — optional</Label>
          <Input
            type="number"
            min="1000"
            {...register("budget", { valueAsNumber: true })}
            placeholder="e.g. 150000"
          />

          {errors.budget && (
            <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading || success}
          className="w-full bg-[#1E3A8A] text-white hover:bg-blue-900 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Posting…
            </>
          ) : (
            <>
              Post Cargo <ArrowRight className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
