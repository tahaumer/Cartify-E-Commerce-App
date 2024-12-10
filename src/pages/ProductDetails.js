import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

//media
import star from "../media/star-solid.svg";
import ship from "../media/ship.svg";
import returnIcon from "../media/return.svg";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when enters the page
  }, []);

  //initial
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProduct(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="min-h-[81vh] container">
        <div className="flex p-10 ">
          <div className="w-[40%]">
            <img
              className="w-full h-[600px] object-cover object-center"
              src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
              alt=""
            />
          </div>
          <div className="flex flex-col ml-5 w-[700px]">
            <h1 className="font-Jost-Medium text-[25px]">{product.name}</h1>
            <div className="flex space-x-[2px] my-2">
              <img src={star} alt="" className="w-[11px]" />
              <img src={star} alt="" className="w-[11px]" />
              <img src={star} alt="" className="w-[11px]" />
              <img src={star} alt="" className="w-[11px]" />
              <img src={star} alt="" className="w-[11px]" />
            </div>
            <p className="font-Jost-Bold text-[30px] my-3">${product.price}</p>
            <p className="font-Jost-Regular text-gray-500 text-[15px]">
              {product.description}
            </p>
            <p className="font-Jost-Regular  text-[15px] mt-3">
              Category:{" "}
              <span className="text-gray-500">{product?.category?.name}</span>{" "}
            </p>
            <p className="mt-16 font-Jost-Medium">
              Hurry up! only{" "}
              <span className="text-[#9C6D3A]">{product.quantity}</span> left in
              stock!
            </p>
            <span className="block rounded-full w-full h-1 my-2 bg-[#9C6D3A]"></span>
            <button className="button w-[400px] h-[50px] bg-black mt-5">
              <span className="span-mother">
                <span>A</span>
                <span>d</span>
                <span>d</span>
                <span>&nbsp;t</span>
                <span>o&nbsp;</span>
                <span>C</span>
                <span>a</span>
                <span>r</span>
                <span>t!</span>
              </span>
              <span className="span-mother2">
                <span>A</span>
                <span>d</span>
                <span>d</span>
                <span>&nbsp;t</span>
                <span>o&nbsp;</span>
                <span>C</span>
                <span>a</span>
                <span>r</span>
                <span>t!</span>
              </span>
            </button>
            <p className="mt-5 text-gray-700 text-[15px] flex mb-2">
              <img className="pr-2" src={ship} alt="" /> Estimate delivery
              times:
              <span className="font-Jost-Medium">
                &nbsp;12-26 days&nbsp;
              </span>{" "}
              (International),
              <span className="font-Jost-Medium">&nbsp;3-6 days&nbsp;</span>
              (Pakistan).
            </p>
            <p className="text-gray-700 text-[15px] flex ">
              <img className="pr-2" src={returnIcon} alt="" /> Return within{" "}
              <span className="font-Jost-Medium">&nbsp;45 days&nbsp;</span> of
              purchase. Duties & taxes are non-refundable.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <span className="block h-[1px] w-[80%] bg-gray-600 mx-auto opacity-30"></span>
      </div>
      {relatedProduct.length > 0 ? <h1 className="text-[40px] text-center my-10">People Also Bought</h1> : ""}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {relatedProduct && relatedProduct.length > 0 ? (
          relatedProduct?.map((p) => (
            <>
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
                  <div className="bg-white text-[#111111] hover:bg-[#111111] hover:text-white absolute bottom-2 w-[80%] left-[35px] py-2 rounded-full text-center opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 transition-all ease-in-out duration-700">
                    Add to Cart
                  </div>
                  {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                          39% OFF
                        </span> */}
                </div>
                <div className="mt-4 px-1 pb-5">
                  {" "}
                  {/* link here */}
                  <h5
                    onClick={() => navigate(`/product/${p.slug}`)}
                    className="text-[16px] tracking-tight text-slate-900 hover:underline cursor-pointer w-fit"
                  >
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
            </>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
