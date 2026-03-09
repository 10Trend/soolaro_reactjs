
import OrderStatus from "@/components/profile/orders/order_details/OrderStatus";
import OrderSummary from "@/components/profile/orders/order_details/OrderSummary";
import type { Order } from "@/lib/api/profile/singleOrder";

const mockOrder: Order = {
    id: 1,
    code: "ORD-1024",
    status: "confirmed",
    created_at: "2026-03-09T10:30:00",

    sub_total: 1200,
    shipping: 50,
    tax: 30,
    total_discount: 100,
    total: 1180,

    address_details: "Cairo, Nasr City, Street 10",
    phone_national: "01012345678",

    orderItems: [
        {
            id: 1,
            price: 1200,
            product_name: {
                ar: "قميص رجالي",
                en: "Men Shirt",
            },
            productable: {
                image: {
                    url: "/images/home/glass1.png",
                    id: 0,
                    uuid: "",
                    responsive_urls: []
                },
            },
            variant: {
                attributes: [
                    {
                        id: 1,
                        attribute: {
                            type: "Color",
                            id: 0,
                            name: {
                                ar: "",
                                en: ""
                            }
                        },
                        value: {
                            special_value: "#000000",
                            id: 0,
                            value: {
                                ar: "",
                                en: ""
                            }
                        },
                    },
                ],
                id: 0,
                product_id: 0,
                sku: "",
                barcode: null,
                price: 0,
                final_price: 0,
                discount: null,
                has_discount: false,
                is_active: false,
                is_stock: false,
                is_out_of_stock: false,
                stock: 0,
                images: [],
                group_addons: []
            },
            order_id: 0,
            code: "",
            order_code: "",
            quantity: 0,
            subtotal: 0,
            discount_amount: 0,
            tax: 0,
            total: 0,
            status: "",
            is_reviewed: false,
            custom_data: [],
            created_at: "",
            updated_at: ""
        },
    ],
    tracking_number: null,
    updated_at: "",
    delivery_expect: "",
    discount_amount: 0,
    products_discount: 0,
    phone: "",
    phone_e164: "",
    phone_country: "",
    phone_normalized: "",
    email: "",
    user_name: "",
    address_lat: null,
    address_lng: null,
    client: null,
    client_id: "",
    client_type: "",
    session_id: "",
    is_reviewed: false,
    reviews: []
};

const TrackOrderDetailsPage = () => {
    return (
        <section className="container py-10">
            <OrderStatus order={mockOrder} />
            <OrderSummary order={mockOrder} />

        </section>
    );
};

export default TrackOrderDetailsPage;