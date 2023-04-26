import React from "react";
import { BiSearch } from "react-icons/bi";
import video from "../../assets/vids/home-video.mp4";
import design from "../../assets/imgs/design.png";
import domain from "../../assets/imgs/domain.png";
import "./Hero.css";

const Hero = () => {
  return (
    // <div className="hero-section relative w-full h-screen overflow-hidden">
    //   <video loop muted autoPlay playsInline className="absolute inset-0">
    //     <source src={video} type="video/mp4" />
    //   </video>
    //   <div className="absolute inset-0 bg-black/40"></div>
    //   <div className="container h-full flex justify-center items-center">
    //     <article className="relative text-white text-center max-w-[800px]">
    //       <h1 className="text-[115px] leading-[1.2] font-semibold">تسجيل النطاقات السعودية</h1>
    //       <h3 className="m-8">
    //         احصل على النطاق السعودي المناسب لعملك أو موقعك الشخصي الآن.
    //       </h3>
    //       <form className="flex w-full rounded-md overflow-hidden">
    //         <input
    //           type="text"
    //           required
    //           placeholder="ادخل النطاق الذي تريده"
    //           className="w-full py-[12px] px-6 outline-0 border-0 text-black"
    //         />
    //         <button
    //           type="submit"
    //           className="flex gap-1 items-center bg-[#05D3D8] px-4"
    //         >
    //           <span className="text-xl">
    //             <BiSearch />
    //           </span>
    //           بحث
    //         </button>
    //       </form>
    //     </article>
    //   </div>
    // </div>
    // <div className="hero-section relative w-full h-screen overflow-hidden">
    //   <div className="container h-full flex justify-center items-center">
    //     <article className="relative text-center max-w-[800px]">
    //       <h1 className="hero-text">تسجيل النطاقات السعودية</h1>
    //       <h3 className="mt-8 mb-10 text-[1.2rem] text-[#687076]">
    //         احصل على النطاق السعودي المناسب لعملك أو موقعك الشخصي الآن.
    //       </h3>
    //       <form className="hero-form flex w-full rounded-md overflow-hidden text-white">
    //         <input
    //           type="text"
    //           required
    //           placeholder="ادخل النطاق الذي تريده"
    //           className="w-full py-[12px] px-6 outline-0 border-0 text-black"
    //         />
    //         <button
    //           type="submit"
    //           className="flex gap-1 items-center bg-[#05D3D8] px-4"
    //         >
    //           <span className="text-xl">
    //             <BiSearch />
    //           </span>
    //           بحث
    //         </button>
    //       </form>
    //     </article>
    //   </div>
    // </div>
    <div className="hero-section relative w-full h-[85vh] overflow-hidden">
      <section className="hero-container">
        {/* <div className="padding-section flex justify-between"> */}
        <div className="padding-section flex justify-center items-center">
          {/* <article className="relative text-black max-w-[50%]"> */}
          <article className="relative text-black text-center">
            {/* <h1 className="hero-text text-[50px] font-bold leading-[1.4]"> */}
            <h1 className="hero-text text-[50px] max-[650px]:text-[2rem] font-bold leading-[1.4] max-w-[600px] max-[650px]:max-w-[400px] max-[650px]:mx-auto">
              المكان المثالي لحجز نطاق سعودي لموقعك
            </h1>
            <h3 className="my-8">
              احصل على النطاق السعودي المناسب لعملك أو موقعك الشخصي الآن.
            </h3>
            <form className="relative flex max-[767px]:flex-col h-[68px] w-full rounded-md">
              <input
                type="text"
                required
                placeholder="ادخل النطاق الذي تريده"
                className="w-full py-[12px] px-6 outline-0 border-0 text-black rounded-md"
              />
              <button
                type="submit"
                className="max-[767px]:relative max-[767px]:w-fit max-[767px]:left-0 max-[767px]:top-0  max-[767px]:translate-y-0 max-[767px]:mx-auto max-[767px]:mt-4 absolute left-[-3rem] top-[50%] translate-y-[-50%] text-white rounded-md flex gap-1 items-center bg-[#05D3D8] duration-300 hover:bg-[#00759b] px-[28px] py-[10px]"
              >
                <span className="text-xl">
                  <BiSearch />
                </span>
                بحث
              </button>
            </form>
          </article>
          {/* <div className="hero-img-container max-w-[50%]">
            <img className="w-[100%]" src={domain} alt="" />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
