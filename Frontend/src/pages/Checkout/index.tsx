import React from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, Button, SelectBox } from "../../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>react</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <header className="self-stretch">
          <div className="flex flex-col items-center">
            <div className="flex justify-center self-stretch bg-white-A700 py-6 sm:py-5">
              <div className="container-xs flex items-center justify-between gap-5 pl-[760px] md:p-5 md:pl-5">
                <div className="flex items-start gap-2 self-end">
                  <Img src="images/img_user.svg" alt="user_one" className="h-[24px]" />
                  <Heading as="h4" className="!text-gray-800">
                    Elliye{" "}
                  </Heading>
                </div>
                <div className="flex w-[25%] items-center justify-between gap-5">
                  <div className="flex w-[37%] justify-between gap-5">
                    <Img src="images/img_cart.svg" alt="cart_one" className="h-[24px] w-[24px]" />
                    <Img src="images/img_email_gray_800.svg" alt="email_one" className="h-[24px] w-[24px]" />
                  </div>
                  <Button shape="square" className="min-w-[107px] font-medium sm:px-5">
                    Login
                  </Button>
                </div>
              </div>
            </div>
            <div className="container-sm h-px bg-gray-50 md:p-5" />
          </div>
        </header>
        <div className="container-sm mt-[30px] flex flex-col items-center md:p-5">
          <div className="flex flex-wrap gap-4 self-start">
            <Text as="p" className="self-start !font-medium">
              Home
            </Text>
            <Text as="p" className="self-start !font-medium !text-blue_gray-100">
              &gt;
            </Text>
            <Text as="p" className="self-end !font-medium">
              Shopping Cart
            </Text>
            <Text as="p" className="self-start !font-medium !text-blue_gray-100">
              &gt;
            </Text>
            <Text as="p" className="self-start !font-medium !text-gray-800">
              Checkout
            </Text>
          </div>
          <Heading size="md" as="h1" className="mt-[38px] !text-gray-800">
            Checkout
          </Heading>
          <div className="mt-[100px] flex justify-between gap-5 self-stretch md:flex-col">
            <div className="flex w-[41%] items-center justify-between gap-5 md:w-full md:flex-col">
              <div className="flex flex-wrap items-center gap-6">
                <Text
                  size="md"
                  as="p"
                  className="flex h-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-gray-800 text-center !text-gray-800"
                >
                  1
                </Text>
                <Text size="md" as="p" className="mb-[7px] self-end !text-gray-800">
                  Shopping Cart
                </Text>
              </div>
              <div className="h-[2px] flex-1 bg-gray-800 md:self-stretch" />
            </div>
            <div className="flex w-[55%] items-center justify-center md:w-full md:flex-col">
              <div className="flex flex-wrap items-center gap-6">
                <Text
                  size="md"
                  as="p"
                  className="flex h-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-gray-800 text-center !text-gray-800"
                >
                  2
                </Text>
                <Text size="md" as="p" className="!text-gray-800">
                  Checkout
                </Text>
              </div>
              <div className="ml-14 h-[2px] flex-1 bg-blue_gray-100 md:ml-0 md:self-stretch" />
              <div className="ml-8 flex flex-wrap items-center gap-6 md:ml-0">
                <Text
                  size="md"
                  as="p"
                  className="flex h-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-blue_gray-100 text-center !text-blue_gray-100"
                >
                  3
                </Text>
                <Text size="md" as="p" className="mb-[7px] self-end !text-blue_gray-100">
                  Completed
                </Text>
              </div>
            </div>
          </div>
          <div className="mt-[81px] flex items-center justify-between gap-5 self-stretch md:flex-col">
            <div className="flex w-[41%] flex-col items-start gap-[30px] md:w-full">
              <Text as="p" className="!font-medium !text-gray-800">
                Buyer Info
              </Text>
              <div className="h-px self-stretch bg-blue_gray-100" />
              <div className="flex flex-col gap-8 self-stretch">
                <div className="flex flex-col items-start gap-4">
                  <Text as="p">Full Name</Text>
                  <Input shape="square" color="undefined_undefined" name="fullName" className="self-stretch sm:pl-5" />
                </div>
                <div className="flex flex-col items-start gap-4">
                  <Text as="p" className="text-center">
                    Address
                  </Text>
                  <Input shape="square" color="undefined_undefined" name="address" className="self-stretch sm:pl-5" />
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                  <Text as="p" className="text-center">
                    Contact
                  </Text>
                  <Input shape="square" color="undefined_undefined" name="form_one" className="self-stretch sm:pl-5" />
                </div>
                <div className="flex flex-col items-start gap-3.5">
                  <Text as="p" className="text-center">
                    City
                  </Text>
                  <Input shape="square" color="undefined_undefined" name="city" className="self-stretch sm:pl-5" />
                </div>
                <div className="flex items-center gap-8 md:flex-col">
                  <div className="flex flex-1 flex-col items-start gap-[15px] md:self-stretch">
                    <Text as="p" className="text-center">
                      State
                    </Text>
                    <SelectBox
                      shape="square"
                      color="undefined_undefined"
                      indicator={
                        <Img src="images/img_arrow_down_gray_500.svg" alt="arrow_down" className="h-[24px] w-[24px]" />
                      }
                      name="selectstate"
                      placeholder={`Select State`}
                      options={dropDownOptions}
                      className="gap-px self-stretch sm:px-5"
                    />
                  </div>
                  <div className="flex w-[39%] flex-col items-start gap-3.5 md:w-full">
                    <Text as="p" className="text-center">
                      Zip Code
                    </Text>
                    <Input shape="square" color="undefined_undefined" name="zipcode" className="self-stretch sm:pl-5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[49%] flex-col gap-[31px] md:w-full">
              <div className="flex flex-col items-start gap-[29px]">
                <Text as="p" className="!font-medium !text-gray-800">
                  Payment Method
                </Text>
                <div className="h-px w-full self-stretch bg-blue_gray-100" />
              </div>
              <div className="flex gap-[33px] md:flex-col">
                <Button
                  size="7xl"
                  variant="outline"
                  shape="square"
                  color="undefined_undefined"
                  leftIcon={<Img src="images/img_card.svg" alt="Card" className="h-[40px] w-[40px]" />}
                  className="w-full gap-4 sm:px-5"
                >
                  Credit Card
                </Button>
                <Button
                  size="7xl"
                  shape="square"
                  leftIcon={<Img src="images/img_television.svg" alt="television" className="h-[33px] w-[33px]" />}
                  className="w-full gap-4 border border-solid border-blue_gray-100 sm:px-5"
                >
                  Bank Transfer
                </Button>
                <Button
                  size="7xl"
                  variant="outline"
                  shape="square"
                  color="undefined_undefined"
                  leftIcon={<Img src="images/img_paypal.svg" alt="paypal" className="h-[40px] w-[40px]" />}
                  className="w-full gap-4 sm:px-5"
                >
                  Paypal
                </Button>
              </div>
              <div className="flex flex-col items-start gap-4">
                <Text as="p">Name on Card</Text>
                <Input shape="square" color="undefined_undefined" name="name" className="self-stretch sm:pl-5" />
              </div>
              <div className="flex flex-col gap-[31px]">
                <div className="flex items-center gap-8 md:flex-col">
                  <div className="flex flex-1 flex-col items-start gap-4 md:self-stretch">
                    <Text as="p">Card Number</Text>
                    <Input
                      shape="square"
                      color="undefined_undefined"
                      name="cardNumber"
                      className="self-stretch sm:pl-5"
                    />
                  </div>
                  <div className="flex w-[32%] flex-col items-start gap-[15px] md:w-full">
                    <Text as="p">CVV</Text>
                    <Input shape="square" color="undefined_undefined" name="cvv" className="self-stretch sm:pl-5" />
                  </div>
                </div>
                <div className="flex flex-col items-end gap-[75px] md:gap-14 sm:gap-[37px]">
                  <div className="flex items-center gap-8 self-stretch md:flex-col">
                    <div className="flex w-full flex-col items-start gap-4">
                      <Text as="p">Month</Text>
                      <SelectBox
                        shape="square"
                        color="undefined_undefined"
                        indicator={
                          <Img
                            src="images/img_arrow_down_gray_500.svg"
                            alt="arrow_down"
                            className="h-[24px] w-[24px]"
                          />
                        }
                        name="selectmonth"
                        placeholder={`Select Month`}
                        options={dropDownOptions}
                        className="gap-px self-stretch sm:px-5"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-[15px]">
                      <Text as="p">Year</Text>
                      <SelectBox
                        shape="square"
                        color="undefined_undefined"
                        indicator={
                          <Img
                            src="images/img_arrow_down_gray_500.svg"
                            alt="arrow_down"
                            className="h-[24px] w-[24px]"
                          />
                        }
                        name="selectyear"
                        placeholder={`Select Year`}
                        options={dropDownOptions}
                        className="gap-px self-stretch sm:px-5"
                      />
                    </div>
                  </div>
                  <Button size="5xl" shape="square" className="min-w-[245px] font-medium sm:px-5">
                    Checkout
                  </Button>
                </div>
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
              <div className="flex flex-col items-start gap-[19px]">
                <div className="flex items-center gap-2">
                  <Img src="images/img_call.svg" alt="call_one" className="h-[24px] w-[24px]" />
                  <Text as="p" className="self-start !text-white-A700">
                    +1234567890
                  </Text>
                </div>
                <div className="flex items-center gap-2">
                  <Img
                    src="images/img_email_white_a700.svg"
                    alt="email_three"
                    className="h-[24px] w-[24px] self-start"
                  />
                  <Text as="p" className="!text-white-A700">
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
              <Input
                size="md"
                variant="fill"
                shape="square"
                type="email"
                name="email"
                placeholder={`Enter your email`}
                suffix={
                  <div className="flex h-[60px] w-[60px] items-center justify-center">
                    <Img src="images/img_submit_white_a700.svg" alt="submit" className="h-[60px] w-[60px]" />
                  </div>
                }
                className="gap-3 self-stretch border border-solid border-white-A700 tracking-[0.36px] sm:pl-5"
              />
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
