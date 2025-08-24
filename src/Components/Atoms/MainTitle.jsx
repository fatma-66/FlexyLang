import React from "react";

function MainTitle({ title, src, classes, icon }) {
  return (
    <>
      <div className="flex flex-row items-center pt-10">
        {src ? <img src={src} className={classes} /> : icon}

        <h1 className="text-orange-400 text-[50px] font-bold ">{title}</h1>
      </div>
    </>
  );
}

export default MainTitle;
