import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

export default function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
          <span className="text-coral-red mr-2 ">Special</span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Elevate your game and your style with exclusive Nike deals designed
          just for you! From iconic sneakers and performance-driven sportswear
          to stylish casual apparel, our special offers bring you closer to the
          Nike experience without stretching your budget. Don’t miss out—step
          into comfort, innovation, and style like never before!
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          With Nike’s special offers, upgrading your wardrobe or gearing up for
          your next workout has never been easier.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
}
