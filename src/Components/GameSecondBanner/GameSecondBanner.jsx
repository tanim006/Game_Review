import React from 'react';
import image from '../../assets/607280.png'
import imageTwo from '../../assets/680381.png'
import moduleName from '../../assets/1357169.png';
import imageTHree from '../../assets/1332614.jpeg'

const GameSecondBanner = () => {
    return (
        <div>
          <div
      className="bg-cover bg-center rounded-3xl mt-20 bg-no-repeat relative p-20 flex items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${moduleName})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-white text-center ">
        <h1 className="text-8xl w-full font-bold">MULTIPLE WAYS TO</h1>
        <h1 className="text-5xl font-bold">PLAY</h1>
        <p className="font-semibold text-lg mt-4">
          Whether you like to dive straight into the fray, support your teammates, or something in between, there’s a spot for you on the Rift.
        </p>
        <p className="text-white font-semibold mt-2">
          Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.
        </p>
        <button className="btn btn-xl  mt-10 bg-black text-white">Play Now</button>
      </div>
      
    </div>
    <div>
    <div
      className="bg-cover bg-center rounded-3xl mt-20 bg-no-repeat relative p-20 flex items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${imageTwo})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-white text-center ">
        <h1 className="text-8xl w-full font-bold">MULTIPLE WAYS TO</h1>
        <h1 className="text-5xl font-bold">PLAY</h1>
        <p className="font-semibold text-lg mt-4">
          Whether you like to dive straight into the fray, support your teammates, or something in between, there’s a spot for you on the Rift.
        </p>
        <p className="text-white font-semibold mt-2">
          Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.
        </p>
        <button className="btn btn-xl  mt-10 bg-black text-white">Play Now</button>
      </div>
      
    </div>
    </div>
    <div>
    <div
      className="bg-cover bg-center rounded-3xl mt-20 bg-no-repeat relative p-20 flex items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-white text-center ">
        <h1 className="text-8xl w-full font-bold">MULTIPLE WAYS TO</h1>
        <h1 className="text-5xl font-bold">PLAY</h1>
        <p className="font-semibold text-lg mt-4">
          Whether you like to dive straight into the fray, support your teammates, or something in between, there’s a spot for you on the Rift.
        </p>
        <p className="text-white font-semibold mt-2">
          Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.
        </p>
        <button className="btn btn-xl  mt-10 bg-black text-white">Play Now</button>
      </div>
      
    </div>
    </div>
    <div>
    <div
      className="bg-cover bg-center rounded-3xl mt-20 bg-no-repeat relative p-20 flex items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${imageTHree})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-white text-center ">
        <h1 className="text-8xl w-full font-bold">MULTIPLE WAYS TO</h1>
        <h1 className="text-5xl font-bold">PLAY</h1>
        <p className="font-semibold text-lg mt-4">
          Whether you like to dive straight into the fray, support your teammates, or something in between, there’s a spot for you on the Rift.
        </p>
        <p className="text-white font-semibold mt-2">
          Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.
        </p>
        <button className="btn btn-xl  mt-10 bg-black text-white">Play Now</button>
      </div>
      
    </div>
    </div>


            
        </div>
        
    );
};

export default GameSecondBanner;