import React from 'react';
import GameBanner from '../GameBanner/GameBanner';
import GameSecondBanner from '../GameSecondBanner/GameSecondBanner';
import { Helmet } from "react-helmet-async";



const Games = () => {
  return (
          <div>
          <Helmet><title>SOA_AGENTS | GAMES</title></Helmet>

           
            <GameSecondBanner></GameSecondBanner>
    
    
          </div>
  );
};

export default Games;
