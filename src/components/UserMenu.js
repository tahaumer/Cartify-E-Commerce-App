import { UserOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react'
import { Link, useLocation  } from 'react-router-dom'

const UserMenu = () => {
    // active link 
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };

  return (
    <>
            
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-[#40B3A2] dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Admin Panel</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
        </button>

        <aside id="default-sidebar" className="h-full block w-64 transition-all -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto ">
            <ul className="space-y-2 font-medium ">
                <li className='group'>
                    <Link to="/dashboard/user" className={`flex items-center p-2 hover:bg-[#374151] transitionCs ${isActive("/dashboard/user") ? "bg-[#374151] text-white" : ""} rounded-lg group`}>
                    <svg className={`flex-shrink-0 w-6 h-6 transition duration-75   dark:group-hover:text-white ${isActive("/dashboard/user") ? "dark:text-white" : "dark:text-[#111111]"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span className="ms-3 group-hover:text-white">Dashboard</span>
                    </Link>
                </li>
                <li className='group'>
                    <Link to="/dashboard/user/profile"  className={`flex items-center p-2 hover:bg-[#374151] ${isActive("/dashboard/user/profile") ? "bg-[#374151] text-white" : ""} rounded-lg group`}>
                        <UserOutlined className={`transition text-[20px] duration-75 dark:group-hover:text-white  ${isActive("/dashboard/user/profile") ? "dark:text-white" : "dark:text-[#111111]"}`}/>
                    <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-white">Profile</span>
                    </Link>
                </li>
                <li className='group'>
                    <Link to="/dashboard/user/orders"  className={`flex items-center p-2 hover:bg-[#374151] ${isActive("/dashboard/user/orders") ? "bg-[#374151] text-white" : ""} rounded-lg group`}>
                     <ShoppingCartOutlined className={`transition text-[20px] duration-75 dark:group-hover:text-white  ${isActive("/dashboard/user/orders") ? "dark:text-white" : "dark:text-[#111111]"}`}/>
                     <span className="flex-1 ms-3 whitespace-nowrap  group-hover:text-white">orders</span>
                    {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span> */}
                    </Link>
                </li>
            </ul>
        </div>
        </aside>

       

    </>
  )
}

export default UserMenu