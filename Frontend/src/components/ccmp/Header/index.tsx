import React from "react";
import { CloseSVG } from "../../../assets/images";
import { Img, Text, Input } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex items-center px-[23px] sm:px-5 bg-white-A700_01`}>
      <div className="mx-auto flex w-full max-w-[1153px] items-center justify-between gap-5 py-2.5 md:flex-col">
        <Text as="p" className="self-end !text-blue_gray-800">
          Welcomback, Team!
        </Text>
        <Input
          size="xs"
          shape="round"
          name="search"
          placeholder={`Search...`}
          value={searchBarValue}
          onChange={(e: string) => setSearchBarValue(e)}
          prefix={<Img src="images/img_search.svg" alt="search" className="h-[20px] w-[20px] cursor-pointer" />}
          suffix={
            searchBarValue?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue("")} fillColor="#36414fff" /> : null
          }
          className="w-[31%] gap-2 border-blue_gray-200 font-medium md:w-full sm:pr-5"
        />
        <div className="flex w-[20%] items-center justify-between gap-5 md:w-full">
          <a href="#">
            <Img src="images/img_shopping_bag.svg" alt="shoppingbag" className="h-[24px] w-[24px]" />
          </a>
          <a href="#">
            <Img src="images/img_icon_icon_line293.svg" alt="iconicon" className="h-[24px] w-[24px]" />
          </a>
          <div className="flex w-[58%] items-center justify-center gap-[13px]">
            <Text size="xl" as="p" className="mb-2 self-end !font-normal !text-gray-500_01">
              <span className="text-gray-500_01">Hello,</span>
              <span className="text-blue_gray-900_01">&nbsp;</span>
              <span className="font-medium text-blue_gray-900_01">Sam</span>
            </Text>
            <a href="#">
              <Img
                src="images/img_sherlock_toy_face_low.png"
                alt="sherlocktoy"
                className="h-[40px] w-[40px] rounded-[50%]"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
