import { useState } from "react";
import MobileBackHeader from "../components/general/MobileBackHeader";
import { PhoneInput, type PhoneValue } from "../components/ui/PhoneInput";
import BreadCrumbs from "../components/general/BreadCrumbs";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [phone, setPhone] = useState<PhoneValue>({ code: "AE", number: "" });

  const breadcrumbItems = [
    { nameEn: "Home", nameAr: "الرئيسية", Link: "/" },
    { nameEn: "Cart", nameAr: "السلة", Link: "/cart" },
    { nameEn: "Checkout", nameAr: "الدفع" },
  ];

  return (
    <div className="min-h-screen pb-20">
      <BreadCrumbs items={breadcrumbItems} hideOnMobile={true} />

      <div className="container py-6 md:py-10">
        <MobileBackHeader title="Checkout" />

        <h1 className="hidden md:block text-3xl md:text-4xl font-bold mb-8 text-[#0B0B0B]">
          Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Form Section */}
          <div className="flex-1 w-full bg-white p-6 md:p-8 rounded-[24px] border border-[#EAEAEA] shadow-sm">
            <h2 className="text-xl font-semibold text-[#0B0B0B] mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#018884] text-white flex items-center justify-center text-sm">
                1
              </span>
              Contact Information
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-[#0B0B0B] text-base font-medium mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-12 px-4 rounded-md border border-[#F0F0F0] bg-background text-foreground focus:outline-none focus:border-[#018884]/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#0B0B0B] text-base font-medium mb-3">
                  Phone Number
                </label>
                <PhoneInput value={phone} onChange={setPhone} radius="md" />
              </div>

              <div>
                <label className="block text-[#0B0B0B] text-base font-medium mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-4 rounded-md border border-[#F0F0F0] bg-background text-foreground focus:outline-none focus:border-[#018884]/50 transition-colors"
                />
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#EAEAEA]">
              <h2 className="text-xl font-semibold text-[#0B0B0B] mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#018884] text-white flex items-center justify-center text-sm">
                  2
                </span>
                Shipping Address
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-[#0B0B0B] text-base font-medium mb-3">
                    Address
                  </label>
                  <textarea
                    placeholder="Enter your full address"
                    className="w-full h-32 p-4 rounded-md border border-[#F0F0F0] bg-background text-foreground focus:outline-none focus:border-[#018884]/50 transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[380px] shrink-0 sticky top-4">
            <div className="bg-white p-6 rounded-[24px] border border-[#EAEAEA] shadow-sm">
              <h3 className="text-xl font-semibold text-[#0B0B0B] mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-[#666]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#0B0B0B]">AED 269.00</span>
                </div>
                <div className="flex justify-between items-center text-[#666]">
                  <span>Shipping</span>
                  <span className="font-medium text-[#0B0B0B]">AED 25.00</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#EAEAEA] mb-6"></div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-[#0B0B0B] text-lg font-bold">Total</span>
                <span className="text-[#018884] text-2xl font-bold">
                  AED 294.00
                </span>
              </div>

              <button className="w-full bg-[#018884] hover:bg-[#006F6C] text-white text-lg font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                Place Order
              </button>

              <p className="text-xs text-[#888] text-center mt-4">
                By placing an order, you agree to our{" "}
                <Link to="/terms" className="underline hover:text-[#018884]">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
