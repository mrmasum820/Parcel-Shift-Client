import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaStarHalfAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import customerTop from "../../../assets/customer-top.png";

const testimonials = [
  {
    id: "5f47ac10b4f1c03e8c123456",
    name: "John Doe",
    review: "Smooth delivery and polite staff.",
    ratings: 4.5,
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    date: "2024-05-08",
  },
  {
    id: "5f47ac10b4f1c03e8c234567",
    name: "Jane Smith",
    review: "Took a bit longer than expected, but okay overall.",
    ratings: 3.8,
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    date: "2024-06-10",
  },
  {
    id: "5f47ac10b4f1c03e8c345678",
    name: "Alex Brown",
    review: "Excellent service! Fast and secure.",
    ratings: 5.0,
    photo: "https://randomuser.me/api/portraits/men/34.jpg",
    date: "2024-07-01",
  },
  {
    id: "5f47ac10b4f1c03e8c456789",
    name: "Lisa White",
    review: "Very responsive and professional.",
    ratings: 4.2,
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    date: "2024-07-15",
  },
  {
    id: "5f47ac10b4f1c03e8c567890",
    name: "David Lee",
    review: "Late delivery and no updates. Disappointed.",
    ratings: 2.9,
    photo: "https://randomuser.me/api/portraits/men/19.jpg",
    date: "2024-08-02",
  },
  {
    id: "5f47ac10b4f1c03e8c678901",
    name: "Nina Khan",
    review: "Superb experience! Highly recommended.",
    ratings: 4.9,
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    date: "2024-08-10",
  },
  {
    id: "5f47ac10b4f1c03e8c789012",
    name: "Michael Jordan",
    review: "Decent service but packaging could be better.",
    ratings: 3.3,
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    date: "2024-08-14",
  },
  {
    id: "5f47ac10b4f1c03e8c890123",
    name: "Emma Watson",
    review: "Fast, safe, and friendly delivery service.",
    ratings: 4.7,
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    date: "2024-08-20",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Helper to render stars
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
      <div className="flex justify-center md:justify-start gap-1 text-yellow-400 mt-3">
        {[...Array(full)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {half && <FaStarHalfAlt />}
        {[...Array(empty)].map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-base-300" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-20 bg-base-200">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Top Illustration */}
        <div className="flex justify-center mb-10">
          <img
            src={customerTop}
            alt="Delivery illustration"
            className="h-24 w-auto object-contain"
          />
        </div>

        {/* Title & Subtitle */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white">
            What our customers are saying
          </h2>
          <p className="mt-4 text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4 md:px-8">
                  <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      {/* Avatar */}
                      <div className="avatar flex-shrink-0">
                        <div className="w-20 h-20 rounded-full ring ring-white ring-offset-base-100 ring-offset-2 overflow-hidden">
                          <img
                            src={testimonial.photo}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="text-5xl text-primary/30 mb-4">
                          <FaQuoteLeft />
                        </div>
                        <p className="text-lg md:text-xl leading-relaxed text-base-content/90 mb-6">
                          "{testimonial.review}"
                        </p>
                        {renderStars(testimonial.ratings)}
                        <div className="mt-6">
                          <h4 className="font-bold text-lg text-base-content">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-base-content/60">
                            Customer {/* You can map fake roles if needed */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="btn btn-circle btn-outline btn-white text-xl"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            {/* Dots (optional visual feedback) */}
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex ? "bg-white scale-125" : "bg-base-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="btn btn-circle btn-outline btn-white text-xl"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
