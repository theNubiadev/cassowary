// "use client";

// import { useState, useEffect, useRef } from "react";
// import { useSession } from "next-auth/react";
// import { useForm, useFieldArray } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   X,
//   User,
//   Truck,
//   Route,
//   Loader2,
//   Plus,
//   Trash2,
//   ArrowRight,
//   CheckCircle2,
//   ChevronRight,
// } from "lucide-react";

// // ─── Constants ────────────────────────────────────────────────────────────────

// const NIGERIAN_STATES = [
//   "Abia",
//   "Adamawa",
//   "Akwa Ibom",
//   "Anambra",
//   "Bauchi",
//   "Bayelsa",
//   "Benue",
//   "Borno",
//   "Cross River",
//   "Delta",
//   "Ebonyi",
//   "Edo",
//   "Ekiti",
//   "Enugu",
//   "FCT",
//   "Gombe",
//   "Imo",
//   "Jigawa",
//   "Kaduna",
//   "Kano",
//   "Katsina",
//   "Kebbi",
//   "Kogi",
//   "Kwara",
//   "Lagos",
//   "Nasarawa",
//   "Niger",
//   "Ogun",
//   "Ondo",
//   "Osun",
//   "Oyo",
//   "Plateau",
//   "Rivers",
//   "Sokoto",
//   "Taraba",
//   "Yobe",
//   "Zamfara",
// ];

// const TRUCK_TYPES = [
//   { value: "FLATBED", label: "Flatbed" },
//   { value: "REFRIGERATED", label: "Refrigerated" },
//   { value: "TANKER", label: "Tanker" },
//   { value: "CONTAINER", label: "Container" },
//   { value: "TIPPER", label: "Tipper" },
//   { value: "VAN", label: "Van / Closed Body" },
//   { value: "LOWBED", label: "Lowbed" },
//   { value: "CURTAINSIDER", label: "Curtainsider" },
// ];

// // ─── Schemas ──────────────────────────────────────────────────────────────────

// const accountSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   phone: z.string().min(1, "Phone is required"),
//   image: z.string().url("Must be a valid URL").optional().or(z.literal("")),
// });

// const driverProfileSchema = z.object({
//   truckType: z.string().min(1, "Truck type is required"),
//   truckModel: z.string().min(2, "Truck model is required"),
//   truckYear: z.coerce
//     .number()
//     .int()
//     .min(2000)
//     .max(new Date().getFullYear() + 1),
//   plateNumber: z.string().min(5, "Enter a valid plate number"),
//   capacityTons: z.coerce.number().positive("Must be greater than 0"),
//   baseState: z.string().min(1, "Base state is required"),
//   baseCity: z.string().min(1, "Base city is required"),
//   licenseNumber: z.string().optional(),
//   licenseExpiry: z.string().optional(),
//   yearsExperience: z.coerce.number().int().min(0).optional(),
//   bio: z.string().optional(),
//   ratePerKm: z.coerce.number().positive("Rate must be > 0"),
//   minimumCharge: z.coerce.number().positive("Min charge must be > 0"),
// });

// const routesSchema = z.object({
//   routes: z
//     .array(
//       z.object({
//         id: z.string().optional(),
//         originState: z.string().min(1, "Origin required"),
//         destState: z.string().min(1, "Destination required"),
//         estimatedDays: z.coerce.number().int().min(1),
//       }),
//     )
//     .min(1, "Add at least one route"),
// });

// type AccountForm = z.infer<typeof accountSchema>;
// type DriverProfileForm = z.infer<typeof driverProfileSchema>;
// type RoutesForm = z.infer<typeof routesSchema>;
// type Tab = "account" | "truck" | "routes";

// // ─── ProfileSheet ─────────────────────────────────────────────────────────────

// interface ProfileSheetProps {
//   open: boolean;
//   onClose: () => void;
// }

// export default function ProfileSheet({ open, onClose }: ProfileSheetProps) {
//   const { data: session, update } = useSession();
//   const role = session?.user?.role;

//   const [activeTab, setActiveTab] = useState<Tab>("account");
//   const [closing, setClosing] = useState(false);
//   const [dragOffset, setDragOffset] = useState(0);
//   const startY = useRef(0);
//   const isDragging = useRef(false);

//   // Per-section save state
//   const [saving, setSaving] = useState(false);
//   const [saved, setSaved] = useState<Tab | null>(null);
//   const [saveErr, setSaveErr] = useState("");

//   // ── Account form ────────────────────────────────────────────────────────────
//   const accountForm = useForm<AccountForm>({
//     resolver: zodResolver(accountSchema),
//   });

//   // ── Driver profile form ─────────────────────────────────────────────────────
//   const driverForm = useForm<DriverProfileForm>({
//     resolver: zodResolver(driverProfileSchema),
//   });

