import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCarousel from "../components/ProductCarousel";

//media
import Home1pic from "../media/home1.webp";
import Home2pic from "../media/home2.webp";
import Home3pic from "../media/home3.webp";
import clothingMain from "../media/clothing-main.jpg";
import ShoesMain from "../media/shoesMain.webp";
import GlassesMain from "../media/glassesMain.webp";
import bagsMain from "../media/bagsMain.webp";

import icon1 from "../media/icon1.webp"
import icon2 from "../media/icon2.webp"
import icon3 from "../media/icon3.webp"

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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


  const swiperRef = useRef(null);
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); 
    }
  };
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); 
    }
  };

  return (
    <Layout title={"Cartify"}>

<Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        speed={2000}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => {
          // setActiveSlideIndex(swiper.activeIndex);
        }}
        className="group"
        ref={swiperRef} // Assign the ref to the Swiper component
      >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="h-[80vh] w-full flex items-center justify-center">
              <img src={Home1pic} alt="" className="w-full h-full object-cover object-center" />
              <div className="absolute left-52 slide-text">
                <h1 className="text-[72px] leading-tight font-Jost-Regular"> Original</h1>
                 <p className="text-[20px] font-Jost-Regular mb-2">Kitchen</p>
                 <p className="text-[16px] text-gray-600 ">Upgrade your home with our amazing assortment of decor.</p>
                 <button className="bg-[#111111] text-white font-Jost-Regular w-[150px] py-3 rounded-3xl mt-10 hover:tracking-widest"><Link className=" transitionCs" to="/shop"> Shop Now </Link></button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="h-[80vh] w-full flex items-center justify-center">
              <img src={Home2pic} alt="" className="w-full h-full object-cover object-center" />
              <div className="absolute left-52 slide-text text-center">
                <h1 className="text-[72px] leading-tight font-Jost-Regular text-center"> Online <br/>Limited Edition</h1>
                 <p className="text-[16px] text-gray-600  text-center"> Discount 50% On Products & Free Shipping.</p>
                 <button className="bg-[#111111] text-white font-Jost-Regular w-[150px] py-3 rounded-3xl mt-10 hover:tracking-widest"><Link className=" transitionCs" to="/shop"> Shop Now </Link></button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="h-[80vh] w-full flex items-center justify-center">
              <img src={Home3pic} alt="" className="w-full h-full object-cover object-center" />
              <div className="absolute left-52 slide-text text-center">
                <h1 className="text-[72px] leading-tight font-Jost-Regular text-center">Stylish <br/>Top Trending</h1>
                 <p className="text-[16px] text-gray-600"> Step into Style: Elevate Your Wardrobe with Trendsetting Fashion</p>
                 <button className="bg-[#111111] text-white font-Jost-Regular w-[150px] py-3 rounded-3xl mt-10 hover:tracking-widest"><Link className=" transitionCs" to="/shop"> Shop Now </Link></button>
              </div>
            </div>
          </SwiperSlide>
          <div onClick={handlePrev} className="swiper-button-next group/item w-12 h-12 absolute left-10 top-1/2 rounded-full opacity-0 border border-[#111111] transitionCs z-0 group-hover:z-10 group-hover:left-4 group-hover:opacity-100 cursor-pointer hover:bg-[#111111] ">
            <svg className="w-[40px] m-auto pt-[2px] fill-[#111111] group-hover/item:fill-white transitionCs" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
          </div>
          <div onClick={handleNext} className="swiper-button-prev group/item w-12 h-12 absolute right-10 top-1/2 rounded-full opacity-0 border border-[#111111] transitionCs z-0 group-hover:z-10 group-hover:right-4 group-hover:opacity-100 cursor-pointer hover:bg-[#111111] ">
            <svg className="w-[40px] m-auto mt-[3px] fill-[#111111] group-hover/item:fill-white transitionCs rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
          </div>
        </Swiper>
        <section className="container">
          <div className="mt-20">
            <h2 className="text-center text-3xl font-Jost-Medium">Featured Collections</h2>
            <p className="text-center text-md font-Jost-Regular text-gray-700">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
          </div>
          <div className="flex pt-10 gap-7 justify-center">
            <div className="group h-[600px] overflow-hidden w-full hover:brightness-75 transitionCs rounded-r-lg">
              <Link to="/shop" className="opacity-0 translate-x-9 group-hover:translate-x-0 group-hover:opacity-100 absolute left-[40%] top-1/2 z-20 transitionCs text-white bg-black w-[100px] cursor-pointer text-center py-2 font-Jost-Medium hover:tracking-widest rounded-3xl ">Shop</Link>
              <img src={clothingMain} alt="clothingMain" className="w-full h-full object-cover object-center group-hover:scale-110 transitionCs"/>
            </div>
            <div className="h-[600px] flex flex-col gap-y-5 w-full">
              <div className="group h-1/2 overflow-hidden w-full rounded-xl hover:brightness-75 transitionCs">
                <Link to="/shop" className="opacity-0 translate-x-9 group-hover:translate-x-0 group-hover:opacity-100 absolute left-[40%] top-1/2 z-20 transitionCs text-white bg-black w-[100px] cursor-pointer text-center py-2 font-Jost-Medium hover:tracking-widest rounded-3xl ">Shop</Link>
                <img src={GlassesMain} alt="clothingMain" className="w-full h-full object-cover object-center group-hover:scale-110 transitionCs"/>
              </div>
              <div className="group h-1/2 overflow-hidden w-full rounded-xl hover:brightness-75 transitionCs">
                <Link to="/shop" className="opacity-0 translate-x-9 group-hover:translate-x-0 group-hover:opacity-100 absolute left-[40%] top-1/2 z-20 transitionCs text-white bg-black w-[100px] cursor-pointer text-center py-2 font-Jost-Medium hover:tracking-widest rounded-3xl ">Shop</Link>
                <img src={bagsMain} alt="clothingMain" className="w-full h-full object-cover object-center group-hover:scale-110 transitionCs"/>
              </div>
            </div>
            <div className="group h-[600px] overflow-hidden w-full hover:brightness-75 transitionCs rounded-l-lg">
              <Link to="/shop" className="opacity-0 translate-x-9 group-hover:translate-x-0 group-hover:opacity-100 absolute left-[42%] top-1/2 z-20 transitionCs text-white bg-black w-[100px] cursor-pointer text-center py-2 font-Jost-Medium hover:tracking-widest rounded-3xl ">Shop</Link>
              <img src={ShoesMain} alt="clothingMain" className="w-full h-full object-cover object-center group-hover:scale-110 transitionCs"/>
            </div>
          </div>
        </section>
        <section className="container">
          <h2 className="text-center text-3xl font-Jost-Medium mt-20">New Arrivals</h2>
          <p className="text-center text-md font-Jost-Regular text-gray-700">Find the top most popular items in Shopify best sellers.</p>
          <ProductCarousel/>
        </section>
        <section className="container flex justify-evenly py-10">
          <div className="text-center w-[300px]">
            <img className="mx-auto w-[50px] mb-2" src={icon1} alt="" />
            <h3 className="text-[20px] mb-2">Free Shiping</h3>
            <p className="text-[15px] font-Jost-Light">Get complimentary ground shipping on every order. Don't love it? Send it back, on us.</p>
          </div>
          <div className="text-center w-[300px]">
            <img className="mx-auto w-[50px] mb-2" src={icon2} alt="" />
            <h3 className="text-[20px] mb-2">Free Returns</h3>
            <p className="text-[15px] font-Jost-Light">Free returns within 10 days, please make sure the items are in undamaged condition.</p>
          </div>
          <div className="text-center w-[300px]">
            <img className="mx-auto w-[50px] mb-2" src={icon3} alt="" />
            <h3 className="text-[20px] mb-2">Support Online</h3>
            <p className="text-[15px] font-Jost-Light">We support customers 24/7, send questions we will solve for you immediately.</p>
          </div>
        </section>
    </Layout>
  );
};

export default Home;
