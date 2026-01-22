import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const AddNewAddress = () => {
    return (
        <section>
            <h2 className="text-[#0B0B0B] text-xl font-medium">
                Add New Address
            </h2>
            
            <div className="mt-6">
                <label htmlFor="country" className="text-[#0B0B0B] text-base font-semibold">
                    Country
                </label>
                <Select>
                    <SelectTrigger className="w-full h-14! mt-3 rounded-4xl">
                        <SelectValue placeholder="Choose your country" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="a">A</SelectItem>
                        <SelectItem value="b">B</SelectItem>
                        <SelectItem value="c">C</SelectItem>
                    </SelectContent>
                    </Select>
            </div>

            <div className="mt-6">
                <label htmlFor="city" className="text-[#0B0B0B] text-base font-semibold">
                    Emirate / City
                </label>
                <Select>
                    <SelectTrigger className="w-full h-14! mt-3 rounded-4xl">
                        <SelectValue placeholder="Choose your Emirate - City" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="a">A</SelectItem>
                        <SelectItem value="b">B</SelectItem>
                        <SelectItem value="c">C</SelectItem>
                    </SelectContent>
                    </Select>
            </div>

            <div className="mt-6">
                <label htmlFor="area" className="text-[#0B0B0B] text-base font-semibold">
                    Area
                </label>
                <input
                    type="text"
                    className="w-full h-14 border border-[#DEDDDD] rounded-4xl px-4 mt-3"
                    placeholder="Enter your area"
                    />
            </div>

            <div className="mt-6">
                <label htmlFor="street" className="text-[#0B0B0B] text-base font-semibold">
                    Street
                </label>
                <input
                    type="text"
                    className="w-full h-14 border border-[#DEDDDD] rounded-4xl px-4 mt-3"
                    placeholder="Enter your street"
                    />
            </div>

            <div className="flex items-center gap-6">
                <div className="mt-6 w-full">
                    <label htmlFor="fllor" className="text-[#0B0B0B] text-base font-semibold">
                        Floor No,
                    </label>
                    <input
                        type="text"
                        className="w-full h-14 border border-[#DEDDDD] rounded-4xl px-4 mt-3"
                        placeholder="Enter your floor no."
                        />
                </div>
                <div className="mt-6 w-full">
                    <label htmlFor="apartment" className="text-[#0B0B0B] text-base font-semibold">
                        Apartment No.
                    </label>
                    <input
                        type="text"
                        className="w-full h-14 border border-[#DEDDDD] rounded-4xl px-4 mt-3"
                        placeholder="Enter your apartment no."
                        />
                </div>
            </div>
        </section>
    )
}

export default AddNewAddress
