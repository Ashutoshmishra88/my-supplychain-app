import React from "react";
import WarehouseChart from "../charts/WarehouseChart.jsx";

const Network = () => (
  <section id="network" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          A Smart and Scalable Network
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Strategic hub distribution across Canada with a total capacity of
          67,500 sq ft.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="relative w-full h-[450px]">
          <WarehouseChart />
        </div>
      </div>
    </div>
  </section>
);

export default Network;
