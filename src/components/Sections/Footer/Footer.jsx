import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/Logo.svg";
import mada from "../../assets/imgs/mada.svg";
import master from "../../assets/imgs/mastercard.svg";
import visa from "../../assets/imgs/visa.svg";
import amex from "../../assets/imgs/amex.svg";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer overflow-hidden relative pt-[100px]">
      <div className="hero-container">
        <div className="pt-16">
          <article className="flex justify-between flex-wrap gap-8 pb-16 max-[560px]:flex-col max-[560px]:items-center max-[560px]:text-center">
            <div className="max-[560px]:flex max-[560px]:flex-col max-[560px]:items-center max-[560px]:justify-center">
              <Link to="/">
                <img src={logo} alt="logo" className="w-fit" />
              </Link>
              <p className="max-w-[350px] py-8 text-white/80 text-[1rem]">
                نحن مزود استضافة مواقع في مهمة لتحقيق النجاح لكل من يتصل
                بالإنترنت.
                <br />
                وذلك عبر تحسين تكنولوجيا الخادم باستمرار، وتقديم الدعم
                الاحترافي، وجعل استضافة المواقع تجربة سلسة.
              </p>
              <ul className="flex items-center gap-4">
                <li>
                  <img src={mada} alt="Mada" />
                </li>
                <li>
                  <img src={master} alt="Master" />
                </li>
                <li>
                  <img src={visa} alt="Visa" />
                </li>
                <li>
                  <img src={amex} alt="Amex" />
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[20px] text-white mb-8">صفحات الموقع</h1>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link className="text-white/80 text-[18px]">عن دي نت؟</Link>
                </li>
                <li>
                  <Link className="text-white/80 text-[18px]">
                    النطاقات السعودية
                  </Link>
                </li>
                <li>
                  <Link className="text-white/80 text-[18px]">
                    البريد الإلكتروني
                  </Link>
                </li>
                <li>
                  <Link className="text-white/80 text-[18px]">
                    الأسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link className="text-white/80 text-[18px]">التوظيف</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[20px] text-white mb-8">قانوني</h1>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link className="text-white/80 text-[18px]">
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link className="text-white/80 text-[18px]">
                    الشروط والأحكام
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[20px] text-white mb-8">بيانات التواصل</h1>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4 text-white/80 text-[18px]">
                  <span className="text-[20px]">
                    <FiPhoneCall />
                  </span>
                  <a href="tel:920033202">920033202</a>
                </li>
                <li className="flex items-center gap-4 text-white/80 text-[18px]">
                  <span className="text-[20px]">
                    <MdOutlineEmail />
                  </span>
                  <a href="mailto:support@dnet.sa">support@dnet.sa</a>
                </li>
                <li className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/DNetsa"
                    className="text-white text-[20px] cursor-pointer"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    href="https://twitter.com/dnetsa"
                    className="text-white text-[20px] cursor-pointer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.instagram.com/dnetsa"
                    className="text-white text-[20px] cursor-pointer"
                  >
                    <AiOutlineTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/dnetsa"
                    className="text-white text-[20px] cursor-pointer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <div className="text-white text-[18px] text-center py-8 border-white/80 border-t-[1px]">
            <div>جميع الحقوق محفوظة لموقع دي نت © 2023</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
