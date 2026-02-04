import CartItem from "./CartItem";
import { useTranslation } from "react-i18next";
import { useCartStore } from "@/store/useCartStore";
import { Loader2 } from "lucide-react";

const CartListing = () => {
  const { t } = useTranslation("cart");
  const { cart, isLoading } = useCartStore();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-[#018884]" />
      </div>
    );
  }

  const items = cart?.items || [];

  return (
    <div className="w-full">
      {/* Header Row - Hidden on Mobile */}
      <div className="hidden md:grid grid-cols-12 gap-4 items-center border-b border-[#EAEAEA] pb-4 mb-2">
        <div className="col-span-6 text-[#003D3B] font-bold text-lg pl-2">
          {t("product")}
        </div>
        <div className="col-span-3 text-[#0B0B0B] font-bold text-lg text-center flex justify-center">
          <span className="w-[152px] text-left">{t("quantity")}</span>
        </div>
        <div className="col-span-3 text-right text-[#0B0B0B] font-bold text-lg pr-2">
          {t("total")}
        </div>
      </div>

      {/* Cart Items List */}
      <div className="flex flex-col">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartListing;
