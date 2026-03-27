"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const user = session?.user;
  return (
    <header className="bg-[#F3F4F6] w-full shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-[#1E3A8A] text-3xl font-bold font-inter tracking-tight">
              LoadLink
            </h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#how-it-works"
            className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors duration-200"
          >
            How It Works
          </Link>

          <Link
            href="#for-shippers"
            className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors duration-200"
          >
            For Shippers
          </Link>

          <Link
            href="#for-drivers"
            className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors duration-200"
          >
            For Drivers
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        {/* <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/signin"
            className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors"
          >
            Sign In
          </Link>

          <Link href="/signup">
            <Button className="bg-[#1E3A8A] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 shadow-md hover:shadow-lg">
              Sign Up
            </Button>
          </Link>
        </div> */}

        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {user ? (
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                {user.image ? (
                  <img
                    src={user.image}
                    // alt={user.name || "User"}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-bold text-gray-500 capitalize">
                    {/* {user.name?.charAt(0) ?? "U"} */}
                  </span>
                )}
              </div>

              {/* Name + Role */}
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-sm font-semibold text-[#1E3A8A] capitalize">
                  {user.name}
                </span>
                <span className="text-xs text-gray-500">
                  {user.role === "DRIVER" ? "Driver" : "Cargo Owner"}
                </span>
              </div>

              {/* Dashboard */}
              {/* <Link
        href={
          user.role === "DRIVER"
            ? "/dashboard/driver"
            : "/dashboard/shipper"
        }
      >
        <Button variant="outline" className="text-xs">
          Dashboard
        </Button>
        
      </Link> */}

              {/* Logout */}
              {/* <Button
        onClick={() => signOut()}
        className="bg-red-500 hover:bg-red-600 text-white text-xs"
      >
        Logout
      </Button> */}
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors"
              >
                Sign In
              </Link>

              <Link href="/signup">
                <Button className="bg-[#1E3A8A] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-900">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1E3A8A] p-2 rounded-lg hover:bg-gray-200 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F3F4F6] border-t border-gray-200 shadow-sm">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors"
            >
              How It Works
            </Link>

            <Link
              href="#for-shippers"
              onClick={() => setIsOpen(false)}
              className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors"
            >
              For Shippers
            </Link>

            <Link
              href="#for-drivers"
              onClick={() => setIsOpen(false)}
              className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors"
            >
              For Drivers
            </Link>

            <hr className="border-gray-200" />

            <Link
              href="/signin"
              onClick={() => setIsOpen(false)}
              className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors"
            >
              Sign In
            </Link>

            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-[#1E3A8A] text-white py-2.5 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 shadow-md hover:shadow-lg">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
