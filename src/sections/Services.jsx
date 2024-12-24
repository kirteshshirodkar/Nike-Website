import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section name="Services" className="max-container flex justify-center flex-wrap gap-9 ">
      <div className="w-full">
       
        <h1 className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
         Our <span className="text-coral-red">Services</span>
        </h1>
      </div>

      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
}
