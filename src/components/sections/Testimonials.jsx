import React from "react";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonialsData } from "../../data/servicesData.jsx";

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

export default Testimonials;
