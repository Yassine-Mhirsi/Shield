import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Input, RatingBar, Button, Slider } from "../../components";
import AliceCarousel, { EventObject, DotsItem, Link } from "react-alice-carousel";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "components/UsernameMenu";
import { useNavigate } from 'react-router-dom';
import ReactiveButton from 'reactive-button';
import MegaMenu1 from "components/cccmp/MegaMenu1";

const data3 = [
  { truckone: "images/img_truck.svg", freedelivery: "Free Delivery" },
  { truckone: "images/img_card.svg", freedelivery: "Payment Method" },
  { truckone: "images/img_broken.svg", freedelivery: "Warranty" },
  // { truckone: "", freedelivery: " " },
];

export default function HomepageVOnePage() {


  const [sliderState, setSliderState] = React.useState(0);
  const [sliderState1, setSliderState1] = React.useState(0);

  const navigate = useNavigate();
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const [userRole, setUserRole] = useState(null);



  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch('http://localhost:7800/api/my/user');
        const allUsers = await response.json();
        const currentUser = allUsers.find(u => u.email === user.email);
        if (currentUser) {
          setUserRole(currentUser.role);
        } else {
          setUserRole('Role not found');
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
        setUserRole('Error fetching role');
      }
    };

    const fetchUserStatus = async () => {
      try {
        const response = await fetch('http://localhost:7800/partner/fetchAllPartner');
        const allUsers = await response.json();
        const currentUser = allUsers.find(u => u.user.email === user.email);
        if (currentUser) {
          setUserStatus(currentUser.status);
        } else {
          console.log('Status not found');
        }
      } catch (error) {
        console.error('Error fetching user status:', error);
        // setUserStatus('Error fetching status');
      }
    };

    if (user) {
      fetchUserRole();
      fetchUserStatus();
    }
  }, [user]);

  const handleButtonClick = () => {
    if (isAuthenticated) {
      if (userStatus === 'accepted') {
        navigate(`/dashboardadmin${userRole}`);
      } else if (userStatus === 'waiting') {
        alert('Your request is still being processed');
      } else if (userStatus === 'refused') {
        alert('Your request was refused');
      } else {
        navigate(`/submitPartner`);
      }
    } else {
      loginWithRedirect();
    }
  };
  const home = () => {
    navigate(`/`);
  };



  // Define menu items based on user role
  const getMenuItems = () => {
    if (!isAuthenticated) {
      return [
        { label: "Home", link: "/" },
        { label: "Shops", link: "/productlist" },
        { label: "Repair Shop", link: "/repair-shop" },
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
        return [
          { label: "Home", link: "/" },
          { label: "Shops", link: "/productlist" },
          { label: "Repair Shop", link: "#" },
          { label: "Insurance", dropdown: ["Process Reports", "Manage Reports"] }
        ];
    }
  }; const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);



  return (
    <>
      <Helmet>
        <title>Shield</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <header className="flex items-center justify-center self-stretch bg-black py-[17px]">
          <div className="container-sm flex items-center justify-between gap-5 md:flex-col md:p-5">
            <Img
              onClick={home}
              src="images/small-logo.png"
              alt="headerlogo_one"
              className="h-[55px] w-[80px] object-cover md:w-full"
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
                <li
                  onMouseLeave={() => {
                    setMenuOpen(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen(true);
                  }}
                >
                  <div className="flex cursor-pointer pt-px">
                    <Text size="s" as="p" className="cursor-pointer hover:font-medium hover:text-black-900">
                      Shop
                    </Text>
                    <Img
                      src="../../../../public/images/img_arrow_down_gray_600_01.svg"
                      alt="dropdown icon"
                      className="h-[16px] w-[16px]"
                    />
                  </div>
                  {menuOpen ? <MegaMenu1 /> : null}
                </li>
              </ul>
              <div className="flex w-[22%] items-center justify-between gap-40 md:w-full">
                <div className="flex w-[33%] justify-between gap-5">
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
        <div className="relative flex items-center justify-end self-stretch md:flex-col w-full">
          <img src="../../../public/images/shieldd.png" alt="" className="w-full h-auto" />
          <div className="absolute top-[700px] left-[0px] right-[0px] bottom-0 flex items-center justify-center">
            {/* <div>
              <Text>Protect your electronics with our comprehensive insurance plans.</Text>
            </div> */}
            <ReactiveButton
              color="violet"
              size="large"
              rounded
              width="250px"
              height="70px"
              idleText="Become a Partner"
              style={{ fontSize: '22px' }}
              onClick={handleButtonClick}
            />
          </div>
        </div>
        <div className="mt-[104px] flex flex-col items-center gap-[27px] self-stretch">
          <div className="container-xs flex flex-col items-center md:p-5">
            <Heading size="md" as="h2" className="!text-gray-800">
              About
            </Heading>
          </div>
          <div className="flex flex-col items-center self-stretch bg-gray-50 pl-10 pr-14 md:px-5">
            <Text style={{ fontSize: '22px' }} className="text-center mt-4 max-w-2xl mx-auto text-lg text-black font">
              At SHIELD Insurance, Our mission is to offer our clients the security and protection they need to face life's
              unexpected events with confidence.
            </Text>
            <div className="flex w-full md:flex-col gap-8">
              {data3.map((d, index) => (
                <div
                  key={"content" + index}
                  className="flex w-full flex-col items-center justify-center gap-8 px-14 py-[63px] md:w-full md:px-5 md:py-10"
                >
                  <div className="w-full rounded-[60px] border-2 border-solid border-gray-500 p-[27px] md:p-5">
                    <Img src={d.truckone} alt="truck_one" className="mx-auto h-[65px] w-[65px]" />
                  </div>
                  <div className="flex w-full flex-col items-center gap-3.5">
                    <Heading as="h2" className="!text-gray-800">
                      {d.freedelivery}
                    </Heading>
                    <Text as="p" className="text-center text-black">
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
        <div className="container-sm mt-[99px] flex flex-col gap-8 md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <Heading size="md" as="h2" className="!text-gray-800">
              Products
            </Heading>
            <a href="#">
              <Text as="p" className="!font-medium !text-gray-800">
                View all
              </Text>
            </a>
          </div>
          <div className="grid grid-cols-3 justify-center gap-8 pb-[67px] pr-[67px] md:grid-cols-2 md:pb-5 md:pr-5 sm:grid-cols-1">
            <div className="flex w-full flex-col items-center gap-[15px] border-0 border-solid border-gray-800 p-[43px] md:p-5">
              <Img
                src="images/img_placeholder_250x250.png"
                alt="black_briefcase"
                className="h-[250px] w-[250px] object-cover"
              />
              <div className="flex flex-col items-center gap-[9px]">
                <Text size="md" as="p" className="!text-gray-800">
                  Black Briefcase
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
              <Button size="5xl" shape="square" className="min-w-[200px] font-bold sm:px-5">
                Add to Cart
              </Button>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-3.5 px-14 py-[67px] md:p-5">
              <Img
                src="images/img_placeholder_4.png"
                alt="placeholder_one"
                className="mt-3.5 h-[250px] w-[250px] object-cover"
              />
              <div className="mb-3.5 flex flex-col items-center gap-[9px]">
                <Text size="md" as="p" className="!text-gray-800">
                  Pink Shirt
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-[17px] px-14 py-[67px] md:p-5">
              <Img
                src="images/img_placeholder_5.png"
                alt="placeholder_one"
                className="mt-3.5 h-[250px] w-[250px] object-cover"
              />
              <div className="mb-3.5 flex flex-col items-center gap-1.5">
                <Text size="md" as="p" className="!text-gray-800">
                  Gray T-shirt
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-[15px]">
              <Img
                src="images/img_placeholder_6.png"
                alt="placeholder_one"
                className="h-[250px] w-full object-cover md:h-auto"
              />
              <div className="flex flex-col items-center gap-[9px]">
                <Text size="md" as="p" className="!text-gray-800">
                  Red Flannel
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              <Img
                src="images/img_placeholder_3.png"
                alt="stylishblacks"
                className="h-[250px] w-full object-cover md:h-auto"
              />
              <div className="flex flex-col items-center gap-1.5">
                <Text size="md" as="p" className="!text-gray-800">
                  Black Highheels
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              <Img
                src="images/img_placeholder_631x384.png"
                alt="casualfabrics"
                className="h-[250px] w-full object-cover md:h-auto"
              />
              <div className="flex flex-col items-center gap-1.5">
                <Text size="md" as="p" className="!text-gray-800">
                  Casual Grey Shoes
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-[15px]">
              <Img
                src="images/img_shoes_isolated_pk7npbk.png"
                alt="shoesisolated"
                className="h-[250px] w-full object-cover md:h-auto"
              />
              <div className="flex flex-col items-center gap-[9px]">
                <Text size="md" as="p" className="!text-gray-800">
                  Brown Shoes
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-3.5">
              <Img
                src="images/img_business_shirt_ptnj9lv.png"
                alt="businessshirt"
                className="h-[250px] w-full object-cover md:h-auto"
              />
              <div className="flex flex-col items-center gap-[9px]">
                <Text size="md" as="p" className="!text-gray-800">
                  Business Shirt
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              <Img
                src="images/img_warm_pants_pxl7hrp.png"
                alt="warmpants_one"
                className="h-[250px] w-full object-cover md:h-auto"
              />
              <div className="flex flex-col items-center gap-[5px]">
                <Text size="md" as="p" className="!text-gray-800">
                  Grey Warm Pants
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              <Img
                src="images/img_sport_j9bzxuy.png"
                alt="sportj9bzxuy"
                className="h-[250px] w-full object-cover md:h-auto"
              />
              <div className="flex flex-col items-center gap-[5px]">
                <Text size="md" as="p" className="!text-gray-800">
                  Green Sport Jacket
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4">
              <Img src="images/img_travel_8v7cnke.png" alt="travel8v7cnke" className="h-[250px] object-cover" />
              <div className="flex flex-col items-center gap-[5px]">
                <Text size="md" as="p" className="!text-gray-800">
                  Purple Warm Jacket
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3.5">
              <Img src="images/img_placeholder_1.png" alt="womensdenim_one" className="h-[250px] object-cover" />
              <div className="flex flex-col items-center gap-[9px]">
                <Text size="md" as="p" className="!text-gray-800">
                  Woman Denim Skirt
                </Text>
                <Text as="p" className="!font-medium">
                  $299
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[100px] flex flex-col items-center gap-[100px] self-stretch md:gap-[75px] sm:gap-[50px]">
          <footer className="flex items-end justify-center self-stretch bg-gray-800 py-[30px] sm:py-5">
            <div className="container-xs mt-[31px] flex justify-center pr-[90px] md:p-5 md:pr-5">
              <div className="flex w-full flex-col items-center gap-[82px] md:gap-[61px] sm:gap-[41px]">
                <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                  <div className="flex w-[28%] flex-col items-start gap-[30px] md:w-full">
                    <a href="#">
                      <Heading as="h4">Join our Newsletter</Heading>
                    </a>
                    <Text as="p" className="!text-white-A700">
                      <>
                        Drop your email below to get update about us, <br />
                        lastest news, tips, and more!
                      </>
                    </Text>
                    <Input
                      size="md"
                      variant="fill"
                      shape="square"
                      type="email"
                      name="email"
                      placeholder={`Enter your email`}
                      suffix={<Img src="images/img_arrow_gray_800.svg" alt="Arrow" className="h-[31px] w-[32px]" />}
                      className="w-[91%] gap-[35px] tracking-[0.36px] text-gray-500_7f sm:pl-5"
                    />
                  </div>
                  <div className="flex items-start md:flex-col">
                    <div className="flex flex-col items-start gap-[21px]">
                      <Heading as="h4">Product Links</Heading>
                      <ul className="flex flex-col items-start gap-[9px]">
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Categories
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              New Arrival
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Features
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Collections
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ml-28 flex flex-col items-start gap-[21px] md:ml-0">
                      <Heading as="h4">Company</Heading>
                      <ul className="flex flex-col items-start">
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              About
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="mt-3">
                            <Text as="p" className="!text-white-A700">
                              Blog
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="mt-[7px]">
                            <Text as="p" className="!text-white-A700">
                              Careers
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="mt-2.5">
                            <Text as="p" className="!text-white-A700">
                              Contact{" "}
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="mt-[9px]">
                            <Text as="p" className="!text-white-A700">
                              Services
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ml-[154px] flex flex-col items-start gap-[21px] md:ml-0">
                      <Heading as="h4">Support</Heading>
                      <ul className="flex flex-col items-start gap-[9px]">
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Support Center
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              FAQ
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Privacy Policy
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Terms of service
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex w-[10%] flex-col items-start gap-6 md:w-full">
                    <Heading as="h4">Get In Touch</Heading>
                    <div className="flex w-[78%] justify-between gap-5 md:w-full">
                      <Img src="images/img_instagram.svg" alt="instagram_one" className="h-[24px] w-[24px]" />
                      <Img src="images/img_trash.svg" alt="trash_one" className="h-[24px] w-[24px]" />
                      <Img src="images/img_facebook.svg" alt="facebook_one" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                </div>
                <Text size="xs" as="p" className="!text-white-A700">
                  Copyright © 2021 Elliye. All Right Reseved
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
