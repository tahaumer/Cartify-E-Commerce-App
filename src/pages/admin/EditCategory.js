import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/AdminMenu";
import toast from "react-hot-toast";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CreateCategory = () => {
  const [file, setFile] = useState(null);
  const [value, setValue] = useState("");
  const [preview, setPreview] = useState(""); // State for file preview
  const { slug } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('text', value);

    try {
      const response = await axios.put(`${process.env.REACT_APP_API}/api/v1/category/update-category/${slug}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Success:', response.data);
      toast.success("Category updated successfully!");
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error("Error uploading file. Please try again.");
    }
  };

  const getSingleCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/single-category/${slug}`
      );
      if (data?.success) {
        console.log(data.category.image);
        setValue(data.category.name);
        // Set preview if the image is a valid URL
        setPreview(data.category.image);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }
  };

  useEffect(() => {
    getSingleCategory();
  }, [slug]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    // Create a preview for the selected file
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setPreview(fileUrl);
    }
  };

  return (
    <Layout title={"Edit Category - Cartify"}>
      <div className="container flex min-h-[90vh] font-Jost-Regular">
        <div>
          <AdminMenu />
        </div>
        <div className="p-4 w-full">
          <div className="grid grid-cols-2 gap-x-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="category" className="mb-3 block text-base font-medium text-[#07074D]">Category Name:</label>
                <input 
                  id="category" 
                  type="text" 
                  value={value} 
                  onChange={(e) => setValue(e.target.value)} 
                  placeholder="e.g., Men's Wear" 
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                />
              </div>
              <div className="mb-6 pt-4">
                <div className="mb-8">
                  <input 
                    type="file" 
                    name="file" 
                    id="file" 
                    onChange={handleFileChange} 
                    className="sr-only" 
                  />
                  <label htmlFor="file" className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#cecece] p-12 text-center">
                    <div>
                      <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                        Drop Image here
                      </span>
                      <span className="mb-2 block text-base font-medium text-[#6B7280]">
                        Or
                      </span>
                      <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
                <div className="mt-5">
                  <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" type="submit">
                    Update Category
                  </button>
                </div>
              </div>
            </form>
            <div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Uploaded File:
                </label>
              </div>
              <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8 w-full h-[300px]">
                <div className="flex items-center justify-between">
                  <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                    {file ? file.name : "No file uploaded"}
                  </span>
                  {preview && (
                    <img src={preview} alt={value} className="w-full h-full" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
