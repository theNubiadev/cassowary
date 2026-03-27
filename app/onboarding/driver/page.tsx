"use client";
import Navbar from "@/components/Navbar";
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
import { ArrowRight, ArrowLeft, Truck, Plus, X, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
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

const truckSchema = z.object({
  truckType: z.string().min(1, { message: "Truck type is required" }),
  truckModel: z.string().min(2, { message: "Truck model is required" }),
  truckYear: z.coerce
    .number()
    .int({ message: "Year must be an integer" })
    .min(2000, { message: "Year must be 2000 or later" })
    .max(new Date().getFullYear() + 1, { message: "Year is invalid" }),
  plateNumber: z.string().min(5, { message: "Enter a valid plate number" }),
  capacityTons: z.coerce
    .number()
    .positive({ message: "Capacity must be greater than 0" }),
  baseState: z.string().min(1, { message: "Base state is required" }),
  baseCity: z.string().min(1, { message: "Base city is required" }),
  yearsExperience: z.coerce
    .number()
    .int()
    .min(0, { message: "Experience cannot be negative" })
    .optional(),
  bio: z.string().optional(),
  // .or(z.literal("").transform(() => undefined)),
});

const ratesSchema = z.object({
  ratePerKm: z.coerce
    .number()
    .positive({ message: "Rate must be greater than 0" }),
  minimumCharge: z.coerce
    .number()
    .positive({ message: "Minimum charge must be greater than 0" }),
});

type TruckForm = z.infer<typeof truckSchema>;
type RatesForm = z.infer<typeof ratesSchema>;
type Route = { originState: string; destState: string; estimatedDays: number };

const steps = [
  { number: 1, label: "Truck Details" },
  { number: 2, label: "Routes" },
  { number: 3, label: "Rates" },
];

export default function DriverOnboarding() {
  const router = useRouter();
  const { update } = useSession(); // refreshes JWT after onboarding completes

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [routes, setRoutes] = useState<Route[]>([
    { originState: "", destState: "", estimatedDays: 1 },
  ]);

  const truckForm = useForm({
    resolver: zodResolver(truckSchema),
    defaultValues: {
      truckType: "",
      truckModel: "",
      truckYear: new Date().getFullYear(),
      plateNumber: "",
      capacityTons: 0,
      baseState: "",
      baseCity: "",
      yearsExperience: undefined,
      bio: "",
    },
  });
  const ratesForm = useForm({
    resolver: zodResolver(ratesSchema),
    defaultValues: {
      ratePerKm: 0,
      minimumCharge: 0,
    },
  });
  // ── Route helpers ──────────────────────────────────────────────────────────

  function addRoute() {
    setRoutes([
      ...routes,
      { originState: "", destState: "", estimatedDays: 1 },
    ]);
  }

  function removeRoute(i: number) {
    if (routes.length === 1) return;
    setRoutes(routes.filter((_, idx) => idx !== i));
  }

  function updateRoute(i: number, field: keyof Route, value: string | number) {
    setRoutes(
      routes.map((r, idx) => (idx === i ? { ...r, [field]: value } : r)),
    );
  }

  // ── Final submit (step 3) ─────────────────────────────────────────────────

  async function handleFinalSubmit(ratesData: RatesForm) {
    setError("");
    setLoading(true);

    const truckData = truckForm.getValues();
    const validRoutes = routes.filter((r) => r.originState && r.destState);

    if (validRoutes.length === 0) {
      setError("Please add at least one complete route.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/drivers/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...truckData,
          ratePerKm: ratesData.ratePerKm,
          minimumCharge: ratesData.minimumCharge,
          routes: validRoutes,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Failed to save profile. Please try again.");
        return;
      }

      // Refresh JWT so onboardingComplete flips to true
      await update();

      router.push("/dashboard/driver");
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      <Navbar />
      <div className="bg-white py-20 px-6 min-h-screen">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F97316]/10 mb-4">
              <Truck className="w-7 h-7 text-[#F97316]" />
            </div>
            <h2 className="text-3xl font-bold mb-2">
              Set Up Your Driver Profile
            </h2>
            <p className="text-gray-500">
              Complete your profile so cargo owners can find and book you
            </p>
          </div>

          {/* Step indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {steps.map((s, i) => (
              <div key={s.number} className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      step >= s.number
                        ? "bg-[#F97316] text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step > s.number ? "✓" : s.number}
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:block ${
                      step === s.number ? "text-[#F97316]" : "text-gray-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-8 h-px ${step > s.number ? "bg-[#F97316]" : "bg-gray-200"}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Error banner */}
          {error && (
            <div className="mb-4 px-4 py-3 rounded-lg text-sm text-red-600 bg-red-50 border border-red-200">
              {error}
            </div>
          )}

          {/* ── STEP 1: Truck Details ─────────────────────────────────────── */}
          {step === 1 && (
            <Card className="shadow-lg p-6">
              <CardTitle className="mb-1">Your Truck Details</CardTitle>
              <CardDescription className="mb-6">
                Tell cargo owners about your truck
              </CardDescription>

              <form
                onSubmit={truckForm.handleSubmit(() => {
                  setError("");
                  setStep(2);
                })}
                className="space-y-4"
              >
                {/* Truck Type */}
                <div>
                  <Label className="text-[#1E3A8A]">Truck Type</Label>
                  <Select
                    onValueChange={(v) =>
                      truckForm.setValue("truckType", v, {
                        shouldValidate: true,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select truck type" />
                    </SelectTrigger>
                    <SelectContent>
                      {TRUCK_TYPES.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {truckForm.formState.errors.truckType && (
                    <p className="text-red-500 text-sm mt-1">
                      {truckForm.formState.errors.truckType.message}
                    </p>
                  )}
                </div>

                {/* Model + Year */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-[#1E3A8A]">Truck Model</Label>
                    <Input
                      {...truckForm.register("truckModel")}
                      placeholder="e.g. Mack Granite"
                    />
                    {truckForm.formState.errors.truckModel && (
                      <p className="text-red-500 text-sm mt-1">
                        {truckForm.formState.errors.truckModel.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label className="text-[#1E3A8A]">Year</Label>
                    <Input
                      type="number"
                      {...truckForm.register("truckYear", {
                        // valueAsNumber: true,
                      })}
                      placeholder="2020"
                    />
                    {truckForm.formState.errors.truckYear && (
                      <p className="text-red-500 text-sm mt-1">
                        {truckForm.formState.errors.truckYear.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Plate + Capacity */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-[#1E3A8A]">Plate Number</Label>
                    <Input
                      {...truckForm.register("plateNumber")}
                      placeholder="LAG-123-AB"
                    />
                    {truckForm.formState.errors.plateNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {truckForm.formState.errors.plateNumber.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label className="text-[#1E3A8A]">Capacity (tonnes)</Label>
                    <Input
                      type="number"
                      step="0.5"
                      {...truckForm.register("capacityTons")}
                      placeholder="15"
                    />
                    {truckForm.formState.errors.capacityTons && (
                      <p className="text-red-500 text-sm mt-1">
                        {truckForm.formState.errors.capacityTons.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Base State + City */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-[#1E3A8A]">Base State</Label>
                    <Select
                      onValueChange={(v) =>
                        truckForm.setValue("baseState", v, {
                          shouldValidate: true,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {NIGERIAN_STATES.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {truckForm.formState.errors.baseState && (
                      <p className="text-red-500 text-sm mt-1">
                        {truckForm.formState.errors.baseState.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label className="text-[#1E3A8A]">Base City</Label>
                    <Input
                      {...truckForm.register("baseCity")}
                      placeholder="e.g. Apapa"
                    />
                    {truckForm.formState.errors.baseCity && (
                      <p className="text-red-500 text-sm mt-1">
                        {truckForm.formState.errors.baseCity.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <Label className="text-[#1E3A8A]">Years of Experience</Label>
                  <Input
                    type="number"
                    min="0"
                    {...truckForm.register("yearsExperience")}
                    placeholder="5"
                  />
                  {truckForm.formState.errors.yearsExperience && (
                    <p className="text-red-500 text-sm mt-1">
                      {truckForm.formState.errors.yearsExperience.message}
                    </p>
                  )}
                </div>

                {/* Bio */}
                <div>
                  <Label className="text-[#1E3A8A]">Bio (optional)</Label>
                  <textarea
                    {...truckForm.register("bio")}
                    rows={3}
                    placeholder="Tell cargo owners about your experience…"
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#F97316] text-white hover:bg-orange-500"
                >
                  Next: Add Routes <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          )}

          {/* ── STEP 2: Routes ────────────────────────────────────────────── */}
          {step === 2 && (
            <Card className="shadow-lg p-6">
              <CardTitle className="mb-1">Routes You Cover</CardTitle>
              <CardDescription className="mb-6">
                Add the routes you regularly operate — cargo owners search by
                these
              </CardDescription>

              <div className="space-y-4">
                {routes.map((route, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-gray-100 bg-gray-50 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#F97316]">
                        Route {i + 1}
                      </span>
                      {routes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRoute(i)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-[#1E3A8A] text-xs">
                          From (State)
                        </Label>
                        <Select
                          value={route.originState}
                          onValueChange={(v) =>
                            updateRoute(i, "originState", v)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Origin" />
                          </SelectTrigger>
                          <SelectContent>
                            {NIGERIAN_STATES.map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-[#1E3A8A] text-xs">
                          To (State)
                        </Label>
                        <Select
                          value={route.destState}
                          onValueChange={(v) => updateRoute(i, "destState", v)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Destination" />
                          </SelectTrigger>
                          <SelectContent>
                            {NIGERIAN_STATES.map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-[#1E3A8A] text-xs">
                        Estimated Transit Days
                      </Label>
                      <Input
                        type="number"
                        min="1"
                        value={route.estimatedDays}
                        onChange={(e) =>
                          updateRoute(
                            i,
                            "estimatedDays",
                            parseInt(e.target.value) || 1,
                          )
                        }
                        placeholder="1"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addRoute}
                  className="w-full py-2.5 rounded-xl border border-dashed border-gray-300 text-sm text-gray-500 hover:border-[#F97316] hover:text-[#F97316] transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Add another route
                </button>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setStep(1)}
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back
                  </Button>
                  <Button
                    type="button"
                    className="flex-[2] bg-[#F97316] text-white hover:bg-orange-500"
                    onClick={() => {
                      const valid = routes.some(
                        (r) => r.originState && r.destState,
                      );
                      if (!valid) {
                        setError("Please complete at least one route.");
                        return;
                      }
                      setError("");
                      setStep(3);
                    }}
                  >
                    Next: Set Rates <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* ── STEP 3: Rates ─────────────────────────────────────────────── */}
          {step === 3 && (
            <Card className="shadow-lg p-6">
              <CardTitle className="mb-1">Your Transport Rates</CardTitle>
              <CardDescription className="mb-6">
                Set your pricing — cargo owners will see this when browsing
                drivers
              </CardDescription>

              <form
                onSubmit={ratesForm.handleSubmit(handleFinalSubmit)}
                className="space-y-4"
              >
                <div>
                  <Label className="text-[#1E3A8A]">Rate per km (₦)</Label>
                  <Input
                    type="number"
                    min="1"
                    {...ratesForm.register("ratePerKm")}
                    placeholder="e.g. 300"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Tip: Lagos to Abuja is ~800 km. At ₦300/km = ₦240,000
                  </p>
                  {ratesForm.formState.errors.ratePerKm && (
                    <p className="text-red-500 text-sm mt-1">
                      {ratesForm.formState.errors.ratePerKm.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="text-[#1E3A8A]">Minimum Charge (₦)</Label>
                  <Input
                    type="number"
                    min="1000"
                    {...ratesForm.register("minimumCharge", {
                      valueAsNumber: true,
                    })}
                    placeholder="e.g. 50000"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Minimum amount you charge regardless of distance
                  </p>
                  {ratesForm.formState.errors.minimumCharge && (
                    <p className="text-red-500 text-sm mt-1">
                      {ratesForm.formState.errors.minimumCharge.message}
                    </p>
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setStep(2)}
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex-[2] bg-[#F97316] text-white hover:bg-orange-500 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />{" "}
                        Saving…
                      </>
                    ) : (
                      "Complete Setup 🎉"
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
