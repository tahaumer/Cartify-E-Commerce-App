import React from 'react'
import Layout from '../../components/Layout'
import UserMenu from '../../components/UserMenu'
import { useAuth } from '../../context/Auth'

const Dashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout title={"Dashboard - Cartify"}>
    <div className="container flex w-full h-[80vh] font-Jost-Regular">
      <div className="">
        <UserMenu />
      </div>
      <div className="my-4">
        <div className=''>
          <h1>{auth?.user?.name}</h1>
          <h1>{auth?.user?.email}</h1>
          <h1>{auth?.user?.address}</h1>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Dashboard