//   // ── Routes form ─────────────────────────────────────────────────────────────
//   const routesForm = useForm<RoutesForm>({
//     resolver: zodResolver(routesSchema),
//     defaultValues: {
//       routes: [{ originState: "", destState: "", estimatedDays: 1 }],
//     },
//   });
//   const { fields, append, remove } = useFieldArray({
//     control: routesForm.control,
//     name: "routes",
//   });

//   // ── Load existing profile data ──────────────────────────────────────────────
//   useEffect(() => {
//     if (!open) return;
//     async function load() {
//       try {
//         const res = await fetch("/api/profile");
//         const json = await res.json();
//         if (!res.ok) return;

//         // Populate account form
//         accountForm.reset({
//           name: json.user?.name ?? "",
//           phone: json.user?.phone ?? "",
//           image: json.user?.image ?? "",
//         });

//         // Populate driver forms (only for drivers)
//         if (role === "DRIVER" && json.driverProfile) {
//           const p = json.driverProfile;
//           driverForm.reset({
//             truckType: p.truckType ?? "",
//             truckModel: p.truckModel ?? "",
//             truckYear: p.truckYear ?? new Date().getFullYear(),
//             plateNumber: p.plateNumber ?? "",
//             capacityTons: p.capacityTons ?? 0,
//             baseState: p.baseState ?? "",
//             baseCity: p.baseCity ?? "",
//             licenseNumber: p.licenseNumber ?? "",
//             licenseExpiry: p.licenseExpiry
//               ? new Date(p.licenseExpiry).toISOString().split("T")[0]
//               : "",
//             yearsExperience: p.yearsExperience ?? 0,
//             bio: p.bio ?? "",
//             ratePerKm: p.ratePerKm ?? 0,
//             minimumCharge: p.minimumCharge ?? 0,
//           });

//           if (p.servicesRoutes?.length > 0) {
//             routesForm.reset({
//               routes: p.servicesRoutes.map((r: any) => ({
//                 id: r.id,
//                 originState: r.originState,
//                 destState: r.destState,
//                 estimatedDays: r.estimatedDays,
//               })),
//             });
//           }
//         }
//       } catch {}
//     }
//     load();
//   }, [open, role]);

//   // ── Save handlers ───────────────────────────────────────────────────────────

//   async function saveAccount(data: AccountForm) {
//     await save("account", "/api/profile/account", data);
//     await update(); // refresh session name/image
//   }

//   async function saveDriverProfile(data: DriverProfileForm) {
//     await save("truck", "/api/profile/driver", {
//       ...data,
//       licenseExpiry: data.licenseExpiry
//         ? new Date(data.licenseExpiry).toISOString()
//         : undefined,
//     });
//   }

//   async function saveRoutes(data: RoutesForm) {
//     await save("routes", "/api/profile/routes", { routes: data.routes });
//   }

//   async function save(tab: Tab, url: string, body: any) {
//     setSaving(true);
//     setSaveErr("");
//     setSaved(null);
//     try {
//       const res = await fetch(url, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });
//       const json = await res.json();
//       if (!res.ok) {
//         setSaveErr(json.error ?? "Save failed.");
//         return;
//       }
//       setSaved(tab);
//       setTimeout(() => setSaved(null), 3000);
//     } catch {
//       setSaveErr("Network error. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   // ── Sheet open/close ────────────────────────────────────────────────────────

//   function triggerClose() {
//     setClosing(true);
//     setTimeout(() => {
//       setClosing(false);
//       setDragOffset(0);
//       setSaveErr("");
//       onClose();
//     }, 300);
//   }

//   useEffect(() => {
//     if (open) document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   function onTouchStart(e: React.TouchEvent) {
//     startY.current = e.touches[0].clientY;
//     isDragging.current = true;
//   }
//   function onTouchMove(e: React.TouchEvent) {
//     if (!isDragging.current) return;
//     const d = e.touches[0].clientY - startY.current;
//     if (d > 0) setDragOffset(d);
//   }
//   function onTouchEnd() {
//     isDragging.current = false;
//     if (dragOffset > 120) triggerClose();
//     else setDragOffset(0);
//   }

//   if (!open && !closing) return null;

//   const translateY = closing
//     ? "100%"
//     : dragOffset > 0
//       ? `${dragOffset}px`
//       : "0%";
//   const tabs: { key: Tab; label: string; icon: any }[] = [
//     { key: "account", label: "Account", icon: User },
//     ...(role === "DRIVER"
//       ? [
//           { key: "truck" as Tab, label: "Truck", icon: Truck },
//           { key: "routes" as Tab, label: "Routes", icon: Route },
//         ]
//       : []),
//   ];

