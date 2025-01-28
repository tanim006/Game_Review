import React, { useEffect, useState } from 'react';
import Agent from '../Agent/Agent';

const AllAgents = () => {
    const [agents, setAgents] = useState([])
    const [dataLength,setDataLength] = useState(6)
    useEffect(()=>{
        fetch('Data.json')
        .then(res=>res.json())
        .then(data => setAgents(data))
    },[])
    return (
        <div>
            <div className=' mt-10 mb-10 justify-items-end'>
                    <h1 className='text-8xl font-bold font-sans '>AGENTS OF SOA {agents.length}</h1>

                    
        </div>
        <div className='grid grid-cols-3 space-x-1 space-y-1 '>
            {
                agents.map(agent =><Agent agent=  {agent}></Agent>)
            }
        </div>
        
        </div>
    );
};

export default AllAgents;