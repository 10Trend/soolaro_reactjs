import BackArrow from "@/components/icons/explore/BackArrow"
import { Link } from "react-router-dom"

const TrackOrder = () => {
    return (
        <section className="py-12 container">
            <div className="md:hidden flex items-center gap-3 py-6">
                <Link to='' className="w-12 h-12 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                    <BackArrow />
                </Link>
                <p className="text-[#0B0B0B] text-base font-semibold">
                    Track Order With ID
                </p>
            </div>
            <img
                src="/images/box.gif"
                alt="Tracking your order"
                className="mx-auto md:w-[284px] w-[217px] md:h-[284px] h-[217px]"
            />

            <h2 className="text-[#0B0B0B] text-[40px] font-semibold mt-12 md:flex hidden">
                Track Your Order With ID
            </h2>

            <div className="md:mt-12 mt-3">
                <label htmlFor="id" className="text-[#0B0B0B] md:text-base text-sm md:font-semibold font-medium">
                    Order ID
                </label>

                <input
                    type="text"
                    className="w-full h-14 border border-[#DEDDDD] rounded-[20px] px-3 mt-3"
                    placeholder="Enter your order ID"
                />

                <button className="w-full h-14 bg-[#018884] rounded-[20px] text-[#FEFEFE] md:text-lg text-base md:font-bold font-semibold md:mt-8 mt-3">
                    Track
                </button>
            </div>
        </section>
    )
}

export default TrackOrder
