import HomeHero from "../components/home/HomeHero"
import NewArrival from "../components/home/NewArrival"
import ShopByCategory from "../components/home/ShopByCategory"

const HomePage = () => {
    return (
        <div>
            <HomeHero />
            <ShopByCategory />
            <NewArrival />
        </div>
    )
}

export default HomePage
