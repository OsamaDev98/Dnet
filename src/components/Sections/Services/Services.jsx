import React from "react";
import { domainsData } from "../../Data/Domains_Data";
import { MainBtn } from "../../export";
import "./Services.css";

const Services = () => {
  return (
    <section className="section services-section">
      <div className="hero-container">
        <div className="bg-[#ebf5ff] rounded-[2rem] py-12 px-4">
          <div className="section-title-container">
            <h1 className="section-title">الخدمات المتوفرة للنطاق السعودي</h1>
            <p className="section-subtitle">
              الآن ومع التطور التكنولوجي المتسارع لتطوير الأعمال عبر الانترنت لم
              يعد شراء الدومين السعودي مقتصرا فقط على الشركات التجارية، بل متاح
              للجميع الاستفادة من مميزاته .
            </p>
          </div>
          <ul className="flex flex-col gap-[5rem] max-[665px]:gap-[3rem]">
            {domainsData?.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center max-[665px]:gap-8 px-[100px] max-[665px]:px-0 max-[1024px]:flex-col"
              >
                <div>
                  <img
                    className="services-show"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="services-text">
                  <div className="flex items-center gap-4 max-[1024px]:justify-center">
                    <h1 className="text-[10rem] max-[665px]:text-[8rem] max-[665px]:text-[6rem] leading-[250px] max-[665px]:leading-[200px] max-[500px]:leading-[150px] font-bold text-[#00759b]">
                      {item.number}
                    </h1>
                    <h2 className="text-5xl max-[665px]:text-3xl max-[500px]:text-2xl font-bold w-[100px] leading-[4rem]">
                      {item.text}
                    </h2>
                  </div>
                  <p className="pb-10 max-[500px]:max-w-[300px] max-[665px]:pb-4 w-[450px] text-[#292f36] text-[1.5rem] max-[665px]:text-[1.2rem] leading-[2.5rem] -mt-[3rem] max-[1024px]:-mt-[2rem]">
                    {item.content}
                  </p>
                  <MainBtn path="/" title="تفاصيل الخدمة" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
