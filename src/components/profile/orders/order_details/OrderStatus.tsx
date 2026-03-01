import type { Order } from "@/lib/api/profile/singleOrder";
import { useTranslation } from "react-i18next";

type Status = "preorder" | "pending" | "confirmed" | "ready_for_shipping" | "in_shipping" | "completed" | "cancelled";

const STATUS_CONFIG: Record<Status | "default", {
    bg: string;
    textColor: string;
    icon: React.ReactNode;
}> = {
    preorder: {
        bg: "bg-[#F3E8FF]",
        textColor: "text-[#A855F7]",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="#A855F7" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        ),
    },
    pending: {
        bg: "bg-[#FEF3E2]",
        textColor: "text-[#F59E0B]",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeWidth="2" />
                <path d="M12 6v6l4 2" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    confirmed: {
        bg: "bg-[#DBEAFE]",
        textColor: "text-[#3B82F6]",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2" />
                <path d="M8 12l3 3 5-5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    ready_for_shipping: {
        bg: "bg-[#E0E7FF]",
        textColor: "text-[#6366F1]",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round" />
                <path d="M9 22V12h6v10" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        ),
    },
    in_shipping: {
        bg: "bg-[#DBEAFE]",
        textColor: "text-[#0EA5E9]",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="#0EA5E9" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="5.5" cy="18.5" r="2.5" stroke="#0EA5E9" strokeWidth="2" />
                <circle cx="18.5" cy="18.5" r="2.5" stroke="#0EA5E9" strokeWidth="2" />
            </svg>
        ),
    },
    completed: {
        bg: "bg-[#D1FAE5]",
        textColor: "text-[#10B981]",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 4L12 14.01l-3-3" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    cancelled: {
        bg: "bg-[#FEE2E2]",
        textColor: "text-[#EF4444]",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2" />
                <path d="M15 9l-6 6M9 9l6 6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    default: {
        bg: "bg-[#F6F6F6]",
        textColor: "text-[#3B3B3B]",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#3B3B3B" strokeWidth="2" />
            </svg>
        ),
    },
};

interface Props {
    order: Order;
}

const OrderStatus = ({ order }: Props) => {
    const { t, i18n } = useTranslation("profile");

    const key = (order.status?.toLowerCase() as Status) ?? "default";
    const config = STATUS_CONFIG[key] ?? STATUS_CONFIG.default;
    const displayDate = order.delivered_at ?? order.created_at;

    const formattedDate = displayDate
        ? new Intl.DateTimeFormat(
            i18n.language.startsWith("ar") ? "ar-EG" : "en-US",
            {
                year: "numeric",
                month: "long",
                day: "numeric",
            }
        ).format(new Date(displayDate))
        : null;

    return (
        <section className={`md:py-4 py-2 px-2 ${config.bg} rounded-[8px] flex items-center gap-2`}>
            {config.icon}
            <div>
                <h3 className={`${config.textColor} md:text-base text-sm font-medium capitalize`}>
                    {t(`order_status.${key}`, order.status?.replace(/_/g, " "))}
                </h3>

                {formattedDate && (
                    <p className={`${config.textColor} md:text-sm text-[10px] font-medium`}>
                        {t("on")} {formattedDate}
                    </p>
                )}
            </div>
        </section>
    )
}

export default OrderStatus
