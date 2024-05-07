import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Input, Img, TextArea, SelectBox, Radio, RadioGroup } from "../../components/cccmp";
import AddressColumnjack from "../../components/cccmp/AddressColumnjack";
import CartElements from "../../components/cccmp/CartElements";
import Footer from "../../components/cccmp/Footer";
import MegaMenu1 from "../../components/cccmp/MegaMenu1";
import Header from "components/Header";

const data = [
  { selectedvariant: "../../../../public/images/img_frame_lime_900.svg", labeltext: "Free shipping", pricetext: "$0.00" },
  { selectedvariant: "../../../../public/images/img_frame_gray_600_01.svg", labeltext: "Express shipping", pricetext: "+$15.00" },
  { selectedvariant: "../../../../public/images/img_frame_gray_600_01.svg", labeltext: "Pick Up", pricetext: "+$5.00" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Contract() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Shipping Address - Update Your Delivery Details</title>
        <meta
          name="description"
          content="Easily update your shipping address to ensure a smooth delivery experience. Add new addresses for home or office, and select your preferred delivery option."
        />
      </Helmet>

      {/* address page section */}
      <div className="flex w-full flex-col gap-10 bg-white-A700">
        {/* page header section */}
        <div>
          <Header/>
            <div className="flex justify-center bg-black-900 py-4">
              <div className="container-xs flex items-center justify-between gap-5 pl-[371px] md:p-5 md:pl-5 sm:flex-col">
                <div className="flex items-center gap-2 sm:flex-col">
                  <Text size="s" as="p" className="flex self-end !font-satoshi !font-medium !text-white-A700">
                    <span className="font-rubik font-normal text-white-A700">
                      Sign up and get 10% off to your first order.&nbsp;
                    </span>
                    <a href="#" className="font-rubik font-normal text-white-A700 underline">
                      Sign Up Now
                    </a>
                  </Text>
                </div>
                <a href="#">
                  <Img src="../../../../public/images/img_close.svg" alt="close button" className="h-[20px] w-[20px] sm:w-full" />
                </a>
              </div>
            </div>

            {/* navigation menu section */}
            {/* <div className="flex justify-center border-b border-solid border-gray-200_01 bg-white-A700 py-3">
              <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                <Img src="../../../../public/images/img_header_logo.png" alt="header logo" className="h-[19px] w-[129px] object-contain" />
                <ul className="flex items-center gap-11 sm:flex-col">
                  <li>
                    <a href="#">
                      <Text size="s" as="p" className="!font-medium !text-black-900">
                        Home
                      </Text>
                    </a>
                  </li>
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
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Text size="s" as="p" className="hover:font-medium hover:text-black-900">
                        Offers
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Text size="s" as="p" className="hover:font-medium hover:text-black-900">
                        Contact us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Text size="s" as="p" className="hover:font-medium hover:text-black-900">
                        Blog
                      </Text>
                    </a>
                  </li>
                </ul>
                <div className="flex items-center gap-5">
                  <ul className="flex">
                    <li
                      onMouseLeave={() => {
                        setMenuOpen1(false);
                      }}
                      onMouseEnter={() => {
                        setMenuOpen1(true);
                      }}
                    >
                      <div className="flex cursor-pointer items-center gap-1 rounded-[18px] bg-gray-200_03 p-2">
                        <Img src="../../../../public/images/img_contrast.svg" alt="search icon" className="h-[20px] w-[20px]" />
                        <Text size="xs" as="p">
                          Search for products
                        </Text>
                      </div>
                      {menuOpen1 ? <MegaMenu1 /> : null}
                    </li>
                  </ul>
                  <a href="#">
                    <Img src="../../../../public/images/img_thumbs_up.svg" alt="thumbs up icon" className="h-[20px] w-[20px]" />
                  </a>
                  <a href="#">
                    <Img src="../../../../public/images/img_lock.svg" alt="lock icon" className="h-[20px] w-[20px]" />
                  </a>
                </div>
              </div>
            </div> */}
          {/* breadcrumb navigation section */}
          <div className="flex justify-center bg-gray-200_03 pb-6 pt-[23px] sm:py-5">
            <div className="container-xs flex flex-wrap items-center gap-1 md:p-5">
              <Text as="p" className="!text-black-900">
                Home
              </Text>
              <Img src="../../../../public/images/img_arrow_right_black_900.svg" alt="arrow icon" className="h-[16px] w-[16px]" />
              <Text as="p">Contract/Checkout</Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-24 md:gap-[72px] sm:gap-12">
          {/* checkout steps section */}
          <div className="flex flex-col items-center gap-[38px]">
            {/* shipping address section */}
            <div className="container-xs flex items-start gap-6 md:flex-col md:p-5">
              <div className="flex flex-1 flex-col gap-[47px] md:self-stretch">
                <div className="flex flex-col items-start gap-5">
                  <Text size="3xl" as="p" className="!text-black-900">
                    Choose Insuracne
                  </Text>
                  <div className="flex gap-6 self-stretch md:flex-col">
                    {[...Array(3)].map((d, index) => (
                      <AddressColumnjack
                        checked="../../../../public/images/checked.svg"
                        username="Jack Jonnas"
                        home="Home"
                        addresslabel="Address :"
                        addresstext="8424 James Lane South, San Francisco, CA 94080 "
                        phonelabel="Phone :"
                        phonetext=" + 380 (0564) 53 - 29 - 68"
                        key={"addressList" + index}
                        className="border-2 border-lime-900 px-5"
                      />
                    ))}
                  </div>
                </div>

                {/* add new address form section */}
                <div className="flex flex-col items-start gap-[19px]">
                  <Text size="3xl" as="p" className="!text-black-900">
                    Add new address
                  </Text>
                  <div className="flex flex-col gap-[15px] self-stretch">
                    <div className="flex flex-col items-start gap-[7px]">
                      <Text size="s" as="p" className="ml-4 md:ml-0">
                        Save as*
                      </Text>
                      <RadioGroup name="addresstyperadiogroup" className="flex self-stretch">
                        <Radio
                          value="home"
                          label="Basic"
                          className="w-full gap-2 rounded-[24px] border border-gray-200_01 bg-white-A700 py-[15px] text-sm sm:pr-5"
                        />
                        <Radio
                          value="office"
                          label="Premium"
                          className="ml-6 w-full gap-2 rounded-[24px] border border-gray-200_01 bg-white-A700 py-[15px] pr-[35px] text-sm text-gray-600_01 sm:pr-5"
                        />
                      </RadioGroup>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <div className="flex gap-6 md:flex-col">
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            Name*
                          </Text>
                          <Input
                            shape="round"
                            type="text"
                            name="Name Input"
                            placeholder={`Enter name`}
                            prefix={<Img src="../../../../public/images/img_lock_gray_500.svg" alt="lock" className="h-[24px] w-[24px]" />}
                            className="gap-2 self-stretch sm:pr-5"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            Email*
                          </Text>
                          <Input
                            shape="round"
                            type="email"
                            name="Email Input"
                            placeholder={`Enter email`}
                            prefix={
                              <Img src="../../../../public/images/img_checkmark.svg" alt="checkmark" className="h-[24px] w-[24px]" />
                            }
                            className="gap-2 self-stretch sm:pr-5"
                          />
                        </div>
                      </div>
                      <div className="flex gap-6 md:flex-col">
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            Phone*
                          </Text>
                          <Input
                            shape="round"
                            name="Phone Input"
                            placeholder={`+001`}
                            prefix={
                              <Img src="../../../../public/images/img_fi4628635.svg" alt="fi_4628635" className="h-[24px] w-[24px]" />
                            }
                            className="gap-2 self-stretch !text-black-900 sm:pr-5"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            Province/State*
                          </Text>
                          <SelectBox
                            shape="round"
                            indicator={
                              <Img
                                src="../../../../public/images/img_arrowdown_black_900_1.svg"
                                alt="arrow_down"
                                className="h-[16px] w-[16px]"
                              />
                            }
                            name="State Dropdown"
                            placeholder={`Texas`}
                            options={dropDownOptions}
                            className="gap-px self-stretch sm:pr-5"
                          />
                        </div>
                      </div>
                      <div className="flex gap-6 md:flex-col">
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            Zip code*
                          </Text>
                          <Input
                            shape="round"
                            type="number"
                            name="Zip Code Input"
                            placeholder={`88765455`}
                            className="self-stretch !text-black-900 sm:pr-5"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            City*
                          </Text>
                          <Input
                            shape="round"
                            name="City Input"
                            placeholder={`Texas`}
                            className="self-stretch !text-black-900 sm:pr-5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[7px]">
                      <Text size="s" as="p" className="ml-4 md:ml-0">
                        Address*
                      </Text>
                      <TextArea
                        shape="round"
                        name="Address TextArea"
                        placeholder={`Building name / street name`}
                        className="self-stretch text-gray-500 sm:pb-5 sm:pr-5"
                      />
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    color="undefined_undefined"
                    className="min-w-[140px] rounded-[24px] font-semibold sm:px-5"
                  >
                    Save address
                  </Button>
                </div>
              </div>

              {/* delivery options section */}
              <div className="flex w-[33%] flex-col gap-[31px] rounded-[16px] border border-solid border-gray-200_01 px-4 pb-5 pt-[19px] md:w-full">
                <div className="flex flex-col items-start gap-3">
                  <Text size="s" as="p" className="uppercase">
                    Delivery option
                  </Text>
                  <div className="flex flex-col gap-3 self-stretch">
                    {data.map((d, index) => (
                      <CartElements {...d} key={"freeList" + index} className="border-lime-900" />
                    ))}
                  </div>
                </div>

                {/* coupon code section */}
                <div className="flex flex-col items-start gap-3">
                  <Text size="s" as="p" className="uppercase">
                    Coupon code
                  </Text>
                  <Input
                    shape="round"
                    name="Coupon Code Input"
                    placeholder={`Apply coupon code`}
                    prefix={<Img src="../../../../public/images/img_television.svg" alt="television" className="h-[24px] w-[24px]" />}
                    className="gap-1 self-stretch"
                  />
                </div>

                {/* cart summary section */}
                <div className="flex flex-col items-start gap-3">
                  <Text size="s" as="p" className="uppercase">
                    Cart value
                  </Text>
                  <div className="flex flex-col gap-[18px] self-stretch">
                    <div className="h-px bg-gray-200_01" />
                    <div className="flex flex-col gap-[19px]">
                      <div className="flex flex-wrap items-center justify-between gap-5">
                        <Text as="p" className="self-start">
                          Sub total
                        </Text>
                        <Text as="p" className="!font-inter !font-medium !text-gray-900_01">
                          +$5.00
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-5">
                        <Text as="p" className="self-start">
                          Discount
                        </Text>
                        <Text as="p" className="!font-inter !font-medium !text-gray-900_01">
                          +$5.00
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-5">
                        <Text as="p" className="self-end">
                          Shipping
                        </Text>
                        <Text as="p" className="!font-inter !font-medium !text-gray-900_01">
                          +$5.00
                        </Text>
                      </div>
                      <div className="h-px bg-gray-200_01" />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-5">
                      <Text as="p" className="self-start !text-gray-900">
                        Total
                      </Text>
                      <Heading size="lg" as="h1" className="!text-gray-900">
                        +$5.00
                      </Heading>
                    </div>
                  </div>
                </div>
                <Button className="w-full rounded-[24px] font-semibold sm:px-5">Next</Button>
              </div>
            </div>
          </div>

          {/* footer section */}
          <Footer />
        </div>
      </div>
    </>
  );
}
