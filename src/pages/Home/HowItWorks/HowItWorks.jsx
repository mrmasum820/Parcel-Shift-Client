// src/components/HowItWorks.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaTruck,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaMapMarkerAlt className="text-5xl text-black" />,
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaTruck className="text-5xl text-black" />,
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaBuilding className="text-5xl text-black" />,
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaBriefcase className="text-5xl text-black" />,
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-20 bg-base-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-left">
            How it Works
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-300 rounded-2xl overflow-hidden"
            >
              <div className="card-body items-center text-center p-8 md:p-10">
                {/* Icon */}
                <div className="mb-6">{step.icon}</div>

                {/* Title */}
                <h3 className="card-title text-xl text-black md:text-2xl font-semibold  mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className=" text-black text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
