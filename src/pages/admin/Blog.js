import React from 'react'
import Layout from '../../components/Layout'

import Blog1 from '../../media/products/product3hover.webp'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <Layout>
        <div className='container py-10'>
            <Link className='bg-blue-400 p-2 w-[150px] float-right text-white rounded-md block' to="/dashboard/admin/create-blog">Create New +</Link>
            <div className='grid grid-cols-4 m-10'>
                <div className='h-[400px] rounded-lg overflow-hidden bg-gray-100'>
                    <div className='h-[200px]'>
                        <img className='w-full h-full object-cover object-center' src={Blog1} alt=''/>
                    </div>
                    <h1 className='text-lg mb-2 p-3'>Blog Title</h1>
                    <p className='font-Jost-Light p-3 pb-0 text-sm line-clamp-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributio</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Blog    