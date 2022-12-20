import React from "react";
import css from "./TestimonialCard.module.css";

const TestimonialCard = (props) => {
  return (
    <div className={css.testimonial}>
      <img src={props.testimonial.image} alt="" />
      <span>{props.testimonial.comment}</span>
      <hr />
      <span>{props.testimonial.name}</span>
    </div>
  );
};

export default TestimonialCard;
