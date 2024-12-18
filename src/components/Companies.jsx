import React from "react";
import Slider from "react-slick";
function Companies(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",

    pauseOnHover: true,
  };

  return (
    <div className="md:px-28 px-4 py-4 overflow-hidden">
      <p className="text-sm">Companies we helped grow</p>
      <div className=" py-4 gap-6 slider-container">
        <Slider {...settings}>
          {props.comp.map((data, index) => (
            <div key={index} className=" text-xs text-center cursor-pointer">
              <div className="flex justify-center">
                <img
                  className="aspect-square object-cover object-center"
                  src={data.logo}
                  alt={data.name}
                />
              </div>
              {data.name}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Companies;
