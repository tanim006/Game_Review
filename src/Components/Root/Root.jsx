import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import SecondBanner from '../Second-Banner/SecondBanner';
import AllAgents from '../AllAgents/AllAgents';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='pl-20 pr-20 mt-10 mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <SecondBanner></SecondBanner> */}
            <AllAgents></AllAgents>
            
            </div>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;