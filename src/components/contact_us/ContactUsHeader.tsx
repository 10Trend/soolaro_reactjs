import { Link } from "react-router-dom";
import BreadCrumbs from "../general/BreadCrumbs"
import BackArrow from "../icons/explore/BackArrow";

const ContactUsHeader = () => {
    const breadcrumbItems = [
        { nameEn: "Home", nameAr: "الرئيسية", Link: "/" },
        { nameEn: "Contact Us", nameAr: "تواصل معنا", Link: "/" },
    ];
    return (
        <section className="container">
            <BreadCrumbs items={breadcrumbItems} hideOnMobile={true} />
            <Link to='/' className="w-12 h-12 rounded-full bg-[#F6F6F6] md:hidden flex items-center justify-center">
                <BackArrow />
            </Link>
            <div className="md:mt-12 mt-10 flex flex-col items-center justify-center gap-9">
                <h2 className="text-[#0B0B0B] md:text-[40px] text-2xl font-semibold">
                    Do you have any question?
                </h2>
                <p className="text-[#3B3B3B] md:text-xl text-sm font-medium text-center">
                    Feel free to reach out to us at any time. We're here to help with orders, product questions, and any feedback you may have.
                </p>
            </div>
        </section>
    )
}

export default ContactUsHeader
