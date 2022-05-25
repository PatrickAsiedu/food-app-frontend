import React from 'react'
import AdminSideBarNav from '../../components/AdminSideBarNav'

const AdminOrders = () => {
  return (
    <React.Fragment>
        <div className=" lg:flex h-screen ">
            <AdminSideBarNav />

            <main className=" lg:flex flex-col lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] px-8  lg:px-[90px] 2xl:px-[300px] text-base text-primary ">
                Admin orders
            </main>

        </div>
    </React.Fragment>
  )
}

export default AdminOrders