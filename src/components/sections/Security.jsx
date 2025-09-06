import React from "react";
import SecurityFeature from "../ui/SecurityFeature.jsx";
import { securityFeaturesData } from "../../data/servicesData.jsx";

const Security = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">
            Protecting Your High-Value Assets
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Our commitment to security and compliance is absolute.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <div className="relative max-w-md w-full">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#0a9396", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#005f73", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#grad1)"
                  d="M49.2,-64.8C62.9,-54,72.6,-38.4,76.5,-21.5C80.4,-4.6,78.5,13.6,70.5,28.8C62.5,44,48.4,56.2,32.4,64.2C16.4,72.2,-1.5,76,-19.1,72.4C-36.8,68.8,-54.3,57.8,-64.6,43.2C-74.9,28.6,-78.2,10.4,-75.7,-6.2C-73.3,-22.8,-65.2,-37.8,-53.4,-49.2C-41.5,-60.6,-26,-68.4,-9.1,-70.6C7.8,-72.7,25.6,-69.1,39.2,-64.8C42.7,-63.9,46,-63.9,49.2,-64.8Z"
                  transform="translate(100 100)"
                />
                <circle cx="100" cy="100" r="40" fill="white" />
                <path
                  d="M100 85 V 115 M 85 100 H 115"
                  stroke="#ee9b00"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[#ee9b00] text-5xl font-bold">+</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            {securityFeaturesData.map((feature, index) => (
              <SecurityFeature
                key={feature.title}
                feature={feature}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
