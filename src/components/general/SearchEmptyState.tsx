import { Image } from "@/components/ui/image";
import { useTranslation } from "react-i18next";

const SearchEmptyState = () => {
  const { t } = useTranslation("header");
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Image src="/images/home/search.gif" alt="search" className="w-48 h-48" />
      <p className="text-[#3B3B3B] text-lg font-medium leading-[100%] text-center">
        {t('type_keyword')}
      </p>
    </section>
  );
};

export default SearchEmptyState;
