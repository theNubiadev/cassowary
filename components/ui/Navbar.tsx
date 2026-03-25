import { Button } from "./button";

export default function Navbar() {
  return (
    <header className="bg-[#F3F4F6] w-full shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-[#1E3A8A] text-3xl font-bold  font-inter tracking-tight">
            LoadLink
          </h1>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#how-it-works"
            className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors duration-200"
          >
            How It Works
          </a>
          <a
            href="#for-shippers"
            className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors duration-200"
          >
            For Shippers
          </a>
          <a
            href="#for-drivers"
            className="text-[#1E3A8A] font-medium hover:text-blue-700 transition-colors duration-200"
          >
            For Drivers
          </a>
        </div>

        {/* Signup Button */}
        <div className="flex-shrink-0">
          <Button
            variant="default"
            className="bg-[#1E3A8A] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
}
