import { Button } from "./ui/button";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="bg-[#F3F4F6] w-full shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-[#1E3A8A] text-3xl font-bold  font-inter tracking-tight">
              LoadLink
            </h1>
          </Link>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href=""
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

        {/* Signup Button */}
        <div className="flex-shrink-0">
          <Link href="/signin" className="text-[#1E3A8A] pr-2">
            Signin
          </Link>

          <Link href="/signup">
            <Button
              variant="default"
              className="bg-[#1E3A8A] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
