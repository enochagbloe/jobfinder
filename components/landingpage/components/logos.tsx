import React from "react";
import Image from "next/image";

const Logos = () => {
  return (
    <>
      <div className="ml-8 mr-8">
        <div className="mt-60 ">
          <div className="text-slate-400 font-medium"> Companies we helped grow </div>
        </div>
        <div className="mt-15 flex justify-between items-center">
          <Image
            src={"./images/vodafone-2017-logo.svg"}
            alt="vodafone"
            width={120}
            height={120}
            className="dark:invert"
          />
          <Image
            src={"./images/intel-3.svg"}
            alt="vodafone"
            width={70}
            height={70}
            className="dark:invert"
          />
          <Image
            src={"./images/tesla-9 1.svg"}
            alt="vodafone"
            width={100}
            height={100}
            className="dark:invert"
          />
          <Image
            src={"./images/amd-logo-1.svg"}
            alt="vodafone"
            width={70}
            height={70}
            className="dark:invert"
          />
           <Image
            src={"./images/talkit 1.svg"}
            alt="vodafone"
            width={70}
            height={70}
            className="dark:invert"
          />
        </div>
      </div>
    </>
  );
};

export default Logos;
