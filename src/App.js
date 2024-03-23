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
import ProtectedRoute from "./components/route/ProtuctedRoute";
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

function App() {
  // const [stripeApiKey, setStripeApiKey] = useState("")
  // useEffect(()=>{
  //   store.dispatch(loadUser)
  //   async function getStripeApiKey(){
  //     const {data} = await axios.get('https://mern-site.onrender.com/api/v1/stripeapi')
  //     setStripeApiKey(data.stripeApiKey)
  //   }
  //   getStripeApiKey()
  // },[])
  return (
    <BrowserRouter>
      <div className="App">
        <HelmetProvider>
          {/* <Header /> */}
          <div>  
          <ToastContainer theme="dark"/>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/testimonial' element={<Testimonial />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/products' element={<Products/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/search/:keyword' element={<ProductSearch />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/myprofile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path='/myprofile/update' element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
            <Route path='/myprofile/update/password' element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} />
            <Route path='/password/forgot' element={<ForgotPassword/>} />
            <Route path='/password/reset/:token' element={<ResetPassword/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/shipping' element={<ProtectedRoute><Shipping /></ProtectedRoute>} />
            <Route path='/order/confirm' element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />
            <Route path='/order/success' element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
            <Route path='/orders' element={<ProtectedRoute><UserOrders /></ProtectedRoute>} />
            <Route path='/order/:id' element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
           
            {/* {stripeApiKey && <Route path='/payment' element={<ProtectedRoute><Elements stripe={loadStripe(stripeApiKey)}><Payment/></Elements></ProtectedRoute> } />
}  */}
            </Routes>
          </div>
          <Routes>

          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} />
          <Route path='/admin/categerious' element={ <Categerious/> } />
          <Route path='/admin/category' element={ <Category/> } />
          <Route path='/admin/products' element={<ProtectedRoute isAdmin={true}><ProductList /></ProtectedRoute>} />
          <Route path='/admin/products/create' element={<ProtectedRoute isAdmin={true}><NewProduct /></ProtectedRoute>} />
          <Route path='/admin/product/:id' element={<ProtectedRoute isAdmin={true}><UpdateProduct /></ProtectedRoute>} />
          <Route path='/admin/orders' element={ <ProtectedRoute isAdmin={true}><OrderList/></ProtectedRoute> } />
          <Route path='/admin/order/:id' element={ <ProtectedRoute isAdmin={true}><UpdateOrder/></ProtectedRoute> } />
          <Route path='/admin/users' element={ <ProtectedRoute isAdmin={true}><UserList/></ProtectedRoute> } />
          <Route path='/admin/user/:id' element={ <ProtectedRoute isAdmin={true}><UpdateUser/></ProtectedRoute> } />
          <Route path='/admin/reviews' element={ <ProtectedRoute isAdmin={true}><ReviewList/></ProtectedRoute> } />
          </Routes>
          <Footer />
        </HelmetProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
