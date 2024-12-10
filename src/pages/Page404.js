import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <Layout title={"Page Not Found"}>
      <div className="bg-[#1F1F1F] border-b border-white">
        <div className="container h-[79vh] text-white flex flex-col justify-center items-center">
            <h1 className="font-Jost-Bold text-[200px]">404</h1>
            <p className="text-[20px]">Opps ! Page Not Found :(</p>
            <Link to="/" className="mt-10 border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition-all ease-in-out duration-100">GO HOME </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Page404;
