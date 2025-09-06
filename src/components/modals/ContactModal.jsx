import React from "react";

const ContactModal = ({ isOpen, onClose, preSelectedEnquiry = "" }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    enquiryFor: "",
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Update enquiryFor when preSelectedEnquiry changes
  React.useEffect(() => {
    if (preSelectedEnquiry) {
      setFormData((prev) => ({ ...prev, enquiryFor: preSelectedEnquiry }));
    }
  }, [preSelectedEnquiry]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "", enquiryFor: "" });
      }, 2000);
    } catch (err) {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full relative transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
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
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="mx-auto bg-green-100 rounded-full h-16 w-16 flex items-center justify-center">
              <svg
                className="text-green-600 h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              Thank You!
            </h2>
            <p className="text-gray-600 mt-2">
              Your message has been sent. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Please fill out the form below.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="enquiryFor"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Enquiry For
                </label>
                <select
                  id="enquiryFor"
                  name="enquiryFor"
                  value={formData.enquiryFor}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a9396]"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Air Shipping">Air Shipping</option>
                  <option value="Sea Shipping">Sea Shipping</option>
                  <option value="Trucking">Trucking</option>
                  <option value="Final Mile Delivery">
                    Final Mile Delivery
                  </option>
                  <option value="Warehouse Waste Removal">
                    Warehouse Waste Removal
                  </option>
                  <option value="Storage and Warehousing">
                    Storage and Warehousing
                  </option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a9396]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a9396]"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a9396]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ee9b00] hover:bg-[#ca6702] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
