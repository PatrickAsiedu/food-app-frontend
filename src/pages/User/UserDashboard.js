import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserSideBarNav from "../../components/UserSideBarNav";
import UserTitlebar from "../../components/Usertitle bar/Usertitlebar";

import UserDashboardItems from "../../components/UserDashboard/UserDashboardItems";

const UserDashboard = () => {
  const userName = useSelector((state) => state.user.user.name);
  let greeting = `Welcome, ${userName}`;

  const [menuQueryDate, setMenuQueryDate] = useState("");

  useEffect(() => {
    const dateNow = new Date();
    // console.log(dateNow.getHours())
    if (dateNow.getHours() < 11) {
      setMenuQueryDate(dateNow.toISOString().split("T")[0]);
      // console.log(dateNow.toISOString().split('T')[0])
      console.log(
        "current time before 02:00PM.... so we are getting today's menu ie. ",
        menuQueryDate
      );
    } else {
      let tomorrow = new Date();
      tomorrow.setDate(dateNow.getDate() + 1);
      setMenuQueryDate(tomorrow.toISOString().split("T")[0]);
      // console.log(tomorrow.toISOString().split('T')[0])
      console.log(
        "Current time after 02:00PM .... so we are getting tommorow's menu ie. ",
        menuQueryDate
      );
    }
  }, [menuQueryDate]);

  return (
    <React.Fragment>
      <div className="px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen ">
        <UserSideBarNav />

        <main className=" lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]  lg:px-0 lg:ml-[30%]  2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  ">
          <h1 className=" lg:mt-0 sm:hidden font-semibold text-xl text-primary ">
            {greeting}
          </h1>
          <UserTitlebar title={greeting} />

          <UserDashboardItems menuDate={menuQueryDate} />
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserDashboard;
