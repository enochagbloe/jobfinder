"use client";

import React from "react";
import Link from "next/link";
import ROUTES from "@/constants/route";
import { JobCartigories } from "@/constants/index";
import { usePathname } from "next/navigation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CartJobCard = () => {
  const path = usePathname();

  const topItems = JobCartigories.slice(0, 4);
  const bottomItems = JobCartigories.slice(4, 8);

  return (
    <>
      <div className="mx-8 mt-15">
        <div className="flex justify-between items-center mb-6">
          <p className="text-[2.4rem] font-bold">
            Explore By <span className="text-green-400">Category</span>
          </p>
          <Link href={ROUTES.FIND_JOBS}>
            <p className="text-blue-500 hover:underline cursor-pointer">
              Show all jobs
            </p>
          </Link>
        </div>

        {/* Grid of Cards */}
        <div className="flex flex-col justify-between space-y-6 p-6">
          {/* Top Row */}
          <div className="grid grid-cols-4 gap-4">
            {topItems.map((item, index) => (
              <Card key={index} className="w-[300px]  hover:bg-green-400">
                <CardHeader>
                  <Image
                    src={item.imageURL || "/placeholder.png"}
                    alt={item.label}
                    width={40}
                    height={40}
                  />
                </CardHeader>
                <CardTitle className="px-6">{item.label}</CardTitle>
                <CardDescription className="px-6">{item.description}</CardDescription>
              </Card>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-4 gap-4">
            {bottomItems.map((item, index) => (
              <Card key={index + 4} className="w-[300px] hover:bg-green-400">
                <CardHeader>
                  <Image
                    src={item.imageURL || "/placeholder.png"}
                    alt={item.label}
                    width={40}
                    height={40}
                  />
                </CardHeader>
                <CardTitle className="px-6">{item.label}</CardTitle>
                <CardDescription className="px-6">{item.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartJobCard;
