import React from "react";
import { CloseSVG } from ".../../assets/images";
import { Img, Button, Input } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex self-stretch items-center p-5 bg-white-A700 shadow-sm`}>
      <div className="mx-auto flex w-full max-w-[1128px] items-center justify-between gap-5 sm:flex-col">
        <Input
          shape="round"
          name="search"
          placeholder={`Search here`}
          value={searchBarValue}
          onChange={(e: string) => setSearchBarValue(e)}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} fillColor="#8c8787ff" />
            ) : (
              <Img src="../../../../public/images/img_rewind.svg" alt="rewind" className="h-[16px] w-[16px] cursor-pointer" />
            )
          }
          className="w-[29%] gap-[35px] border-gray-50 sm:w-full sm:pl-5"
        />
        <div className="flex w-[14%] items-center justify-between gap-5 sm:w-full">
          <a href="#">
            <Button size="xl" className="w-[35px] rounded-[17px]">
              <Img src="../../../../public/images/img_user.svg" />
            </Button>
          </a>
          <a href="#">
            <Button size="xl" className="w-[35px] rounded-[17px]">
              <Img src="../../../../public/images/img_user_blue_gray_400.svg" />
            </Button>
          </a>
          <a href="#">
            <Img src="../../../../public/images/img_ellipse_1.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
          </a>
        </div>
      </div>
    </header>
  );
}
