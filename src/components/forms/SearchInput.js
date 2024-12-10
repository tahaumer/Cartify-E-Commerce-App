import React from "react";
import { useSearch } from "../../context/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// media
import {SearchOutlined} from "@ant-design/icons"

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className="p-3 flex" role="search" onSubmit={handleSubmit}>
      <input
        className="focus:outline-none text-black font-Jost-Medium"
        type="search"
        placeholder="Search Items"
        aria-label="Search"
        value={values.keyword}
        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
      />
      <button type="submit">
        <SearchOutlined className="text-black"/>
      </button>
    </form>
  );
};

export default SearchInput;
