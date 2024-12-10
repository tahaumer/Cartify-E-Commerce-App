import React from "react";
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
} from "@ant-design/icons";
import useCategory from "../hooks/useCategory";

// Media's
import Logo from "../media/CompanyLogos/Cartify-logos_transparent.png";
import dropdownIcon from "../media/dropdown.svg";
import SearchInput from "./forms/SearchInput";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const Categories = useCategory();
  const [cart] = useCart();
  const { wish } = useWish();
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
    <div className="bg-white shadow-md w-full z-50">
      <div className=" container font-Jost-Bold py-1 text-white flex justify-between items-center">
        <div className="">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-[130px] mx-2 px-1" />
          </Link>
        </div>
        <div className="flex pt-4">
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
          <div className="relative pb-2 group">
            <div className="inline-flex items-center overflow-hidden rounded-md bg-white">
              <button className="h-full p-2 text-gray-600 hover:text-gray-700">
                <span className="sr-only">Menu</span>
                <SearchOutlined className="text-[22px] group-hover:text-red-600 transitionCs" />
              </button>
            </div>
            <div
              className="absolute -end-16 mt-2  rounded-md border border-gray-100 bg-white shadow-lg opacity-0 -z-10 translate-y-9 group-hover:opacity-100 group-hover:z-40 group-hover:translate-y-0 transition-all ease-in-out duration-500"
              role="menu"
            >
              <SearchInput />
            </div>
          </div>
          <div className="relative pb-2 group">
            <div className="inline-flex items-center overflow-hidden rounded-md bg-white">
              <button className="h-full p-2 text-gray-600 hover:text-gray-700">
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
                className={` font-Jost-Regular b text-[22px] group-hover:text-red-600 transitionCs `} />
                <span className="absolute text-[10px] text-white bg-[#dd3327] rounded-full w-[15px] h-[14px] block top-1 right-[1px] font-Jost-Regular transitionCs">{cart?.length}</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
