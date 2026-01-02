// src/components/ServicesGrid.jsx
import React from "react";
import {
  FaRocket,
  FaMapMarkedAlt,
  FaWarehouse,
  FaMoneyBillWave,
  FaHandshake,
  FaUndoAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FaRocket className="text-4xl text-secondary" />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FaMapMarkedAlt className="text-4xl text-secondary" />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FaWarehouse className="text-4xl text-secondary" />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FaMoneyBillWave className="text-4xl text-secondary" />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FaHandshake className="text-4xl text-secondary" />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FaUndoAlt className="text-4xl text-secondary" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-20 bg-[#03373D] rounded-3xl">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Services
          </h2>

          <p className="text-lg md:text-xl text-base-content/80 max-w-4xl mx-auto mt-6 leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 rounded-2xl overflow-hidden group"
            >
              <div className="card-body items-center text-center bg-white p-8 md:p-10">
                <div className="mb-6 text-secondary transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl text-secondary md:text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
