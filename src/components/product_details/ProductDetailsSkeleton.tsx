import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <section className="w-full md:max-w-[1280px] md:mx-auto px-4">
      <Skeleton className="h-4 w-40 mb-6" />

      <div className="md:my-10 flex lg:flex-row flex-col gap-8">
        <div className="w-full md:h-[523px] h-[375px] rounded-2xl bg-muted flex items-center justify-center">
          <Skeleton className="w-full h-full rounded-2xl" />
        </div>

        <div className="w-full space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-8 w-24" />
            </div>
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>

          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton
                key={i}
                className="md:w-[133px] md:h-[133px] w-[73px] h-[73px] rounded-xl"
              />
            ))}
          </div>

          <div className="flex gap-6">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-28" />
          </div>

          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="w-6 h-6 rounded-full" />
            ))}
          </div>

          <Skeleton className="h-14 w-full rounded-full" />
          <Skeleton className="h-14 w-full rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;
