import React from "react";

// --- Helper Components & Data ---

const Logo = () => (
  <div className="flex items-center">
    <svg
      className="h-10 w-auto mr-2 text-[#005f73]"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.25,8.84,12.75,4.09a2,2,0,0,0-1.5,0L2.75,8.84a2,2,0,0,0-1,1.73V17.3a2,2,0,0,0,1,1.73l8.5,4.75a2,2,0,0,0,1.5,0l8.5-4.75a2,2,0,0,0,1-1.73V10.57A2,2,0,0,0,21.25,8.84ZM12,12.41,4.25,8,12,3.59,19.75,8Z M12,22.09l-7.5-4.19v-6L12,16.09l7.5-4.19v6Z" />
    </svg>
    <span className="text-2xl font-bold text-[#005f73]">SupplyChain</span>
  </div>
);

const navLinksData = [
  { href: "#services", label: "Services" },
  { href: "#network", label: "Network" },
  { href: "#GlobalLogistics", label: "Global Logistics" },
  { href: "#security", label: "Security" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
];

const servicesData = [
  {
    icon: "🛡️",
    title: "Unyielding Security & Compliance",
    description:
      "A secure chain of custody with stringent protocols to protect high-value medical products.",
  },
  {
    icon: "🌡️",
    title: "Temperature Integrity Management",
    description:
      "Validated thermal packaging and strict handling protocols to maintain required temperature ranges (e.g., 2-8°C).",
  },
  {
    icon: "⏱️",
    title: "Patient-Centric Reliability",
    description:
      "We recognize patients are at the end of the supply chain. Our services are built for a guaranteed D+2 final delivery success rate.",
  },
  {
    icon: "📡",
    title: "Advanced Tracking & Visibility",
    description:
      "Our proprietary technology offers an end-to-end, auditable trail with real-time tracking and comprehensive proof of delivery.",
  },
  {
    icon: "📅",
    title: "Continuous 365-Day Service",
    description:
      "Including weekends and scheduled delivery windows to meet clinical or patient-specific timelines.",
  },
  {
    icon: "📦",
    title: "End-to-End Monitoring",
    description:
      "Solutions for real-time temperature monitoring, providing a complete data trail for compliance and quality assurance.",
  },
];

const securityFeaturesData = [
  {
    title: "Secure Chain of Custody",
    description:
      "From the moment we receive your package, it is tracked and monitored under strict security protocols using state-of-the-art GPS and sensor technology for a complete, unbroken chain of custody.",
    icon: (
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
        <path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2.4-3.4-4-6.2-4.3-.5-.1-.9-.2-1.4-.2-1.3 0-2.6.5-3.6 1.4" />
        <path d="M12 21.7c3.3.4 6.4-1.5 7.4-4.5.6-1.8.2-3.8-1-5.3L12 3 4.6 12.3c-1.2 1.5-1.6 3.5-1 5.3.9 3 4.1 4.9 7.4 4.5z" />
      </svg>
    ),
  },
  {
    title: "Trained & Vetted Professionals",
    description:
      "Our delivery network consists of experienced, full-time operations specialists and drivers who have undergone thorough background checks, rigorous training in GDP (Good Distribution Practice), and specific handling procedures for sensitive medical goods.",
    icon: (
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Proof of Delivery (POD)",
    description:
      "Our standard POD includes multiple high-resolution package photos, precise geo-location data with timestamps, and recipient e-signatures, creating a robust and auditable delivery record accessible through our client portal.",
    icon: (
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
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Data Security & Compliance",
    description:
      "Our proprietary systems are built on a secure cloud infrastructure with end-to-end encryption, protecting sensitive shipment and patient information in compliance with HIPAA and other data privacy regulations.",
    icon: (
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
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const testimonialsData = [
  {
    quote:
      "The reliability and temperature integrity provided by SupplyChain have been a game-changer for our specialty pharmaceutical deliveries. Their professionalism and attention to detail are unmatched.",
    author: "Dr. Alisha Vance",
    company: "Director of Operations, MedLife Pharma",
  },
  {
    quote:
      "Their secure chain of custody and real-time tracking gives us complete peace of mind. We trust SupplyChain with our most critical and high-value shipments without hesitation.",
    author: "Marcus Thorne",
    company: "Logistics Manager, BioGen Solutions",
  },
  {
    quote:
      "Switching to SupplyChain improved our last-mile delivery success rate significantly. Their patient-centric approach ensures that time-sensitive treatments arrive exactly when needed.",
    author: "Sarah Jenkins",
    company: "Supply Chain Coordinator, Health Direct",
  },
];

// --- Reusable UI Components ---

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SecurityFeature = ({ feature, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-gray-800 focus:outline-none"
    >
      <span className="flex items-center">
        <span className="mr-4 text-[#0a9396]">{feature.icon}</span>
        {feature.title}
      </span>
      <span
        className={`transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
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
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-40" : "max-h-0"
      }`}
    >
      <p className="pt-2 pb-5 pr-4 text-gray-600">{feature.description}</p>
    </div>
  </div>
);

const TestimonialCard = ({ quote, author, company }) => (
  <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col h-full">
    <p className="text-gray-600 italic mb-4 flex-grow">"{quote}"</p>
    <div className="mt-4 text-right">
      <p className="font-bold text-gray-800">- {author}</p>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  </div>
);

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

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
        setFormData({ name: "", email: "", message: "" });
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

// --- Main Page Sections ---

const Header = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero">
          <Logo />
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-gray-600 hover:text-[#0a9396] transition-colors ${
                activeSection === link.href.substring(1)
                  ? "active text-[#ee9b00] font-bold"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`nav-link text-gray-600 hover:text-[#0a9396] transition-colors ${
              activeSection === "contact"
                ? "active text-[#ee9b00] font-bold"
                : ""
            }`}
          >
            Contact
          </a>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            ></path>
          </svg>
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {[...navLinksData, { href: "#contact", label: "Contact" }].map(
            (link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-6 text-sm hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="hero" className="bg-[#005f73] text-white pt-24 pb-32">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-black leading-tight">
        Secure, Compliant, and Reliable
      </h1>
      <p className="mt-4 text-xl md:text-2xl font-light text-gray-200">
        Your Trusted Partner in Last-Mile Healthcare Delivery.
      </p>
    </div>
  </section>
);

const Intro = () => (
  <section id="intro" className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <h2 className="text-3xl font-bold text-gray-800">
        Your Strategic Logistics Partner
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        SupplyChain is more than a courier; we are a strategic partner dedicated
        to the unique demands of the pharmaceutical and healthcare sectors. We
        understand that every shipment contains a promise—a promise of health,
        safety, and well-being. Our mission is to provide a secure, compliant,
        and transparent last-mile delivery network that ensures your sensitive
        products reach their destination safely and on time, every time.
      </p>
    </div>
  </section>
);

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

const WarehouseChart = () => {
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);

  React.useEffect(() => {
    // Dynamically load Chart.js script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext("2d");
      const warehouseData = [
        { hub: "YYZ (Toronto)", size: 20000 },
        { hub: "YVR (Vancouver)", size: 10000 },
        { hub: "YUL (Montreal)", size: 7000 },
        { hub: "Brantford", size: 5000 },
        { hub: "YYC (Calgary)", size: 4000 },
        { hub: "YOW (Ottawa)", size: 4000 },
        { hub: "YEG (Edmonton)", size: 3500 },
        { hub: "YWG (Winnipeg)", size: 3000 },
        { hub: "Windsor", size: 3000 },
        { hub: "London", size: 3000 },
      ];

      chartInstance.current = new window.Chart(ctx, {
        type: "bar",
        data: {
          labels: warehouseData.map((d) => d.hub),
          datasets: [
            {
              label: "Warehouse Capacity (sq ft)",
              data: warehouseData.map((d) => d.size),
              backgroundColor: "#0a9396",
              borderColor: "#005f73",
              borderWidth: 1,
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { callback: (value) => value / 1000 + "k sq ft" },
            },
            x: { grid: { display: false } },
          },
        },
      });
    };

    return () => {
      document.body.removeChild(script);
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

const GlobalLogistics = () => (
  <section id="global-logistics" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Global & Domestic Shipping Solutions
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Comprehensive air, sea, and ground logistics for your international
          and Canadian shipments.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <span className="text-4xl mb-4">✈️</span>
          <h3 className="text-xl font-bold text-[#005f73] mb-2">
            Air Shipping
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-left w-full">
            <li>Canada &lt;--&gt; China</li>
            <li>Canada &lt;--&gt; India</li>
            <li>Netherlands &rarr; Canada</li>
            <li>Dubai &rarr; Africa, India, US, Canada</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <span className="text-4xl mb-4">🚢</span>
          <h3 className="text-xl font-bold text-[#005f73] mb-2">
            Sea Shipping
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-left w-full">
            <li>LCL (Less than Container Load)</li>
            <li>FCL (Full Container Load)</li>
            <li>Canada &lt;--&gt; China</li>
            <li>Canada &lt;--&gt; India</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <span className="text-4xl mb-4">🚚</span>
          <h3 className="text-xl font-bold text-[#005f73] mb-2">Trucking</h3>
          <ul className="list-disc list-inside text-gray-700 text-left w-full">
            <li>LTL (Less than Truckload)</li>
            <li>FTL (Full Truckload)</li>
            <li>Hotshot Deliveries Across Canada</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
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
              <div
                key={feature.title}
                className={`mb-4 border-b last:border-b-0 transition-all duration-300 ${
                  openIndex === index ? "bg-gray-50" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(index === openIndex ? null : index)
                  }
                  className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-gray-800 focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#0a9396]">{feature.icon}</span>
                    {feature.title}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pt-2 pb-5 pr-4 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Trusted by Industry Leaders
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Hear what our partners have to say about our commitment to excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.author} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

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

const Footer = ({ onContactClick }) => (
  <footer id="contact" className="bg-gray-800 text-white">
    <div className="container mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold">Partner with SupplyChain</h2>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        Let's build a more reliable future for healthcare logistics together.
        Contact us to learn more about our innovative solutions.
      </p>
      <div className="mt-8">
        <button
          onClick={onContactClick}
          className="bg-[#ee9b00] hover:bg-[#ca6702] text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Contact Us
        </button>
      </div>
      <p className="mt-12 text-gray-400">SupplyChain | supplychain.logistics</p>
    </div>
  </footer>
);

// --- Main App Component ---

export default function App() {
  const [activeSection, setActiveSection] = React.useState("hero");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 70) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="bg-gray-50 text-gray-700"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Network />
        <GlobalLogistics />
        <Security />
        <Testimonials />
        <Pricing />
      </main>
      <Footer onContactClick={() => setIsModalOpen(true)} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
