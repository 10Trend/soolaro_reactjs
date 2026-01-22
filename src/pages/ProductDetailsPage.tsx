import ComplateSelection from "@/components/product_details/ComplateSelection"
import ProductDetailsHeader from "@/components/product_details/ProductDetailsHeader"
import ProductDetialsData from "@/components/product_details/ProductDetialsData"
import SeeStyle from "@/components/product_details/SeeStyle"

const ProductDetailsPage = () => {
    return (
        <div>
            <ProductDetailsHeader />
            <ProductDetialsData />
            <ComplateSelection />
            <SeeStyle />
        </div>
    )
}

export default ProductDetailsPage
