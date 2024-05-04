import React from "react";
import { Img, Heading } from "./..";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar3({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  // use this function to collapse/expand the sidebar
  function collapseSidebar() {
     setCollapsed(!collapsed)
  }

  return (
    <Sidebar {...props} width="700px" collapsedWidth="80px !important" collapsed={collapsed}>
      <div className="flex w-[50%]">
        <Img
          src="images/img_sidebar_logo.png"
          alt="sidebarlogo"
          className="h-[28px] w-full object-cover md:h-auto md:w-[88px]"
        />
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: 0,
            gap: "16px",
            alignSelf: "start",
            color: "#828fa2",
            fontWeight: 500,
            fontSize: "14px",
            paddingTop: "17px",
            paddingBottom: "17px",
            [`&:hover, &.ps-active`]: { color: "#36414f" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "0.46px" } }}
        className="mb-[490px] flex w-full flex-col self-stretch"
      >
        <MenuItem icon={<Img src="images/img_icon.svg" alt="icon" className="h-[20px] w-[20px]" />}>Dashboard</MenuItem>
        <MenuItem icon={<Img src="images/img_icon_blue_gray_400.svg" alt="icon" className="h-[20px] w-[20px]" />}>
          Customer
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_icon_blue_gray_400_20x20.svg" alt="icon" className="h-[20px] w-[20px]" />}
          suffix={
            <div className="h-[24px] w-[23%] rounded-[12px] bg-red-600">
              <Heading size="s" as="p" className="mx-auto mb-[21px] text-center !text-white-A700_01">
                3
              </Heading>
            </div>
          }
        >
          Message
        </MenuItem>
        <MenuItem icon={<Img src="images/img_icon_20x20.svg" alt="icon" className="h-[20px] w-[20px]" />}>
          File
        </MenuItem>
        <MenuItem icon={<Img src="images/defaultNoData.png" alt="icon" className="h-[20px] w-[20px]" />}>
          Calender
        </MenuItem>
        <MenuItem icon={<Img src="images/img_icon_3.svg" alt="icon_eleven" className="h-[20px] w-[20px]" />}>
          Shop
        </MenuItem>
        <MenuItem icon={<Img src="images/img_icon_2.svg" alt="icon_thirteen" className="h-[20px] w-[20px]" />}>
          Cart
        </MenuItem>
        <MenuItem icon={<div className="h-[18px] w-[11%]" />}>Settings</MenuItem>
      </Menu>
    </Sidebar>
  );
}
