import React,{ useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth";
import toast from "react-hot-toast";
import { useCart } from "../context/Cart";
import { useWish } from "../context/Wishlist";
import {
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import useCategory from "../hooks/useCategory";

// Media's
import Logo from "../media/CompanyLogos/Cartify-logos_transparent.png";
import dropdownIcon from "../media/dropdown.svg";
import SearchInput from "./forms/SearchInput";
import SearchInputSidebar from "./forms/SearchInputSidebar";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const Categories = useCategory();
  const [cart] = useCart();
  const { wish } = useWish();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Close menu on ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  // logout function
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Loged Out");
  };

  return (
    <>
      <div className="bg-white shadow-md w-full z-50">
        <div className=" container font-Jost-Bold py-1 text-white flex justify-between items-center">
          <div className="">
            <Link to="/">
              <img src={Logo} alt="logo" className="w-[130px] mx-2 px-1" />
            </Link>
          </div>
          <div className="lg:flex hidden pt-4">
            <ul className="flex text-black font-Jost-Medium uppercase text-[15px] space-x-16">
              <li className="cursor-pointer hover:text-[#DD3327] transitionCs flex">
                <Link to="/"> Home </Link>
              </li>
              <li className="cursor-pointer hover:text-[#DD3327] transitionCs flex">
                <Link to="/shop"> Shop </Link>
              </li>
              <li className="group cursor-pointer hover:text-[#DD3327] flex relative">
                <Link to="/all-categories"> Category</Link>
                <img className="ml-1 w-[15px]" src={dropdownIcon} alt="dd" />
                <div className="mt-2 -end-14 -z-10 rounded-md text-gray-500 border border-gray-100 bg-white shadow-lg opacity-0 translate-y-9 absolute group-hover:z-40 group-hover:opacity-100 group-hover:translate-y-4 transition-all ease-in-out duration-500">
                  <ul className="p-2 w-[200px]">
                    {Categories?.map((c) => (
                      <Link to={`/category/${c.slug}`} key={c._id}>
                        <li className="hover:bg-gray-200 px-2 py-3 transitionCs border-b border-gray-100">
                          {c.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="cursor-pointer hover:text-[#DD3327] transitionCs flex">
                <Link to="/blogs"> Blog </Link>
              </li>
              <li className="cursor-pointer hover:text-[#DD3327] transitionCs flex">
                <Link to="#"> Sale </Link>
              </li>
            </ul>
          </div>
          <div className="flex pt-4">
            <div className="relative pb-2 group hidden lg:block">
              <div className="inline-flex items-center overflow-hidden rounded-md bg-white">
                <button className="h-full p-2 text-gray-600 hover:text-gray-700">
                  <span className="sr-only">Menu</span>
                  <SearchOutlined className="text-[22px] group-hover:text-red-600 transitionCs" />
                </button>
              </div>
              <div className="absolute -end-16 mt-2  rounded-md border border-gray-100 bg-white shadow-lg opacity-0 -z-10 translate-y-9 group-hover:opacity-100 group-hover:z-40 group-hover:translate-y-0 transition-all ease-in-out duration-500" role="menu" >
                <SearchInput />
              </div>
            </div>
            <div className="relative pb-2 group hidden lg:block" >
              <div className="inline-flex items-center overflow-hidden rounded-md bg-white">
                <button className="h-full p-2 text-gray-600 hover:text-gray-700" >
                  <span className="sr-only">Menu</span>
                  <UserOutlined className="text-[22px] group-hover:text-red-600 transitionCs" />
                </button>
              </div>
              <div
                className="absolute -end-16 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg opacity-0 -z-10 translate-y-9 group-hover:opacity-100 group-hover:z-40 group-hover:translate-y-0 transition-all ease-in-out duration-500"
                role="menu"
              >
                <div className="">
                  {!auth.user ? (
                    <>
                      <Link
                        to="/register"
                        className="block px-4 py-2 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300"
                        role="menuitem"
                      >
                        Register
                      </Link>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300"
                        role="menuitem"
                      >
                        Login
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="bg-[#d1d4d6] border-b-[1px] border-gray-500 border-opacity-30 w-full h-[70px] flex justify-center items-center text-black font-Jost-Bold">
                        {auth?.user?.name}
                      </div>
                      <Link
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        className="block px-4 py-2 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300 "
                        role="menuitem"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/login"
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300"
                        role="menuitem"
                      >
                        Log out
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Link to={'/wishlist'} className="relative pb-2 group">
              <div className="inline-flex items-center overflow-hidden rounded-md bg-white">
                <button className="h-full p-2 text-gray-600 hover:text-gray-700">
                  <HeartOutlined className="heart text-[22px] group-hover:text-red-600 transitionCs" />
                  <span className="absolute text-[10px] text-white bg-[#dd3327] rounded-full w-[15px] h-[14px] block top-1 right-[1px] font-Jost-Regular transitionCs">{wish?.length}</span>
                </button>
              </div>
            </Link>
            <Link to={'/cart'} className="relative pb-2 group">
              <div className="inline-flex items-center overflow-hidden rounded-md bg-white">
                <button className="h-full p-2 text-gray-600 hover:text-gray-700 relative">
                  <ShoppingCartOutlined 
                  className={`font-Jost-Regular text-[22px] group-hover:text-red-600 transitionCs `} />
                  <span className="absolute text-[10px] text-white bg-[#dd3327] rounded-full w-[15px] h-[14px] block top-1 right-[1px] font-Jost-Regular transitionCs">{cart?.length}</span>
                </button>
              </div>
            </Link>
            <button onClick={toggleMenu} className="block lg:hidden">
              <MenuOutlined className="text-gray-600 hover:text-red-600 text-[22px] pb-2 mx-3"/>
            </button>
          </div>
        </div>
      </div>

        <div ref={menuRef} className={`bg-[#dfe8f4] shadow-2xl fixed top-0 bottom-0 right-0 h-screen w-[300px] z-50 rounded-l-[40px] overflow-hidden transition-transform duration-300 ${ menuOpen ? "translate-x-0" : "translate-x-full" }`}>
            <div className="relative bg-gradient-to-tr from-slate-900 to-slate-800 pb-10 rounded-bl-[40px] shadow-2xl">
              <button className="absolute top-4 right-4">
              <ArrowDownOutlined className="-rotate-90 text-white" onClick={closeMenu}/>
              </button>
              {!auth.user ? (
                 <div className="flex flex-col justify-center">
                    <div className="text-white uppercase text-2xl px-10 pt-10 pb-5 text-center border-b border-white/50 mb-4 border-dashed">
                      Welcome TO CARTIFY!
                    </div>
                    <div>
                      <SearchInputSidebar />
                      <Link to={`/register`} className="flex justify-between items-center px-4 py-4 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300 " role="menuitem" >
                        <span> Register</span>
                        <ArrowDownOutlined className="-rotate-90"/>
                      </Link>
                      <Link to="/login" className="flex justify-between items-center px-4 py-4 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300 " role="menuitem" >
                        <span> LogIn</span>
                        <ArrowDownOutlined className="-rotate-90"/>
                      </Link>
                    </div>
                  </div>
              ) : (
                <div className="flex flex-col justify-center">
                  <div className="text-white uppercase text-2xl p-10 border-b border-white/50 mb-4 border-dashed">
                    Welcome {auth?.user?.name}!
                  </div>
                  <div>
                  <SearchInputSidebar />
                    <Link to={`/dashboard/${ auth?.user?.role === 1 ? "admin" : "user" }`} className="flex justify-between items-center px-4 py-4 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300 " role="menuitem" >
                      <span> Dashboard</span>
                      <ArrowDownOutlined className="-rotate-90"/>
                    </Link>
                    <Link to="/login" onClick={handleLogout} className="flex justify-between items-center px-4 py-4 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300 " role="menuitem" >
                      <span> Log out</span>
                      <ArrowDownOutlined className="-rotate-90"/>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/" className="flex justify-between items-center mt-6 px-4 py-4 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300 " role="menuitem" >
              <span> HOME</span>
              <ArrowDownOutlined className="-rotate-90"/>
            </Link>
            <Link to="/shop" className="flex justify-between items-center px-4 py-4 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300 " role="menuitem" >
              <span> SHOP</span>
              <ArrowDownOutlined className="-rotate-90"/>
            </Link>
            <Link to="/all-categories" className="flex justify-between items-center px-4 py-4 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300 " role="menuitem" >
              <span> CATEGORIES</span>
              <ArrowDownOutlined className="-rotate-90"/>
            </Link>
            <Link to="/blogs" className="flex justify-between items-center px-4 py-4 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300 " role="menuitem" >
              <span> BLOGS</span>
              <ArrowDownOutlined className="-rotate-90"/>
            </Link>
            <Link to="#" className="flex justify-between items-center px-4 py-4 text-sm text-gray-500 hover:bg-[#ECEEF0] hover:text-gray-700 transition-all ease-in-out duration-300 " role="menuitem" >
              <span> SALE</span>
              <ArrowDownOutlined className="-rotate-90"/>
            </Link>
        </div>
    </>
  );
};

export default Header;
