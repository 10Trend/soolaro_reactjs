import ClosedEye from "@/components/icons/auth/ClosedEye"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react"
import { useState } from "react";

const ChangePassword = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <section>
            <h1 className="text-[#0B0B0B] text-[40px] font-semibold">
                Change Password
            </h1>

            <div className="mt-12">
                <div className="relative">
                    <label htmlFor="old_password" className="text-[#0B0B0B] text-base font-semibold">
                        Old Password
                    </label>
                    <input
                        type={showOldPassword ? "text" : "password"}
                        name="password"
                        className="w-full h-14 border border-[#DEDDDD] rounded-4xl mt-3 px-4"
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowOldPassword((prev) => !prev)}
                        className="absolute top-13 right-4 cursor-pointer"
                    >
                        {showOldPassword ? <Eye /> : <ClosedEye />}
                    </button>
                </div>

                <div className="relative mt-6">
                    <label htmlFor="new_password" className="text-[#0B0B0B] text-base font-semibold">
                        New Password
                    </label>
                    <input
                        type={showNewPassword ? "text" : "password"}
                        name="password"
                        className="w-full h-14 border border-[#DEDDDD] rounded-4xl mt-3 px-4"
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowNewPassword((prev) => !prev)}
                        className="absolute top-13 right-4 cursor-pointer"
                    >
                        {showNewPassword ? <Eye /> : <ClosedEye />}
                    </button>
                </div>

                <div className="relative mt-6">
                    <label htmlFor="confirm_password" className="text-[#0B0B0B] text-base font-semibold">
                        Confirm New Password
                    </label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="password"
                        className="w-full h-14 border border-[#DEDDDD] rounded-4xl mt-3 px-4"
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute top-13 right-4 cursor-pointer"
                    >
                        {showConfirmPassword ? <Eye /> : <ClosedEye />}
                    </button>
                </div>

                <Dialog>
                    <DialogTrigger className="w-full">
                        <button className="w-full h-14 bg-[#018884] rounded-4xl mt-8 text-[#FEFEFE] text-lg font-bold">
                            Save Changes
                        </button>
                    </DialogTrigger>
                    <DialogContent className="md:h-89.25 h-80 flex flex-col items-center justify-end">
                        <DialogHeader>
                        <DialogTitle className="text-[#0B0B0B] text-xl font-semibold text-center">
                            Your password has been changed successfully.
                        </DialogTitle>
                        
                        <DialogFooter className="sm:justify-start mt-10">
                            <DialogClose asChild>
                                <button type="button" className="w-full h-14 border border-[#DEDDDD] rounded-4xl text-[#3B3B3B] text-base font-bold">
                                    Cancel
                                </button>
                            </DialogClose>
                            <button type="button" className="w-full h-14 bg-[#018884] rounded-4xl text-[#FEFEFE] text-base font-bold">
                                    Continue
                                </button>
                        </DialogFooter>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}

export default ChangePassword
