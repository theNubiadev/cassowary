// // "use client";
// // import Navbar from "@/components/Navbar";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardDescription, CardTitle } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { Link, Router } from "next/link";
// // import { FieldDescription } from "@/components/ui/field";
// // import { ArrowRight, Truck, X } from "lucide-react";
// // import { useState, useEffect } from "react";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import * as z from "zod";

// // const signupSchema = z.object({
// //   name: z.string().min(1, "Name is required"),
// //   email: z.string().email("Invalid email"),
// //   password: z.string().min(6, "Password must be at least 6 characters"),
// //   phone: z.string().min(1, "Phone is required"),
// //   role: z.enum(["DRIVER", "CARGO_OWNER"] as const),
// // });

// // const router = Router();
// // type SignupForm = z.infer<typeof signupSchema>;

// // export default function Signup() {
// //   const [selectedRole, setSelectedRole] = useState<
// //     "Driver" | "Cargo_Owner" | ""
// //   >("");
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   const {
// //     register,
// //     handleSubmit,
// //     setValue,
// //     formState: { errors },
// //   } = useForm<SignupForm>({
// //     resolver: zodResolver(signupSchema),
// //   });

// //   const onSubmit = async (data: SignupForm) => {
// //     setIsLoading(true);
// //     setServerError("");

// //     try {
// //       const res = await fetch("/api/auth/signup", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(data),
// //       });

// //       const json = await res.json();

// //       if (!res.ok) {
// //         // Handles 400 (validation), 409 (email exists), 500 (server error)
// //         setServerError(json.error ?? "Signup failed. Please try again.");
// //         return;
// //       }

// //       // Redirect to signin after successful signup
// //       router.push("/signin");
// //     } catch (error: any) {
// //       // Only runs on network failure (no internet, server completely down)
// //       setServerError("Network error. Please check your connection.");
// //       console.error("Signup error:", error.message);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };
// //   const openModal = (role: "Driver" | "Cargo_Owner") => {
// //     setSelectedRole(role);
// //     setValue("role", role);
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   // Close modal on Escape key
// //   useEffect(() => {
// //     const handleKeyDown = (e: KeyboardEvent) => {
// //       if (e.key === "Escape") closeModal();
// //     };
// //     if (isModalOpen) {
// //       document.addEventListener("keydown", handleKeyDown);
// //       document.body.style.overflow = "hidden";
// //     }
// //     return () => {
// //       document.removeEventListener("keydown", handleKeyDown);
// //       document.body.style.overflow = "";
// //     };
// //   }, [isModalOpen]);

// //   return (
// //     <>
// //       <Navbar />

// //       <div className="bg-white py-20 px-6">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold mb-4">
// //               How do you want to use Loadlink
// //             </h2>
// //             <p className="text-lg max-w-2xl mx-auto">
// //               Choose the option that best describes you
// //             </p>
// //           </div>

// //           <div className="flex flex-col-2 gaps-8 align-center justify-center">
// //             <div className="px-6 text-center">
// //               <Card className="shadow-lg px-6 py-12">
// //                 <CardTitle>Ship Goods</CardTitle>
// //                 <CardDescription>
// //                   Find trucks to move your cargo safely
// //                 </CardDescription>
// //                 <Button
// //                   className="rounded-xl px-2 bg-[#1E3A8A] text-white hover:bg-blue-900"
// //                   onClick={() => openModal("Cargo_Owner")}
// //                 >
// //                   Continue as Shipper
// //                   <ArrowRight className="ml-2 w-4 h-4" />
// //                 </Button>
// //               </Card>
// //             </div>

// //             <div className="px-6 text-center">
// //               <Card className="shadow-lg px-6 py-12">
// //                 <CardTitle>Drive a Truck</CardTitle>
// //                 <CardDescription>Find delivery and earn money</CardDescription>
// //                 <Button
// //                   className="rounded-xl px-2 bg-[#F97316] text-white hover:bg-orange-500"
// //                   onClick={() => openModal("Driver")}
// //                 >
// //                   Continue as Driver <Truck className="ml-2 w-4 h-4" />
// //                 </Button>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //         <FieldDescription className="text-black text-center py-4">
// //           Dont have an Account{" "}
// //           <Link href="/signin" className="text-[#1E3A8A]">
// //             {" "}
// //             Signin
// //           </Link>
// //         </FieldDescription>
// //       </div>

// //       {/* Modal Overlay */}
// //       {isModalOpen && (
// //         <div
// //           className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
// //           onClick={(e) => {
// //             // Close when clicking the backdrop
// //             if (e.target === e.currentTarget) closeModal();
// //           }}
// //         >
// //           <div className="relative w-full max-w-md mx-4 animate-in fade-in zoom-in-95 duration-200">
// //             <Card className="shadow-2xl p-6">
// //               {/* Close Button */}
// //               <button
// //                 onClick={closeModal}
// //                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
// //                 aria-label="Close modal"
// //               >
// //                 <X className="w-5 h-5" />
// //               </button>

// //               <CardTitle className="text-center mb-4">Sign Up</CardTitle>
// //               <CardDescription className="text-center mb-6">
// //                 {selectedRole === "Driver"
// //                   ? "Create your Driver account to get started"
// //                   : "Create your Shipper account to get started"}
// //               </CardDescription>

// //               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //                 <div>
// //                   <Label htmlFor="name" className="text-[#1E3A8A]">
// //                     Name
// //                   </Label>
// //                   <Input
// //                     id="name"
// //                     {...register("name")}
// //                     placeholder="Enter your name"
// //                   />
// //                   {errors.name && (
// //                     <p className="text-red-500 text-sm">
// //                       {errors.name.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 <div>
// //                   <Label htmlFor="email" className="text-[#1E3A8A]">
// //                     Email
// //                   </Label>
// //                   <Input
// //                     id="email"
// //                     type="email"
// //                     {...register("email")}
// //                     placeholder="Enter your email"
// //                   />
// //                   {errors.email && (
// //                     <p className="text-red-500 text-sm">
// //                       {errors.email.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 <div>
// //                   <Label htmlFor="password" className="text-[#1E3A8A]">
// //                     Password
// //                   </Label>
// //                   <Input
// //                     id="password"
// //                     type="password"
// //                     {...register("password")}
// //                     placeholder="Enter your password"
// //                   />
// //                   {errors.password && (
// //                     <p className="text-red-500 text-sm">
// //                       {errors.password.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 <div>
// //                   <Label htmlFor="phone" className="text-[#1E3A8A]">
// //                     Phone
// //                   </Label>
// //                   <Input
// //                     id="phone"
// //                     {...register("phone")}
// //                     placeholder="Enter your phone number"
// //                   />
// //                   {errors.phone && (
// //                     <p className="text-red-500 text-sm">
// //                       {errors.phone.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 <div>
// //                   <Label htmlFor="role" className="text-[#1E3A8A]">
// //                     Role
// //                   </Label>
// //                   <Select
// //                     value={selectedRole}
// //                     onValueChange={(value) => {
// //                       const roleValue = value as "Driver" | "Cargo_Owner";
// //                       setSelectedRole(roleValue);
// //                       setValue("role", roleValue);
// //                     }}
// //                   >
// //                     <SelectTrigger>
// //                       <SelectValue placeholder="Select your role" />
// //                     </SelectTrigger>
// //                     <SelectContent>
// //                       <SelectItem value="Driver">Driver</SelectItem>
// //                       <SelectItem value="Cargo_Owner">Cargo Owner</SelectItem>
// //                     </SelectContent>
// //                   </Select>
// //                   {errors.role && (
// //                     <p className="text-red-500 text-sm">
// //                       {errors.role.message}
// //                     </p>
// //                   )}
// //                 </div>

// //                 <Button
// //                   type="submit"
// //                   className={`w-full ${
// //                     selectedRole === "Driver"
// //                       ? "bg-[#F97316] text-white hover:bg-orange-500"
// //                       : selectedRole === "Cargo_Owner"
// //                         ? "bg-[#1E3A8A] text-white hover:bg-blue-900"
// //                         : "bg-slate-600 text-white hover:bg-slate-700"
// //                   }`}
// //                 >
// //                   Sign Up
// //                 </Button>
// //               </form>
// //             </Card>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// "use client";
// import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/button";
// import { Card, CardDescription, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import Link from "next/link"; // ✅ Fix 1: Link only, no Router
// import { useRouter } from "next/navigation"; // ✅ Fix 2: correct router hook
// import { ArrowRight, Loader2, Truck, X } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

// const signupSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   email: z.string().email("Invalid email"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
//   phone: z.string().min(1, "Phone is required"),
//   role: z.enum(["DRIVER", "CARGO_OWNER"] as const), // ✅ Fix 3: matches Prisma enum
// });

// type SignupForm = z.infer<typeof signupSchema>;
// type Role = "DRIVER" | "CARGO_OWNER";

// export default function Signup() {
//   const router = useRouter(); // ✅ Fix 2: hook inside component

//   const [selectedRole, setSelectedRole] = useState<Role | "">("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // ✅ Fix 5: declare state
//   const [serverError, setServerError] = useState(""); // ✅ Fix 5: declare state

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<SignupForm>({
//     resolver: zodResolver(signupSchema),
//   });

//   const onSubmit = async (data: SignupForm) => {
//     setIsLoading(true);
//     setServerError("");

//     try {
//       const res = await fetch("/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const json = await res.json();

//       if (!res.ok) {
//         setServerError(json.error ?? "Signup failed. Please try again.");
//         return;
//       }

//       router.push("/signin");
//     } catch (error: any) {
//       setServerError("Network error. Please check your connection.");
//       console.error("Signup error:", error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const openModal = (role: Role) => {
//     setSelectedRole(role);
//     setValue("role", role); // ✅ Fix 3: passes "DRIVER"/"CARGO_OWNER"
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setServerError("");
//   };

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//     };
//     if (isModalOpen) {
//       document.addEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "hidden";
//     }
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "";
//     };
//   }, [isModalOpen]);

//   return (
//     <>
//       <Navbar />

//       <div className="bg-white py-20 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">
//               How do you want to use Loadlink
//             </h2>
//             <p className="text-lg max-w-2xl mx-auto">
//               Choose the option that best describes you
//             </p>
//           </div>

//           <div className="flex flex-col-2 gaps-8 align-center justify-center">
//             <div className="px-6 text-center">
//               <Card className="shadow-lg px-6 py-12">
//                 <CardTitle>Ship Goods</CardTitle>
//                 <CardDescription>
//                   Find trucks to move your cargo safely
//                 </CardDescription>
//                 <Button
//                   className="rounded-xl px-2 bg-[#1E3A8A] text-white hover:bg-blue-900"
//                   onClick={() => openModal("CARGO_OWNER")}
//                 >
//                   Continue as Shipper
//                   <ArrowRight className="ml-2 w-4 h-4" />
//                 </Button>
//               </Card>
//             </div>

//             <div className="px-6 text-center">
//               <Card className="shadow-lg px-6 py-12">
//                 <CardTitle>Drive a Truck</CardTitle>
//                 <CardDescription>Find delivery and earn money</CardDescription>
//                 <Button
//                   className="rounded-xl px-2 bg-[#F97316] text-white hover:bg-orange-500"
//                   onClick={() => openModal("DRIVER")}
//                 >
//                   Continue as Driver <Truck className="ml-2 w-4 h-4" />
//                 </Button>
//               </Card>
//             </div>
//           </div>

//           {/* ✅ Fix 6: replaced <FieldDescription> with a plain <p> tag */}
//           <p className="text-black text-center py-4">
//             Already have an account?{" "}
//             <Link
//               href="/signin"
//               className="text-[#1E3A8A] font-medium underline underline-offset-2"
//             >
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>

//       {/* Modal Overlay */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
//           onClick={(e) => {
//             if (e.target === e.currentTarget) closeModal();
//           }}
//         >
//           <div className="relative w-full max-w-md mx-4 animate-in fade-in zoom-in-95 duration-200">
//             <Card className="shadow-2xl p-6">
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//                 aria-label="Close modal"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <CardTitle className="text-center mb-4">Sign Up</CardTitle>
//               <CardDescription className="text-center mb-6">
//                 {selectedRole === "DRIVER"
//                   ? "Create your Driver account to get started"
//                   : "Create your Shipper account to get started"}
//               </CardDescription>

//               {/* Server error banner */}
//               {serverError && (
//                 <div className="mb-4 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
//                   {serverError}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 <div>
//                   <Label htmlFor="name" className="text-[#1E3A8A]">
//                     Name
//                   </Label>
//                   <Input
//                     id="name"
//                     {...register("name")}
//                     placeholder="Enter your name"
//                   />
//                   {errors.name && (
//                     <p className="text-red-500 text-sm">
//                       {errors.name.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="email" className="text-[#1E3A8A]">
//                     Email
//                   </Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     {...register("email")}
//                     placeholder="Enter your email"
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-sm">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="password" className="text-[#1E3A8A]">
//                     Password
//                   </Label>
//                   <Input
//                     id="password"
//                     type="password"
//                     {...register("password")}
//                     placeholder="Min. 6 characters"
//                   />
//                   {errors.password && (
//                     <p className="text-red-500 text-sm">
//                       {errors.password.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="phone" className="text-[#1E3A8A]">
//                     Phone
//                   </Label>
//                   <Input
//                     id="phone"
//                     {...register("phone")}
//                     placeholder="Enter your phone number"
//                   />
//                   {errors.phone && (
//                     <p className="text-red-500 text-sm">
//                       {errors.phone.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="role" className="text-[#1E3A8A]">
//                     Role
//                   </Label>
//                   <Select
//                     value={selectedRole}
//                     onValueChange={(value) => {
//                       const roleValue = value as Role; // ✅ Fix 3: "DRIVER"/"CARGO_OWNER"
//                       setSelectedRole(roleValue);
//                       setValue("role", roleValue);
//                     }}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select your role" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="DRIVER">Driver</SelectItem>
//                       <SelectItem value="CARGO_OWNER">Cargo Owner</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   {errors.role && (
//                     <p className="text-red-500 text-sm">
//                       {errors.role.message}
//                     </p>
//                   )}
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full ${
//                     selectedRole === "DRIVER"
//                       ? "bg-[#F97316] text-white hover:bg-orange-500"
//                       : selectedRole === "CARGO_OWNER"
//                         ? "bg-[#1E3A8A] text-white hover:bg-blue-900"
//                         : "bg-slate-600 text-white hover:bg-slate-700"
//                   }`}
//                 >
//                   {isLoading ? (
//                     <>
//                       <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Creating
//                       account…
//                     </>
//                   ) : (
//                     "Sign Up"
//                   )}
//                 </Button>
//               </form>
//             </Card>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, Truck, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().min(1, "Phone is required"),
  role: z.enum(["DRIVER", "CARGO_OWNER"] as const),
});

type SignupForm = z.infer<typeof signupSchema>;
type Role = "DRIVER" | "CARGO_OWNER";

export default function Signup() {
  const router = useRouter();

  const [selectedRole, setSelectedRole] = useState<Role | "">("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupForm) => {
    setIsLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setServerError(json.error ?? "Signup failed. Please try again.");
        return;
      }

      router.push("/signin");
    } catch (error: any) {
      setServerError("Network error. Please check your connection.");
      console.error("Signup error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (role: Role) => {
    setSelectedRole(role);
    setValue("role", role);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setServerError("");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-white min-h-screen flex flex-col">
        <div className="flex-1 px-4 py-8 sm:px-6 sm:py-12 md:py-20 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                How do you want to use Loadlink?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the option that best describes you
              </p>
            </div>

            {/* Role Cards - Stack on mobile, 2-column on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              {/* Cargo Owner / Shipper Card */}
              <div className="flex flex-col h-full">
                <Card className="shadow-lg p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-6">
                    <CardTitle className="text-xl sm:text-2xl mb-2">
                      Ship Goods
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Find trucks to move your cargo safely
                    </CardDescription>
                  </div>
                  <Button
                    className="w-full rounded-lg px-4 py-2.5 sm:py-3 bg-[#1E3A8A] text-white hover:bg-blue-900 transition-colors font-medium text-sm sm:text-base"
                    onClick={() => openModal("CARGO_OWNER")}
                  >
                    Continue as Shipper
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </div>

              {/* Driver Card */}
              <div className="flex flex-col h-full">
                <Card className="shadow-lg p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-6">
                    <CardTitle className="text-xl sm:text-2xl mb-2">
                      Drive a Truck
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Find deliveries and earn money
                    </CardDescription>
                  </div>
                  <Button
                    className="w-full rounded-lg px-4 py-2.5 sm:py-3 bg-[#F97316] text-white hover:bg-orange-500 transition-colors font-medium text-sm sm:text-base"
                    onClick={() => openModal("DRIVER")}
                  >
                    Continue as Driver <Truck className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-sm sm:text-base text-gray-700">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-[#1E3A8A] font-semibold hover:underline underline-offset-2 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay - Mobile optimized */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative w-full sm:max-w-md sm:mx-auto rounded-t-3xl sm:rounded-lg animate-in fade-in slide-in-from-bottom-5 sm:slide-in-from-center duration-300 max-h-[90vh] sm:max-h-none overflow-y-auto">
            <Card className="shadow-2xl p-6 rounded-t-3xl sm:rounded-lg w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <CardTitle className="text-center mb-2 text-2xl sm:text-xl">
                Sign Up
              </CardTitle>
              <CardDescription className="text-center mb-6 text-sm sm:text-base">
                {selectedRole === "DRIVER"
                  ? "Create your Driver account to get started"
                  : "Create your Shipper account to get started"}
              </CardDescription>

              {/* Server Error Banner */}
              {serverError && (
                <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                  {serverError}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <div>
                  <Label
                    htmlFor="name"
                    className="text-[#1E3A8A] text-sm font-medium"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Enter your full name"
                    className="mt-2 h-10 sm:h-auto"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <Label
                    htmlFor="email"
                    className="text-[#1E3A8A] text-sm font-medium"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your@email.com"
                    inputMode="email"
                    className="mt-2 h-10 sm:h-auto"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-[#1E3A8A] text-sm font-medium"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="+234 (0) 123 456 7890"
                    inputMode="tel"
                    className="mt-2 h-10 sm:h-auto"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <Label
                    htmlFor="password"
                    className="text-[#1E3A8A] text-sm font-medium"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                    placeholder="Min. 6 characters"
                    className="mt-2 h-10 sm:h-auto"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Role Field - Hidden, set by button click */}
                <input type="hidden" {...register("role")} />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading || !selectedRole}
                  className={`w-full py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${
                    selectedRole === "DRIVER"
                      ? "bg-[#F97316] text-white hover:bg-orange-500 disabled:bg-orange-300"
                      : selectedRole === "CARGO_OWNER"
                        ? "bg-[#1E3A8A] text-white hover:bg-blue-900 disabled:bg-blue-300"
                        : "bg-slate-400 text-white cursor-not-allowed"
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Creating account…</span>
                    </span>
                  ) : (
                    "Sign Up"
                  )}
                </Button>

                {/* Terms & Conditions */}
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
                  By signing up, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="text-[#1E3A8A] hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-[#1E3A8A] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
