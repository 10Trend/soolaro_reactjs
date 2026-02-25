import BackArrow from "@/components/icons/explore/BackArrow"
import OrderStatus from "./OrderStatus"
import { Link } from "react-router-dom"
import OrderSummary from "./OrderSummary"

const OrderDetailsPage = () => {
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
            <OrderStatus />
            <OrderSummary />
        </div>
    )
}

export default OrderDetailsPage
