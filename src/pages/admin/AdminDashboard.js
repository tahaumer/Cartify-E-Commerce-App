import React from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/AdminMenu";
import { useAuth } from "../../context/Auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Cartify"}>
      <div className="container flex w-full min-h-[81vh] font-Jost-Regular">
          <div>
              <AdminMenu />
          </div>
          <div >
            <div className="my-4 ml-10">
              <h1 className="text-2xl"><span className="font-Jost-Bold"> Admin Name : </span>{auth?.user?.name}</h1>
              <h2 className="text-2xl"><span className="font-Jost-Bold"> Admin Email :</span> {auth?.user?.email}</h2>
              <h2 className="text-2xl"><span className="font-Jost-Bold"> Admin Phone :</span> {auth?.user?.phone}</h2>
            </div>
          </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