//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-end justify-center transition-all duration-300 ${
//         closing ? "bg-black/0" : "bg-black/50"
//       } backdrop-blur-sm`}
//       onClick={(e) => {
//         if (e.target === e.currentTarget) triggerClose();
//       }}
//     >
//       <div
//         onTouchStart={onTouchStart}
//         onTouchMove={onTouchMove}
//         onTouchEnd={onTouchEnd}
//         style={{
//           transform: `translateY(${translateY})`,
//           transition: isDragging.current
//             ? "none"
//             : "transform 0.35s cubic-bezier(0.32,0.72,0,1)",
//         }}
//         className="w-full max-w-lg bg-white rounded-t-3xl shadow-2xl flex flex-col"
//         style={{ maxHeight: "90vh" }}
//       >
//         {/* Drag handle */}
//         <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
//           <div className="w-10 h-1 rounded-full bg-gray-200" />
//         </div>

//         {/* Header */}
//         <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 flex-shrink-0">
//           <h2 className="text-base font-bold text-gray-900">
//             Profile & Settings
//           </h2>
//           <button
//             onClick={triggerClose}
//             className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
//           >
//             <X className="w-4 h-4 text-gray-500" />
//           </button>
//         </div>

//         {/* Tab bar */}
//         <div className="flex gap-1 px-5 pt-3 pb-0 flex-shrink-0">
//           {tabs.map((t) => {
//             const Icon = t.icon;
//             return (
//               <button
//                 key={t.key}
//                 onClick={() => {
//                   setActiveTab(t.key);
//                   setSaveErr("");
//                   setSaved(null);
//                 }}
//                 className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
//                   activeTab === t.key
//                     ? "bg-[#1E3A8A] text-white shadow-sm"
//                     : "bg-gray-100 text-gray-500 hover:bg-gray-200"
//                 }`}
//               >
//                 <Icon className="w-3.5 h-3.5" />
//                 {t.label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Save feedback */}
//         <div className="px-5 pt-2 flex-shrink-0">
//           {saveErr && (
//             <div className="px-4 py-2.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600">
//               {saveErr}
//             </div>
//           )}
//           {saved && (
//             <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-50 border border-green-200 text-xs text-green-700">
//               <CheckCircle2 className="w-3.5 h-3.5" />
//               Changes saved successfully
//             </div>
//           )}
//         </div>

//         {/* Scrollable content */}
//         <div className="overflow-y-auto flex-1 px-5 pb-8 pt-4">
//           {/* ── ACCOUNT TAB ──────────────────────────────────────────── */}
//           {activeTab === "account" && (
//             <form
//               onSubmit={accountForm.handleSubmit(saveAccount)}
//               className="space-y-4"
//             >
//               <div>
//                 <Label className="text-[#1E3A8A]">Full Name</Label>
//                 <Input
//                   {...accountForm.register("name")}
//                   placeholder="Your full name"
//                 />
//                 {accountForm.formState.errors.name && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {accountForm.formState.errors.name.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Label className="text-[#1E3A8A]">Phone Number</Label>
//                 <Input
//                   {...accountForm.register("phone")}
//                   placeholder="+234 000 000 0000"
//                 />
//                 {accountForm.formState.errors.phone && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {accountForm.formState.errors.phone.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Label className="text-[#1E3A8A]">
//                   Profile Image URL{" "}
//                   <span className="text-gray-400 font-normal">(optional)</span>
//                 </Label>
//                 <Input
//                   {...accountForm.register("image")}
//                   placeholder="https://…"
//                 />
//                 {accountForm.formState.errors.image && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {accountForm.formState.errors.image.message}
//                   </p>
//                 )}
//               </div>

//               <Button
//                 type="submit"
//                 disabled={saving}
//                 className="w-full h-10 bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm font-semibold"
//               >
//                 {saving ? (
//                   <>
//                     <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Saving…
//                   </>
//                 ) : (
//                   "Save Account"
//                 )}
//               </Button>
//             </form>
//           )}

