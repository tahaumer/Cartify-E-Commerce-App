import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/Cart";
import { useWish } from "../context/Wishlist";
import toast from "react-hot-toast";
// media
import filterIcon from "../media/filter.svg";
import star from "../media/star-solid.svg";
import { HeartOutlined } from "@ant-design/icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [cart, setCart] = useCart();
  const { wish, toggleWish } = useWish();
  const navigate = useNavigate();

  // getting all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setProducts(data.products);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // lifecycle
  useEffect(() => {
    getAllProducts();
  }, []);

  // get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/all-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in getting categories");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  //filetr by category and price
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!radio.length) getAllProducts();
  }, [radio.length]);
  useEffect(() => {
    if (!checked.length) getAllProducts();
  }, [checked.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  const CustomCheckbox = ({ label, id, checked, onChange }) => {
    const handleToggle = () => {
      onChange(!checked, id);
    };

    return (
      <span
        className={`cursor-pointer inline-block p-1 m-1 border border-[#ccc] rounded transition duration-150 text-[13px]  ${
          checked ? "bg-[#dd3327] hover:bg-[#ae281f] text-white" : ""
        }`}
        onClick={handleToggle}
      >
        {label}
      </span>
    );
  };

  // filter backend
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filters`,
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Shop - Cartify"}>
      <div className="container flex w-full min-h-[81vh] font-Jost-Regular relative">
        <div className="w-full mb-4 ">
          <div className="group inline-block relative top-8 -right-[90%]">
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center group-hover:bg-gray-400">
              <img src={filterIcon} alt="filterIcon" />
            </button>
            <ul className="absolute -left-40 opacity-0 -z-10 translate-y-9 text-gray-700 pt-1 group-hover:opacity-100 group-hover:z-40 group-hover:translate-y-0 transition-all ease-in-out duration-500">
              <li className="flex flex-col bg-gray-200 w-[300px] p-3 rounded-t-lg">
                By Category
                <div>
                  {categories?.map((c) => (
                    <CustomCheckbox key={c._id} id={c._id} checked={checked.includes(c._id)} onChange={(value, id) => handleFilter(value, id)} label={c.name}/>
                  ))}
                </div>
              </li>
              <li className="flex flex-col bg-gray-200 w-[300px] p-3">
                By price
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {Prices?.map((p) => (
                    <div key={p._id} className="flex ml-3">
                      <Radio value={p.array}>
                        {p.name}
                      </Radio>
                    </div>
                  ))}
                </Radio.Group>
              </li>
              <li className="flex flex-col bg-gray-300 border border-gray-400 w-[300px] p-3 cursor-pointer text-center">
                <div onClick={() => window.location.reload()}>
                  Reset Filter
                </div>
              </li>
            </ul>
          </div>
          <h1 className="text-3xl font-Jost-Bold tracking-tighter capitalize ml-5">All Products</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
               {products && products.length ? (
                products.map((p) => {
                  const isProductInWishlist = wish.some((w) => w._id === p._id);
                  return (
                    <div key={p._id} className="relative w-[310px] mx-5 my-10 flex flex-col overflow-hidden rounded-lg  bg-white h-[510px] z-0">
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
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
