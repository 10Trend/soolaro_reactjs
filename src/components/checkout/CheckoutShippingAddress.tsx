import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface CheckoutShippingAddressProps {
  formData: {
    country: string;
    emirate: string;
    area: string;
    street: string;
    floorNo: string;
    apartmentNo: string;
    orderNote: string;
  };
  onChange: (field: string, value: string) => void;
}

export const CheckoutShippingAddress = ({
  formData,
  onChange,
}: CheckoutShippingAddressProps) => {
  const { t } = useTranslation("checkout");

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showEmirateDropdown, setShowEmirateDropdown] = useState(false);

  const countries = [
    t("countries.uae"),
    t("countries.sa"),
    t("countries.kw"),
    t("countries.qa"),
    t("countries.bh"),
    t("countries.om"),
  ];
  const emirates = [
    t("emirates.dubai"),
    t("emirates.abudhabi"),
    t("emirates.sharjah"),
    t("emirates.ajman"),
    t("emirates.rak"),
    t("emirates.fujairah"),
    t("emirates.uaq"),
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Country and Emirate Row */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="flex-1 flex flex-col gap-3">
          <label className="text-[#0B0B0B] text-sm md:text-base font-semibold">
            {t("country")}
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full h-12 md:h-14 border border-[#DEDDDD] rounded-[20px] px-4 text-left flex items-center justify-between text-sm md:text-base hover:border-[#018884] focus:outline-none focus:border-[#018884] transition-colors"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
            >
              <span
                className={
                  formData.country ? "text-[#0B0B0B]" : "text-[#3B3B3B]"
                }
              >
                {formData.country || t("countryPlaceholder")}
              </span>
              <ChevronDown className="w-5 h-5" />
            </button>
            {showCountryDropdown && (
              <div className="absolute z-10 w-full mt-2 bg-white border rounded-[20px] shadow-lg">
                {countries.map((country) => (
                  <button
                    key={country}
                    type="button"
                    className="w-full px-4 py-3 text-left hover:bg-[#F5FAFA] text-sm md:text-base"
                    onClick={() => {
                      onChange("country", country);
                      setShowCountryDropdown(false);
                    }}
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <label className="text-[#0B0B0B] text-sm md:text-base font-semibold">
            {t("emirate")}
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full h-12 md:h-14 border border-[#DEDDDD] rounded-[20px] px-4 text-left flex items-center justify-between text-sm md:text-base hover:border-[#018884] focus:outline-none focus:border-[#018884] transition-colors"
              onClick={() => setShowEmirateDropdown(!showEmirateDropdown)}
            >
              <span
                className={
                  formData.emirate ? "text-[#0B0B0B]" : "text-[#3B3B3B]"
                }
              >
                {formData.emirate || t("emiratePlaceholder")}
              </span>
              <ChevronDown className="w-5 h-5" />
            </button>
            {showEmirateDropdown && (
              <div className="absolute z-10 w-full mt-2 bg-white border rounded-[20px] shadow-lg">
                {emirates.map((emirate) => (
                  <button
                    key={emirate}
                    type="button"
                    className="w-full px-4 py-3 text-left hover:bg-[#F5FAFA]"
                    onClick={() => {
                      onChange("emirate", emirate);
                      setShowEmirateDropdown(false);
                    }}
                  >
                    {emirate}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Area and Street Row */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="flex-1 flex flex-col gap-3">
          <label className="text-[#0B0B0B] text-sm md:text-base font-semibold">
            {t("area")}
          </label>
          <input
            type="text"
            className="w-full h-12 md:h-14 border border-[#DEDDDD] rounded-[20px] px-4 text-sm md:text-base hover:border-[#018884] focus:outline-none focus:border-[#018884] transition-colors"
            placeholder={t("areaPlaceholder")}
            value={formData.area}
            onChange={(e) => onChange("area", e.target.value)}
          />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <label className="text-[#0B0B0B] text-sm md:text-base font-semibold">
            {t("street")}
          </label>
          <input
            type="text"
            className="w-full h-12 md:h-14 border border-[#DEDDDD] rounded-[20px] px-4 text-sm md:text-base hover:border-[#018884] focus:outline-none focus:border-[#018884] transition-colors"
            placeholder={t("streetPlaceholder")}
            value={formData.street}
            onChange={(e) => onChange("street", e.target.value)}
          />
        </div>
      </div>

      {/* Floor No. and Apartment No. Row */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="flex-1 flex flex-col gap-3">
          <label className="text-[#0B0B0B] text-sm md:text-base font-semibold">
            {t("floorNo")}
          </label>
          <input
            type="text"
            className="w-full h-12 md:h-14 border border-[#DEDDDD] rounded-[20px] px-4 text-sm md:text-base hover:border-[#018884] focus:outline-none focus:border-[#018884] transition-colors"
            placeholder={t("floorNoPlaceholder")}
            value={formData.floorNo}
            onChange={(e) => onChange("floorNo", e.target.value)}
          />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <label className="text-[#0B0B0B] text-sm md:text-base font-semibold">
            {t("apartmentNo")}
          </label>
          <input
            type="text"
            className="w-full h-12 md:h-14 border border-[#DEDDDD] rounded-[20px] px-4 text-sm md:text-base hover:border-[#018884] focus:outline-none focus:border-[#018884] transition-colors"
            placeholder={t("apartmentNoPlaceholder")}
            value={formData.apartmentNo}
            onChange={(e) => onChange("apartmentNo", e.target.value)}
          />
        </div>
      </div>

      {/* Order Note */}
      <div className="flex flex-col gap-3">
        <label className="text-[#0B0B0B] text-sm md:text-base font-semibold">
          {t("orderNote")}
        </label>
        <textarea
          className="w-full h-32 md:h-[173px] border border-[#DEDDDD] rounded-[20px] px-4 py-3 text-sm md:text-base hover:border-[#018884] focus:outline-none focus:border-[#018884] transition-colors resize-none"
          placeholder={t("orderNotePlaceholder")}
          value={formData.orderNote}
          onChange={(e) => onChange("orderNote", e.target.value)}
        />
      </div>
    </div>
  );
};
