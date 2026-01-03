import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import ParcelShiftLogo from "../pages/shared/ParcelShiftLogo/ParcelShiftLogo";

const AuthLayout = () => {
  return (
    <div className="p-4 md:p-12">
      <ParcelShiftLogo></ParcelShiftLogo>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="md:flex-1 w-full">
          <img
            src={authImg}
            className="max-w-sm rounded-lg shadow-2xl mx-auto"
          />
        </div>
        <div className="md:flex-1 w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
