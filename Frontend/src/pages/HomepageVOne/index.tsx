import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Input, RatingBar, Button, Slider } from "../../components";
import AliceCarousel, { EventObject, DotsItem, Link } from "react-alice-carousel";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "components/UsernameMenu";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@radix-ui/react-dropdown-menu";

const data = [
  { jacketone: "images/img_sweater.svg", jackettwo: "Jacket" },
  { jacketone: "images/img_tshirt.svg", jackettwo: "Shirt" },
  { jacketone: "images/img_pants.svg", jackettwo: "Pants" },
  { jacketone: "images/img_boot.svg", jackettwo: "Shoes" },
  { jacketone: "images/img_dress.svg", jackettwo: "Dress" },
  { jacketone: "images/img_belt.svg", jackettwo: "Accesories" },
];
const data1 = [
  {
    checkered: "images/img_placeholder_175x225.png",
    checkered1: "images/img_placeholder_7.png",
    checkered2: "images/img_placeholder_8.png",
    checkered3: "Checkered Jacket",
    elegantjacket: "Elegant Jacket",
    bluewoman: "Blue Woman Denim",
  },
  {
    checkered: "images/img_placeholder_9.png",
    checkered1: "images/img_placeholder_10.png",
    checkered2: "images/img_placeholder_11.png",
    checkered3: "Orange Jeans",
    elegantjacket: "Blue Jeans",
    bluewoman: "Gray Watch",
  },
];
const data2 = [
  { blacksport: "images/img_placeholder_12.png", blacksport1: "Black Sport Jacket" },
  { blacksport: "images/img_placeholder_13.png", blacksport1: "Wristwatch" },
  { blacksport: "images/img_placeholder_14.png", blacksport1: "Classic Watch" },
];
const data3 = [
  { truckone: "images/img_truck.svg", freedelivery: "Free Delivery" },
  { truckone: "images/img_card.svg", freedelivery: "Payment Method" },
  { truckone: "images/img_broken.svg", freedelivery: "Warranty" },
  { truckone: "images/img_support.svg", freedelivery: "Customer Support " },
];
const data4 = [
  { placeholderone: "images/img_placeholder_177x177.png", bluegreywarm: "Blue Grey Warm Jacket" },
  { placeholderone: "images/img_placeholder_1.png", bluegreywarm: "Denim Jacket" },
  { placeholderone: "images/img_placeholder_2.png", bluegreywarm: "Black Jacket" },
  { placeholderone: "images/img_placeholder_3.png", bluegreywarm: "Green Polar Jacket" },
];

