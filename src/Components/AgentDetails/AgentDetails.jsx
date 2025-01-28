import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const AgentDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const agentDetails = details.find(
    (agentDetails) => agentDetails.id === idInt
  );

  // Assuming `agentDetails.abilities` contains the abilities array
  const abilities = agentDetails.abilities;

  return (
    <div>
      <div className="mt-20">
        <h1 className="text-8xl font-semibold font-sans ">SOA AGENT</h1>
        <p className="text-8xl font-bold font-sans text-red-500">{agentDetails.name}</p>
        <div className="grid grid-cols-2 space-x-10">
          <div>
            <img src={agentDetails.image} alt={agentDetails.name} />
          </div>
          <div className="mt-20">
            <h1 className="text-8xl font-bold">
              {agentDetails.position}
            </h1>
            <h1 className="text-lg  font-normal">{agentDetails.details}</h1>
            <h1 className="text-lg  font-normal">{agentDetails.details}</h1>

            <h1 className="text-lg  font-normal">{agentDetails.details}</h1>

          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-7xl font-bold">ABILITIES</h2>
          <div className="space-y-5 mt-5 grid grid-cols-3">
            {abilities.map((ability, index) => (
              <div key={index} className="border p-5 rounded-lg bg-[#FF4655] text-white font-semibold">
                <h3 className="text-2xl font-semibold">{ability.name}</h3>
                <p className="text-lg">{ability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
