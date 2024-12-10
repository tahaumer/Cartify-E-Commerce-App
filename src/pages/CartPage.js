import React from "react";
import Layout from "../components/Layout";
import { useCart } from "../context/Cart";
import { useAuth } from "../context/Auth";
import { Link, useNavigate } from "react-router-dom";

//media
import crossIcon from "../media/delete.svg";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Cart - Cartify"}>
      <div className="container w-full min-h-[81vh] pt-10  font-Jost-Regular relative">
        <div className="flex relative">
          <div className="w-[55%]">
            <h1 className="font-Jost-Bold uppercase pl-10 ">
              {`hello ${auth?.token && auth?.user?.name}!`}
            </h1>
            <span className="block w-[300px] opacity-10 h-[1px] my-4 bg-black ml-10"></span>
            <h1 className="font-Jost-Medium uppercase pl-10 pb-10">
              {`${
                cart?.length
                  ? `You Have ${cart.length} item(s) in your Cart ${
                      auth?.token ? "" : "Please Login To Checkout"
                    }`
                  : "Your Cart is Empty"
              }`}
            </h1>
            <div className="grid grid-cols-2 gap-5">
              {cart?.map((p) => (
                <div
                  onClick={() => navigate(`/product/${p.slug}`)}
                  className="flex flex-col group/parent cursor-pointer w-[100%] max-h-[200px] items-center bg-gray-800 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-700 transitionCs relative"
                >
                  <div
                    className="absolute top-2 right-2 group/child cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCartItem(p._id);
                    }}
                  >
                    <img className="" src={crossIcon} alt="cross" />
                    <span className="-z-10 px-1 absolute -top-7 -left-5 translate-y-2 group-hover/child:translate-y-0 transitionCs opacity-0 group-hover:z-10 group-hover/child:opacity-100 bg-black text-white text-[13px] whitespace-nowrap ">
                      Remove Item
                    </span>
                  </div>
                  <div className="min-w-[150px] max-w-[150px] h-full overflow-hidden">
                    <img
                      className="object-cover group-hover/parent:scale-110 transitionCs w-full rounded-t-lg h-full object-center md:rounded-none md:rounded-s-lg"
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      alt={p.name}
                    />
                  </div>
                  <div className="flex flex-col justify-between p-4 leading-normal mt-6">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      {p.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-400 text-[14px] line-clamp-3">
                      {p.description}
                    </p>
                    <p className="mb-3 font-bold text-gray-400 text-[20px]">
                      ${p.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <span className="block w-[1px] h-full opacity-30 mx-4 bg-black absolute left-[55%]"></span>
          <div className="w-[45%] text-center">
            <h1 className="font-Jost-Bold text-2xl">Checkout | Payment</h1>
            <p className="text-[17px] my-3">Total: <span className="font-bold"> {totalPrice()}</span></p>
            <span className="w-1/4 block bg-black h-[1px] opacity-25 mx-auto my-3"></span>
            {auth?.user?.address ? (
              <div className="mb-3">
                <h1 className="font-Jost-Bold text-xl">Current Address</h1>
                <h2 className="font-Jost-Medium my-3">{auth?.user?.address}</h2>
                <button
                  className="bg-black text-white cursor-pointer mx-auto w-[150px] rounded-md py-2"
                  onClick={() => navigate("/dashboard/user/profile")}
                >
                  Update Address
                </button>
              </div>
            ) : (
              <div>
                {auth?.user ? (
                  <button
                    className="bg-black text-white cursor-pointer mx-auto w-[150px] rounded-md py-2"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    className="bg-black text-white cursor-pointer mx-auto w-[200px] rounded-md py-2"
                    onClick={() => navigate("/login", { state: "/cart" })}
                  >
                    Please Login to Checkout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
