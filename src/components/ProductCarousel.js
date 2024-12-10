import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//media
import star from "../media/star-solid.svg";
import { HeartOutlined } from "@ant-design/icons";
import product1 from '../media/products/product1hover.webp'
import product2 from '../media/products/product2.jpg'
import product3 from '../media/products/product3.webp'
import product4 from '../media/products/product4.webp'
import product5 from '../media/products/product5.webp'
const ProductCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="">
      <Carousel responsive={responsive} infinite={true}>
        <div className="">
          <div className="">
            <div className="relative w-[310px] mx-5 my-10 flex flex-col overflow-hidden rounded-lg  bg-white h-[510px] z-0">
              <div className="group relative flex h-[430px] overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover w-full h-full object-center group-hover:scale-125 transition-all ease-in-out duration-700" src={product1} alt=""/>
                {/* <div className="bg-white z-10 text-[#111111] hover:bg-[#111111] hover:text-white absolute bottom-2 w-[80%] left-[35px] py-2 rounded-full text-center opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 transition-all ease-in-out duration-700">
                  Add to Cart
                </div>
                <div className={`relative z-10 px-3 rounded-full flex justify-center items-center h-10 right-14 top-3 transition-all ease-in-out duration-700 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 `}
                >
                  <HeartOutlined />
                </div> */}
              </div>
              <div className="mt-4 px-1 pb-5">
                {/* link here */}
                <h5 className="text-[16px] tracking-tight text-slate-900 hover:underline cursor-pointer w-fit">
                White Chairs 
                </h5>
                <div className="flex space-x-[2px] mt-1 mb-2">
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                </div>
                <span className="text-[14px] font-bold text-slate-900 ">
                  $200
                </span>
                {/* <div className="absolute right-5 bottom-16 text-right text-sm text-gray-700 font-Jost-Regular">
                          <p>In Inventory:{p.quantity}</p>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="relative w-[310px] mx-5 my-10 flex flex-col overflow-hidden rounded-lg  bg-white h-[510px] z-0">
              <div className="group relative flex h-[430px] overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover w-full h-full object-center group-hover:scale-125 transition-all ease-in-out duration-700" src={product2} alt=""/>
                {/* <div className="bg-white z-10 text-[#111111] hover:bg-[#111111] hover:text-white absolute bottom-2 w-[80%] left-[35px] py-2 rounded-full text-center opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 transition-all ease-in-out duration-700">
                  Add to Cart
                </div>
                <div className={`relative z-10 px-3 rounded-full flex justify-center items-center h-10 right-14 top-3 transition-all ease-in-out duration-700 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 `}
                >
                  <HeartOutlined />
                </div> */}
              </div>
              <div className="mt-4 px-1 pb-5">
                {/* link here */}
                <h5 className="text-[16px] tracking-tight text-slate-900 hover:underline cursor-pointer w-fit">
                Vase Echasse Large
                </h5>
                <div className="flex space-x-[2px] mt-1 mb-2">
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                </div>
                <span className="text-[14px] font-bold text-slate-900 ">
                  $223
                </span>
                {/* <div className="absolute right-5 bottom-16 text-right text-sm text-gray-700 font-Jost-Regular">
                          <p>In Inventory:{p.quantity}</p>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="relative w-[310px] mx-5 my-10 flex flex-col overflow-hidden rounded-lg  bg-white h-[510px] z-0">
              <div className="group relative flex h-[430px] overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover w-full h-full object-center group-hover:scale-125 transition-all ease-in-out duration-700" src={product3} alt=""/>
                {/* <div className="bg-white z-10 text-[#111111] hover:bg-[#111111] hover:text-white absolute bottom-2 w-[80%] left-[35px] py-2 rounded-full text-center opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 transition-all ease-in-out duration-700">
                  Add to Cart
                </div>
                <div className={`relative z-10 px-3 rounded-full flex justify-center items-center h-10 right-14 top-3 transition-all ease-in-out duration-700 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 `}
                >
                  <HeartOutlined />
                </div> */}
              </div>
              <div className="mt-4 px-1 pb-5">
                {/* link here */}
                <h5 className="text-[16px] tracking-tight text-slate-900 hover:underline cursor-pointer w-fit">
                Simple Model Chair
                </h5>
                <div className="flex space-x-[2px] mt-1 mb-2">
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                </div>
                <span className="text-[14px] font-bold text-slate-900 ">
                  $100
                </span>
                {/* <div className="absolute right-5 bottom-16 text-right text-sm text-gray-700 font-Jost-Regular">
                          <p>In Inventory:{p.quantity}</p>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="relative w-[310px] mx-5 my-10 flex flex-col overflow-hidden rounded-lg  bg-white h-[510px] z-0">
              <div className="group relative flex h-[430px] overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover w-full h-full object-center group-hover:scale-125 transition-all ease-in-out duration-700" src={product4} alt=""/>
                {/* <div className="bg-white z-10 text-[#111111] hover:bg-[#111111] hover:text-white absolute bottom-2 w-[80%] left-[35px] py-2 rounded-full text-center opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 transition-all ease-in-out duration-700">
                  Add to Cart
                </div>
                <div className={`relative z-10 px-3 rounded-full flex justify-center items-center h-10 right-14 top-3 transition-all ease-in-out duration-700 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 `}
                >
                  <HeartOutlined />
                </div> */}
              </div>
              <div className="mt-4 px-1 pb-5">
                {/* link here */}
                <h5 className="text-[16px] tracking-tight text-slate-900 hover:underline cursor-pointer w-fit">
                Bottle Grinder of Pepper
                </h5>
                <div className="flex space-x-[2px] mt-1 mb-2">
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                </div>
                <span className="text-[14px] font-bold text-slate-900 ">
                  $20
                </span>
                {/* <div className="absolute right-5 bottom-16 text-right text-sm text-gray-700 font-Jost-Regular">
                          <p>In Inventory:{p.quantity}</p>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="relative w-[310px] mx-5 my-10 flex flex-col overflow-hidden rounded-lg  bg-white h-[510px] z-0">
              <div className="group relative flex h-[430px] overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover w-full h-full object-center group-hover:scale-125 transition-all ease-in-out duration-700" src={product5} alt=""/>
                {/* <div className="bg-white z-10 text-[#111111] hover:bg-[#111111] hover:text-white absolute bottom-2 w-[80%] left-[35px] py-2 rounded-full text-center opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 transition-all ease-in-out duration-700">
                  Add to Cart
                </div>
                <div className={`relative z-10 px-3 rounded-full flex justify-center items-center h-10 right-14 top-3 transition-all ease-in-out duration-700 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 `}
                >
                  <HeartOutlined />
                </div> */}
              </div>
              <div className="mt-4 px-1 pb-5">
                {/* link here */}
                <h5 className="text-[16px] tracking-tight text-slate-900 hover:underline cursor-pointer w-fit">
                Form Bar Stool Oak Base
                </h5>
                <div className="flex space-x-[2px] mt-1 mb-2">
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                  <img src={star} alt="" className="w-[11px]" />
                </div>
                <span className="text-[14px] font-bold text-slate-900 ">
                  $123
                </span>
                {/* <div className="absolute right-5 bottom-16 text-right text-sm text-gray-700 font-Jost-Regular">
                          <p>In Inventory:{p.quantity}</p>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
