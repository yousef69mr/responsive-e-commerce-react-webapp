import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { BsArrowRight } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>Skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          </span>
        </div>
      </div>

      {/***middle side hero image */}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="Hero_Image" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/*** right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100</span>
          <span>Monthly Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
