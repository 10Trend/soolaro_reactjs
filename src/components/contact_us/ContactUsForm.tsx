import { useTranslation } from "react-i18next";

const ContactUsForm = () => {
  const { t } = useTranslation("contact");

    return (
        <section className="container md:mt-14.5 mt-6 mb-12">
            <div className="w-full h-full bg-[#F6F6F6] md:rounded-[44px] p-8">
                <div>
                    <label htmlFor="name" className="text-[#0B0B0B] text-base font-semibold">
                        {t("form.name")}
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="w-full h-14 border border-[#DEDDDD] rounded-4xl mt-3 px-4"
                        placeholder={t("form.name_placeholder")}
                    />
                </div>

                <div className="mt-6">
                    <label htmlFor="email" className="text-[#0B0B0B] text-base font-semibold">
                        {t("form.email")}
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="w-full h-14 border border-[#DEDDDD] rounded-4xl mt-3 px-4"
                        placeholder={t("form.email_placeholder")}
                    />
                </div>

                <div className="mt-6">
                    <label htmlFor="message" className="text-[#0B0B0B] text-base font-semibold">
                        {t("form.message")}
                    </label>
                    <textarea
                        name="message"
                        className="w-full h-44 border border-[#DEDDDD] rounded-4xl mt-3 px-4"
                        placeholder={t("form.message_placeholder")}
                    ></textarea>
                </div>

                <button className="w-full h-14 bg-[#018884] rounded-4xl mt-6 text-[#FEFEFE] text-lg font-bold">
                {t("form.send")}
                </button>
            </div>
        </section>
    )
}

export default ContactUsForm
