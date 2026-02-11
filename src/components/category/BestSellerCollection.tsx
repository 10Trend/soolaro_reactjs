import { useMemo, useState, useEffect } from "react";
import Card from "../home/GlassCard";
import Filter from "../icons/explore/Filter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { getProducts, type Product } from "@/lib/api/products/products";
import { useQuery } from "@tanstack/react-query";
import ProductEmptyState from "../product_details/ProductEmptyState";
import { useTranslation } from "react-i18next";
import { Skeleton } from "../ui/skeleton";
import { DirhamIcon } from "../icons/checkout/DirhamIcon";

interface BestSellerCollectionProps {
  parentId: number;
  categoryName?: string;
}

const BestSellerCollection = ({
  parentId,
  categoryName,
}: BestSellerCollectionProps) => {
  const { t, i18n } = useTranslation("explore");
  const isRTL = i18n.language === "ar";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [tempMinPrice, setTempMinPrice] = useState(0);
  const [tempMaxPrice, setTempMaxPrice] = useState(10000);
  const [activeTab, setActiveTab] = useState("all");
  const [requestedPage, setRequestedPage] = useState(1);
  const [perPage,] = useState(15);
  const MIN = 0;
  const MAX = 10000;

  const { data: apiResponse, isLoading } = useQuery({
    queryKey: ["categoryProducts", parentId, requestedPage, perPage],
    queryFn: () =>
      getProducts({ 
        page: requestedPage,
        category_id: parentId,
        per_page: perPage
      }),
    enabled: !!parentId,
  });

  const data = apiResponse?.data;
  const meta = apiResponse?.meta;
  const links = apiResponse?.links;

  const filteredByPrice = useMemo(() => {
    if (!data) return [];
    return data.filter((product) => {
      const price = product.variants[0]?.final_price || 0;
      return price >= minPrice && price <= maxPrice;
    });
  }, [data, minPrice, maxPrice]);

  const sortedByLatest = useMemo(() => {
    if (!filteredByPrice) return [];
    return [...filteredByPrice].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
  }, [filteredByPrice]);

  const handleMinChange = (value: number) => {
    if (value <= tempMaxPrice) {
      setTempMinPrice(value);
    }
  };

  const handleMaxChange = (value: number) => {
    if (value >= tempMinPrice) {
      setTempMaxPrice(value);
    }
  };

  const resetFilter = () => {
    setTempMinPrice(MIN);
    setTempMaxPrice(MAX);
    setMinPrice(MIN);
    setMaxPrice(MAX);
  };

  const applyFilter = () => {
    setMinPrice(tempMinPrice);
    setMaxPrice(tempMaxPrice);
    setIsSidebarOpen(false);
  };

  const handlePageChange = (page: number) => {
    setRequestedPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isSidebarOpen) {
      setTempMinPrice(minPrice);
      setTempMaxPrice(maxPrice);
    }
  }, [isSidebarOpen, minPrice, maxPrice]);

  useEffect(() => {
    setRequestedPage(1);
  }, [minPrice, maxPrice, activeTab]);

  if (isLoading) {
    return (
      <section className="container md:py-17 py-8">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-4">
              <Skeleton className="w-full h-56 rounded-2xl" />
              <Skeleton className="h-4 w-3/4 rounded" />
              <Skeleton className="h-4 w-1/2 rounded" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  const renderPagination = () => {
    if (!meta || !links) return null;

    const totalPages = meta.last_page || 1;
    const currentPage = meta.current_page;
    
    if (totalPages <= 1 || (meta.total && meta.total <= perPage)) {
      return null;
    }

    const getPageNumbers = () => {
      const pages: (number | string)[] = [];
      const maxVisible = 5;

      if (totalPages <= maxVisible) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);

        if (currentPage > 3) {
          pages.push('...');
        }

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }

        if (currentPage < totalPages - 2) {
          pages.push('...');
        }

        if (totalPages > 1) {
          pages.push(totalPages);
        }
      }

      return pages;
    };

    return (
      <div className="flex justify-center items-center gap-2 mt-12">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={!links.prev}
          className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          {isRTL ? t("next") : t("previous")}
        </button>

        <div className="flex gap-2">
          {getPageNumbers().map((page, index) => (
            typeof page === 'number' ? (
              <button
                key={index}
                onClick={() => handlePageChange(page)}
                className={`min-w-[40px] h-10 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-[#018884] text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ) : (
              <span key={index} className="px-2 py-2 text-gray-400">
                {page}
              </span>
            )
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!links.next}
          className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          {isRTL ? t("previous") : t("next")}
        </button>
      </div>
    );
  };

  return (
    <section className="container md:py-17 py-8">
      <div className="flex justify-between">
        <h2 className="text-[#000000] md:text-[40px] text-base font-medium leading-[100%] px-12 md:px-8">
          {categoryName ? `${categoryName}` : "-"}
        </h2>

        <div
          className="md:w-34 w-27.5 md:h-14 h-12 md:bg-[#F6F6F6] bg-[#018884] rotate-90 flex items-center justify-center gap-2 cursor-pointer absolute -right-7 md:top-137.5 top-61.5"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Filter />
          <p className="md:text-[#3B3B3B] text-white text-lg font-semibold leading-[100%] rotate-180">
            {t("filter")}
          </p>
        </div>
      </div>

      <div className="md:mt-12 mt-6">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          <TabsList className="bg-transparent md:mb-17 mb-6 flex-wrap gap-4 px-10 md:px-0">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-[#018884] bg-[#F6F6F6] data-[state=active]:text-white text-[#3B3B3B] rounded-[100px] md:px-8 py-4"
            >
              {t("all")}
            </TabsTrigger>
            <TabsTrigger
              value="latest"
              className="data-[state=active]:bg-[#018884] bg-[#F6F6F6] data-[state=active]:text-white text-[#3B3B3B] rounded-[100px] md:px-8 py-4"
            >
              {t("latest_products")}
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="all"
            className="grid lg:grid-cols-3 grid-cols-2 gap-8"
          >
            {filteredByPrice.length > 0 ? (
              filteredByPrice.map((product: Product) => (
                <Card key={product.id} product={product} showHeart={true} />
              ))
            ) : (
              <ProductEmptyState />
            )}
          </TabsContent>

          <TabsContent
            value="latest"
            className="grid lg:grid-cols-3 grid-cols-2 gap-8"
          >
            {sortedByLatest.length > 0 ? (
              sortedByLatest.map((product: Product) => (
                <Card key={product.id} product={product} showHeart={true} />
              ))
            ) : (
              <div>
                <ProductEmptyState />
              </div>
            )}
          </TabsContent>
        </Tabs>

        {renderPagination()}
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
              <div className="absolute top-1/2 w-full h-1 bg-gray-300 rounded transform -translate-y-1/2 pointer-events-none"></div>
              <div
                className="absolute top-1/2 h-1 bg-[#018884] rounded -translate-y-1/2"
                style={{
                  left: `${((tempMinPrice - MIN) / (MAX - MIN)) * 100}%`,
                  width: `${((tempMaxPrice - tempMinPrice) / (MAX - MIN)) * 100}%`,
                }}
              />
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={tempMinPrice}
                onChange={(e) => handleMinChange(Number(e.target.value))}
                className="absolute w-full h-6 bg-transparent appearance-none price-range-slider"
                style={{ zIndex: tempMinPrice > (MIN + MAX) / 2 ? 5 : 3 }}
                dir={isRTL ? "rtl" : "ltr"}
              />
              <input
                type="range"
                min={MIN}
                max={MAX}
                value={tempMaxPrice}
                onChange={(e) => handleMaxChange(Number(e.target.value))}
                className="absolute w-full h-6 bg-transparent appearance-none price-range-slider"
                style={{ zIndex: tempMaxPrice > (MIN + MAX) / 2 ? 5 : 3 }}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>

            <div className="flex justify-between gap-4 mt-10">
              <div className="relative w-full">
                <input
                  type="number"
                  value={tempMinPrice}
                  onChange={(e) => handleMinChange(Number(e.target.value))}
                  className="rounded-xl w-full py-4 px-8 text-center bg-[#EDECEC] text-[#0B0B0B] text-base font-medium appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                />
                <div
                  className={`absolute ${isRTL ? "left-3" : "right-3"} top-1/2 -translate-y-1/2 pointer-events-none`}
                >
                  <DirhamIcon className="w-4 h-4 text-[#0B0B0B]" />
                </div>
              </div>
              <span className="flex items-center justify-center text-[#0B0B0B] text-2xl font-medium">
                :
              </span>
              <div className="relative w-full">
                <input
                  type="number"
                  value={tempMaxPrice}
                  onChange={(e) => handleMaxChange(Number(e.target.value))}
                  className="rounded-xl w-full py-4 px-8 text-center bg-[#EDECEC] text-[#0B0B0B] text-base font-medium appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                />
                <div
                  className={`absolute ${isRTL ? "left-3" : "right-3"} top-1/2 -translate-y-1/2 pointer-events-none`}
                >
                  <DirhamIcon className="w-4 h-4 text-[#0B0B0B]" />
                </div>
              </div>
            </div>
          </div>

          <button
            className="mt-6 w-full bg-[#018884] text-[#FEFEFE] py-4 text-lg rounded-4xl font-medium"
            onClick={applyFilter}
          >
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

export default BestSellerCollection;