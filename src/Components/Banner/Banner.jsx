import React from 'react';
import banner from '../../assets/E8a1_Cineposter_4x5_IG.jpg';

const Banner = () => {
    return (
        <div className='mt-20 relative'>
            <div className='absolute inset-0 bg-[#FF4655]  rounded-xl' />
            <div className='flex items-center justify-between p-10 rounded-xl text-white relative'>
                <div>
                    <h1 className='text-8xl font-bold font-sans'>MEDIA OF VALORANT</h1>
                    <p className='w-6xl text-lg mt-5 font-semibold'>
                        Our work is your play. Whether you're press, a content creator or something in between, if you see it here it's yours to use. Don't forget, if you create something with these files, tag @VALORANT on social media. We cannot wait to see what you make, just remember to keep in mind our Legal Jibber Jabber.
                    </p>
                    <p className='w-6xl text-lg font-semibold mt-5'>
                        Our work is your play. Whether you're press, a content creator or something in between, if you see it here it's yours to use. Don't forget, if you create something with these files, tag @VALORANT on social media. We cannot wait to see what you make, just remember to keep in mind our Legal Jibber Jabber.
                    </p>
                    <a className="btn btn-secondary shadow-none mt-10 bg-[#111111] border-none w-36 text-xl text-white">
                        Log in
                    </a>
                </div>
                <img className='w-2xl h-2xl' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;
