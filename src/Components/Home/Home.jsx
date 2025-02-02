import React from 'react';
import AllAgents from '../AllAgents/AllAgents';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
          SOA_AGENTS | HOME
        </title>
      </Helmet>
      <Banner />
      <AllAgents />
    </div>
  );
};

export default Home;
