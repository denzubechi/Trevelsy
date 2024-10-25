import React from "react";
import { Gallery } from "./Gallery";
import { availabilityOptions } from "../../lib/constants/availabilityOptions";

export const Main: React.FC = () => {
  return (
    <main className="main-container">
      <div className="main-text-ctn">
        <h1 className="main-text-heading">Find An Experience</h1>
        <p className="main-text-paragraph">
          To find you the best experiences, we will ask you a few questions and
          show you experiences based on your preferences.
        </p>
      </div>
      <div className="availability-ctn">
        <p className="availability-text text-base lg:text-lg mb-8 leading-7">
          How much time do you have?
        </p>
        <form className="availability-questions text-base lg:text-lg flex flex-wrap items-center">
          {availabilityOptions.map((option) => (
            <div key={option.id} className="mr-8 mb-4">
              <input
                type="checkbox"
                id={option.id}
                name="time"
                value={option.value}
                className="mr-4"
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </form>
      </div>
      <Gallery />
    </main>
  );
};
