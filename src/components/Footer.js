import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//media
import Logo from "../media/CompanyLogos/Cartify-logos_transparent.png";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import linkdin from "../media/linkdin.svg";
import twiter from "../media/twiter.svg";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <hr />
      <div className="flex justify-between px-10 min-h-[440px] pt-28">
        <div className="font-[16px] font-Jost-Regular text-[#555555]">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-[130px] pb-6" />
          </Link>
          <p>123 St, Some Random/PK 98944, Pakistan.</p>
          <p>+222-1800-2628</p>
          <p>tahaumer21@gmail.com</p>
          <div className="flex space-x-2 mt-6">
            <div className=" transitionCs cursor-pointer  flex justify-center items-center px-2 py-[5px] hover:text-[#D618C7]">
              <InstagramOutlined className="text-[21px] " />
            </div>
            <div className=" transitionCs cursor-pointer  flex justify-center items-center px-2 py-[5px] hover:text-[#1974EC]">
              <FacebookOutlined className="text-[20px] " />
            </div>
            <div className=" transitionCs cursor-pointer  flex justify-center items-center px-2 py-[6px] hover:text-[#FF0808]">
              <YoutubeOutlined className="text-[21px] " />
            </div>
            <div className=" transitionCs cursor-pointer  flex justify-center items-center px-2 py-[5px] ">
              <svg className="hover:fill-[#1974EC] transitionCs" xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </div>
            <div className=" transitionCs cursor-pointer  flex justify-center items-center px-2 py-[5px] ">
              <svg className="hover:fill-[#6B7983] transitionCs" xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="font-Jost-Medium text-[20px]">Company</h1>
          <ul className="mt-6 text-[#555555] space-y-3 font-Jost-Regular text-[17px]">
            <li className="hover:ml-2 transitionCs">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="hover:ml-2 transitionCs">
              <Link to={"/contactus"}>Contact Us</Link>
            </li>
            <li className="hover:pl-2 transitionCs w-[100px]">
              <Link to={"#"}>My Account</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-Jost-Medium text-[20px]">Customer Service</h1>
          <ul className="mt-6 text-[#555555] space-y-3 font-Jost-Regular text-[17px]">
            <li className="hover:ml-2 transitionCs">
              <Link to={"/privacypolicy"}>Privacy Policy</Link>
            </li>
            <li className="hover:ml-2 transitionCs">
              <Link to={"#"}>Redund Policy</Link>
            </li>
            <li className="hover:ml-2 transitionCs">
              <Link to={"#"}>Shipping & Return</Link>
            </li>
            <li className="hover:ml-2 transitionCs">
              <Link to={"#"}>Terms & Conditions</Link>
            </li>
            <li className="hover:ml-2 transitionCs">
              <Link to={"#"}>Store Location</Link>
            </li>
          </ul>
        </div>
        <div className="w-[500px]">
          <h1 className="font-Jost-Medium text-[20px]">
            Sign Up to Newsletter
          </h1>
          <p className="mt-6 text-[#555555] font-Jost-Regular text-[17px]">
            Enter your email address to get $10 off your first order and free
            shipping.Updates information on Sales and Offers.
          </p>
          <div className="flex items-center mt-6">
            <input
              type="email"
              className="py-[11px] w-full px-4 text-black text-base border border-gray-300 border-r-0 rounded-l focus:border-gray-700 focus:outline-none bg-transparent transitionCs"
              id="Email"
              name="Email"
              placeholder="Enter your email..."
              autoComplete="off"
            />
            <input
              className="py-3 px-4 border-none rounded-r border-2 bg-gray-800 text-white text-base cursor-pointer transition duration-300 hover:bg-gray-900"
              value="Subscribe"
              type="submit"
            />
          </div>
        </div>
      </div>
      <hr/>
      <div className="flex justify-center items-center py-5 font-[16px] font-Jost-Regular text-[#555555]"> &copy; {currentYear} Cartify Store. All Rights Reserved</div>
    </>
  );
};

export default Footer;
