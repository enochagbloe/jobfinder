"use client";
import * as React from "react";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import ROUTES from "@/constants/route";

const MobileNavigation = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={"./icons/hamburger.svg"}
            alt="menu"
            height={20}
            width={20} className="invert dark:invert-0 flex sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="hidden">Navigation</SheetTitle>
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
          </SheetHeader>
          <div>
            <SheetClose>
              <NavLinks />
            </SheetClose>
          </div>
            {/* below the sheet for signin and signUp */}
          <SheetFooter className="flex gap-4">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="flex w-full"> Log In </Button>
              </Link>
            </SheetClose>
            <SheetClose>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="flex w-full"> Sign Up </Button>
              </Link>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default MobileNavigation;
