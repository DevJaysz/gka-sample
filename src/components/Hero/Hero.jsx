import React from "react";
import model from "./../../assets/hero/model3.png";
import Review from "../Hero/Review";

function Hero() {
  return (
    <section className="">
      <div className="container mx-auto  px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-0">
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="text-gray-500 font-bold w-full md:w-3/4">
              Elevate Your Wardrobe – Explore the Latest in Fashion and
              Accessories! 🛍️ #ShopTheLook #NewArrivals
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-4 w-full md:w-3/4">
              Unleash Your Style Discover Fashion That Speaks!
            </h1>
            <p className="text-zinc-700 font-bold mt-4 w-full md:w-3/4">
              Discover your style at Illustrate! Explore our curated collection
              of trendy apparel, accessories, and unique lifestyle products.
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-gray-800 text-white font-bold px-6 py-3 rounded-3xl">
                Shop now!
              </button>
              <button className="bg-slate-100 border-2 border-grey-700 text-zinc-700 font-bold px-6 py-3 rounded-3xl">
                Watch Video
              </button>
            </div>
            <Review />
          </div>

          <div className="md:col-span-5 flex justify-center items-center  bg-slate-50 rounded-xl">
            <img
              src={model}
              alt="Hero Image"
              className="w-3/4 bg-slate-50 "
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
