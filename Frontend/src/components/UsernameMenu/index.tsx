import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import React, { useEffect, useState } from "react";
import { Img } from "components/Img";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center font-bold text-[#ffffff] gap-2">
        <CircleUserRound className="text-[#ffffff]" />
        {/* <Img src={user?.picture} /> */}
        {user?.nickname}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#0c0a09]">
        <DropdownMenuItem>
          <Link
            to=""
            className="font-bold text-[#ffffff]"
          >
            Manage
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/settings" className="font-bold text-[#ffffff]">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold text-[#ffffff] bg-[#38bdf8]"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
