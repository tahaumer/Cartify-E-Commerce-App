import React from 'react'
import UserMenu from '../../components/UserMenu'
import Layout from '../../components/Layout'

const Orders = () => {
  return (
    <Layout title={"Orders - Cartify"}>
    <div className="container flex w-full h-[80vh] font-Jost-Regular">
      <div className="">
        <UserMenu />
      </div>
      <div className="my-4">
        <h1 className="text-2xl">All Orders</h1>
      </div>
    </div>
  </Layout>
  )
}

export default Orders