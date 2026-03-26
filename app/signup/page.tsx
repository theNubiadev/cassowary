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
import { FieldDescription } from "@/components/ui/field";
import { ArrowRight, Truck, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().min(1, "Phone is required"),
  role: z.enum(["Driver", "Cargo_Owner"] as const),
});

type SignupForm = z.infer<typeof signupSchema>;

export default function Signup() {
  const [selectedRole, setSelectedRole] = useState<
    "Driver" | "Cargo_Owner" | ""
  >("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupForm) => {
    console.log(data);
    // Handle signup logic here
  };

  const openModal = (role: "Driver" | "Cargo_Owner") => {
    setSelectedRole(role);
    setValue("role", role);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal on Escape key
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

      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How do you want to use Loadlink
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Choose the option that best describes you
            </p>
          </div>

          <div className="flex flex-col-2 gaps-8 align-center justify-center">
            <div className="px-6 text-center">
              <Card className="shadow-lg px-6 py-12">
                <CardTitle>Ship Goods</CardTitle>
                <CardDescription>
                  Find trucks to move your cargo safely
                </CardDescription>
                <Button
                  className="rounded-xl px-2 bg-[#1E3A8A] text-white hover:bg-blue-900"
                  onClick={() => openModal("Cargo_Owner")}
                >
                  Continue as Shipper
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>

            <div className="px-6 text-center">
              <Card className="shadow-lg px-6 py-12">
                <CardTitle>Drive a Truck</CardTitle>
                <CardDescription>Find delivery and earn money</CardDescription>
                <Button
                  className="rounded-xl px-2 bg-[#F97316] text-white hover:bg-orange-500"
                  onClick={() => openModal("Driver")}
                >
                  Continue as Driver <Truck className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
        <FieldDescription className="text-black text-center py-4">
          Dont have an Account{" "}
          <Link href="/signin" className="text-[#1E3A8A]">
            {" "}
            Signin
          </Link>
        </FieldDescription>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            // Close when clicking the backdrop
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative w-full max-w-md mx-4 animate-in fade-in zoom-in-95 duration-200">
            <Card className="shadow-2xl p-6">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <CardTitle className="text-center mb-4">Sign Up</CardTitle>
              <CardDescription className="text-center mb-6">
                {selectedRole === "Driver"
                  ? "Create your Driver account to get started"
                  : "Create your Shipper account to get started"}
              </CardDescription>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-[#1E3A8A]">
                    Name
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#1E3A8A]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="password" className="text-[#1E3A8A]">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#1E3A8A]">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="role" className="text-[#1E3A8A]">
                    Role
                  </Label>
                  <Select
                    value={selectedRole}
                    onValueChange={(value) => {
                      const roleValue = value as "Driver" | "Cargo_Owner";
                      setSelectedRole(roleValue);
                      setValue("role", roleValue);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Driver">Driver</SelectItem>
                      <SelectItem value="Cargo_Owner">Cargo Owner</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.role && (
                    <p className="text-red-500 text-sm">
                      {errors.role.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className={`w-full ${
                    selectedRole === "Driver"
                      ? "bg-[#F97316] text-white hover:bg-orange-500"
                      : selectedRole === "Cargo_Owner"
                        ? "bg-[#1E3A8A] text-white hover:bg-blue-900"
                        : "bg-slate-600 text-white hover:bg-slate-700"
                  }`}
                >
                  Sign Up
                </Button>
              </form>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
