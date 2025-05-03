import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
const SocialAuthForms = () => {
  return (
    <div className="flex flex-col gap-4 mt-5 ">
      <Button className=" flex items-center justify-center w-auto">
        <Image
          src="./icons/github.svg"
          alt="google"
          height={20}
          width={20}
          className="invert dark:invert"
        />
        Continue with GitHub{" "}
      </Button>
      <Button className="w-full">
        <Image
          src="./icons/google.svg"
          alt="google"
          height={20}
          width={20}
          className="invert dark:invert-0"
        />
        Continue with Google{" "}
      </Button>
    </div>
  );
};

export default SocialAuthForms;
