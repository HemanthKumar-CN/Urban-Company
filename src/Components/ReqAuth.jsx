import { useToast } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loadData, saveData } from "../Utils/localstorage";

const ReqAuth = ({ children }) => {
  const {isAuth} = useSelector((state) => state.AuthReducer);
// const isAuth = loadData("_grecaptcha") || null
//   console.log(isAuth, "auth...");
  const toast = useToast(); 
    
  //   const location = useLocation();

  if (!isAuth) {
    toast({
      title: "Failed to procced",
      description: "You need to login first",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return <Navigate to="/" />;
  }

  return children;
};

export default ReqAuth;
