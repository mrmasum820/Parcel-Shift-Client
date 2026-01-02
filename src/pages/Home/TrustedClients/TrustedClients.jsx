import Marquee from "react-fast-marquee";
import brand2 from "../../../assets/brands/casio.png";
import brand1 from "../../../assets/brands/amazon.png";
import brand3 from "../../../assets/brands/moonstar.png";
import brand4 from "../../../assets/brands/star.png";
import brand5 from "../../../assets/brands/start_people.png";
import brand6 from "../../../assets/brands/randstad.png";

const clientLogos = [
  {
    name: "Casio",
    src: brand1,
    alt: "Casio",
  },
  {
    name: "Amazon",
    src: brand2,
    alt: "Amazon",
  },
  {
    name: "Moonstar",
    src: brand3,
    alt: "Moonstar",
  },
  {
    name: "ST★R+",
    src: brand4,
    alt: "ST★R+",
  },
  {
    name: "startpeople",
    src: brand5,
    alt: "startpeople",
  },
  {
    name: "Randstad",
    src: brand6,
    alt: "Randstad",
  },
];

const TrustedClients = () => {
  return (
    <section className="py-12 md:py-16 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-base-content mb-10 md:mb-12">
          We've helped thousands of sales teams
        </h2>

        {/* Marquee */}
        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={false}
          direction="left"
          loop={0}
          className="py-4"
        >
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="mx-10 md:mx-12 lg:mx-16 flex-shrink-0"
              style={{ height: "24px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="
                  h-full w-auto object-contain 
                  grayscale opacity-80 
                  hover:grayscale-0 hover:opacity-100 
                  transition-all duration-300
                "
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TrustedClients;
