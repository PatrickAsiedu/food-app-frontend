import React from 'react'
import ChefSideBarNav from '../../components/ChefSideBarNav'

const ChefOrders = () => {
  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
        <ChefSideBarNav />

        <main className=" lg:flex flex-col lg:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%] px-8  lg:px-[90px] text-base text-primary ">
          <h1 className="mt-[5%] text-primary font-bold text-base">
            WELCOME CHEF | Orders
          </h1>




          <div className="w-full h-[400px] box-outer-shadow mt-12 rounded-3xl px-9">
            <div className="w-full pt-9 flex justify-evenly h-[72px] py-7  grid grid-cols-3">
              <h1>Name</h1>
              <h1>Food choice</h1>
              <h1>Comments</h1>
            </div>
            <div className="w-full mt-6 bg-primary/10  grid grid-cols-3 text-sm">
              <h1 className="">brightjhkjshdfkj naymeeejehjhhjhjkg</h1>
              <h1>Bhhhhkanku and Tilapi</h1>
              <h1>Idont like</h1>
            </div>
          </div>
          
          
        </main>
      </div>
    </React.Fragment>
  )
}

export default ChefOrders