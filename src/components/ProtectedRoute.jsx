import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate,  } from 'react-router-dom';

const ProtectedRoute = ({Component, Permission}) => {
  const userType = useSelector(state=>state.user.user.type);
  console.log(userType, Permission)

  // let permission = 'user' meaning only user can access this route, else redirect to user dashboard

  if(!userType){
    window.location.href='/'
  }
  if(userType !== Permission){
    return <Navigate to='/' replace />
  }

  else {
    return <Component />
  }
}

export default ProtectedRoute;




