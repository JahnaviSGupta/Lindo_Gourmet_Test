import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Join from "./Join";
import AddShop from "./AddShop";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import ProductList from "./ProductList";
import ProductView from "./ProductView";
import ShopList from "./ShopList";
import ShopView from "./ShopView";
import CardPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import TrackingOrder from "./TrackingOrder";
import Wishlist from "./Wishlist";
import FlashSale from "./FlashSale";
import Compare from "./Compare";
import Blog from "./Blog";
import BlogItem from "./Blog/BlogItem";
import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import Terms from "./Terms";
import Privacy from "./Privacy";
import FourZeroFour from "./FourZeroFour";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/signin" element={<Signin/>} />
                <Route exact path="/join" element={<Join/>} />
                <Route exact path="/addshop" element={<AddShop/>} />
                <Route exact path="/dashboard" element={<Dashboard/>} />
                <Route exact path="/profile" element={<Profile/>} />

                <Route exact path="/productlist" element={<ProductList/>} />
                <Route exact path="/productview" element={<ProductView/>} />
                <Route exact path="/shoplist" element={<ShopList/>} />
                <Route exact path="/shopview" element={<ShopView/>} />

                <Route exact path="/cart" element={<CardPage/>} />
                <Route exact path="/checkout" element={<CheckoutPage/>} />
                <Route exact path="/order" element={<TrackingOrder/>} />

                <Route exact path="/wishlist" element={<Wishlist/>} />
                <Route exact path="/flash-sale" element={<FlashSale/>} />
                <Route exact path="/compare" element={<Compare/>} />

                <Route exact path="/blog" element={<Blog/>} />
                <Route exact path="/blogitem" element={<BlogItem/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/contact" element={<Contact/>} />
                <Route exact path="/faq" element={<Faq/>} />
                <Route exact path="/terms" element={<Terms/>} />
                <Route exact path="/privacy" element={<Privacy/>} />
                <Route exact path="*" element={<FourZeroFour/>} />
            </Routes>
        </BrowserRouter>
    ) ;
}
