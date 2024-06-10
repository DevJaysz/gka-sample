import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function Review() {
  const reviews = [
    {
      rating: "★★★★★",
      score: "4.2/5",
      count: "(45k Reviews)",
      logo: "https://placehold.co/40x40",
      site: "Trustpilot",
      color: "text-green-500",
    },
    {
      rating: "★★★★☆",
      score: "4.1/5",
      count: "(18k Reviews)",
      logo: "https://placehold.co/40x40",
      site: "Capterra",
      color: "text-orange-500",
    },
    {
      rating: "★★★★☆",
      score: "4.1/5",
      count: "(18k Reviews)",
      logo: "https://placehold.co/40x40",
      site: "Capterra",
      color: "text-orange-500",
    },
    {
      rating: "★★★★☆",
      score: "4.1/5",
      count: "(18k Reviews)",
      logo: "https://placehold.co/40x40",
      site: "Capterra",
      color: "text-orange-500",
    },
    {
      rating: "★★★★☆",
      score: "4.1/5",
      count: "(18k Reviews)",
      logo: "https://placehold.co/40x40",
      site: "Capterra",
      color: "text-orange-500",
    },
  ];

  const handleAddReview = () => {
    // Add functionality to handle the click event
    console.log("Add review clicked");
  };

  return (
    <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-0">
      <div className="swiper-container   w-full lg:w-4/5 relative">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-slate-50 p-6 rounded-lg shadow-md flex-shrink-0 w-full sm:w-80">
                <div className="flex items-center">
                  <span className={review.color}>{review.rating}</span>
                  <span className="ml-2 text-zinc-700 dark:text-zinc-300">
                    {review.score} {review.count}
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src={review.logo}
                    alt={`${review.site} Logo`}
                    className="h-10 w-10"
                    crossOrigin="anonymous"
                  />
                  <span className="ml-3 font-bold">{review.site}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Plus icon slide */}
          <SwiperSlide>
            <button
              onClick={handleAddReview}
              className="bg-slate-50 p-6 rounded-full shadow-md flex-shrink-0 w-16 h-16 flex justify-center items-center mx-3 mt-5 focus:outline-none"
            >
              <svg
                className="w-8 h-8 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Review;
