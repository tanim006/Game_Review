import React from "react";

const Agent = ({ agent }) => {
  const { image, name, agentName,details } = agent;
  return (
    <div className="bg-[#142232] p-5 text-white rounded-2xl">
      <div>
        <div className="card">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold ">{name}</h2>
            <p className="text-lg">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
