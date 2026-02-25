import BackArrow from "@/components/icons/explore/BackArrow";
import OrderStatus from "./OrderStatus"
import { Link, useParams } from "react-router-dom"
import OrderSummary from "./OrderSummary"
import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "@/lib/api/profile/singleOrder";
import { Skeleton } from "@/components/ui/skeleton";

const OrderDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    const {
        data: order,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["order", id],
        queryFn: () => getOrderById(Number(id!)),
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <div className="space-y-6 py-6">
                <div className="md:hidden flex items-center gap-3">
                    <Skeleton className="w-12 h-12 rounded-full" />
                    <Skeleton className="h-5 w-32" />
                </div>
                <div className="flex items-center gap-3 bg-[#F6F6F6] p-4 rounded-[8px]">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-40" />
                    </div>
                </div>
                {[1, 2].map((item) => (
                    <div
                        key={item}
                        className="flex gap-4 p-4 border rounded-[20px]"
                    >
                        <Skeleton className="w-[100px] h-[100px] rounded-[8px]" />

                        <div className="flex-1 space-y-3">
                            <Skeleton className="h-3 w-20" />
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                    </div>
                ))}
                <div className="p-4 border rounded-[20px] space-y-4">
                    <Skeleton className="h-5 w-32" />

                    <div className="flex justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-16" />
                    </div>

                    <div className="flex justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-16" />
                    </div>

                    <div className="flex justify-between pt-4">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-5 w-20" />
                    </div>
                </div>
                <div className="p-4 border rounded-[20px] space-y-3">
                    <Skeleton className="h-5 w-40" />
                    <Skeleton className="h-4 w-full" />
                </div>
                <div className="p-4 border rounded-[20px] space-y-3">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-40" />
                </div>
            </div>
        );
    }

    if (isError || !order) {
        return (
            <div className="py-20 text-center text-red-500 font-semibold">
                Failed to load order.
            </div>
        );
    }

    return (
        <div>
            <div className="md:hidden flex items-center gap-3 py-6">
                <Link to='/' className="w-12 h-12 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <BackArrow />
                </Link>
                <p className="text-[#0B0B0B] text-base font-semibold">
                    Order Details
                </p>
            </div>
            <OrderStatus order={order} />
            <OrderSummary order={order} />
        </div>
    )
}

export default OrderDetailsPage
