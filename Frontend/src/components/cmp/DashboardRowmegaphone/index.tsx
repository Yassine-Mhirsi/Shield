import React from "react";
import { Text, Heading, Button, Img } from "./..";

interface Props {
  className?: string;
  zipcodetext?: string;
  totalmenustext?: string;
}

export default function DashboardRowmegaphone({
  zipcodetext = "2560",
  totalmenustext = "Total Menus",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center gap-6 p-[30px] bg-white-A700 shadow-xs rounded-[10px]`}
    >
      <Button size="4xl" shape="circle" className="w-[70px] !rounded-[35px]">
        <Img src="../../../../public/images/img_megaphone.svg" />
      </Button>
      <div className="flex flex-col items-start gap-[7px]">
        <Heading size="xl" as="h5">
          {zipcodetext}
        </Heading>
        <Text as="p" className="!font-normal !text-blue_gray-400">
          {totalmenustext}
        </Text>
      </div>
    </div>
  );
}
