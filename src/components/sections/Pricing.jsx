import React from "react";

const Pricing = () => (
  <section id="pricing" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Transparent and Competitive Pricing
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          A clear pricing structure designed for our pharmaceutical partners.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="border-2 border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-shadow bg-white">
          <h3 className="text-2xl font-bold text-[#005f73]">
            Local-Standard-ST
          </h3>
          <p className="text-gray-500 mt-2">
            For standard parcels up to 10 kg.
          </p>
        </div>
        <div className="border-2 border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-shadow bg-white">
          <h3 className="text-2xl font-bold text-[#005f73]">
            Local-Standard-XL
          </h3>
          <p className="text-gray-500 mt-2">
            For larger shipments from 11 kg to 30 kg.
          </p>
        </div>
      </div>
      <div className="text-center mt-8 max-w-2xl mx-auto text-gray-600">
        <p className="font-semibold text-gray-700">Key Terms:</p>
        <p>
          Pricing includes last-mile delivery. Compensation for lost or damaged
          goods is based on declared value + freight (up to $100 CAD). A full
          rate card is available for review.
        </p>
      </div>
    </div>
  </section>
);

export default Pricing;
