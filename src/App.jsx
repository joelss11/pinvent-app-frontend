import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Forgot from "./pages/auth/Forgot"
import Reset from "./pages/auth/Reset"
import Sidebard from "./components/sidebard/Sidebard"
import Dashboard from "./pages/dashboard/Dashboard"
import Layout from "./components/layout/Layout"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice"
import axios from "axios";
import { useEffect } from "react"
import AddProduct from "./pages/addProduct/AddProduct"
import ProductDetail from "./components/product/productDetail/ProductDetail"
import EditProduct from "./pages/editProduct/EditProduct"
import Profile from "./pages/profile/Profile"
import EditProfile from "./pages/profile/EditProfile"
import Contact from "./pages/contact/Contact"

axios.defaults.withCredentials = true;


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
     <ToastContainer />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgot" element={<Forgot/>} />
      <Route path="/resetpassword/:resetToken" element={<Reset/>} />
      <Route path="/dashboard"element={
      <Sidebard>
        <Layout>
          <Dashboard/>
        </Layout>
      </Sidebard>}/>   

      <Route path="/add-product"element={
      <Sidebard>
        <Layout>
          <AddProduct/>
        </Layout>
      </Sidebard>}/>

      <Route 
      path="/product-detail/:id"
      element={
      <Sidebard>
        <Layout>
          <ProductDetail/>
        </Layout>
      </Sidebard>}/>

      <Route 
      path="/edit-product/:id"
      element={
      <Sidebard>
        <Layout>
          <EditProduct/>
        </Layout>
      </Sidebard>}/>

      <Route 
      path="profile"
      element={
      <Sidebard>
        <Layout>
          <Profile/>
        </Layout>
      </Sidebard>}/>

      <Route 
      path="edit-profile"
      element={
      <Sidebard>
        <Layout>
          <EditProfile/>
        </Layout>
      </Sidebard>}/>

      <Route 
      path="contact-us"
      element={
      <Sidebard>
        <Layout>
          <Contact/>
        </Layout>
      </Sidebard>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
