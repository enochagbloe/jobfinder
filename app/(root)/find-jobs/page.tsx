import JobSearchBar from "@/components/landingpage/components/JobSearchBar";
import React from "react";

const FindJobs = () => {
  return (
    <div className="mt-30">
      <div className="flex flex-col items-center min-h-full justify-center">
        <p className="text-[3.2rem] font-bold">
          Find your <span className="text-green-400">Dream Job</span>
        </p>
        <p >Find your next career at companies like Hubstop, Nike and Dropbox</p>
        <JobSearchBar />
      </div>
      <p className="flex items-center">Popular: UI designer UX Researcher, Admin, Andriod</p>
    </div>
  );
};

export default FindJobs;
