import React from "react";
import ServiceCard from "../ui/ServiceCard.jsx";
import { servicesData } from "../../data/servicesData.jsx";

const Services = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Specialized Solutions for Critical Shipments
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          A foundation of reliability, control, and integrity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
