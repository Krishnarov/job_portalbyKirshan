import React from "react";

function Category() {
  const categoryData = [
    {
      logo: "https://img.icons8.com/ios/50/design--v1.png",
      title: "Desgin",
      jobs: "236 jobs available",
    },
    {
      logo: "https://img.icons8.com/ios-glyphs/30/total-sales-1.png",
      title: "Sales",
      jobs: "246 jobs available",
    },
    {
      logo: "https://img.icons8.com/sf-regular/48/commercial.png",
      title: "Marketing",
      jobs: "346 jobs available",
    },
    {
      logo: "https://img.icons8.com/ios/50/banknotes.png",
      title: "Finance",
      jobs: "136 jobs available",
    },
    {
      logo: "https://img.icons8.com/ios/50/macbook.png",
      title: "Technology",
      jobs: "212 jobs available",
    },
    {
      logo: "https://img.icons8.com/ios-filled/50/source-code.png",
      title: "Engineering",
      jobs: "346 jobs available",
    },
    {
      logo: "https://img.icons8.com/sf-regular-filled/48/briefcase.png",
      title: "Business",
      jobs: "346 jobs available",
    },
    {
      logo: "https://img.icons8.com/sf-regular-filled/48/groups--v1.png",
      title: "Human Resource",
      jobs: "346 jobs available",
    },
  ];
  return (
    <div className="md:px-28 my-4 md:my-0 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl md:text-5xl font-black ">
          Explore by <span className="text-sky-500">category</span>
        </h2>
        <div className="flex items-center text-indigo-600 md:block hidden">
          Show all jobs <i className="ri-arrow-right-line"></i>
        </div>
      </div>
      <div>
        <div className=" flex justify-center gap-6 flex-wrap mt-12">
          {categoryData.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center hover-catgri"
            >
              <div className="p-4 border md:block flex gap-4 items-cente">
                <img className="h-12 mb-5" src={item.logo} alt="" />
                <div className="md:w-52 w-72">
                  <p className="text-xl mb-3 font-bold ">{item.title}</p>
                  <div className="text-sm flex items-center justify-between">
                    {item.jobs}
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-8 mt-4 text-indigo-600 block md:hidden ">
          Show all jobs <i className="ri-arrow-right-line"></i>
        </div>
    </div>
  );
}

export default Category;
