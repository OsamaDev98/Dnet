import React from "react";
import user from "../../assets/imgs/user.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { reviewData } from "../../Data/Review_Data";
import "./Review.css";

const Review = () => {
  return (
    <section className="review-section section">
      <div className="hero-container">
        <div className="section-title-container">
          <h1 className="section-title">اراء العملاء</h1>
          <p className="section-subtitle">
            شركات وعملاء قاموا بحجز استضافة لدينا ونسعد بخدمتهم.
          </p>
        </div>
        <div className="relative flex items-center">
          <button className="absolute left-[6rem] w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#2F55CF]">
            <AiOutlineLeft className="text-white text-3xl" />
          </button>
          {reviewData?.map((item) => (
            <div
              key={item.id}
              className="review-content p-8 text-center flex flex-col items-center gap-8 bg-white max-w-[600px] mx-auto"
            >
              <p className="text-[#5A86AA] leading-7">{item.content}</p>
              <article className="flex flex-col items-center gap-1">
                <img src={user} alt="User" />
                <h1 className="text-lg font-bold">{item.name}</h1>
                <h3 className="text-[#5A86AA] text-sm">{item.job}</h3>
                <div className="flex items-center mt-2">
                  <AiFillStar className="text-[#F45604] text-xl" />
                  <AiFillStar className="text-[#F45604] text-xl" />
                  <AiFillStar className="text-[#F45604] text-xl" />
                  <AiFillStar className="text-[#F45604] text-xl" />
                  <AiFillStar className="text-[#F45604] text-xl" />
                </div>
              </article>
            </div>
          ))}
          <button className="absolute right-[6rem] w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#2F55CF]">
            <AiOutlineRight className="text-white text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
