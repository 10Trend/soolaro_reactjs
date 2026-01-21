import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/general/Layout";
import HomePage from "./pages/HomePage";
import ExploreProductsPage from "./pages/ExploreProductsPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/explore" element={<ExploreProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
