import React from "react";
import { domainsCards } from "../../Data/DomainsCards_Data";
import { Link } from "react-router-dom";
import "./DomainsPrices.css";

const DomainsPrices = () => {
  return (
    <section className="domains-cards-section">
      <div className="hero-container">
        <ul className="domains-cards">
          {domainsCards?.map((card) => (
            <li
              key={card.id}
              className="card flex flex-col gap-4 items-start max-[665px]:items-center"
              color={`${card.color}`}
            >
              <img
                src={card.img}
                alt={card.title}
                className="mx-auto w-[150px]"
              />
              <h2 className="text-[22px] leading-[1.1em] font-semibold mt-4">
                {card.title}
              </h2>
              <h3 className="card-price text-xl">
                <span className="text-5xl font-bold">{card.price} </span>
                ريال / سنوى
              </h3>
              <p className="">{card.content}</p>
              <Link className="domains-card-btn" to="/">
                تفاصيل الباقة
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DomainsPrices;
