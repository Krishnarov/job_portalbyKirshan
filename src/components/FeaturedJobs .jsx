import Slider from "react-slick";

function FeaturedJobs(props) {
  console.log(props);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className="md:px-28 px-4 py-12 md:bg-white bg-slate-100">
      <div className="md:flex items-center justify-between mb-12">
        <h2 className="text-5xl font-black ">
          Featured <span className="text-sky-500">jobs</span>
        </h2>
        <div className="flex items-center text-indigo-600 md:block hidden">
          Show all jobs <i className="ri-arrow-right-line"></i>
        </div>
      </div>

      <div className=" md:flex justify-center gap-6 flex-wrap mt-12 hidden md:block">
        {props?.jobs?.slice(0, 8).map((item, index) => (
          <div key={index} className="flex justify-center items-center ">
            <div className="p-4 border shadow min-h-72 min-w-60 hover-catgri bg-white">
              <div className="flex justify-between">
                {/* <img className="h-12 mb-5" src={item.logo} alt="" /> */}
                <img
                  className="h-12 mb-5"
                  src={`http://localhost:4000/public/${
                    item?.company === null ? null : item.company?.logo
                  }`}
                />
                <p className="px-2 h-8 text-indigo-600 font-bold  border-2 border-indigo-600">
                  {item?.jobType}
                </p>
              </div>
              <div className="w-52">
                <p className="text-xl font-bold ">{item?.title}</p>

                <div className="text-sm flex items-center gap-2">
                  {item.company?.name}
                  <li>{item?.address}</li>
                </div>
                <p className="text-slate-500 mt-2">{item?.dec}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item?.skills[0] ? (
                  <div className="bg-green-200 text-green-700 rounded-2xl px-3 py-1">
                    {item?.skills[0]}
                  </div>
                ) : null}
                {item?.skills[1] ? (
                  <div className="bg-yellow-200 text-yellow-700 rounded-2xl px-3 py-1">
                    {item?.skills[1]}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" p-6  slider-conta md:hidden block">
        <Slider {...settings}>
          {props?.jobs?.slice(0, 8).map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="p-4 border hover-catgri bg-white">
                <div className="flex justify-between">
                  {/* <img className="h-12 mb-5" src={item.logo} alt="" /> */}
                  <p className="px-2 h-8 text-indigo-600 font-bold  border-2 border-indigo-600">
                    {item?.jobType}
                  </p>
                </div>
                <div className="w-52">
                  <p className="text-xl font-bold ">{item?.title}</p>

                  <div className="text-sm flex items-center gap-2">
                    {item.company?.name}
                    <li>{item?.address}</li>
                  </div>
                  <p className="text-slate-500 mt-2">{item?.dec}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item?.skills[0] ? (
                    <div className="bg-green-200 text-green-700 rounded-2xl px-3 py-1">
                      {item?.skills[0]}
                    </div>
                  ) : null}
                  {item?.skills[1] ? (
                    <div className="bg-yellow-200 text-yellow-700 rounded-2xl px-3 py-1">
                      {item?.skills[1]}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedJobs;
