import ComplateSelection from "@/components/product_details/ComplateSelection"
import ProductDetailsHeader from "@/components/product_details/ProductDetailsHeader"
import ProductDetialsData from "@/components/product_details/ProductDetialsData"
import ProductExploreShop from "@/components/product_details/ProductExploreShop"
import SeeStyle from "@/components/product_details/SeeStyle"

const ProductDetailsPage = () => {
    return (
        <div>
            <ProductDetailsHeader />
            <ProductDetialsData />
            <ComplateSelection />
            <SeeStyle />
            <ProductExploreShop />
        </div>
    )
}

export default ProductDetailsPage
