import React from "react";
import LogisticsCard from "../ui/LogisticsCard.jsx";
import ServiceDetailModal from "../modals/ServiceDetailModal.jsx";
import { logisticsServicesData } from "../../data/logisticsData.js";

const GlobalLogistics = ({ onContactClick }) => {
  const [selectedService, setSelectedService] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleContactFromModal = (enquiryType) => {
    handleModalClose();
    onContactClick(enquiryType);
  };

  return (
    <section id="global-logistics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Global & Domestic Shipping Solutions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Comprehensive air, sea, and ground logistics for your international
            and Canadian shipments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logisticsServicesData.map((service) => (
            <LogisticsCard
              key={service.id}
              service={service}
              onClick={() => handleServiceClick(service)}
            />
          ))}
        </div>
      </div>

      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        service={selectedService}
        onContact={handleContactFromModal}
      />
    </section>
  );
};

export default GlobalLogistics;
