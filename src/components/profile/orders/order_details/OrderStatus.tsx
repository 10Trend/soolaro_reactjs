import Book from "@/components/icons/profile/Book"

const OrderStatus = () => {
    return (
        <section className="md:py-4 py-2 px-2 bg-[#F6F6F6] rounded-[8px] flex items-center gap-2">
            <Book />
            <div>
                <h3 className="text-[#3B3B3B] md:text-base text-sm font-medium">
                    Pending
                </h3>
                <p className="text-[#3B3B3B] md:text-sm text-[10px] font-medium">
                    on Sun, 3 Jan,2025
                </p>
            </div>
        </section>
    )
}

export default OrderStatus
