import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Input, RatingBar, Button, Slider } from "../../components";
import AliceCarousel, { EventObject, DotsItem, Link } from "react-alice-carousel";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "components/UsernameMenu";
import { CloseSVG } from "../../assets/images";


interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef<AliceCarousel>(null);

  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch('http://localhost:7800/api/my/user');
        const allUsers = await response.json();
        // console.log("All users:", allUsers);
        const currentUser = allUsers.find((u: { email: string; }) => u.email === user.email);
        // console.log("Current user:", currentUser);
        if (currentUser) {
          // Assuming currentUser contains role information
          setUserRole(currentUser.role);
        } else {
          setUserRole('Role not found');
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
        setUserRole('Error fetching role');
      }
    };

    if (user) {
      fetchUserRole();
    }
  }, [user]);


  // Define menu items based on user role
  const getMenuItems = () => {
    if (!isAuthenticated) {
      return [
        { label: "Home", link: "/" },
        { label: "Shops", link: "/productlist" },
        { label: "Repair Shop", link: "#" },
        { label: "Insurance", dropdown: ["Process Reports", "Manage Reports"] }
      ]; // Return an empty array if user is not authenticated
    }

    switch (userRole) {
      case "client":
        return [
          { label: "Home", link: "/" },
          { label: "Shops", link: "/productlist" },
          { label: "Insurance", dropdown: ["Submit Report", "Manage Reports"] }
        ];
      case "shop":
        return [
          { label: "Home", link: "/" },
          { label: "Shops", link: "/productlist" }
        ];
      case "repair-shop":
        return [
          { label: "Home", link: "/" },
          { label: "Shops", link: "/productlist" },
          { label: "Repair Shop", link: "#" }
        ];
      case "insurance":
        return [
          { label: "Home", link: "/" },
          { label: "Shops", link: "/productlist" },
          { label: "Repair Shop", link: "#" },
          { label: "Insurance", dropdown: ["Process Reports", "Manage Reports"] }
        ];
      default:
        return [];
    }
  };

  return (
            <header className="flex items-center justify-center self-stretch bg-black py-[17px]">
          <div className="container-sm flex items-center justify-between gap-5 md:flex-col md:p-5">
            <Img
              src="images/img_header_logoo.png"
              alt="headerlogo_one"
              className="h-[50px] w-[15%] object-cover md:w-full"
            />
            <div className="flex w-[69%] items-center justify-between gap-5 md:w-full md:flex-col">
              <ul className="flex flex-wrap gap-20 md:gap-5">
                {getMenuItems().map((menuItem, index) => (
                  <li key={index}>
                    {menuItem.dropdown ? (
                      <div className="relative">
                        <a href={menuItem.link} className="self-start">
                          <Text as="p" className="!font-medium">
                            {menuItem.label}
                          </Text>
                        </a>
                        <ul className="absolute top-full left-0 bg-white shadow-md z-10">
                          {menuItem.dropdown.map((item, idx) => (
                            <li key={idx}>
                              <a href="#" className="block px-4 py-2 text-sm text-gray-800">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <a href={menuItem.link} className="self-start">
                        <Text as="p" className="!font-medium">
                          {menuItem.label}
                        </Text>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex w-[22%] items-center justify-between gap-40 md:w-full">
                <div className="flex w-[33%] justify-between gap-5">
                  <Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px]" />
                  <Img src="images/img_cart.svg" alt="cart_one" className="h-[24px] w-[24px]" />
                </div>

                <span className="flex space-x-2 items-center">
                  {isAuthenticated ? (
                    <>
                      <Link className="font-bold hover:text-orange-500"></Link>
                      <UsernameMenu />
                    </>
                  ) : (
                    <Button
                      shape="square" className="min-w-[150px] font-bold sm:px-5 text-[#ffffff]"
                      onClick={async () => await loginWithRedirect()}>
                      Log In
                    </Button>
                  )}
                </span>
              </div>
            </div>
          </div>
        </header>
    // <header {...props}>
    //   {/* <div className="d-flex align-items-center justify-content-between">
    //     <a href="index.html" className="logo d-flex align-items-center">
    //       <img src="/template/assets/img/logo.png" alt="" />
    //       <span className="d-none d-lg-block">MY Garage</span>
    //     </a>
    //     <i className="bi bi-list toggle-sidebar-btn"></i>
    //   </div> */}
    //   <div className="container-sm flex items-center justify-between gap-5 md:flex-col md:p-5">
    //     <Img
    //       src="images/img_header_logo.png"
    //       alt="headerlogo_one"
    //       className="h-[36px] w-[7%] self-end object-cover md:w-full"
    //     />
    //     <div className="flex w-[68%] justify-between gap-5 md:w-full md:flex-col">
    //       <Input
    //         size="sm"
    //         variant="fill"
    //         shape="square"
    //         name="search"
    //         placeholder={`Search here`}
    //         value={searchBarValue}
    //         onChange={(e: string) => setSearchBarValue(e)}
    //         suffix={
    //           <div className="flex h-[48px] w-[48px] items-center justify-center bg-gray-800">
    //             {searchBarValue?.length > 0 ? (
    //               <CloseSVG onClick={() => setSearchBarValue("")} height={18} width={18} />
    //             ) : (
    //               <Img
    //                 src="images/img_search_white_a700_18x18.svg"
    //                 alt="search"
    //                 className="h-[18px] w-[18px] cursor-pointer"
    //               />
    //             )}
    //           </div>
    //         }
    //         className="w-[53%] gap-[35px] border-2 border-solid border-gray-50 text-gray-500_7f md:w-full sm:pl-5"
    //       />
    //       <div className="flex w-[20%] items-center justify-between gap-5 md:w-full">
    //         <div className="flex w-[37%] justify-between gap-5">
    //           <Img src="images/img_cart.svg" alt="cart_one" className="h-[24px] w-[24px]" />
    //           <Img src="images/img_email_gray_800.svg" alt="email_one" className="h-[24px] w-[24px]" />
    //         </div>
    //         <Button
    //           size="md"
    //           shape="square"
    //           className="min-w-[107px] font-bold sm:px-5"
    //           onClick={async () => await loginWithRedirect()}
    //         >
    //           Login
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}
