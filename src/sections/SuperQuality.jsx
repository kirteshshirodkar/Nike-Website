import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

export default function SuperQuality() {
  return (
    <div>
      <section
        id="about-us"
        className="flex justify-between items-start max-lg:flex-col gap-10 w-full max-container "
      >
        <div className="flex flex-1 flex-col ">
          <h2 className=" font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
            We Provide You
            <br />
            <span className="text-coral-red mr-2 ">Super</span>
            <span className="text-coral-red mr-2  ">Quality</span>
            Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            At Nike, innovation meets excellence to deliver products that
            redefine performance and style. From cutting-edge technologies like
            Air Cushioning and Dri-FIT fabric to sustainable practices and
            premium materials, Nike creates footwear, apparel, and accessories
            that inspire athletes and enthusiasts alike.
          </p>

          <p className="mt-6 lg:max-w-lg info-text">
            Nike’s commitment to durability, comfort, and trend-setting design
            ensures you perform your best while looking your best
          </p>
          <div className="mt-11">
            <Button label="View details" />
          </div>
        </div>
        <div className="flex-1 flex-justify-center items-center ">
          <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />

        </div>
      </section>
    </div>
  );
}
