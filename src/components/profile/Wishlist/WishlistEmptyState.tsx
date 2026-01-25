import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { useTranslation } from "react-i18next";

const WhishlistEmptyState = () => {
  const { t } = useTranslation("profile");

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <Image
        src="/images/profile/wishlist_heart.gif"
        alt={t("wishlistEmptyStateAlt")}
        className="md:w-93.75 w-40 md:h-93.75 h-40"
      />
      <p className="text-[#3B3B3B] text-lg font-medium text-center">
        {t("wishlistEmptyText")}
      </p>

      <Link
        to="/explore"
        className="w-full h-14 bg-[#018884] rounded-4xl text-[#FEFEFE] text-lg font-bold flex items-center justify-center"
      >
        {t("exploreShop")}
      </Link>
    </section>
  );
};

export default WhishlistEmptyState;
