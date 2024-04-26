import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Input, Heading } from "../../components";
import Header1 from "../../components/Header1";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  { product: "Gray T-shirt", quantity: "$100.99" },
  { product: "Red Flannel", quantity: "$100.99" },
];

type TableRowType = { product: string; quantity: string; price?: any; total?: any };

export default function CartPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex items-center justify-center sm:flex-col">
            <div className="flex flex-1 items-center gap-[66px] py-[31px] sm:flex-col sm:self-stretch sm:py-5">
              <div className="w-[34%] border border-solid border-blue_gray-100 p-2.5 sm:w-full">
                <Img
                  src="images/img_placeholder_2.png"
                  alt="placeholder_one"
                  className="h-[180px] w-[180px] object-cover"
                />
              </div>
              <Text size="md" as="p" className="!text-gray-800">
                {info?.getValue?.()}
              </Text>
            </div>
            <div className="w-[21%] sm:w-full">
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
        ),
        header: (info) => (
          <Text as="p" className="pb-[35px] !font-medium sm:pb-5">
            Product
          </Text>
        ),
        meta: { width: "661px" },
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex justify-center md:flex-col">
            <Text size="md" as="p" className="py-[35px] !text-gray-800 sm:py-5">
              {info?.getValue?.()}
            </Text>
            <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch">
              <Text size="md" as="p" className="mb-[114px] mt-28 !text-gray-800">
                $100.99
              </Text>
              <Img src="images/img_close_gray_800.svg" alt="close_one" className="h-[33px] w-[33px]" />
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[31px] pt-[5px] !font-medium sm:pb-5">
            Quantity
          </Text>
        ),
        meta: { width: "310px" },
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => <></>,
        header: (info) => (
          <Text as="p" className="pb-[33px] pt-[3px] !font-medium sm:pb-5">
            Price
          </Text>
        ),
        meta: { width: "277px" },
      }),
      tableColumnHelper.accessor("total", {
        cell: (info) => <></>,
        header: (info) => (
          <Text as="p" className="pb-[33px] pt-1 !font-medium sm:pb-5">
            Total
          </Text>
        ),
        meta: { width: "384px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>react</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <Header1 className="self-stretch" />
        <div className="container-sm mt-[31px] flex flex-col gap-[79px] md:gap-[59px] md:p-5 sm:gap-[39px]">
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-4 self-start">
              <Text as="p" className="self-start !font-medium">
                Home
              </Text>
              <Text as="p" className="self-start !font-medium !text-blue_gray-100">
                &gt;
              </Text>
              <Text as="p" className="self-end !font-medium !text-gray-800">
                Shopping Cart
              </Text>
            </div>
            <Heading size="md" as="h1" className="mt-[42px] !text-gray-800">
              Shopping Cart
            </Heading>
            <div className="mt-24 flex justify-between gap-5 self-stretch md:flex-col">
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
              <div className="flex w-[55%] justify-between gap-5 md:w-full md:flex-col">
                <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch sm:flex-col">
                  <div className="flex flex-wrap items-center gap-6">
                    <Text
                      size="md"
                      as="p"
                      className="flex h-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-blue_gray-100 text-center !text-blue_gray-100"
                    >
                      2
                    </Text>
                    <Text size="md" as="p" className="!text-blue_gray-100">
                      Checkout
                    </Text>
                  </div>
                  <div className="h-[2px] w-[60%] bg-blue_gray-100" />
                </div>
                <div className="flex flex-wrap items-center gap-6">
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
          </div>
          <div className="flex flex-col items-end gap-[79px] md:gap-[59px] sm:gap-[39px]">
            <div className="flex flex-col gap-[30px] self-stretch">
              <div>
                <ReactTable
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "flex-wrap" }}
                  rowDataProps={{ className: "md:flex-col" }}
                  columns={tableColumns}
                  data={tableData}
                />
              </div>
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <div className="flex w-[28%] items-center justify-between gap-5 border border-solid border-blue_gray-100 pl-4 md:w-full">
                  <Text as="p" className="mb-3.5 self-end text-center tracking-[0.36px] !text-gray-500_7f">
                    Enter coupon code
                  </Text>
                  <Button size="5xl" shape="square" className="min-w-[137px]">
                    Apply Code
                  </Button>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <Text as="p" className="!font-medium">
                    Total
                  </Text>
                  <Heading size="md" as="h2" className="!text-gray-800">
                    $202.00
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex w-[25%] justify-between gap-5 md:w-full">
              <Button
                variant="outline"
                shape="square"
                color="undefined_undefined"
                className="min-w-[207px] font-medium"
              >
                Continue Shopping
              </Button>
              <a href="" target="_blank">
                <Button shape="square" className="min-w-[171px] font-medium sm:px-5">
                  Checkout
                </Button>
              </a>
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
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 self-start">
                  <Img src="images/img_call.svg" alt="call_one" className="h-[24px] w-[24px]" />
                  <Text as="p" className="self-start !text-white-A700">
                    +1234567890
                  </Text>
                </div>
                <div className="flex items-center gap-2 self-start">
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
