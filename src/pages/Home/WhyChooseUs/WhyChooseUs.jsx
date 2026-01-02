import tracking from "../../../assets/choose/tracking.png";
import delivery from "../../../assets/choose/delivery.png";
import support from "../../../assets/choose/support.png";

const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: tracking,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: delivery,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns — anytime you need.",
    image: support,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-[#cccccc]">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                flex flex-col md:flex-row bg-white rounded-3xl
                items-center p-4
                gap-8 md:gap-10 lg:gap-12
              `}
            >
              {/* Left: Image */}
              <div className="w-full md:w-[200px] flex-shrink-0 flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-auto md:max-h-none object-contain"
                  width={200}
                  height={180}
                />
              </div>

              {/* Vertical line + content wrapper */}
              <div className="flex items-stretch justify-center w-full gap-8 md:gap-10">
                {/* Vertical dashed line (hidden on mobile) */}
                <div className="hidden md:block w-0 border-l-2 border-dashed border-primary/40 border-secondary" />

                {/* Right: Text */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-secondary text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
