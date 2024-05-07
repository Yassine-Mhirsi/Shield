import React from "react";
import { Text, Img, Radio, RadioGroup } from "./..";

interface Props {
  className?: string;
  unchecked?: string;
  checked?: string;
  username?: string;
  home?: string;
  addresslabel?: string;
  addresstext?: string;
  phonelabel?: string;
  phonetext?: string;
}

export default function AddressColumnjack({
  checked = "images/checked.svg",
  unchecked = "images/unchecked.svg",
  username = "Jack Jonnas",
  home = "Home",
  addresslabel = "Address :",
  addresstext = "8424 James Lane South, San Francisco, CA 94080 ",
  phonelabel = "Phone :",
  phonetext = " + 380 (0564) 53 - 29 - 68",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full pt-5 pb-[19px] gap-[19px] border-solid rounded-[16px]`}
    >
      <div className="flex justify-between gap-5 self-stretch">
        <div className="flex items-center gap-3">
          {/* <Img src={checked} alt="profileimage" className="h-[24px] w-[24px]" /> */}
          <RadioGroup name="radiogroup" className="flex self-stretch">
            <Radio
              value="insurance"
              label="Insurance"
              className="w-full gap-2 rounded-[24px] bg-white-A700 py-[15px] pr-[35px] text-sm text-lime-900 sm:pr-5"
            />
          </RadioGroup>
        </div>
        <div className="flex items-center gap-3">
          <Text
            size="xs"
            as="p"
            className="flex items-center justify-center rounded bg-gray-200 p-[3px] !text-lime-900"
          >
            {home}
          </Text>
          <Img src="images/img_menu.svg" alt="menuicon" className="h-[24px] w-[24px]" />
        </div>
      </div>
      <div className="flex flex-col gap-[11px] self-stretch">
        <div className="flex flex-col items-start gap-1">
          <Text size="s" as="p">
            {addresslabel}
          </Text>
          <Text size="s" as="p" className="w-full leading-[22px] !text-black-900">
            {addresstext}
          </Text>
        </div>
        <div className="flex flex-col items-start gap-1">
          <Text size="s" as="p">
            {phonelabel}
          </Text>
          <Text size="s" as="p" className="!text-black-900">
            {phonetext}
          </Text>
        </div>
      </div>
    </div>
  );
}
