import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { useTranslation } from "react-i18next";

const AddressEmptyState = () => {
  const { t } = useTranslation("profile");

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <Image
        src="/images/profile/location.gif"
        alt={t("addressEmptyStateAlt")}
        className="md:w-93.75 w-40 md:h-93.75 h-40"
      />
      <p className="text-[#3B3B3B] text-lg font-medium text-center">
        {t("noAddressesYet")}
      </p>

      <Link
        to="/"
        className="w-full h-14 bg-[#018884] rounded-4xl text-[#FEFEFE] text-lg font-bold flex items-center justify-center"
      >
        {t("addNewAddress")}
      </Link>
    </section>
  );
};

export default AddressEmptyState;
