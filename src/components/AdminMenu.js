import React from 'react'
import { Link, useLocation  } from 'react-router-dom'

const AdminMenu = () => {
    // active link 
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };

  return (
    <>
            
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm  rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-[#111111] dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Admin Panel</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>

        <aside id="default-sidebar" className="h-full block w-64 transition-all -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto ">
            <ul className="space-y-2 font-medium ">
                <li className='group InShadow rounded-lg'>
                    <Link to="/dashboard/admin" className={`flex items-center p-2 hover:bg-[#374151] transitionCs ${isActive("/dashboard/admin") ? "bg-[#374151] text-white" : ""} rounded-lg group`}>
                    <svg className={`flex-shrink-0 w-6 h-6 transition duration-75   dark:group-hover:text-white ${isActive("/dashboard/admin") ? "dark:text-white" : "dark:text-[#111111]"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span className="ms-3  group-hover:text-white">Dashboard</span>
                    </Link>
                </li>
                <li className='group InShadow rounded-lg'>
                    <Link to="/dashboard/admin/create-category" className={`flex items-center p-2 hover:bg-[#374151] transitionCs ${isActive("/dashboard/admin/create-category") ? "bg-[#374151] text-white" : ""} rounded-lg group`}>
                    <svg className={`flex-shrink-0 w-6 h-6  transition duration-75   dark:group-hover:text-white  ${isActive("/dashboard/admin/create-category") ? "dark:text-white" : "dark:text-[#111111]"}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960">
                        <path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z"/>
                    </svg>
                    <span className="flex-1 ms-2 whitespace-nowrap group-hover:text-white">Create Catagory</span>
                    </Link>
                </li>
                <li className='group InShadow rounded-lg'>
                    <Link to="/dashboard/admin/all-categories" className={`flex items-center p-2 hover:bg-[#374151] transitionCs ${isActive("/dashboard/admin/all-categories") ? "bg-[#374151] text-white" : ""} rounded-lg group`}>
                    <svg className={`flex-shrink-0 w-6 h-6  transition duration-75   dark:group-hover:text-white  ${isActive("/dashboard/admin/all-categories") ? "dark:text-white" : "dark:text-[#111111]"}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960">
                        <path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z"/>
                    </svg>
                    <span className="flex-1 ms-2 whitespace-nowrap group-hover:text-white">Manage Catagory</span>
                    </Link>
                </li>
                <li className='group InShadow rounded-lg'>
                    <Link to="/dashboard/admin/create-product"  className={`flex items-center p-2 hover:bg-[#374151] transitionCs ${isActive("/dashboard/admin/create-product") ? "bg-[#374151] text-white" : ""} rounded-lg group`}>
                    <svg className={`flex-shrink-0 w-6 h-6  transition duration-75   dark:group-hover:text-white  ${isActive("/dashboard/admin/create-product") ? "dark:text-white" : "dark:text-[#111111]"}`} xmlns="http://www.w3.org/2000/svg" height="24" fill="currentColor" viewBox="0 -960 960 960" >
                        <path d="M480-503Zm-40-366q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v170q-18-13-38-22.5T760-508v-88l-144 83q-56 14-101.5 47.5T440-384v-73L200-596v274l202 117q4 32 15 61.5T445-88q-2-1-2.5-1.5T440-91L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161Zm40 69L243-663l237 137 237-137-237-137Zm200 680 120-120-28-28-72 72v-164h-40v164l-72-72-28 28 120 120Zm0 80q-83 0-141.5-58.5T480-240q0-83 58.5-141.5T680-440q83 0 141.5 58.5T880-240q0 83-58.5 141.5T680-40Z"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap  group-hover:text-white">Create Product</span>
                    {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span> */}
                    </Link>
                </li>
                <li className='group InShadow rounded-lg'>
                    <Link to="/dashboard/admin/products"  className={`flex items-center p-2 hover:bg-[#374151] transitionCs ${isActive("/dashboard/admin/products") ? "bg-[#374151] text-white" : ""} rounded-lg group`}>
                    <svg className={`flex-shrink-0 w-6 h-6  transition duration-75   dark:group-hover:text-white  ${isActive("/dashboard/admin/products") ? "dark:text-white" : "dark:text-[#111111]"}`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap  group-hover:text-white">products</span>
                    {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span> */}
                    </Link>
                </li>
                <li className='group InShadow rounded-lg'>
                    <Link to="/dashboard/admin/blogs"  className={`flex items-center p-2 hover:bg-[#374151] transitionCs ${isActive("/dashboard/admin/products") ? "bg-[#374151] text-white" : ""} rounded-lg group`}>
                    <svg className={`flex-shrink-0 w-6 h-6  transition duration-75   dark:group-hover:text-white  ${isActive("/dashboard/admin/products") ? "dark:text-white" : "dark:text-[#111111]"}`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap  group-hover:text-white">Blogs</span>
                    {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span> */}
                    </Link>
                </li>
                <li className='group InShadow rounded-lg'>
                    <Link to="/dashboard/admin/users"  className={`flex items-center p-2 hover:bg-[#374151] transitionCs ${isActive("/dashboard/admin/users") ? "bg-[#374151] text-white" : ""} rounded-lg group`}>
                    <svg className={`flex-shrink-0 w-5 h-5  transition duration-75   dark:group-hover:text-white  ${isActive("/dashboard/admin/users") ? "dark:text-white" : "dark:text-[#111111]"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-white">Users</span>
                    </Link>
                </li>
            </ul>
          </div>
        </aside>
    </>
  )
}

export default AdminMenu