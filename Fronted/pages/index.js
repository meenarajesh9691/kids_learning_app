import React from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
const index = () => {
  return (
    <>
      <div className="box">
        <Navbar />
       <Home/>
      </div>
    </>
  );
};

export default index;
