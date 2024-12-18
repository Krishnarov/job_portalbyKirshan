import React from "react";

function Footer() {
  return (
    <div className="bg-slate-900 md:px-28 px-4 text-white">
      <div className="flex flex-col md:flex-row py-12">
        <div className="md:w-1/3  md:pr-12 pr-4 ">
          <div className="flex">
            <div className="px-4 py-1 bg-indigo-600 text-white rounded-full font-black text-xl">
              j
            </div>
            <div className="font-black text-2xl ml-3">JOB_YAHNA</div>
          </div>
          <div className="mt-6 text-slate-300">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </div>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0 flex ">
          <div className="w-2/4">
            <h2 className="font-black">About</h2>
            <p className="text-slate-300 mt-4">Companies</p>
            <p className="text-slate-300 mt-4">Pricing</p>
            <p className="text-slate-300 mt-4">Terms</p>
            <p className="text-slate-300 mt-4">Advice</p>
            <p className="text-slate-300 mt-4">Privacy Policy</p>
          </div>
          <div className="w-2/4">
            <h2 className="font-black">Resources</h2>
            <p className="text-slate-300 mt-4">Help Docs</p>
            <p className="text-slate-300 mt-4">Guide</p>
            <p className="text-slate-300 mt-4">Updates</p>
            <p className="text-slate-300 mt-4">Contact Us</p>
          </div>
        </div>
        <div className="md:w-1/3 md:pr-12 pr-4 mt-6 md:mt-0">
          <h2 className="font-black">Get job notifications</h2>
          <p className="mt-5 text-slate-300">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <div className="flex flex-col md:flex-row gap-2 mt-8">
            <input
              className=" h-12 text-black px-2 outline-0"
              type="text"
              placeholder="Email Address"
            />
            <button className="bg-indigo-600 h-12 w-2/4">Subscribe</button>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex items-center flex-col md:flex-row gap-6 justify-between py-6 text-slate-300">
        <div>2024 @ Team{"{Error}"}. All rights reserved.</div>
        <div className="flex items-center gap-8">
          <a
            className="text-white"
            target="blank"
            href="https://www.facebook.com/profile.php?id=100023040590847"
          >
            {" "}
            <div className="rounded-full bg-slate-700 px-2 py-1 font-bold hover:text-indigo-600 hover:bg-slate-300 cursor-pointer">
              <i className="ri-facebook-fill"></i>
            </div>
          </a>
          <a
            className="text-white"
            target="blank"
            href="https://www.instagram.com/er.krishnaji"
          >
            <div className="rounded-full bg-slate-700 px-2 py-1 font-bold hover:text-indigo-600 hover:bg-slate-300 cursor-pointer">
              <i className="ri-instagram-line"></i>
            </div>
          </a>
          <a
            className="text-white"
            target="blank"
            href="https://github.com/Krishnarov"
          >
            <div className="rounded-full bg-slate-700 px-2 py-1 font-bold hover:text-indigo-600 hover:bg-slate-300 cursor-pointer">
              <i className="ri-github-fill"></i>
            </div>
          </a>
          <a
            className="text-white"
            target="blank"
            href="https://www.linkedin.com/in/krishna-kumar-657a5b295/"
          >
            <div className="rounded-full bg-slate-700 px-2 py-1 font-bold hover:text-indigo-600 hover:bg-slate-300 cursor-pointer">
              <i className="ri-linkedin-fill"></i>
            </div>
          </a>
          <a
            className="text-white"
            target="blank"
            href="https://www.facebook.com/profile.php?id=100023040590847"
          >
            <div className="rounded-full bg-slate-700 px-2 py-1 font-bold hover:text-indigo-600 hover:bg-slate-300 cursor-pointer">
              <i className="ri-twitter-x-fill"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
