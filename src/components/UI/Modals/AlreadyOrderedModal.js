import React from "react";

const AlreadyOrderedModal = (props) => {

  const onNoClick =() =>{
    props.setModalState(false);
    window.location.href='/me'
  }

  const onYesClick =() => {
    props.setModalState(false)
  }
  return (
    <React.Fragment>
      <div className="bg-black/50 h-screen fixed z-10 top-0 w-full"></div>
      <div className="px-6 w-[90%]  lg:w-[858px] h-[350px] lg:h-[347px] fixed bg-white z-20 left-[5%] top-[15%] rounded-[20px] lg:top-[12%] lg:left-[20%] 2xl:left-[30%] space-y-8">
        <div className="flex justify-center mt-[68px]">
          <div className="text-center w-[549px] text-primary font-normal leading-9">
            <span> You already placed order for </span>
            <span>{props.message.food_name}</span> and <span> {props.message.drink_name}</span> <br/> on 
            <span>
              {props.message.created_at}. <br />{" "}
            </span>{" "}
            Do you want to re-place Order?
          </div>
        </div>
        <div className="  flex justify-center">
          <div className="w-[549px] px-4 flex justify-between text-white font-bold">
            <button className="bg-primary w-[101px]  lg:w-[153px] h-[63px] rounded-lg" onClick={onYesClick}>
              Yes
            </button>
            <button className="ml-[60px] lg:ml-[123px]  w-[101px]  bg-notification lg:w-[153px] h-[63px] rounded-lg" onClick={onNoClick}>
              No
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AlreadyOrderedModal;
