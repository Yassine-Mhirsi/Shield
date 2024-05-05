import React from "react";
import { Text, Img } from "./..";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export default function Sidebar8({ ...props }: Props) {
  return (
    <Sidebar
      {...props}
      width="251px !important"
      className={`${props.className} flex flex-col h-screen top-0 py-6 md:p-5 sm:py-5 bg-white-A700 shadow-md !sticky overflow-auto md:hidden`}
    >
      <Img
        src="../../../../public/images/img_sidebar_logo.png"
        alt="sidebarlogo"
        className="ml-[27px] h-[30px] w-[125px] object-contain md:ml-0"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: "8px",
            color: "#8c8787",
            fontWeight: 400,
            fontSize: "16px",
            gap: "8px",
          },
        }}
        renderExpandIcon={() => (
          <Img
            src="../../../../public/images/img_arrow_right.svg"
            alt="arrowright"
            className="h-[24px] w-[24px] cursor-pointer self-start"
          />
        )}
        className="mt-[65px] flex w-full flex-col self-stretch"
      >
        <MenuItem icon={<Img src="../../../../public/images/img_grid.svg" alt="grid" className="h-[20px] w-[20px]" />}>
          <Link to="/dashboardadminshop" className="flex items-center">
            Dashboard
          </Link>
        </MenuItem>
        <Link to="/dashboardadminshop/tablelist" className="flex items-center">
          <SubMenu icon={<Img src="../../../../public/images/img_frame_21.svg" alt="image" className="h-[20px] w-[20px]" />} label="Products">
          </SubMenu>
        </Link>
      </Menu>
    </Sidebar>
  );
}
