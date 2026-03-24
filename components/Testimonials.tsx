"use client";

import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    name: "Hammad Naeem",
    text: `"I'm Absolutely Loving ! The Variety Of Food Is Impressive, The Atmosphere Is Great, And The Quality Is Top-Notch. Plus, The Prices Are Perfect For The Value You Get. Highly Recommend!"`,
    stars: 5,
  },
  {
    name: "Sara Ahmed",
    text: `"Amazing food and great service! The chicken fillet is absolutely delicious. Will definitely come back again and again!"`,
    stars: 5,
  },
  {
    name: "Ali Hassan",
    text: `"Best fast food in Pakistan hands down. The gochu wings are unreal. Highly recommend to everyone!"`,
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      {/* Left decorative element */}
      <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-24 md:w-36 lg:w-44 pointer-events-none select-none">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/4c62c91999ecb5795be4931f22128c820c8554b8?width=302"
          alt=""
          width={151}
          height={230}
          aria-hidden="true"
          className="w-full h-auto"
        />
      </div>

      {/* Right decorative element */}
      <div className="absolute right-6 md:right-14 bottom-10 md:bottom-16 w-20 md:w-28 lg:w-36 pointer-events-none select-none">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/a31fc5a606ccb50bc80c4f540e46a7c734996afe?width=278"
          alt=""
          width={139}
          height={139}
          aria-hidden="true"
          className="w-full h-auto"
        />
      </div>

      {/* Blurred decorative dots */}
      <div
        className="absolute right-36 top-16 w-16 h-16 pointer-events-none select-none opacity-80"
        aria-hidden="true"
      >
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/955be010a5386c20ce2a26f77b92a1bd324c3973?width=142"
          alt=""
          width={71}
          height={71}
          className="w-full h-auto blur-[14px]"
        />
      </div>
      <div
        className="absolute left-52 bottom-10 w-16 h-16 pointer-events-none select-none opacity-80"
        aria-hidden="true"
      >
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/955be010a5386c20ce2a26f77b92a1bd324c3973?width=142"
          alt=""
          width={71}
          height={71}
          className="w-full h-auto blur-[14px]"
        />
      </div>

      {/* Review content */}
      <div className="relative z-10 max-w-3xl mx-auto px-8 flex flex-col items-center text-center gap-6">
        {/* Reviewer name */}
        <h3 className="font-fredoka text-3xl md:text-4xl text-black capitalize">
          {review.name}
        </h3>

        {/* Star rating */}
        <div className="flex items-center gap-2">
          {Array.from({ length: review.stars }).map((_, i) => (
            <Image
              key={i}
              src="https://api.builder.io/api/v1/image/assets/TEMP/e359725f35f75f5c0d15bbba944b1bee063ef682?width=144"
              alt="star"
              width={52}
              height={52}
              className="w-12 h-12 md:w-14 md:h-14"
            />
          ))}
        </div>

        {/* Review text */}
        <p className="font-fredoka text-black text-base md:text-lg leading-8 capitalize max-w-[688px]">
          {review.text}
        </p>

        {/* Carousel dots */}
        <div className="flex items-center gap-4 mt-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`w-4 h-4 transition-all duration-200 ${
                i === active
                  ? "bg-[#F4BD18] rounded-[7px_4px_4px_7px]"
                  : "bg-[#DBD8C9] rounded-[3px_5px_7px_3px]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
