import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/Cart";
import { useWish } from "../context/Wishlist";
import toast from "react-hot-toast";
import { HeartOutlined } from "@ant-design/icons";

//media
import star from "../media/star-solid.svg"

const CategoryProduct = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart();
  const { wish, toggleWish } = useWish();
  const navigate = useNavigate()
  useEffect(() => {
    if (params?.slug) getProductByCat();
  }, [params?.slug]);
  const getProductByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Category - Cartify"}>
      <div className="container w-full min-h-[80vh] p-10">
        <h1 className="text-[30px] font-Jost-Bold w-fit ml-4">
          {category?.name}
        </h1>
        <h1 className="text-[15px] font-Jost-Medium w-fit text-[#2a2a2ac6]  ml-4">
          {products?.length} Products Found
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {products && products.length ? (
                products.map((p) => {
                  const isProductInWishlist = wish.some((w) => w._id === p._id);
                  return (
                    <div key={p._id} className="relative mx-5 my-10 flex flex-col overflow-hidden rounded-lg  bg-white h-[510px] z-0">
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
                        {/* link here */}
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
                        {/* <div className="absolute right-5 bottom-16 text-right text-sm text-gray-700 font-Jost-Regular">
                          <p>In Inventory:{p.quantity}</p>
                        </div> */}
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-xl font-Jost-Medium tracking-tighter absolute left-1/2 top-1/2 -translate-x-10">No Products Avaliable :(</p>
              )}
            </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