//           {/* ── TRUCK TAB (DRIVER only) ───────────────────────────────── */}
//           {activeTab === "truck" && role === "DRIVER" && (
//             <form
//               onSubmit={driverForm.handleSubmit(saveDriverProfile)}
//               className="space-y-4"
//             >
//               {/* Truck type */}
//               <div>
//                 <Label className="text-[#1E3A8A]">Truck Type</Label>
//                 <Select
//                   defaultValue={driverForm.getValues("truckType")}
//                   onValueChange={(v) =>
//                     driverForm.setValue("truckType", v, {
//                       shouldValidate: true,
//                     })
//                   }
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {TRUCK_TYPES.map((t) => (
//                       <SelectItem key={t.value} value={t.value}>
//                         {t.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 {driverForm.formState.errors.truckType && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {driverForm.formState.errors.truckType.message}
//                   </p>
//                 )}
//               </div>

//               {/* Model + Year */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <Label className="text-[#1E3A8A]">Model</Label>
//                   <Input
//                     {...driverForm.register("truckModel")}
//                     placeholder="e.g. Mack Granite"
//                   />
//                   {driverForm.formState.errors.truckModel && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {driverForm.formState.errors.truckModel.message}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <Label className="text-[#1E3A8A]">Year</Label>
//                   <Input
//                     type="number"
//                     {...driverForm.register("truckYear", {
//                       valueAsNumber: true,
//                     })}
//                   />
//                   {driverForm.formState.errors.truckYear && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {driverForm.formState.errors.truckYear.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Plate + Capacity */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <Label className="text-[#1E3A8A]">Plate Number</Label>
//                   <Input
//                     {...driverForm.register("plateNumber")}
//                     placeholder="LAG-123-AB"
//                   />
//                   {driverForm.formState.errors.plateNumber && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {driverForm.formState.errors.plateNumber.message}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <Label className="text-[#1E3A8A]">Capacity (t)</Label>
//                   <Input
//                     type="number"
//                     step="0.5"
//                     {...driverForm.register("capacityTons", {
//                       valueAsNumber: true,
//                     })}
//                   />
//                   {driverForm.formState.errors.capacityTons && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {driverForm.formState.errors.capacityTons.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Base State + City */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <Label className="text-[#1E3A8A]">Base State</Label>
//                   <Select
//                     defaultValue={driverForm.getValues("baseState")}
//                     onValueChange={(v) =>
//                       driverForm.setValue("baseState", v, {
//                         shouldValidate: true,
//                       })
//                     }
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="State" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {NIGERIAN_STATES.map((s) => (
//                         <SelectItem key={s} value={s}>
//                           {s}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div>
//                   <Label className="text-[#1E3A8A]">Base City</Label>
//                   <Input
//                     {...driverForm.register("baseCity")}
//                     placeholder="e.g. Apapa"
//                   />
//                 </div>
//               </div>

//               {/* License */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <Label className="text-[#1E3A8A]">
//                     License No.{" "}
//                     <span className="text-gray-400 font-normal">(opt)</span>
//                   </Label>
//                   <Input
//                     {...driverForm.register("licenseNumber")}
//                     placeholder="DL-000000"
//                   />
//                 </div>
//                 <div>
//                   <Label className="text-[#1E3A8A]">
//                     License Expiry{" "}
//                     <span className="text-gray-400 font-normal">(opt)</span>
//                   </Label>
//                   <Input
//                     type="date"
//                     {...driverForm.register("licenseExpiry")}
//                   />
//                 </div>
//               </div>

//               {/* Rates */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <Label className="text-[#1E3A8A]">Rate / km (₦)</Label>
//                   <Input
//                     type="number"
//                     {...driverForm.register("ratePerKm", {
//                       valueAsNumber: true,
//                     })}
//                     placeholder="300"
//                   />
//                   {driverForm.formState.errors.ratePerKm && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {driverForm.formState.errors.ratePerKm.message}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <Label className="text-[#1E3A8A]">Min. Charge (₦)</Label>
//                   <Input
//                     type="number"
//                     {...driverForm.register("minimumCharge", {
//                       valueAsNumber: true,
//                     })}
//                     placeholder="50000"
//                   />
//                   {driverForm.formState.errors.minimumCharge && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {driverForm.formState.errors.minimumCharge.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Experience + Bio */}
//               <div>
//                 <Label className="text-[#1E3A8A]">Years of Experience</Label>
//                 <Input
//                   type="number"
//                   min="0"
//                   {...driverForm.register("yearsExperience", {
//                     valueAsNumber: true,
//                   })}
//                 />
//               </div>
//               <div>
//                 <Label className="text-[#1E3A8A]">
//                   Bio{" "}
//                   <span className="text-gray-400 font-normal">(optional)</span>
//                 </Label>
//                 <textarea
//                   {...driverForm.register("bio")}
//                   rows={3}
//                   placeholder="Tell cargo owners about yourself…"
//                   className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A]"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 disabled={saving}
//                 className="w-full h-10 bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm font-semibold"
//               >
//                 {saving ? (
//                   <>
//                     <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Saving…
//                   </>
//                 ) : (
//                   "Save Truck Details"
//                 )}
//               </Button>
//             </form>
//           )}

//           {/* ── ROUTES TAB (DRIVER only) ──────────────────────────────── */}
//           {activeTab === "routes" && role === "DRIVER" && (
//             <form
//               onSubmit={routesForm.handleSubmit(saveRoutes)}
//               className="space-y-4"
//             >
//               {fields.map((field, i) => (
//                 <div
//                   key={field.id}
//                   className="p-4 rounded-xl border border-gray-100 bg-gray-50 space-y-3"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs font-semibold text-[#F97316]">
//                       Route {i + 1}
//                     </span>
//                     {fields.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => remove(i)}
//                         className="text-gray-400 hover:text-red-500 transition-colors"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     )}
//                   </div>

//                   <div className="grid grid-cols-2 gap-3">
//                     <div>
//                       <Label className="text-[#1E3A8A] text-xs">From</Label>
//                       <Select
//                         defaultValue={field.originState}
//                         onValueChange={(v) =>
//                           routesForm.setValue(`routes.${i}.originState`, v, {
//                             shouldValidate: true,
//                           })
//                         }
//                       >
//                         <SelectTrigger>
//                           <SelectValue placeholder="Origin" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {NIGERIAN_STATES.map((s) => (
//                             <SelectItem key={s} value={s}>
//                               {s}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                       {routesForm.formState.errors.routes?.[i]?.originState && (
//                         <p className="text-red-500 text-xs mt-1">Required</p>
//                       )}
//                     </div>
//                     <div>
//                       <Label className="text-[#1E3A8A] text-xs">To</Label>
//                       <Select
//                         defaultValue={field.destState}
//                         onValueChange={(v) =>
//                           routesForm.setValue(`routes.${i}.destState`, v, {
//                             shouldValidate: true,
//                           })
//                         }
//                       >
//                         <SelectTrigger>
//                           <SelectValue placeholder="Destination" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {NIGERIAN_STATES.map((s) => (
//                             <SelectItem key={s} value={s}>
//                               {s}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                       {routesForm.formState.errors.routes?.[i]?.destState && (
//                         <p className="text-red-500 text-xs mt-1">Required</p>
//                       )}
//                     </div>
//                   </div>

//                   <div>
//                     <Label className="text-[#1E3A8A] text-xs">
//                       Est. Transit Days
//                     </Label>
//                     <Input
//                       type="number"
//                       min="1"
//                       {...routesForm.register(`routes.${i}.estimatedDays`, {
//                         valueAsNumber: true,
//                       })}
//                     />
//                   </div>
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={() =>
//                   append({ originState: "", destState: "", estimatedDays: 1 })
//                 }
//                 className="w-full py-2.5 rounded-xl border border-dashed border-gray-300 text-sm text-gray-500 hover:border-[#F97316] hover:text-[#F97316] transition-colors flex items-center justify-center gap-2"
//               >
//                 <Plus className="w-4 h-4" /> Add route
//               </button>

//               <Button
//                 type="submit"
//                 disabled={saving}
//                 className="w-full h-10 bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm font-semibold"
//               >
//                 {saving ? (
//                   <>
//                     <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Saving…
//                   </>
//                 ) : (
//                   "Save Routes"
//                 )}
//               </Button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  X,
  User,
  Truck,
  Route,
  Loader2,
  Plus,
  Trash2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

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

// ─── Schemas ──────────────────────────────────────────────────────────────────

const accountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  image: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

// Matches your existing PUT /api/drivers/profile schema (partial)
const driverSchema = z.object({
  truckType: z.enum([
    "FLATBED",
    "REFRIGERATED",
    "TANKER",
    "CONTAINER",
    "TIPPER",
    "VAN",
    "LOWBED",
    "CURTAINSIDER",
  ]),
  truckModel: z.string().min(2, "Truck model required"),
  truckYear: z.coerce
    .number()
    .int()
    .min(2000)
    .max(new Date().getFullYear() + 1),
  plateNumber: z.string().min(5, "Enter a valid plate number"),
  capacityTons: z.coerce.number().positive("Must be > 0"),
  baseState: z.string().min(1, "Base state required"),
  baseCity: z.string().min(1, "Base city required"),
  ratePerKm: z.coerce.number().positive("Rate must be > 0"),
  minimumCharge: z.coerce.number().positive("Min charge must be > 0"),
  licenseNumber: z.string().optional(),
  licenseExpiry: z.string().optional(), // sent as ISO string
  yearsExperience: z.coerce.number().int().min(0).optional(),
  bio: z.string().optional(),
  routes: z
    .array(
      z.object({
        originState: z.string().min(1, "Required"),
        originCity: z.string().optional(),
        destState: z.string().min(1, "Required"),
        destCity: z.string().optional(),
        estimatedDays: z.coerce.number().int().min(1),
      }),
    )
    .min(1, "Add at least one route"),
});

type AccountForm = z.infer<typeof accountSchema>;
type DriverForm = z.infer<typeof driverSchema>;
type Tab = "account" | "truck";

// ─── Props ────────────────────────────────────────────────────────────────────

interface ProfileSheetProps {
  open: boolean;
  onClose: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProfileSheet({ open, onClose }: ProfileSheetProps) {
  const { data: session, update } = useSession();
  const role = session?.user?.role;

  const [activeTab, setActiveTab] = useState<Tab>("account");
  const [closing, setClosing] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveErr, setSaveErr] = useState("");

  const startY = useRef(0);
  const isDragging = useRef(false);

  // ── Account form ────────────────────────────────────────────────────────────
  const accountForm = useForm<AccountForm>({
    resolver: zodResolver(accountSchema),
  });

  // ── Driver form (truck + routes combined — mirrors your PUT handler) ─────────
  const driverForm = useForm<DriverForm>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      truckYear: new Date().getFullYear(),
      yearsExperience: 0,
      routes: [{ originState: "", destState: "", estimatedDays: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: driverForm.control,
    name: "routes",
  });

  // ── Load existing data on open ───────────────────────────────────────────────
  useEffect(() => {
    if (!open) return;

    async function load() {
      try {
        // Account info — from session (always available)
        accountForm.reset({
          name: session?.user?.name ?? "",
          phone: (session?.user as any)?.phone ?? "",
          image: session?.user?.image ?? "",
        });

        // Driver profile — from existing GET /api/drivers/profile
        if (role === "DRIVER") {
          const res = await fetch("/api/drivers/profile");
          const json = await res.json();
          if (!res.ok) return;

          driverForm.reset({
            truckType: json.truckType ?? undefined,
            truckModel: json.truckModel ?? "",
            truckYear: json.truckYear ?? new Date().getFullYear(),
            plateNumber: json.plateNumber ?? "",
            capacityTons: json.capacityTons ?? 0,
            baseState: json.baseState ?? "",
            baseCity: json.baseCity ?? "",
            ratePerKm: json.ratePerKm ?? 0,
            minimumCharge: json.minimumCharge ?? 0,
            licenseNumber: json.licenseNumber ?? "",
            licenseExpiry: json.licenseExpiry
              ? new Date(json.licenseExpiry).toISOString().split("T")[0]
              : "",
            yearsExperience: json.yearsExperience ?? 0,
            bio: json.bio ?? "",
            routes:
              json.servicesRoutes?.length > 0
                ? json.servicesRoutes.map((r: any) => ({
                    originState: r.originState,
                    originCity: r.originCity ?? "",
                    destState: r.destState,
                    destCity: r.destCity ?? "",
                    estimatedDays: r.estimatedDays,
                  }))
                : [{ originState: "", destState: "", estimatedDays: 1 }],
          });
        }
      } catch {}
    }

    load();
  }, [open, role]);

  // ── Save: Account ────────────────────────────────────────────────────────────
  async function saveAccount(data: AccountForm) {
    setSaving(true);
    setSaveErr("");
    setSaved(false);
    try {
      const res = await fetch("/api/profile/account", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setSaveErr(json.error ?? "Save failed.");
        return;
      }
      await update(); // refresh session so name/image updates in Navbar
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setSaveErr("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  // ── Save: Driver profile + routes via your existing PUT /api/drivers/profile ─
  async function saveDriver(data: DriverForm) {
    setSaving(true);
    setSaveErr("");
    setSaved(false);
    try {
      const res = await fetch("/api/drivers/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          licenseExpiry: data.licenseExpiry
            ? new Date(data.licenseExpiry).toISOString()
            : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setSaveErr(json.error ?? "Save failed.");
        return;
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setSaveErr("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  // ── Sheet close / drag ───────────────────────────────────────────────────────
  function triggerClose() {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setDragOffset(0);
      setSaveErr("");
      setSaved(false);
      onClose();
    }, 300);
  }

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function onTouchStart(e: React.TouchEvent) {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  }
  function onTouchMove(e: React.TouchEvent) {
    if (!isDragging.current) return;
    const d = e.touches[0].clientY - startY.current;
    if (d > 0) setDragOffset(d);
  }
  function onTouchEnd() {
    isDragging.current = false;
    if (dragOffset > 120) triggerClose();
    else setDragOffset(0);
  }

  if (!open && !closing) return null;

  const translateY = closing
    ? "100%"
    : dragOffset > 0
      ? `${dragOffset}px`
      : "0%";

  const tabs = [
    { key: "account" as Tab, label: "Account", icon: User },
    ...(role === "DRIVER"
      ? [{ key: "truck" as Tab, label: "Truck & Routes", icon: Truck }]
      : []),
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-all duration-300 ${
        closing ? "bg-black/0" : "bg-black/50"
      } backdrop-blur-sm`}
      onClick={(e) => {
        if (e.target === e.currentTarget) triggerClose();
      }}
    >
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          transform: `translateY(${translateY})`,
          transition: isDragging.current
            ? "none"
            : "transform 0.35s cubic-bezier(0.32,0.72,0,1)",
          maxHeight: "90vh",
        }}
        className="w-full max-w-lg bg-white rounded-t-3xl shadow-2xl flex flex-col"
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 className="text-base font-bold text-gray-900">
              Profile & Settings
            </h2>
            <p className="text-xs text-gray-400">{session?.user?.email}</p>
          </div>
          <button
            onClick={triggerClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Tab bar */}
        <div className="flex gap-2 px-5 pt-3 pb-2 flex-shrink-0">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                onClick={() => {
                  setActiveTab(t.key);
                  setSaveErr("");
                  setSaved(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === t.key
                    ? "bg-[#1E3A8A] text-white shadow-sm"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Feedback banners */}
        <div className="px-5 flex-shrink-0 space-y-2">
          {saveErr && (
            <div className="px-4 py-2.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600">
              {saveErr}
            </div>
          )}
          {saved && (
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-50 border border-green-200 text-xs text-green-700">
              <CheckCircle2 className="w-3.5 h-3.5" /> Changes saved
              successfully
            </div>
          )}
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-5 pb-8 pt-3">
          {/* ── ACCOUNT TAB ──────────────────────────────────────────────── */}
          {activeTab === "account" && (
            <form
              onSubmit={accountForm.handleSubmit(saveAccount)}
              className="space-y-4"
            >
              <div>
                <Label className="text-[#1E3A8A]">Full Name</Label>
                <Input
                  {...accountForm.register("name")}
                  placeholder="Your full name"
                />
                {accountForm.formState.errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {accountForm.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-[#1E3A8A]">Phone Number</Label>
                <Input
                  {...accountForm.register("phone")}
                  placeholder="+234 000 000 0000"
                />
                {accountForm.formState.errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {accountForm.formState.errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-[#1E3A8A]">
                  Profile Image URL{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </Label>
                <Input
                  {...accountForm.register("image")}
                  placeholder="https://…"
                />
                {accountForm.formState.errors.image && (
                  <p className="text-red-500 text-xs mt-1">
                    {accountForm.formState.errors.image.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={saving}
                className="w-full h-10 bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm font-semibold"
              >
                {saving ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Saving…
                  </>
                ) : (
                  "Save Account"
                )}
              </Button>
            </form>
          )}

          {/* ── TRUCK & ROUTES TAB (DRIVER only) ─────────────────────────── */}
          {activeTab === "truck" && role === "DRIVER" && (
            <form
              onSubmit={driverForm.handleSubmit(saveDriver)}
              className="space-y-4"
            >
              {/* ── Truck details section ── */}
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider pt-1">
                Truck Details
              </p>

              {/* Truck type */}
              <div>
                <Label className="text-[#1E3A8A]">Truck Type</Label>
                <Select
                  defaultValue={driverForm.getValues("truckType")}
                  onValueChange={(v) =>
                    driverForm.setValue("truckType", v as any, {
                      shouldValidate: true,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {TRUCK_TYPES.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {driverForm.formState.errors.truckType && (
                  <p className="text-red-500 text-xs mt-1">
                    {driverForm.formState.errors.truckType.message}
                  </p>
                )}
              </div>

              {/* Model + Year */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-[#1E3A8A]">Model</Label>
                  <Input
                    {...driverForm.register("truckModel")}
                    placeholder="e.g. Mack Granite"
                  />
                  {driverForm.formState.errors.truckModel && (
                    <p className="text-red-500 text-xs mt-1">
                      {driverForm.formState.errors.truckModel.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="text-[#1E3A8A]">Year</Label>
                  <Input
                    type="number"
                    {...driverForm.register("truckYear", {
                      valueAsNumber: true,
                    })}
                  />
                  {driverForm.formState.errors.truckYear && (
                    <p className="text-red-500 text-xs mt-1">
                      {driverForm.formState.errors.truckYear.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Plate + Capacity */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-[#1E3A8A]">Plate Number</Label>
                  <Input
                    {...driverForm.register("plateNumber")}
                    placeholder="LAG-123-AB"
                  />
                  {driverForm.formState.errors.plateNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {driverForm.formState.errors.plateNumber.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="text-[#1E3A8A]">Capacity (t)</Label>
                  <Input
                    type="number"
                    step="0.5"
                    {...driverForm.register("capacityTons", {
                      valueAsNumber: true,
                    })}
                  />
                  {driverForm.formState.errors.capacityTons && (
                    <p className="text-red-500 text-xs mt-1">
                      {driverForm.formState.errors.capacityTons.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Base State + City */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-[#1E3A8A]">Base State</Label>
                  <Select
                    defaultValue={driverForm.getValues("baseState")}
                    onValueChange={(v) =>
                      driverForm.setValue("baseState", v, {
                        shouldValidate: true,
                      })
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
                  {driverForm.formState.errors.baseState && (
                    <p className="text-red-500 text-xs mt-1">
                      {driverForm.formState.errors.baseState.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="text-[#1E3A8A]">Base City</Label>
                  <Input
                    {...driverForm.register("baseCity")}
                    placeholder="e.g. Apapa"
                  />
                  {driverForm.formState.errors.baseCity && (
                    <p className="text-red-500 text-xs mt-1">
                      {driverForm.formState.errors.baseCity.message}
                    </p>
                  )}
                </div>
              </div>

              {/* License */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-[#1E3A8A]">
                    License No.{" "}
                    <span className="text-gray-400 font-normal">(opt)</span>
                  </Label>
                  <Input
                    {...driverForm.register("licenseNumber")}
                    placeholder="DL-000000"
                  />
                </div>
                <div>
                  <Label className="text-[#1E3A8A]">
                    Expiry{" "}
                    <span className="text-gray-400 font-normal">(opt)</span>
                  </Label>
                  <Input
                    type="date"
                    {...driverForm.register("licenseExpiry")}
                  />
                </div>
              </div>

              {/* Rates */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-[#1E3A8A]">Rate / km (₦)</Label>
                  <Input
                    type="number"
                    {...driverForm.register("ratePerKm", {
                      valueAsNumber: true,
                    })}
                    placeholder="300"
                  />
                  {driverForm.formState.errors.ratePerKm && (
                    <p className="text-red-500 text-xs mt-1">
                      {driverForm.formState.errors.ratePerKm.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="text-[#1E3A8A]">Min. Charge (₦)</Label>
                  <Input
                    type="number"
                    {...driverForm.register("minimumCharge", {
                      valueAsNumber: true,
                    })}
                    placeholder="50000"
                  />
                  {driverForm.formState.errors.minimumCharge && (
                    <p className="text-red-500 text-xs mt-1">
                      {driverForm.formState.errors.minimumCharge.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Experience + Bio */}
              <div>
                <Label className="text-[#1E3A8A]">Years of Experience</Label>
                <Input
                  type="number"
                  min="0"
                  {...driverForm.register("yearsExperience", {
                    valueAsNumber: true,
                  })}
                />
              </div>
              <div>
                <Label className="text-[#1E3A8A]">
                  Bio{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </Label>
                <textarea
                  {...driverForm.register("bio")}
                  rows={3}
                  placeholder="Tell cargo owners about yourself…"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A]"
                />
              </div>

              {/* ── Routes section ── */}
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider pt-2">
                Routes Covered
              </p>

              {fields.map((field, i) => (
                <div
                  key={field.id}
                  className="p-4 rounded-xl border border-gray-100 bg-gray-50 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#F97316]">
                      Route {i + 1}
                    </span>
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(i)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-[#1E3A8A] text-xs">
                        From (State)
                      </Label>
                      <Select
                        defaultValue={field.originState}
                        onValueChange={(v) =>
                          driverForm.setValue(`routes.${i}.originState`, v, {
                            shouldValidate: true,
                          })
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
                      {driverForm.formState.errors.routes?.[i]?.originState && (
                        <p className="text-red-500 text-xs mt-1">Required</p>
                      )}
                    </div>
                    <div>
                      <Label className="text-[#1E3A8A] text-xs">
                        To (State)
                      </Label>
                      <Select
                        defaultValue={field.destState}
                        onValueChange={(v) =>
                          driverForm.setValue(`routes.${i}.destState`, v, {
                            shouldValidate: true,
                          })
                        }
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
                      {driverForm.formState.errors.routes?.[i]?.destState && (
                        <p className="text-red-500 text-xs mt-1">Required</p>
                      )}
                    </div>
                  </div>

                  {/* Origin + Dest city (optional) */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-[#1E3A8A] text-xs">
                        From City <span className="text-gray-400">(opt)</span>
                      </Label>
                      <Input
                        {...driverForm.register(`routes.${i}.originCity`)}
                        placeholder="e.g. Apapa"
                      />
                    </div>
                    <div>
                      <Label className="text-[#1E3A8A] text-xs">
                        To City <span className="text-gray-400">(opt)</span>
                      </Label>
                      <Input
                        {...driverForm.register(`routes.${i}.destCity`)}
                        placeholder="e.g. Wuse"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-[#1E3A8A] text-xs">
                      Est. Transit Days
                    </Label>
                    <Input
                      type="number"
                      min="1"
                      {...driverForm.register(`routes.${i}.estimatedDays`, {
                        valueAsNumber: true,
                      })}
                    />
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() =>
                  append({
                    originState: "",
                    originCity: "",
                    destState: "",
                    destCity: "",
                    estimatedDays: 1,
                  })
                }
                className="w-full py-2.5 rounded-xl border border-dashed border-gray-300 text-sm text-gray-500 hover:border-[#F97316] hover:text-[#F97316] transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" /> Add route
              </button>

              {driverForm.formState.errors.routes?.root && (
                <p className="text-red-500 text-xs">
                  {driverForm.formState.errors.routes.root.message}
                </p>
              )}

              <Button
                type="submit"
                disabled={saving}
                className="w-full h-10 bg-[#1E3A8A] hover:bg-blue-900 text-white text-sm font-semibold"
              >
                {saving ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Saving…
                  </>
                ) : (
                  "Save Truck & Routes"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
