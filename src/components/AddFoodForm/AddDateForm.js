import React from 'react'

const AddDateForm = ({setMenuDate, menuDate}) => {
  // console.log(menuDate.split('T')[0])
  return (
    <React.Fragment>
        <form action="" className='mb-8'>
            <label htmlFor="">Select Menu Date</label>
            <input 
                className="w-full border-b h-12 outline-0 "
                type="date" 
                value={menuDate?.split('T')[0]}
                onSelect={(e)=>setMenuDate(e.target.value)}
                onChange={(e)=>setMenuDate(e.target.value)}
                required
            />


            {/* <button className="mt-5 bg-primary text-white font-bold h-11 w-40 lg:w-[186px]  lg:h-[50px] rounded-lg ">
                Add Date
            </button> */}
        </form>
    </React.Fragment>
  )
}

export default AddDateForm