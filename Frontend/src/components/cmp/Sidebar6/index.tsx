import React from "react";
import { Text, Img } from "./..";
import { SubMenu, MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar6({ ...props }: Props) {
  return (
    <Sidebar
      {...props}
      width="252px !important"
      className={`${props.className} flex flex-col h-screen top-0 py-6 md:p-5 sm:py-5 bg-white-A700 shadow-md !sticky overflow-auto md:hidden`}
    >
      <Img
        src="../../../../public/images/img_sidebar_logo.png"
        alt="sidebarlogo"
        className="ml-7 h-[30px] w-[125px] object-contain md:ml-0"
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
        <MenuItem icon={<Img src="../../../../public/images/img_grid_blue_gray_400.svg" alt="grid" className="h-[20px] w-[20px]" />}>
          Dashboard
        </MenuItem>
        <SubMenu
          icon={<Img src="../../../../public/images/img_airplane.svg" alt="airplane" className="h-[16px] w-[16px]" />}
          label="Orders"
        >
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <SubMenu
          icon={<Img src="../../../../public/images/img_television_blue_a200.svg" alt="television" className="h-[16px] w-[16px]" />}
          label="Menus"
        >
          <div className="flex flex-col">
            <MenuItem>Add Menu</MenuItem>
            <MenuItem>Menu List</MenuItem>
            <MenuItem>Categories</MenuItem>
          </div>
        </SubMenu>
        <SubMenu icon={<Img src="../../../../public/images/img_lock.svg" alt="lock" className="h-[16px] w-[16px]" />} label="Customer">
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <MenuItem icon={<Img src="../../../../public/images/img_thumbs_up.svg" alt="thumbsup" className="h-[16px] w-[16px]" />}>
          Analytics
        </MenuItem>
        <SubMenu icon={<Img src="../../../../public/images/img_frame_21.svg" alt="image" className="h-[16px] w-[16px]" />} label="Table ">
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
      </Menu>
      <div className="mb-[5px] mt-[130px] flex w-[76%] flex-col items-start">
        <Img src="../../../../public/images/img_group_18692_5.png" alt="image" className="h-[186px] w-full object-cover md:h-auto" />
        <Text size="s" as="p" className="mt-[23px] !font-medium">
          Bistro Restaurant Admin{" "}
        </Text>
        <Text size="xs" as="p" className="mt-1.5">
          2021 All Rights
        </Text>
        <div className="mt-[5px] flex flex-wrap gap-0.5">
          <Text size="xs" as="p" className="self-start">
            Made with
          </Text>
          <Img src="../../../../public/images/img_favorite.svg" alt="favorite" className="h-[12px]" />
          <Text size="xs" as="p" className="self-end">
            by Bistro
          </Text>
        </div>
      </div>
    </Sidebar>
  );
}
