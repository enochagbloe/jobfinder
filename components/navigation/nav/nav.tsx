import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Theming from "./theme";
import MobileNavigation from "./MobileNavigation";

// Define or import ROUTES
const ROUTES = {
  FindJobs: "/find-jobs",
  BrowseCompanies: "/browse-companies",
};

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md dark:bg-black flex items-center justify-between p-5 text-white">
      <div className="flex items-center gap-20">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo can be an image or text, here it's an image */}
          <Image
            src="./images/logo.svg"
            alt="logo"
            height={20}
            width={20}
            className="dark:invert"
          />
          <p className="text-black dark:text-white">JobFinder</p>
        </Link>
        <div className="item-center gap-4 text-primary text-[12px] sm:flex hidden">
          <Link href={ROUTES.FindJobs} className="">
            <p className="text-black dark:text-gray-400">Find Jobs</p>
          </Link>

          <Link href={ROUTES.BrowseCompanies} className="">
            <p className="text-black dark:text-gray-400">Browse Companies</p>
          </Link>
        </div>
      </div>
      {/* Theming component can be used here if needed */}
      <div className="items-center gap-4 sm:gap-4 flex">
        <Link href="/sign-in" className="text-primary text-[12px]">
          <Button asChild className="sm:flex hidden">
            {/* You can use an icon here if needed */}
            <p className="font-bold ">Login In</p>
          </Button>
        </Link>
        <Link
          href="/sign-up"
          className="bg-primary text-white rounded-full text-[12px]"
        >
          <Button className=" sm:flex hidden">
            <p className="text-white dark:text-black">Sign Up</p>
          </Button>
        </Link>
        <div className="sm-hidden">
          <Theming />
        </div>
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default NavBar;
