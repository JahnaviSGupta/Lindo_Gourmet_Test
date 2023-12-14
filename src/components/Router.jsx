import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../lib/Store";
import About from "./About";
import AddShop from "./AddShop";
import Admin from "./Admin";
import Blog from "./Blog";
import BlogItem from "./Blog/BlogItem";
import CardPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import LoadingPage from "./CheckoutPage/LoadingPage";
import Compare from "./Compare";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import AddressesTab from "./Dashboard/tabs/AddressesTab";
import PasswordTab from "./Dashboard/tabs/PasswordTab";
import Payment from "./Dashboard/tabs/Payment";
import SupportTab from "./Dashboard/tabs/SupportTab";
import Faq from "./Faq";
import FlashSale from "./FlashSale";
import FourZeroFour from "./FourZeroFour";
import GenericProduct from "./GenericCustomization";
import Home from "./Home";
import JoinComponent from "./JoinComponent";
import OrderHistory from "./Orderhistory";
import Privacy from "./Privacy";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import ProductView from "./ProductView";
import Profile from "./Profile";
import ShopList from "./ShopList";
import ShopView from "./ShopView";
import SignInJoinComponent from "./SignInJoinComponent";
import Stats from "./Stats";
import Terms from "./Terms";
import Test from "./Test";
import TrackingOrder from "./TrackingOrder";
import Wishlist from "./Wishlist";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignInJoinComponent />} />
        <Route exact path="/join" element={<JoinComponent />} />
        <Route exact path="/addshop" element={<AddShop />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/profile" element={<Profile />} />

        <Route exact path="/product" element={<ProductPage />} />
        <Route exact path="/productlist" element={<ProductList />} />
        <Route exact path="/productview" element={<ProductView />} />
        <Route exact path="/shoplist" element={<ShopList />} />
        <Route exact path="/shopview" element={<ShopView />} />

        <Route exact path="/cart" element={<CardPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/order" element={<TrackingOrder />} />

        <Route exact path="/wishlist" element={<Provider  store={store}><Wishlist /></Provider>} />
        <Route exact path="/orderhistory" element={<OrderHistory />} />
        <Route exact path="/flash-sale" element={<FlashSale />} />
        <Route exact path="/compare" element={<Compare />} />

        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blogitem" element={<BlogItem />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="*" element={<FourZeroFour />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/stats" element={<Stats/>} />
        <Route exact path="/loading" element={<LoadingPage />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/generic-product" element={<GenericProduct />} />
        <Route exact path="/payment" element={<Payment/>}/>
        <Route exact path="/address" element={<AddressesTab/>}/>
        <Route exact path="support" element={<SupportTab/>}/>
        <Route exact path="loginandsecurity" element={<PasswordTab/>}/>
      </Routes>
    </BrowserRouter>
  );
}
