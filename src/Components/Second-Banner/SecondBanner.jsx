import React from 'react';
import Cyfer from '../../assets/Valorant_EP8_Teaser_Cypher Reborn.jpg'
import omen from '../../assets/Valorant_EP8_Teaser_Omen and the Outlaw.png'
import sova from '../../assets/Valorant_EP8_Teaser_Sova the Specialist.png'
import arrival from '../../assets/Valorant_EP-8-Teaser_The-arrival.jpg'
import omenTwo from '../../assets/Ep8A1_Riot Games.com Product Card 1920x1080_.jpg'
import omenThree from '../../assets/Ep8a1_Defiance_Youtube Cover_.png'

const SecondBanner = () => {
    return (
        <div>
            <div>
                <div className='grid grid-cols-3 gap-10 mt-10'>
                    <div>
                    <img   src={Cyfer} alt="" />

                        <p className='font-semibold text-lg'>6/1/2024</p>
                        <h1 className='font-bold text-2xl mt-2'>Episode 8 Act I Wallpapers</h1>
                    </div>
                    <div>
                    <img   src={omen} alt="" />

                        <p className='font-semibold text-lg'>6/1/2024</p>
                        <h1 className='font-bold text-2xl mt-2'>Episode 8 Act I Wallpapers</h1>
                    </div>
                    <div>
                    <img   src={sova} alt="" />

                        <p className='font-semibold text-lg'>6/1/2024</p>
                        <h1 className='font-bold text-2xl mt-2'>Episode 8 Act I Wallpapers</h1>
                    </div>
                    <div>
                    <img   src={arrival} alt="" />

                        <p className='font-semibold text-lg'>6/1/2024</p>
                        <h1 className='font-bold text-2xl mt-2'>Episode 8 Act I Wallpapers</h1>
                    </div>
                    <div>
                    <img   src={omenTwo} alt="" />

                        <p className='font-semibold text-lg'>6/1/2024</p>
                        <h1 className='font-bold text-2xl mt-2'>Episode 8 Act I Wallpapers</h1>
                    </div>
                    <div>
                    <img   src={omenThree} alt="" />

                        <p className='font-semibold text-lg'>6/1/2024</p>
                        <h1 className='font-bold text-2xl mt-2'>Episode 8 Act I Wallpapers</h1>
                    </div>
                    
                    

                </div>
            </div>
        </div>
    );
};

export default SecondBanner;