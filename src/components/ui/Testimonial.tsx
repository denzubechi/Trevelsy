import React, { useState } from "react";
import { testimonials } from "../../lib/mock/Testimonial";

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("animate-fadeIn");

  const handleTransition = (nextIndex: number) => {
    setFadeClass("animate-fadeOut");
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setFadeClass("animate-fadeIn");
    }, 100);
  };

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    handleTransition(nextIndex);
  };

  const previousTestimonial = () => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    handleTransition(prevIndex);
  };

  const currentTestimonial1 = testimonials[currentIndex];
  const currentTestimonial2 =
    testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <section className="testimonial-container">
      <div className="testimonial-text-ctn">
        <h3 className="testimonial-title">TESTIMONIAL</h3>
        <div className="testimonial-header">
          <p>What</p>
          <p>customers</p>
          <span>say about us.</span>
        </div>
        <div className="testimonial-next">
          <i
            className="fas fa-chevron-left cursor-pointer"
            onClick={previousTestimonial}
          ></i>
          <span>/</span>
          <i
            className="fas fa-chevron-right cursor-pointer"
            onClick={nextTestimonial}
          ></i>
        </div>
      </div>

      <div className={`testimonial-user-ctn ${fadeClass}`}>
        <div className="user-text">
          <h3 className="testimonial-user-title">
            {currentTestimonial1.title}
          </h3>
          <p className="testimonial-user-paragraph">
            {currentTestimonial1.content}
          </p>
        </div>
        <div className="testimonial-user">
          <img src={currentTestimonial1.img} alt={currentTestimonial1.user} />
          <p className="testimonial-user-name">{currentTestimonial1.user}</p>
        </div>
      </div>

      <div className={`testimonial-user-ctn hidden lg:block ${fadeClass}`}>
        <div className="user-text">
          <h3 className="testimonial-user-title">
            {currentTestimonial2.title}
          </h3>
          <p className="testimonial-user-paragraph">
            {currentTestimonial2.content}
          </p>
        </div>
        <div className="testimonial-user">
          <img src={currentTestimonial2.img} alt={currentTestimonial2.user} />
          <p className="testimonial-user-name">{currentTestimonial2.user}</p>
        </div>
      </div>
    </section>
  );
};
