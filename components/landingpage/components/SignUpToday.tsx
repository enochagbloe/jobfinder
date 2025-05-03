import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import Link from "next/link"; // Correct Link import
import React from "react";

const SignUpToday = () => {
  return (
    <div
      className="bg-cover mt-20 text-white w-full h-[500px] flex flex-col items-center justify-center px-4 text-center"
      style={{ backgroundImage: "url('/CTA/Rectangle-2742.svg')" }}
    >
      <h1 className="text-[4rem] font-bold leading-tight">
        Start Posting <br /> Jobs Today
      </h1>
      <p className="mt-4 text-[1.2rem] font-light">
        Start posting jobs for only $10
      </p>
      <Link href={ROUTES.SIGN_UP} className="mt-6">
        <Button>
          Sign Up for Free
        </Button>
      </Link>
    </div>
  );
};

export default SignUpToday;
