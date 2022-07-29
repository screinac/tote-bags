import React from "react";
import heroImage from "../utils/images/hero_image.jpg";

const Hero = () => {
  return (
    <section className="flex h-screen">
      <img className="w-1/2 " src={heroImage.src} alt="" />
      <div className="w-1/2 flex justify-center items-center bg-zinc-100">
        <div className="w-5/6  text-center">
          <h2 className="text-6xl">Una Tote Bag que acompañe tu día</h2>
          <h3 className="text-xl my-3">Encuentra el diseño perfecto para ti</h3>
          <button className="py-3 px-7 bg-mainGreen text-white">
            Mira nuestros productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
