import merchant from "../../../assets/location-merchant.png";

const CustomerSatisfaction = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] p-5 md:p-20"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={merchant} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h2 className="text-2xl md:text-5xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="py-6">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <button className="btn btn-primary text-black rounded-full text-xl px-8 py-6">
            Become a Merchant
          </button>
          <button className="btn btn-outline text-primary ms-0 md:ms-4 mt-4 md:mt-0 rounded-full text-xl px-8 py-6">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
