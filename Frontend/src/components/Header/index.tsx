import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Input } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <header {...props}>
      {/* <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="/template/assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">MY Garage</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div> */}
      <div className="container-sm flex items-center justify-between gap-5 md:flex-col md:p-5">
        <Img
          src="images/img_header_logo.png"
          alt="headerlogo_one"
          className="h-[36px] w-[7%] self-end object-cover md:w-full"
        />
        <div className="flex w-[68%] justify-between gap-5 md:w-full md:flex-col">
          <Input
            size="sm"
            variant="fill"
            shape="square"
            name="search"
            placeholder={`Search here`}
            value={searchBarValue}
            onChange={(e: string) => setSearchBarValue(e)}
            suffix={
              <div className="flex h-[48px] w-[48px] items-center justify-center bg-gray-800">
                {searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} height={18} width={18} />
                ) : (
                  <Img
                    src="images/img_search_white_a700_18x18.svg"
                    alt="search"
                    className="h-[18px] w-[18px] cursor-pointer"
                  />
                )}
              </div>
            }
            className="w-[53%] gap-[35px] border-2 border-solid border-gray-50 text-gray-500_7f md:w-full sm:pl-5"
          />
          <div className="flex w-[20%] items-center justify-between gap-5 md:w-full">
            <div className="flex w-[37%] justify-between gap-5">
              <Img src="images/img_cart.svg" alt="cart_one" className="h-[24px] w-[24px]" />
              <Img src="images/img_email_gray_800.svg" alt="email_one" className="h-[24px] w-[24px]" />
            </div>
            <Button
              size="md"
              shape="square"
              className="min-w-[107px] font-bold sm:px-5"
              onClick={async () => await loginWithRedirect()}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
