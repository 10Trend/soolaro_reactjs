import Book from "@/components/icons/profile/Book";
import type { Order } from "@/lib/api/profile/singleOrder";

interface Props {
    order: Order;
}

const OrderStatus = ({ order }: Props) => {
    return (
        <section className="md:py-4 py-2 px-2 bg-[#F6F6F6] rounded-[8px] flex items-center gap-2">
            <Book />
            <div>
                <h3 className="text-[#3B3B3B] md:text-base text-sm font-medium capitalize">
                    {order.status}
                </h3>

                {order.delivered_at && (
                    <p className="text-[#3B3B3B] md:text-sm text-[10px] font-medium">
                        on {new Date(order.delivered_at).toDateString()}
                    </p>
                )}
            </div>
        </section>
    )
}

export default OrderStatus
