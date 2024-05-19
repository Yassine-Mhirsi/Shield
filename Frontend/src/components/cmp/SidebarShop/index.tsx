import React from "react";
import { Text, Img } from "..";
import { SubMenu, MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export default function SidebarShop({ ...props }: Props) {
  return (
    <Sidebar
      {...props}
      width="252px !important"
      className={`${props.className} flex flex-col h-screen top-0 py-6 md:p-5 sm:py-5 bg-white-A700 shadow-md !sticky overflow-auto md:hidden`}
    >
      <Link to="/" className="flex items-center">
        <Img
          src="../../../../public/images/Untitled.png"
          alt="sidebarlogo"
          className="ml-7 h-[50px] w-[160px] object-contain md:ml-0"
        />
      </Link>
      <Menu
        menuItemStyles={{
          button: {
            padding: "7px",
            color: "#8c8787",
            fontWeight: 400,
            fontSize: "16px",
            gap: "12px",
            [`&:hover, &.ps-active`]: {
              color: "#438ffe",
              fontWeight: "500 !important",
              backgroundColor: "#edf5ff !important",
            },
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
        <Link to="/dashboardadminshop/productlist" className="flex items-center">
          <SubMenu icon={<Img src="../../../../public/images/img_frame_21.svg" alt="image" className="h-[20px] w-[20px]" />} label="Products">
          </SubMenu>
        </Link>
      </Menu>
    </Sidebar >
  );
}
