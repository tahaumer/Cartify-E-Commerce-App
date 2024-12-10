import React from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/AdminMenu";

const Users = () => {
  return (
    <Layout title={"Users - Cartify"}>
      <div className="container flex w-full h-[80vh] font-Jost-Regular">
          <div>
            <AdminMenu />
          </div>
          <div>
            <div className="my-4">
              <h1 className="text-2xl">Users</h1>
            </div>
          </div>
      </div>
    </Layout>
  );
};

export default Users;
