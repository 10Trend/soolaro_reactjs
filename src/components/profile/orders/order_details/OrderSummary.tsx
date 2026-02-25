const OrderSummary = () => {
    return (
        <section className="md:mt-8 mt-4">
            <h2 className="text-[#3B3B3B] md:text-2xl text-lg font-semibold">
                Item Summary
            </h2>

            {/* Item summary */}
            <div className="md:mt-8 mt-6 p-3 border border-[#DEDDDD] rounded-[20px] flex gap-4">
                <div className="md:w-[126px] w-[86px] md:h-[126px] h-[86px] bg-[#F6F6F6] rounded-[8px]">
                    <img
                        src="/images/home/glass1.png"
                        alt="glass"
                    />
                </div>

                <div>
                    <p className="text-[#0B0B0B] md:text-sm text-[8px] font-normal">
                        ID: <span>#123</span>
                    </p>
                    <h3 className="text-[#0B0B0B] md:text-lg text-sm font-medium md:mt-2">
                        Liwa-Black
                    </h3>
                    <div className="flex items-center md:mt-2">
                        <h3 className="text-[#0B0B0B] md:text-xl text-base font-semibold">
                            269.00
                        </h3>
                        <img
                            src="/images/currency.png"
                            alt="currency"
                            className="w-9 h-9"
                        />
                    </div>
                    <div className="md:mt-2 flex items-center gap-1">
                        <h3 className="text-[#0B0B0B] md:text-base text-xs font-semibold">
                            Color:
                        </h3>
                        <div className="w-6 h-6 bg-red-500 rounded-full">

                        </div>
                    </div>

                </div>
            </div>

            {/* Delivered */}
            <div className="md:mt-8 mt-6 p-3 border border-[#DEDDDD] rounded-[20px]">
                <p className="text-[#0B0B0B] md:text-lg text-xs font-medium">
                    Delivered
                </p>
                <h3 className="text-[#0B0B0B] md:text-xl text-sm font-semibold mt-1">
                    on Sun, 3 Jan,2025
                </h3>
            </div>
        </section>
    )
}

export default OrderSummary
