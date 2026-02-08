import { postSuggestion } from "@/lib/api/suggestions";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactUsForm = () => {
  const { t } = useTranslation("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("form.errors.name");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("form.errors.email");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("form.errors.message");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await postSuggestion(formData);

      toast.success(t("form.success"));
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err: any) {
      toast.error(err?.message || t("form.error"));
    } finally {
      setLoading(false);
    }
  };

    return (
        <section className="container md:mt-14.5 mt-6 mb-12">
          <form
              onSubmit={handleSubmit}
              className="w-full h-full bg-[#F6F6F6] md:rounded-[44px] p-8"
            >
                <div>
                    <label className="text-[#0B0B0B] text-base font-semibold">
                        {t("form.name")}
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-14 border border-[#DEDDDD] rounded-4xl mt-3 px-4"
                        placeholder={t("form.name_placeholder")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                </div>

                <div className="mt-6">
                    <label className="text-[#0B0B0B] text-base font-semibold">
                        {t("form.email")}
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-14 border border-[#DEDDDD] rounded-4xl mt-3 px-4"
                        placeholder={t("form.email_placeholder")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                </div>

                <div className="mt-6">
                    <label className="text-[#0B0B0B] text-base font-semibold">
                        {t("form.message")}
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full h-44 border border-[#DEDDDD] rounded-4xl mt-3 px-4"
                        placeholder={t("form.message_placeholder")}
                      />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-[#018884] rounded-4xl mt-6 text-[#FEFEFE] text-lg font-bold disabled:opacity-60"
              >
                {loading ? t("form.sending") : t("form.send")}
                </button>
            </form>
        </section>
    )
}

export default ContactUsForm
