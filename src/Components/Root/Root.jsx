import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className="pl-20 pr-20 mt-10 mx-auto">
        <Navbar />
        {/* This Outlet will load content for each route */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
