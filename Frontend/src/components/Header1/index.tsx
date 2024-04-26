import React from "react";
import { Button, Img } from "./..";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  className?: string;
}

export default function Header1({ ...props }: Props) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <header {...props}>
      <div className="flex w-full flex-col items-center">
        <div className="flex justify-center self-stretch bg-white-A700 py-6 sm:py-5">
          <div className="container-xs flex items-center justify-between gap-5 pl-[760px] md:p-5 md:pl-5">
            <Img
              src="images/img_header_logo.png"
              alt="headerlogo_one"
              className="h-[36px] w-[13%] self-end object-cover"
            />
            <div className="flex w-[25%] items-center justify-between gap-5">
              <div className="flex w-[37%] justify-between gap-5">
                <Img src="images/img_cart.svg" alt="cart_one" className="h-[24px] w-[24px]" />
                <Img src="images/img_email_gray_800.svg" alt="email_one" className="h-[24px] w-[24px]" />
              </div>
              
              <Button shape="square" className="min-w-[107px] font-medium sm:px-5"
                onClick={async () => await loginWithRedirect()}>
                Login
              </Button>
            </div>
          </div>
        </div>
        <div className="container-sm h-px bg-gray-50 md:p-5" />
      </div>
    </header>
  );
}
