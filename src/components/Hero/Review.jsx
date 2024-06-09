import React from "react";

function Review() {
  return (
    <div className="container mx-auto mt-12 ">
      <div className="flex space-x-4 overflow-x-auto">
        <div className="bg-slate-50 p-6 rounded-lg shadow-md flex-shrink-0 w-80">
          <div className="flex items-center">
            <span className="text-green-500">★★★★★</span>
            <span className="ml-2 text-zinc-700 dark:text-zinc-300">
              4.2/5 (45k Reviews)
            </span>
          </div>
          <div className="flex items-center mt-4">
            <img
              src="https://placehold.co/40x40"
              alt="Trustpilot Logo"
              className="h-10 w-10"
              crossorigin="anonymous"
            />
            <span className="ml-3 font-bold ">Trustpilot</span>
          </div>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg shadow-md flex-shrink-0 w-80">
          <div className="flex items-center">
            <span className="text-orange-500">★★★★☆</span>
            <span className="ml-2 text-zinc-700 dark:text-zinc-300">
              4.1/5 (18k Reviews)
            </span>
          </div>
          <div className="flex items-center mt-4">
            <img
              src="https://placehold.co/40x40"
              alt="Capterra Logo"
              className="h-10 w-10"
              crossorigin="anonymous"
            />
            <span className="ml-3 font-bold">Capterra</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
