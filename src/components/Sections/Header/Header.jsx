import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/imgs/Logo.svg";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // <header className="absolute z-50 left-0 top-0 right-0 py-8">
    <header className="py-7">
      {/* <div className="container flex justify-between items-center"> */}
      <div className="hero-container flex justify-between items-center">
        <div>
          <Link to="/">
            <img className="h-[35px] w-[95px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div
          className={
            toggle
              ? "ul-container active flex justify-between items-center w-full max-[767px]:justify-start max-[767px]: gap-8"
              : "ul-container w-full max-[767px]:justify-start max-[767px]: gap-8"
          }
        >
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="hidden max-[767px]:flex text-2xl cursor-pointer absolute top-4 right-4"
          />
          <ul className="nav-ul flex justify-center items-center gap-12 max-[767px]:gap-8 text-white max-[767px]:flex-col max-[767px]:text-black">
            <li>
              <Link to="/" className="relative">
                النطاقات السعودية
              </Link>
            </li>
            <li>
              <Link to="/" className="relative">
                البريد الإلكتروني
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-8 text-white max-[767px]:flex-col max-[767px]:text-black">
            <li>
              <Link
                className="bg-transparent border py-2 px-6 rounded-lg inline-block duration-300 hover:bg-white hover:text-[#00759b]"
                to="/"
              >
                تسجيل الدخول
              </Link>
            </li>
            <li>
              <Link className="uppercase" to="/">
                english
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          className="flex-col gap-1 cursor-pointer overflow-hidden hidden max-[767px]:flex"
        >
          <span className="bg-white w-[25px] h-[3px]"></span>
          <span className="bg-white relative left-[-10px] w-[25px] h-[3px] duration-300 hover:left-0"></span>
          <span className="bg-white w-[25px] h-[3px]"></span>
        </div>
      </div>
      <div
        onClick={() => setToggle(!toggle)}
        className={toggle ? "overflow active" : "overflow"}
      ></div>
    </header>
  );
};

export default Header;
