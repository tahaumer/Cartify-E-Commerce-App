import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About"
import Contactus from "./pages/Contactus";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Page404 from "./pages/Page404";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/routes/PrivateRoutes";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import EditCategory from "./pages/admin/EditCategory";
import AllCategoires from "./pages/admin/AllCategoires";
import CreateProduct from "./pages/admin/CreateProduct";
import Users from "./pages/admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/admin/Products";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Shop from "./pages/Shop";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import Blog from "./pages/admin/Blog";
import CreateBlog from "./pages/admin/CreateBlog"

function App() {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Home  />}/>
          <Route path="/product/:slug" element={<ProductDetails  />}/>
          <Route path="/all-categories" element={<Categories  />}/>
          <Route path="/cart" element={<CartPage  />}/>
          <Route path="/wishlist" element={<WishlistPage  />}/>
          <Route path="/category/:slug" element={<CategoryProduct  />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/dashboard" element={<PrivateRoute/>}>
            <Route path="user" element={<Dashboard/>}/>
            <Route path="user/orders" element={<Orders/>}/>
            <Route path="user/profile" element={<Profile/>}/>
          </Route>
          <Route path="/dashboard" element={<AdminRoute/>}>
            <Route path="admin" element={<AdminDashboard/>}/>
            <Route path="admin/create-category" element={<CreateCategory/>}/>
            <Route path="admin/edit-category/:slug" element={<EditCategory/>}/>
            <Route path="admin/all-categories" element={<AllCategoires/>}/>
            <Route path="admin/create-product" element={<CreateProduct/>}/>
            <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
            <Route path="admin/products" element={<Products/>}/>
            <Route path="admin/users" element={<Users/>}/>
            <Route path="admin/blogs" element={<Blog/>}/>
            <Route path="admin/create-blog" element={<CreateBlog/>}/>
          </Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/blogs" element={<Blog/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          
          <Route path="*" element={<Page404/>}/>
        </Routes>
      
    </>
  );
}

export default App;
