import React from "react";

const ServiceDetailModal = ({ isOpen, onClose, service, onContact }) => {
  if (!isOpen || !service) return null;

  const handleContactClick = () => {
    onContact(service.title);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {service.title}
              </h2>
              <p className="text-gray-600 mt-1">{service.shortDescription}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Overview</h3>
            <p className="text-gray-600 leading-relaxed">
              {service.detailedInfo.description}
            </p>
          </div>

          {/* Routes/Services */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Services Offered
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.routes.map((route, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg border border-gray-200"
                >
                  <span className="text-[#005f73] font-medium">{route}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features and Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {service.detailedInfo.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-[#0a9396] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Benefits</h3>
              <ul className="space-y-2">
                {service.detailedInfo.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-[#ee9b00] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-[#005f73] to-[#0a9396] p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-4">
              Contact us to discuss your {service.title.toLowerCase()} needs and
              get a customized quote.
            </p>
            <button
              onClick={handleContactClick}
              className="bg-[#ee9b00] hover:bg-[#ca6702] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Us About {service.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
