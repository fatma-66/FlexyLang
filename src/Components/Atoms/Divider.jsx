import React from "react";

function Divider() {
  return (
    <>
      <div className="relative ">
       

        <svg
          className="w-full h-28 "
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f97316" // Tailwind's orange-500
            d="M0,50 C180,0 360,100 540,50 C720,0 900,100 1080,50 C1260,0 1440,100 1440,100 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </>
  );
}

export default Divider;
