import React from "react";
import Layout from "../components/Layout";
import { useWish } from "../context/Wishlist";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
//media
import crossIcon from "../media/delete.svg";
import { useCart } from "../context/Cart";
import star from "../media/star-solid.svg";
import { HeartOutlined } from "@ant-design/icons";

const WishlistPage = () => {
  const {wish, toggleWish} = useWish();
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();

  const navigate = useNavigate();

  return (
    <Layout title={"Cart - Cartify"}>
      <div className="container w-full min-h-[81vh] pt-10  font-Jost-Regular relative">
      <div className="flex justify-center">
          <div className="">
            <h1 className="font-Jost-Regular tracking-tighter text-center text-[50px]">
                    Wishlist
                </h1>
                <h1 className="font-Jost-Medium uppercase pb-10 text-center mt-20">
                  {`${
                    wish?.length
                        ? `You Have ${wish.length} items in your in Wish list ${
                            auth?.token ? "" : "Please Login To See Wishlist"
                        }`
                        : `No products were added to the wishlist page.` 
                    }`}
                     <span className={`${wish.length ? "hidden" : "block"} text-[#2200cc] cursor-pointer group w-fit mx-auto hover:text-[#2200ccc3] transitionCs`} onClick={() => navigate("/shop")}>Back to shopping 
                        <span className="block w-0 transitionCs group-hover:w-full h-[2px] bg-[#2200ccc3] "></span>
                      </span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                  {wish?.map((p) => {
                    const isProductInWishlist = wish.some((w) => w._id === p._id);
                    return (
                <div key={p._id} className="relative mx-5 my-10 flex flex-col overflow-hidden rounded-lg  bg-white h-[510px] z-0">
                <div>
                  <div
                    onClick={() => navigate(`/product/${p.slug}`)}
                    className="group relative flex h-[430px] overflow-hidden rounded-xl cursor-pointer"
                  >
                    <img
                      className="object-cover w-full h-full object-center group-hover:scale-125 transition-all ease-in-out duration-700"
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      alt={p.name}
                    />
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        setCart([...cart, p]);
                        toast.success("item Added to Cart");
                      }}
                      className="bg-white z-10 text-[#111111] hover:bg-[#111111] hover:text-white absolute bottom-2 w-[80%] left-[35px] py-2 rounded-full text-center opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 transition-all ease-in-out duration-700"
                    >
                      Add to Cart
                    </div>
                    <div
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWish(p);
                        }}
                        className={`${isProductInWishlist ? 'bg-black text-white' : 'bg-white text-black'} relative z-10 px-3 rounded-full flex justify-center items-center h-10 right-14 top-3 transition-all ease-in-out duration-700 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 `}
                      >
                      <HeartOutlined />
                    </div>
                  </div>
                  <div className="mt-4 px-1 pb-5">
                    <h5 className="text-[16px] tracking-tight text-slate-900 hover:underline cursor-pointer w-fit">
                      {p.name}
                    </h5>
                    <div className="flex space-x-[2px] mt-1 mb-2">
                      <img src={star} alt="" className="w-[11px]" />
                      <img src={star} alt="" className="w-[11px]" />
                      <img src={star} alt="" className="w-[11px]" />
                      <img src={star} alt="" className="w-[11px]" />
                      <img src={star} alt="" className="w-[11px]" />
                    </div>
                    <span className="text-[14px] font-bold text-slate-900 ">
                      ${p.price}
                    </span>
                  </div>
                </div>
              </div>
               );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WishlistPage;
