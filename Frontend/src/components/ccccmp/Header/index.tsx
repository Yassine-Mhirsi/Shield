import React from "react";
import MegaMenu1 from "../MegaMenu1";
import { Button, Heading, Img } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-[19px] bg-white-A700 relative`}
    >
      <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
        <Img src="images/img_header_logo.png" alt="headerlogo" className="h-[40px] w-[128px] object-contain" />
        <ul className="!mb-[7px] flex gap-10 sm:flex-col">
          <li
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
          >
            <div className="flex cursor-pointer items-center gap-1.5 pr-2.5">
              <Heading as="h6">Home</Heading>
              <Img src="images/img_arrow_down_gray_600_02.svg" alt="arrowdown" className="h-[16px] w-[16px]" />
            </div>
            {menuOpen ? <MegaMenu1 /> : null}
          </li>
          <li
            onMouseLeave={() => {
              setMenuOpen1(false);
            }}
            onMouseEnter={() => {
              setMenuOpen1(true);
            }}
          >
            <div className="flex cursor-pointer items-center gap-1.5">
              <Heading as="h6">Listing</Heading>
              <Img src="images/img_arrow_down_gray_600_02.svg" alt="arrowdown" className="h-[16px] w-[16px]" />
            </div>
            {menuOpen1 ? <MegaMenu1 /> : null}
          </li>
          <li
            onMouseLeave={() => {
              setMenuOpen2(false);
            }}
            onMouseEnter={() => {
              setMenuOpen2(true);
            }}
          >
            <div className="flex cursor-pointer items-center gap-1.5">
              <Heading as="h6">Agents</Heading>
              <Img src="images/img_arrow_down_gray_600_02.svg" alt="arrowdown" className="h-[16px] w-[16px]" />
            </div>
            {menuOpen2 ? <MegaMenu1 /> : null}
          </li>
          <li>
            <a href="#">
              <Heading as="h6">Property </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading as="h6">Blog</Heading>
            </a>
          </li>
        </ul>
        <div className="flex w-[19%] items-center justify-between gap-5 md:w-full">
          <div className="flex gap-2">
            <a href="#">
              <Img src="images/img_rewind.svg" alt="rewind" className="h-[24px] w-[24px] self-start" />
            </a>
            <Heading size="md" as="h6">
              Search
            </Heading>
          </div>
          <Button size="lg" shape="round" className="min-w-[94px] font-semibold sm:px-5">
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}
