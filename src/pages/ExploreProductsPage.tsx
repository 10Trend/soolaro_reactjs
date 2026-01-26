import { useState } from "react";
import Card from "@/components/home/GlassCard";
import Filter from "@/components/icons/explore/Filter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BackArrow from "@/components/icons/explore/BackArrow";
import { Link } from "react-router-dom";
import Search from "@/components/icons/header/Search";
import { useTranslation } from "react-i18next";
import { DirhamIcon } from "@/components/icons/checkout/DirhamIcon";

const ExploreProductsPage = () => {
  const { t } = useTranslation("explore");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(200);
  const [maxPrice, setMaxPrice] = useState(900);
  const MIN = 100;
  const MAX = 1000;

  const handleMinChange = (value: number) => {
    if (value <= maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (value: number) => {
    if (value >= minPrice) setMaxPrice(value);
  };

  const resetFilter = () => {
    setMinPrice(MIN);
    setMaxPrice(MAX);
  };

  return (
    <section className="container md:py-8 pb-8 relative">
      <div className="flex md:flex-row flex-col justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="w-12 h-12 rounded-full bg-[#F6F6F6] md:hidden flex items-center justify-center"
          >
            <BackArrow />
          </Link>
          <h2 className="text-[#000000] md:text-[40px] text-base font-semibold leading-[100%]">
            {t("explore_products")}
          </h2>
        </div>

        <div className="flex gap-3">
          <div className="relative md:hidden block">
            <input
              type="text"
              className="w-55.25 h-12 border border-[#DEDDDD] rounded-4xl px-8 placeholder:text-[#3B3B3B]"
              placeholder={t("search")}
            />
            <div className="absolute top-1">
              <Search />
            </div>
          </div>
          <div
            className="group md:w-34 w-27.5 md:h-14 h-12 md:bg-[#F6F6F6] bg-[#018884] hover:bg-[#018884] md:rotate-90 flex items-center justify-center gap-2 cursor-pointer md:rounded-none rounded-4xl transition-colors duration-300"
            onClick={() => setIsSidebarOpen(true)}
          >
            <div className="group-hover:hidden transition-all duration-300">
              <Filter />
            </div>

            <img
              src="/images/options.gif"
              alt="options"
              className="w-6 h-6 hidden group-hover:block transition-all duration-300"
            />

            <p
              className="md:text-[#3B3B3B] text-white group-hover:text-white text-lg font-semibold leading-[100%] md:rotate-180 transition-colors duration-300"
            >
              {t("filter")}
            </p>
          </div>
        </div>
      </div>

      <div className="md:mt-12 mt-6">
        <Tabs defaultValue="all">
          <TabsList className="bg-transparent mb-17 flex-nowrap overflow-x-auto w-full justify-start gap-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-[#018884] bg-[#F6F6F6] data-[state=active]:text-white text-[#3B3B3B] rounded-[100px] px-6 py-4 shrink-0 flex-none transition-all duration-200"
            >
              {t("all")}
            </TabsTrigger>
            <TabsTrigger
              value="best"
              className="data-[state=active]:bg-[#018884] bg-[#F6F6F6] data-[state=active]:text-white text-[#3B3B3B] rounded-[100px] px-6 py-4 shrink-0 flex-none transition-all duration-200"
            >
              {t("best_seller")}
            </TabsTrigger>
            <TabsTrigger
              value="new"
              className="data-[state=active]:bg-[#018884] bg-[#F6F6F6] data-[state=active]:text-white text-[#3B3B3B] rounded-[100px] px-6 py-4 shrink-0 flex-none transition-all duration-200"
            >
              {t("new_arrival")}
            </TabsTrigger>
            <TabsTrigger
              value="summer"
              className="data-[state=active]:bg-[#018884] bg-[#F6F6F6] data-[state=active]:text-white text-[#3B3B3B] rounded-[100px] px-6 py-4 shrink-0 flex-none transition-all duration-200"
            >
              {t("summer_collection")}
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="all"
            className="grid lg:grid-cols-3 grid-cols-2 gap-8"
          >
            <Card image="/images/home/glass1.png" height="135" />
            <Card image="/images/home/glass2.png" height="135" />
            <Card image="/images/home/glass3.png" height="135" />
            <Card image="/images/home/glass1.png" height="135" />
          </TabsContent>
          <TabsContent
            value="best"
            className="grid lg:grid-cols-3 grid-cols-2 gap-8"
          >
            <Card image="/images/home/glass3.png" height="135" />
            <Card image="/images/home/glass1.png" height="135" />
            <Card image="/images/home/glass2.png" height="135" />
            <Card image="/images/home/glass3.png" height="135" />
          </TabsContent>
        </Tabs>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-85.75 bg-white shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } z-50 flex flex-col`}
      >
        <div className="p-8 flex flex-col gap-4">
          <h3 className="text-2xl font-medium">{t("filter_by_price")}</h3>
          <p className="text-[#3B3B3B] text-sm font-medium">
            {t("set_prices_range", { min: MIN, max: MAX })}
          </p>

          <div className="mt-6">
            <div className="relative h-10">
              <div className="absolute top-1/2 w-full h-1 bg-gray-300 rounded transform -translate-y-1/2"></div>
              <div
                className="absolute top-1/2 h-1 bg-[#018884] rounded transform -translate-y-1/2"
                style={{
                  left: `${((minPrice - MIN) / (MAX - MIN)) * 100}%`,
                  width: `${((maxPrice - minPrice) / (MAX - MIN)) * 100}%`,
                }}
              />
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={minPrice}
                onChange={(e) => handleMinChange(Number(e.target.value))}
                className="absolute w-full h-10 bg-transparent pointer-events-none appearance-none"
                style={{ zIndex: 3 }}
              />
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={maxPrice}
                onChange={(e) => handleMaxChange(Number(e.target.value))}
                className="absolute w-full h-10 bg-transparent pointer-events-none appearance-none"
                style={{ zIndex: 4 }}
              />
            </div>

            <div className="flex justify-between gap-4 mt-10">
              <div className="relative w-full">
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => handleMinChange(Number(e.target.value))}
                  className="rounded-xl w-full py-4 pl-3 pr-8 text-center bg-[#EDECEC] text-[#0B0B0B] text-base font-medium appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <DirhamIcon className="w-4 h-4 text-[#0B0B0B]" />
                </div>
              </div>
              <span className="flex items-center justify-center text-[#0B0B0B] text-2xl font-medium">
                :
              </span>
              <div className="relative w-full">
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => handleMaxChange(Number(e.target.value))}
                  className="rounded-xl w-full py-4 pl-3 pr-8 text-center bg-[#EDECEC] text-[#0B0B0B] text-base font-medium appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <DirhamIcon className="w-4 h-4 text-[#0B0B0B]" />
                </div>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full bg-[#018884] text-[#FEFEFE] py-4 text-lg rounded-4xl font-medium">
            {t("apply")}
          </button>
          <button
            className="w-full text-[#018884] font-semibold text-lg mt-7"
            onClick={resetFilter}
          >
            {t("reset_filter")}
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[#000000B2] z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </section>
  );
};

export default ExploreProductsPage;
