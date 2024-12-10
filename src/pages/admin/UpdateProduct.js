import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

// media
import uploadIcon from "../../media/upload.svg";

const { Option } = Select;
const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [id, setId] = useState("");

  // get all categories
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setShipping(data.product.shipping);
      setCategory(data.product.category._id);

      // console.log(setName)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    //eslint-disabale-next-line
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

  // update product
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      photo && productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.put(
        `${process.env.REACT_APP_API}/api/v1/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  // handleDelete
  const handleDelete = async () => {
    try {
      let answer = window.prompt(`are you sure you want to delete ${name}`);
      if (!answer) return;
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/product/delete-product/${id}`
      );
      toast.success("product Deleted");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Update Product - Cartify"}>
      <div className="container flex w-full min-h-[90vh] font-Jost-Regular">
        <div className="">
          <AdminMenu />
        </div>
        <div className="my-4 ml-10">
          <h1 className="text-2xl">Update Product</h1>
          <div className="m-2 cursor-pointer">
            <Select
              bordered={false}
              placeholder="select a Category"
              size="large"
              showSearch
              className="mb-3 cursor-pointer w-[400px] InShadow rounded-lg"
              onChange={(value) => {
                setCategory(value);
              }}
              value={category}
            >
              {categories?.map((c) => (
                <Option key={c._id} value={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="flex relative w-[800px]">
            <label className="m-2 flex justify-between cursor-pointer px-2 py-2 w-[400px] InShadow rounded-lg hover:bg-[#FAFBFD]">
              {photo ? photo.name : "Upload Photo"}
              <img src={uploadIcon} alt="upload" />
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => {
                  setPhoto(e.target.files[0]);
                }}
                hidden
              />
            </label>
            <div className="my-3 absolute right-0">
              {photo ? (
                <div className="text-center w-[300px]">
                  <img
                    className="h-[200px] w-full object-cover object-center"
                    src={URL.createObjectURL(photo)}
                    alt="productphoto"
                  />
                </div>
              ) : (
                <div className="text-center w-[300px]">
                  <img
                    className="h-[200px] w-full object-cover object-center"
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${id}`}
                    alt="productphoto"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="my-5">
            <input
              type="text"
              value={name}
              placeholder="Name of Product"
              onChange={(e) => setName(e.target.value)}
              className="m-2 InShadow rounded-lg placeholder-gray-600 py-2 w-[400px] block px-2"
            />
          </div>
          <div className="my-5">
            <textarea
              value={description}
              placeholder="Description of Product"
              onChange={(e) => setDescription(e.target.value)}
              className="m-2 InShadow rounded-lg placeholder-gray-600 py-2 w-[400px] block px-2"
            />
          </div>
          <div className="my-5">
            <input
              type="number"
              value={price}
              placeholder="Price of Product"
              onChange={(e) => setPrice(e.target.value)}
              className="m-2 InShadow rounded-lg placeholder-gray-600 py-2 w-[400px] block px-2"
            />
          </div>
          <div className="my-3">
            <input
              type="number"
              value={quantity}
              placeholder="Quantity"
              onChange={(e) => setQuantity(e.target.value)}
              className="m-2 InShadow rounded-lg placeholder-gray-600 py-2 w-[400px] block px-2"
            />
          </div>
          <Select
            bordered={false}
            placeholder="Shipping"
            size="large"
            className="m-2 cursor-pointer w-[400px] InShadow rounded-lg"
            onChange={(value) => setShipping(value)}
            value={shipping ? "Yes" : "No"}
          >
            <Option value="0">Yes</Option>
            <Option value="1">No</Option>
          </Select>
          <div className="m-2 space-x-4">
            <button
              className="py-2 px-3 bg-[#b5b5b5] rounded-lg"
              onClick={handleUpdate}
            >
              Update Product
            </button>
            <button
              className="py-2 px-3 bg-[#dd3327] text-white rounded-lg"
              onClick={handleDelete}
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
