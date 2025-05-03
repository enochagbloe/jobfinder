// This file is a part of the Jobify project.
import React from "react";
import Logos from "@/components/landingpage/components/logos";
import CartJobCard from "@/components/landingpage/components/Cart-JobCard";
import JobSearchBar from "@/components/landingpage/components/JobSearchBar";
import SignUpToday from "@/components/landingpage/components/SignUpToday";
import { Footer2 } from "@/components/landingpage/components/footer2";

const Home = () => {
  return (
    <>
      <div>
        <div className="font-black text-[3.2rem] text-center mt-50 sm:text-[4.2rem] leading-tight space-y-0 overflow-hidden">
          <p>Discover over</p>
          <span className="text-green-400">10,000+ job opportunities</span>
        </div>

        <div className="text-black text-center mt-10 font-light dark:text-gray-300">
          <p>Great platform for the job seeker that searching</p>
          <p>for new height with any qualification</p>
        </div>
        <div>
          <JobSearchBar/>
          <Logos />
          <CartJobCard />
          <SignUpToday/>
          <Footer2/>
        </div>
      </div>
    </>
  );
};

export default Home;
