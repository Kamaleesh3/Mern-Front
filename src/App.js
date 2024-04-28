import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layouts/Footer";
// import Header from "./components/layouts/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from "./components/product/ProductDetail";
import ProductSearch from "./components/product/ProductSearch";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { useEffect, useState} from "react";
import store from './store'
import { loadUser } from "./actions/userActions";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgetPassword";
import ResetPassword from "./components/user/ResetPassword";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios'
import OrderSuccess from "./components/cart/OrderSuccess";
import UserOrders from "./components/order/UserOrders"
import OrderDetails from "./components/order/OrderDetails"
import Dashboard from "./components/admins/Dashboard"
import ProductList from "./components/admins/ProductList";
import NewProduct from "./components/admins/NewProduct";
import UpdateProduct from "./components/admins/UpdateProduct";
import OrderList from "./components/admins/OrderList";
import UpdateOrder from "./components/admins/UpdateOrder";
import UserList from "./components/admins/UserList";
import UpdateUser from "./components/admins/UpdateUser";
import ReviewList from "./components/admins/ReviewList";
import AdminLogin from "./components/admins/AdminLogin";
import Categerious from "./components/admins/Categerious";
import Category from "./components/admins/Category";
import Testimonial from "./components/pages/Testimonial";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import About from "./components/pages/About";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("")
  useEffect(()=>{
    store.dispatch(loadUser)
    async function getStripeApiKey(){
      const {data} = await axios.get('http://localhost:8000/api/v1/stripeapi')
      setStripeApiKey(data.stripeApiKey)
    }
    getStripeApiKey()
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <HelmetProvider>
          {/* <Header /> */}
          <div>  
          <ToastContainer theme="dark"/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/testimonial' element={<Testimonial />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/products' element={<Products/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/search/:keyword' element={<ProductSearch />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/myprofile' element={<Profile />} />
            <Route path='/myprofile/update' element={<UpdateProfile />} />
            <Route path='/myprofile/update/password' element={<UpdatePassword />} />
            <Route path='/password/forgot' element={<ForgotPassword/>} />
            <Route path='/password/reset/:token' element={<ResetPassword/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/order/confirm' element={<ConfirmOrder />} />
            <Route path='/order/success' element={<OrderSuccess />} />
            <Route path='/orders' element={<UserOrders />} />
            <Route path='/order/:id' element={<OrderDetails />} />
           
             {stripeApiKey && <Route path='/payment' element={<Elements stripe={loadStripe(stripeApiKey)}><Payment/></Elements> } />
}  
            </Routes>
          </div>
          <Routes>

          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/categerious' element={ <Categerious/> } />
          <Route path='/admin/category' element={ <Category/> } />
          <Route path='/admin/products' element={<ProductList />} />
          <Route path='/admin/products/create' element={<NewProduct />} />
          <Route path='/admin/product/:id' element={<UpdateProduct />} />
          <Route path='/admin/orders' element={ <OrderList/> } />
          <Route path='/admin/order/:id' element={ <UpdateOrder/> } />
          <Route path='/admin/users' element={ <UserList/> } />
          <Route path='/admin/user/:id' element={ <UpdateUser/> } />
          <Route path='/admin/reviews' element={ <ReviewList/> } />
          </Routes>
          <Footer />
        </HelmetProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
