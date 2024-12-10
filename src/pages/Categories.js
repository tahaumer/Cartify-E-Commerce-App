import React from "react";
import Layout from "../components/Layout";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"Categories - Cartify"}>
      <div className="container w-full min-h-[80vh] p-10">
        <h1 className="text-[30px] font-Jost-Bold border-b-2 border-black w-fit">All Categories</h1>
        <div className="flex flex-wrap gap-4 mt-10">
            {categories.map((c) => (
                <Link to={`/category/${c.slug}`} key={c._id} className="odd:bg-[#2d2d2d] even:bg-[#222222] n flex justify-center items-center font-Jost-Bold uppercase text-white rounded-lg shadow-lg w-[200px] h-[100px]">
                    {c.name}
                </Link>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
