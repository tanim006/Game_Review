import React from "react";
import { Link } from "react-router-dom";

const Agent = ({ agent }) => {
  const { image, name, agentName,details,id} = agent;
  return (
   <Link to = {`/data/${id}`}>
   <div className="bg-[#142232] p-5 h-fit text-white rounded-2xl">
      <div>
        <div className="card">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold ">{name}</h2>
            <p className="text-lg ">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
   
   </Link>
        
 
  );
};

export default Agent;