export default function HomepageVOnePage() {
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
  };


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
        <div className="flex items-center justify-end self-stretch bg-white md:flex-col">
          <div className="relative z-[2] flex w-[29%] flex-col items-start md:w-full md:p-5">
            <Text size="xl" as="p" className="!font-playfairdisplay !text-gray-800">
              Your Tech Shield Is Here!
            </Text>
            {/* <Heading size="xl" as="h1" className="!text-gray-800">
              50% Off
            </Heading> */}
            <Text as="p" className="mt-[34px] w-[92%] leading-8 !text-gray-800 md:w-full">
              Welcome to our platform! We're dedicated to simplifying the insurance claims management journey. Our comprehensive application brings together all the essential tools you need to effortlessly handle insurance companies, policies, repair services, and sales outlets. Say goodbye to complexity and hello to efficiency with our user-friendly solution.{" "}
            </Text>
            <Button
              size="3xl"
              shape="square"
              rightIcon={<Img src="images/img_arrow.svg" alt="Arrow" className="h-[48px] w-[48px]" />}
              className="mt-14 min-w-[245px] gap-2.5 font-medium sm:px-5"
            >
              Shop Now{userRole}
            </Button>
          </div>
          <div className="relative ml-[-14px] h-[700px] w-[63%] md:ml-0 md:h-auto md:w-full md:p-5">
            <div className="flex w-full md:flex-col">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 6 } }}
                renderDotsItem={(props: DotsItem) => {
                  return props?.isActive ? (
                    <div className="mr-2 h-[12px] w-[12px] bg-gray-800" />
                  ) : (
                    <div className="mr-2 h-[12px] w-[12px] bg-white-A700" />
                  );
                }}
                activeIndex={sliderState1}
                onSlideChanged={(e: EventObject) => {
                  setSliderState1(e?.item);
                }}
                ref={sliderRef1}
                items={[...Array(18)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <Img
                      src="images/img_placeholder.png"
                      alt="placeholder_one"
                      className="mx-2.5 h-[336px] w-[14%] object-cover md:mx-0 md:w-full"
                    />
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <div className="container-md mt-[103px] flex flex-col gap-7 md:p-5">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <Heading size="md" as="h2" className="!text-gray-800">
              Categories
            </Heading>
            <a href="#" className="mt-[9px]">
              <Text as="p" className="!font-medium !text-gray-800">
                View all
              </Text>
            </a>
          </div>
          <div className="flex gap-8 md:flex-col">
            {data.map((d, index) => (
              <div key={"list" + index} className="flex w-full flex-col items-center gap-[7px] bg-gray-50 p-9 sm:p-5">
                <Img src={d.jacketone} alt="jacket_one" className="h-[96px] w-[96px]" />
                <Text as="p" className="mb-2.5">
                  {d.jackettwo}
                </Text>
              </div>
            ))}
          </div>
        </div>
        <div className="container-sm mt-[98px] flex md:p-5">
          <div className="flex w-full flex-col gap-[33px]">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <Heading size="md" as="h2" className="!text-gray-800">
                New Arrivals
              </Heading>
              <a href="#">
                <Text as="p" className="!font-medium !text-gray-800">
                  View all
                </Text>
              </a>
            </div>
            <div className="flex gap-8 md:flex-col">
              <div className="flex w-full items-center justify-center gap-12 bg-gray-50 p-7 md:flex-col sm:p-5">
                <Img
                  src="images/img_placeholder_631x384.png"
                  alt="placeholder_one"
                  className="h-[631px] w-[61%] object-cover md:w-full"
                />
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col items-center gap-[5px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Purple Warm Jacket
                    </Text>
                    <Text as="p" className="!font-medium !text-gray-800">
                      $299
                    </Text>
                  </div>
                  <Button size="5xl" shape="square" className="min-w-[200px] font-bold sm:px-5">
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-1">
                {data4.map((d, index) => (
                  <div
                    key={"gridplaceholder" + index}
                    className="flex w-full flex-col items-center gap-4 bg-gray-50 p-8 sm:p-5"
                  >
                    <Img src={d.placeholderone} alt="placeholder_one" className="h-[177px] w-[177px] object-cover" />
                    <div className="flex flex-col items-center gap-1.5">
                      <Text size="md" as="p" className="!text-gray-800">
                        {d.bluegreywarm}
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container-sm mt-[99px] flex flex-col gap-8 md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <Heading size="md" as="h2" className="!text-gray-800">
              Featured
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
        <div className="relative mt-[74px] h-[544px] self-stretch">
          <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full justify-center bg-gray-800 py-[43px] md:py-5">
            <div className="container-xs mb-[284px] flex md:p-5">
              <Heading size="md" as="h2">
                Summer Collections
              </Heading>
            </div>
          </div>
          <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-[87%] items-center md:relative md:flex-col">
            <div className="container-md flex w-full gap-8 md:flex-col md:p-5">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 3 } }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e: EventObject) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="relative mx-2.5 h-[400px] w-full bg-blue_gray-100 md:mx-0 md:h-auto">
                      <Img src="images/img_image_2.png" alt="imagetwo_one" className="h-[400px] w-full object-cover" />
                      <Text
                        size="lg"
                        as="p"
                        className="absolute bottom-0 left-[11%] top-0 my-auto h-max w-[36%] !text-gray-800"
                      >
                        <span className="text-gray-800">
                          <>
                            Summer <br />
                          </>
                        </span>
                        <span className="font-bold text-gray-800">Collection</span>
                      </Text>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
            <Button size="4xl" shape="square" className="w-[60px] md:p-5">
              <Img src="images/img_arrow_gray_800.svg" />
            </Button>
          </div>
        </div>
        <div className="container-sm mt-[103px] flex flex-col gap-[30px] md:p-5">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <Heading size="md" as="h2" className="!text-gray-800">
              Popular This Week
            </Heading>
            <a href="#" className="mt-[9px]">
              <Text as="p" className="!font-medium !text-gray-800">
                View all
              </Text>
            </a>
          </div>
          <div className="flex flex-col gap-8">
            {data1.map((d, index) => (
              <div key={"listcheckered" + index} className="flex flex-1 p-[18px] md:flex-col">
                <div className="flex flex-1 items-center gap-4 md:self-stretch sm:flex-col">
                  <Img src={d.checkered} alt="checkered" className="h-[175px] w-[51%] object-cover sm:w-full" />
                  <div className="flex w-[49%] flex-col items-start gap-4 sm:w-full">
                    <div className="flex flex-col items-start gap-2">
                      <Text size="md" as="p" className="!text-gray-800">
                        {d.checkered3}
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
                <div className="ml-[94px] flex w-[31%] items-center justify-center gap-4 md:ml-0 md:w-full sm:flex-col">
                  <Img src={d.checkered1} alt="checkered" className="h-[175px] w-[56%] object-cover sm:w-full" />
                  <div className="flex w-[44%] flex-col items-start gap-4 sm:w-full">
                    <div className="flex flex-col items-start justify-center gap-[5px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        {d.elegantjacket}
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
                <div className="ml-[134px] flex flex-1 items-center gap-4 md:ml-0 md:flex-col md:self-stretch">
                  <Img src={d.checkered2} alt="checkered" className="h-[175px] w-[48%] object-cover md:w-full" />
                  <div className="flex w-[52%] flex-col items-start gap-4 md:w-full">
                    <div className="flex flex-col items-start gap-2">
                      <Text size="md" as="p" className="!text-gray-800">
                        {d.bluewoman}
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-[90px] p-[22px] md:flex-col sm:p-5">
            {data2.map((d, index) => (
              <div key={"row03" + index} className="flex w-[29%] items-center gap-4 md:w-full sm:flex-col">
                <Img src={d.blacksport} alt="black_sport" className="h-[175px] w-[50%] object-cover sm:w-full" />
                <div className="flex w-[50%] flex-col items-start gap-4 sm:w-full">
                  <div className="flex flex-col items-start justify-center gap-[5px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      {d.blacksport1}
                    </Text>
                    <Text size="md" as="p">
                      $299
                    </Text>
                  </div>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                    className="flex justify-between"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[104px] flex flex-col items-center gap-[27px] self-stretch">
          <div className="container-xs flex flex-col items-center md:p-5">
            <Heading size="md" as="h2" className="!text-gray-800">
              Why Choose Us
            </Heading>
          </div>
          <div className="flex gap-8 self-stretch bg-gray-50 pl-36 pr-14 md:flex-col md:px-5">
            {data3.map((d, index) => (
              <div
                key={"content" + index}
                className="flex w-[22%] flex-col items-center justify-center gap-8 px-14 py-[63px] md:w-full md:p-5"
              >
                <div className="w-[44%] rounded-[60px] border-2 border-solid border-gray-500 p-[27px] md:w-full sm:p-5">
                  <Img src={d.truckone} alt="truck_one" className="h-[65px] w-[65px]" />
                </div>
                <div className="flex w-[78%] flex-col items-center gap-3.5 md:w-full">
                  <Heading as="h2" className="!text-gray-800">
                    {d.freedelivery}
                  </Heading>
                  <Text as="p" className="text-center">
                    <>
                      This free shipping
                      <br />
                      only for selected region
                    </>
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[100px] flex flex-col items-center gap-[100px] self-stretch md:gap-[75px] sm:gap-[50px]">
          <div className="container-xs px-[329px] md:p-5 md:px-5">
            <Img src="images/img_brand.svg" alt="brand_one" className="h-[68px] w-full md:h-auto" />
          </div>
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
