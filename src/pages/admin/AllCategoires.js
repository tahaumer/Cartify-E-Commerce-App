import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const AllCategoires = () => {
    const [categories, setCategories] = useState([]);
   
    // get all categories
    const getAllCategories = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/category/all-category`
            );
            if (data?.success) {
                console.log(data)
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

    //delete catagory
    const handleDelete = async (cId) => {
        try {
            const { data } = await axios.delete(
                `${process.env.REACT_APP_API}/api/v1/category/delete-category/${cId}`
            );
            if (data.success) {
                toast.success(`Category is deleted`);
                getAllCategories();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong");
        }
    };
    return (
        <>
            <Layout title={"All Categories - Cartify"}>
                <div className="container flex min-h-[90vh] font-Jost-Regular">
                    <AdminMenu />
                    <div className="my-4 w-full p-3">
                        <div className="relative">
                            <table className="w-full text-sm text-center text-gray-400 font-Jost-Regular rounded-lg overflow-hidden">
                                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                                    <tr>
                                        <th scope="col" className="px-10 py-5 text-[16px] font-Jost-Medium" > Category Image </th>
                                        <th scope="col" className="px-10 py-5 text-[16px] font-Jost-Medium" > Category name </th>
                                        <th scope="col" className="px-10 py-5 border-l border-gray-600 text-[16px] font-Jost-Medium" > Actions </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories?.map((c, index) => (
                                        <tr key={c._id} className={`${index % 2 === 0 ? "bg-[#cecece]" : "bg-[#f1f1f1]"}`}>
                                            <td className="py-3 pl-3 text-gray-700 capitalize font-Jost-Bold whitespace-nowrap">
                                                <img src={c.image} alt={c.name} style={{ width: '100px', height: 'auto' }} />
                                            </td>
                                            <td className="py-3 text-gray-700 capitalize font-Jost-Bold whitespace-nowrap  border-l border-gray-500"> {c.name} </td>
                                            <td className="py-3 space-x-8 text-gray-700 capitalize border-l border-gray-500">
                                                <Link to={`/dashboard/admin/edit-category/${c.slug}`} className="bg-[#374151] px-2 py-1 text-white">
                                                    Edit
                                                </Link>
                                                <button onClick={() => { handleDelete(c._id); }} className="bg-red-600 px-2 py-1 text-white">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <Modal onCancel={() => setVisible(false)} footer={null} open={visible} > </Modal> */}
                </div>
            </Layout>
        </>
    )
}

export default AllCategoires