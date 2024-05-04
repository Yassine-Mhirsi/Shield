import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Input, Heading } from "../../components";
import Header from "../../components/Header";

const data = [
  { placeholderone: "images/img_placeholder_137x139.png" },
  { placeholderone: "images/img_placeholder_26.png" },
  { placeholderone: "images/img_placeholder_27.png" },
];
const data1 = [
  { placeholderone: "images/img_travel_8v7cnke.png", graytshirt: "Gray T-shirt" },
  { placeholderone: "images/img_placeholder_2.png", graytshirt: "Red Flannel" },
];

export default function ProductDetailsPage() {
  return (
    <>
      <Helmet>
        <title>react</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <Header className="flex items-center justify-center self-stretch bg-white-A700 py-6 sm:py-5" />
        <div className="container-sm mt-[31px] flex flex-col gap-[181px] md:gap-[135px] md:p-5 sm:gap-[90px]">
          <div className="flex items-center gap-8 md:flex-col">
            <div className="flex w-full flex-col items-center gap-8">
              <Img
                src="images/img_placeholder_523x800.png"
                alt="placeholder_one"
                className="h-[523px] w-full object-cover md:h-auto"
              />
              <div className="flex w-[60%] gap-8 md:w-full md:flex-row sm:flex-col">
                {data.map((d, index) => (
                  <Img
                    key={"listplaceholder" + index}
                    src="images/img_placeholder_137x139.png"
                    alt="placeholder_one"
                    className="h-[137px] w-[29%] object-cover sm:w-full"
                  />
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-14 sm:gap-7">
              <div className="flex flex-col gap-[29px] self-stretch">
                <div className="flex flex-wrap gap-4">
                  <Text as="p" className="self-start !font-medium">
                    Featured
                  </Text>
                  <Text as="p" className="self-start !font-medium !text-blue_gray-100">
                    &gt;
                  </Text>
                  <Text as="p" className="self-end !font-medium">
                    Purple Warm Jacket
                  </Text>
                </div>
                <div className="flex flex-col items-start gap-[31px]">
                  <Heading size="lg" as="h1" className="w-[49%] !text-gray-800 md:w-full">
                    <>
                      Purple Warm <br />
                      Zip Jacket
                    </>
                  </Heading>
                  <Text size="lg" as="p" className="!text-gray-800">
                    $2999999999999
                  </Text>
                  <div className="h-px w-full self-stretch bg-blue_gray-100" />
                  <Text as="p" className="leading-8 !text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </Text>
                </div>
              </div>
              <div className="flex w-[34%] items-center gap-6 md:w-full">
                <Text as="p" className="mb-[9px] self-end !font-medium !text-gray-800">
                  Quantity
                </Text>
                <div className="flex-1">
                  <Button
                    variant="outline"
                    shape="square"
                    color="undefined_undefined"
                    className="relative z-[1] w-full font-medium sm:px-5"
                  >
                    1
                  </Button>
                  <div className="relative mt-[-48px] flex justify-between gap-5">
                    <div className="w-[28%] bg-gray-50 p-[19px]">
                      <div className="h-[2px] w-[9px] bg-gray-500" />
                    </div>
                    <Button size="sm" shape="square" className="w-[48px]">
                      <Img src="images/img_grid.svg" />
                    </Button>
                  </div>
                </div>
              </div>
              <a href="" target="_blank">
                <Button
                  size="6xl"
                  shape="square"
                  rightIcon={<Img src="images/img_cart_white_a700.svg" alt="Cart" className="h-[32px] w-[32px]" />}
                  className="min-w-[245px] gap-4 font-bold sm:px-5"
                >
                  Add to Cart
                </Button>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[33px]">
            <div className="flex items-center justify-between gap-5 sm:flex-col">
              <div className="flex w-[24%] flex-wrap items-center justify-between gap-5 sm:w-full">
                <Heading size="md" as="h2" className="!text-gray-800">
                  Similiar Product
                </Heading>
                <a href="#">
                  <Text as="p" className="!font-medium">
                    View all
                  </Text>
                </a>
              </div>
              <div className="flex gap-4">
                <Img src="images/img_arrow_blue_gray_100.svg" alt="arrow_one" className="h-[48px] w-[48px]" />
                <Img src="images/img_arrow_gray_800_48x48.svg" alt="arrow_three" className="h-[48px] w-[48px]" />
              </div>
            </div>
            <div className="flex items-center justify-between gap-5 px-[67px] md:flex-col md:px-5">
              <div className="flex w-[17%] flex-col items-center gap-3.5 md:w-full">
                <Img
                  src="images/img_placeholder_1.png"
                  alt="placeholder"
                  className="h-[250px] w-full object-cover md:h-auto"
                />
                <div className="flex flex-col items-center gap-[9px]">
                  <Text size="md" as="p" className="!text-gray-800">
                    Black Briefcase
                  </Text>
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex w-[26%] flex-col items-center justify-center gap-3.5 px-14 py-[67px] md:w-full md:p-5">
                <Img
                  src="images/img_placeholder_24.png"
                  alt="placeholder"
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
              <div className="flex w-[44%] gap-[166px] md:w-full md:flex-row sm:flex-col">
                {data1.map((d, index) => (
                  <div key={"listplaceholder1" + index} className="flex w-full flex-col items-center gap-4 sm:w-full">
                    <Img
                      src={d.placeholderone}
                      alt="placeholder_one"
                      className="h-[250px] w-full object-cover md:h-auto"
                    />
                    <div className="flex flex-col items-center gap-1.5">
                      <Text size="md" as="p" className="!text-gray-800">
                        {d.graytshirt}
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
        <footer className="mt-[100px] flex flex-col items-center gap-[97px] self-stretch bg-gray-800 py-[30px] md:gap-[72px] sm:gap-12 sm:py-5">
          <div className="container-sm mt-[31px] flex items-start md:flex-col md:p-5">
            <div className="flex flex-1 flex-col gap-[31px] md:self-stretch">
              <Img src="images/img_footer_logo.png" alt="footerlogo_one" className="h-[36px] w-[27%] object-cover" />
              <Text as="p" className="w-[92%] leading-8 md:w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .
              </Text>
              <div className="flex flex-col items-start gap-[18px]">
                <div className="flex items-center gap-2">
                  <Img src="images/img_call.svg" alt="call_one" className="h-[24px] w-[24px]" />
                  <Text as="p" className="!text-white-A700">
                    +1234567890
                  </Text>
                </div>
                <div className="flex items-center gap-2">
                  <Img src="images/img_email_white_a700.svg" alt="email_three" className="h-[24px] w-[24px]" />
                  <Text as="p" className="self-end !text-white-A700">
                    elliye@support.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="ml-[278px] flex flex-1 items-start justify-between gap-5 md:ml-0 md:self-stretch">
              <div className="flex flex-col items-start gap-[29px]">
                <Heading as="h4">Product Links</Heading>
                <ul className="flex flex-col items-start gap-[15px]">
                  <li>
                    <a href="#">
                      <Text as="p">Categories</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">New Arrival</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Features</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Collections</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-[29px]">
                <Heading as="h4">Company</Heading>
                <ul className="flex flex-col items-start">
                  <li>
                    <a href="#">
                      <Text as="p">About</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-3">
                      <Text as="p">Blog</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-[7px]">
                      <Text as="p">Careers</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-[9px]">
                      <Text as="p">Services</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-3">
                      <Text as="p">Privacy Policy</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-[7px]">
                      <Text as="p">Terms of service</Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ml-[130px] flex w-[31%] flex-col items-start gap-[30px] md:ml-0 md:w-full">
              <Heading as="h4">Join our Newsletter</Heading>
              <Text as="p">Drop your email below to get update, promotions, coupons, and more!</Text>
              <div className="flex items-center justify-center self-stretch border border-solid border-white-A700 bg-gray-800 pl-6 sm:pl-5">
                <Input
                  size="xs"
                  shape="square"
                  type="email"
                  name="email"
                  placeholder={`Enter your email`}
                  className="flex-grow tracking-[0.36px] text-blue_gray-100_7f"
                />
                <Button size="4xl" shape="square" className="relative ml-[-9px] w-[60px]">
                  <Img src="images/img_submit.svg" />
                </Button>
              </div>
            </div>
          </div>
          <div className="container-xs flex flex-col items-center px-[673px] md:p-5 md:px-5">
            <Text size="xs" as="p" className="!text-blue_gray-100">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
}
