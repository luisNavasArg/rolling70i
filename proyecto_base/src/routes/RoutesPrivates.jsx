import React from 'react';
import {Navigate,Outlet} from 'react-router-dom'

const RoutesPrivates = ({admin}) => {
    if(admin){
        return <Outlet/>
    }else{
        return <Navigate to='/'/>
    }
  
}

export default RoutesPrivates