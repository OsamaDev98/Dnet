import React from "react";
import { Link } from "react-router-dom";
import services from "../../assets/imgs/services-img.png";
import domain from "../../assets/imgs/domain.png";
import design from "../../assets/imgs/design.png";
import agent from "../../assets/imgs/trust.png";
import { BsArrowLeft } from "react-icons/bs";
import "./Domains.css";

const Domains = () => {
  return (
    <section className="section domains-section">
      {/* <div className="container flex justify-evenly items-center flex-wrap max-[1024px]:flex-col max-[1024px]:gap-9"> */}
      {/* <div className="container domains-container"> */}
      <div className="hero-container domains-container">
        <div className="max-[1024px]:text-center">
          <h1 className="text-4xl font-bold">النطاقات السعودية</h1>
          <p className="text-[#292f36] leading-[2rem] text-[1.2rem] py-6 max-w-[400px] max-[1024px]:mx-auto">
            احصل على النطاق السعودي المناسب لعملك أو موقعك الشخصي الآن.
          </p>
          <p className="text-[#292f36] leading-[2rem] text-[1.2rem] max-w-[400px] max-[1024px]:mx-auto">
            وكيل معتمد لدى هيئة الاتصالات والفضاء والتقنية
          </p>
          <img
            src={agent}
            alt="Authorized Agent"
            className="my-6 px-8 py-2 max-[1024px]:mx-auto max-[1024px]:p-0"
          />
          <Link
            to="/"
            className="buy-domain relative flex items-center gap-2 text-xl font-semibold text-[#1192f8] w-fit max-[1024px]:mx-auto"
          >
            اشتري الان
            <span className="domains-btn-arrow">
              <BsArrowLeft />
            </span>
          </Link>
        </div>
        <div className="relative">
          <img src={design} alt="Domain" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Domains;
