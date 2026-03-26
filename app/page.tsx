import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import {
  Ship,
  LocationEdit,
  MarsStroke,
  Banknote,
  Truck,
  ArrowRight,
  CheckCircle,
  Package,
} from "lucide-react";
import Hero from "@/public/hero.jpg";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#1E3A8A] leading-tight mb-6">
                Move Cargo Across Cities Easily
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Loadlink connects businesses and individuals with trusted truck
                owners to safe and reliable freight transportation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/signup">
                  <Button className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors flex items-center">
                    Ship a Load
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-[#F97316] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center">
                    Find Delivery Jobs
                    <Truck className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#1E3A8A] w-5 h-5 flex-shrink-0" />
                  <span className="text-[#1E3A8A] font-semibold">
                    Verified Drivers
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#1E3A8A] w-5 h-5 flex-shrink-0" />
                  <span className="text-[#1E3A8A] font-semibold">
                    Transparent Pricing
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#1E3A8A] w-5 h-5 flex-shrink-0" />
                  <span className="text-[#1E3A8A] font-semibold">
                    Real-Time Tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#1E3A8A] w-5 h-5 flex-shrink-0" />
                  <span className="text-[#1E3A8A] font-semibold">
                    Easy Payment
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#F3F4F6]  h-96 flex items-center justify-center">
              <Image src={Hero} alt="Hero Image" width={600} height={400} />
            </div>
          </div>
        </section>
      </main>
      {/* Problems Section */}
      <section className="bg-[#F3F4F6] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">
              Moving Goods Should not be difficult
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Finding reliable trucks to move cargo can be stressful and
              time-consuming. LoadLink makes it simple by connecting you with
              verified truck owners ready to transport your goods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <Ship className="text-[#1E3A8A] w-6 h-6" />
                <h3 className="text-[#1E3A8A] font-bold text-lg mb-2">
                  Hard to Find Trucks
                </h3>
                <p className="text-gray-600">
                  Difficulty locating available and reliable truck drivers when
                  you need them
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <Banknote className="text-[#F97316] w-6 h-6" />
                <h3 className="text-[#1E3A8A] font-bold text-lg mb-2">
                  Price Uncertainty
                </h3>
                <p className="text-gray-600">
                  Unclear and fluctuating pricing makes budgeting and planning
                  difficult
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <LocationEdit className="text-green-600 w-6 h-6" />
                <h3 className="text-[#1E3A8A] font-bold text-lg mb-2">
                  No Real-Time Tracking
                </h3>
                <p className="text-gray-600">
                  Lack of visibility into shipment location and delivery
                  progress
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">
              How LoadLink Works
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Four simple steps to get your cargo delivered safely and on time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center font-bold mb-3">
                  1
                </div>

                <h3 className="text-[#1E3A8A] font-bold text-lg">
                  Post Your Shipment
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 flex items-start space-x-2">
                  <Package className="text-[#1E3A8A] flex-shrink-0 mt-1 w-4 h-4" />
                  <span>Provide shipment details and destination</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-[#F97316] text-white rounded-full flex items-center justify-center font-bold mb-3">
                  2
                </div>
                <h3 className="text-[#1E3A8A] font-bold text-lg">
                  Get Matched
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 flex items-start space-x-2">
                  <Truck className="text-[#F97316] flex-shrink-0 mt-1 w-4 h-4" />
                  <span>Get matched with preferred truck type</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mb-3">
                  3
                </div>
                <h3 className="text-[#1E3A8A] font-bold text-lg">
                  Make Payment
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 flex items-start space-x-2">
                  <Banknote className="text-green-600 flex-shrink-0 mt-1 w-4 h-4" />
                  <span>Secure payment via Interswitch</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-3">
                  4
                </div>
                <h3 className="text-[#1E3A8A] font-bold text-lg">
                  Track Delivery
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 flex items-start space-x-2">
                  <LocationEdit className="text-purple-600 flex-shrink-0 mt-1 w-4 h-4" />
                  <span>Real-time tracking of your shipment</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose LoadLink */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">
              Why Choose LoadLink?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Experience the difference with LoadLink's superior logistics
              solution
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <h3 className="text-xl font-bold text-#[#F97316] mb-2 flex">
                  <Truck className="text-blue-600 w-6 h-6" />
                  Verified Drivers
                </h3>
                <p className="text-gray-600">
                  Get matched with verified truck owners for your shipment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <h3 className="text-xl font-bold text-[#F97316] mb-2 flex">
                  <Banknote className="text-green-600 w-6 h-6" />
                  Transparent Pricing
                </h3>
                <p className="text-gray-600">
                  Make secure payments via Interswitch with ease.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <h3 className="text-xl font-bold text-[#F97316] mb-2 flex">
                  <Banknote className="text-green-600 w-6 h-6" /> Real-time
                  Tracking
                </h3>
                <p className="text-gray-600">
                  Make secure payments via Interswitch with ease.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <h3 className="text-xl font-bold text-[#F97316] mb-2 flex">
                  <LocationEdit className="text-purple-600 w-6 h-6" />
                  Secure Payment
                </h3>
                <p className="text-gray-600">
                  Track your shipment in real-time from pickup to delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#1E3A8A]">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-white text-center">
              Start Moving Your Cargo Today
            </h2>

            <div className="flex justify-center space-x-4 mt-8">
              <Button className="bg-white text-[#F97316]">Ship a Load</Button>
              <Button className="bg-[#F97316] text-white">
                Become a Driver
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
