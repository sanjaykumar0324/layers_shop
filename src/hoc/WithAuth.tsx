import  {  ComponentType } from "react";
import { Navigate } from "react-router-dom";

const WithAuth = (Component : ComponentType) => {
  return (props :any) => {
    console.log("from auth");

    return  localStorage.getItem("token") ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" />
    );
  };
};

export default WithAuth;