"use client";
import React, { useState } from "react";
import jobSuggestions from "@/data/JobList";
import locationSuggestions from "@/data/LocationList";

export default function JobSearchBar() {
  const [jobInput, setJobInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<string[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);

  const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setJobInput(value);
    setFilteredJobs(
      jobSuggestions.filter((job: string) =>
        job.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleLocationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = e.target.value;
    setLocationInput(value);
    setFilteredLocations(
      locationSuggestions.filter((loc: string) =>
        loc.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-4 ">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Job Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Job title (e.g., Web Developer)"
            value={jobInput}
            onChange={handleJobChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {jobInput && filteredJobs.length > 0 && (
            <ul className="absolute z-10 w-full bg-slate-700 border-gray-200 rounded-md shadow-md mt-1">
              {filteredJobs.map((job, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 cursor-pointer hover:bg-green-400"
                  onClick={() => {
                    setJobInput(job);
                    setFilteredJobs([]);
                  }}
                >
                  {job}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Location Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Location (e.g., Accra)"
            value={locationInput}
            onChange={handleLocationChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {locationInput && filteredLocations.length > 0 && (
            <ul className="absolute z-10 w-full bg-slate-700 border border-gray-200 rounded-md shadow-md mt-1">
              {filteredLocations.map((loc, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 cursor-pointer hover:bg-green-400"
                  onClick={() => {
                    setLocationInput(loc);
                    setFilteredLocations([]);
                  }}
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <button
        className="flex items-center justify-center mt-4 w-full sm:w-auto bg-green-400 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        onClick={() => alert(`Searching for ${jobInput} in ${locationInput}`)}
      >
        Search Jobs
      </button>
    </div>
  );
}
