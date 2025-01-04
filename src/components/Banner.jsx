import React from "react";

const Banner = () => {
  return (
    <div className="w-full">
      <header className="w-[90%] mx-auto">
        <div className="w-full h-96 dark-bg">
          <div className="overlay flex flex-col items-center justify-center">
            <div className="content">
              <h1 className="mt-7 text-[35px] uppercase">Online Book Bazar</h1>
              <p>UP TO 85% OFF</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
