import React, { useEffect, useState } from "react";
;
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function Layout() {

  return (
  
   <>
      <Nav />
      <Outlet />
     
{/*      
      <Routes>
  <Route path="/" element={<Home /> } />
  <Route path="/video/:id" element={<VideoPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/buy/:id" element={<BuyCourse/>} />
      </Routes> */}
   
   
    
    
   </>
  );
}

export default Layout;
