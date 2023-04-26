import React from "react";
import { MainBtn } from "../../export";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section relative mb-[-100px] max-[1024px]:mb-[8rem] z-10">
      <div className="hero-container">
        <div className="contact-container flex justify-between items-center rounded-xl bg-white max-[850px]:flex-col max-[850px]:text-center">
          <article className="flex flex-col text-black">
            <h1 className="text-4xl font-bold max-[550px]:leading-[3rem]">
              متواجدين دائمًا <span className="text-[#0f7ea7]">لمساعدتك</span>
            </h1>
            <p className="text-[#91A2C7] text-[1.2rem] leading-[2.5rem] mt-4 max-[850px]:my-4">
              فريق عمل فني جاهز لمساعدتك.
            </p>
          </article>
          <MainBtn path="/" title="اتصل بالدعم الفني" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
