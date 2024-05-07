import React from "react";
import { Text, Img } from "./..";

interface Props {
  className?: string;
  selectedvariant?: string;
  labeltext?: string;
  pricetext?: string;
}

export default function CartElements({
  selectedvariant = "images/img_frame_lime_900.svg",
  labeltext = "Free shipping",
  pricetext = "$0.00",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-between items-center pt-3.5 pb-[13px] gap-5 px-4 border border-solid bg-white-A700 flex-1 rounded-[24px]`}
    >
      <div className="flex items-center gap-3">
        <Img src={selectedvariant} alt="shipping icon" className="h-[20px] w-[20px]" />
        <Text as="p" className="self-end !text-lime-900">
          {labeltext}
        </Text>
      </div>
      <Text as="p" className="!font-inter !font-medium !text-gray-900_01">
        {pricetext}
      </Text>
    </div>
  );
}
