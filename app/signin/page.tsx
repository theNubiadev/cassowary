"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import * as z from "zod";

// ─── Schema ──────────────────────────────────────────────────────────────────

const signinSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type SigninForm = z.infer<typeof signinSchema>;

// ─── Role-based redirect map ──────────────────────────────────────────────────

const ROLE_REDIRECT: Record<string, string> = {
  DRIVER: "/onboarding/driver",
  CARGO_OWNER: "/onboarding/shipper",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Signin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: SigninForm) => {
    setIsLoading(true);
    setServerError("");

    try {
      const result = await signIn("credentials", {
        redirect: false, // We handle redirect manually for role-based routing
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        // Map NextAuth error strings to user-friendly messages
        const errorMap: Record<string, string> = {
          "No account found with this email":
            "No account found with this email.",
          "Incorrect password": "Incorrect password. Please try again.",
          CredentialsSignin: "Invalid email or password.",
        };
        setServerError(
          errorMap[result.error] ?? "Sign-in failed. Please try again.",
        );
        return;
      }

      // Fetch the session to read the user's role for redirect
      const sessionRes = await fetch("/api/auth/session");
      const session = await sessionRes.json();
      const role = session?.user?.role as string | undefined;

      router.push(
        role && ROLE_REDIRECT[role] ? ROLE_REDIRECT[role] : "/dashboard",
      );
    } catch {
      setServerError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1E3A8A]">
              Sign in to your Loadlink account
            </h2>
            <p className="text-gray-500 text-lg">
              Welcome back — enter your details below
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-md py-10 px-6 shadow-lg">
              <CardTitle className="text-center mb-2">Sign In</CardTitle>
              <CardDescription className="text-center mb-6">
                Enter your email and password to continue
              </CardDescription>

              {/* Server error banner */}
              {serverError && (
                <div className="mb-4 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                  {serverError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-[#1E3A8A]">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
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
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#1E3A8A] text-white hover:bg-blue-900"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Signing in…
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>

              <p className="text-black text-center text-sm mt-6">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-[#1E3A8A] font-medium underline underline-offset-2 hover:opacity-80"
                >
                  Sign up
                </Link>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
