import ProductExploreShop from "@/components/product_details/ProductExploreShop"
import BestSeller from "../components/home/BestSeller"
import HomeHero from "../components/home/HomeHero"
import NewArrival from "../components/home/NewArrival"
import ShopByCategory from "../components/home/ShopByCategory"

const HomePage = () => {
    return (
        <div>
            <HomeHero />
            <ShopByCategory />
            <NewArrival />
            <ProductExploreShop />
            <BestSeller />
        </div>
    )
}

export default HomePage
