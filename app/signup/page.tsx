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
import { ArrowRight, Truck } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().min(1, "Phone is required"),
  role: z.enum(["Driver", "Cargo_Owner"], {
    required_error: "Please select a role",
  }),
});

type SignupForm = z.infer<typeof signupSchema>;

export default function Signup() {
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
            <div className="px-6  text-center">
              <Card className="shadow-lg px-6 py-12">
                <CardTitle>Ship Goods</CardTitle>
                <CardDescription>
                  Find trucks to move your cargo safely
                </CardDescription>
                <Button className="rounded-xl bg-[#1E3A8A] px-2 ">
                  Continue as Shipper
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>

            <div className="px-6 text-center">
              <Card className="shadow-lg px-6 py-12">
                <CardTitle>Drive a Truck</CardTitle>
                <CardDescription>Find deliverly and earn money</CardDescription>
                <Button className="bg-[#F97316] rounded-xl px-2">
                  Continue as Driver <Truck className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 px-6">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg p-6">
            <CardTitle className="text-center mb-4">Sign Up</CardTitle>
            <CardDescription className="text-center mb-6">
              Create your account to get started
            </CardDescription>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
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
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="role">Role</Label>
                <Select
                  onValueChange={(value) =>
                    setValue("role", value as "Driver" | "Cargo_Owner")
                  }
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
                  <p className="text-red-500 text-sm">{errors.role.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}
