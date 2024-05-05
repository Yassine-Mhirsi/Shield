import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, RatingBar, SelectBox } from ".../../components/cmp";
import Header from ".../../components/cmp/Header";
import { ReactTable } from ".../../components/cmp/ReactTable";
import Sidebar7 from ".../../components/cmp/Sidebar7";
import { createColumnHelper } from "@tanstack/react-table";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  { productid: "#465692316", productname: "6957X" },
  { productid: "#465692313", productname: "6957X" },
  { productid: "#465692318", productname: "6957X" },
  { productid: "#465692312", productname: "6957X" },
  { productid: "#465692789", productname: "6957X" },
  { productid: "#46569233", productname: "6957X" },
  { productid: "#465692378", productname: "6957X" },
  { productid: "#465692316", productname: "6957X" },
  { productid: "#465692336", productname: "6957X" },
  { productid: "#465692316", productname: "6957X" },
];

type TableRowType = { productid: string; productname: string; quantity?: any; satus?: any; price?: any };

export default function MenuListPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("productid", {
        cell: (info) => (
          <div className="flex items-center justify-center sm:flex-col">
            <Text as="p" className="pb-[23px] pl-[35px] pt-[33px] sm:py-5 sm:pl-5">
              {info?.getValue?.()}
            </Text>
            <div className="mb-3 flex w-full items-center justify-center gap-4 sm:w-full">
              <Img
                src="../../../../public/images/img_rectangle_4144_9.png"
                alt="image"
                className="h-[40px] w-[40px] rounded object-cover"
              />
              <div className="flex flex-1 flex-col items-start gap-[5px]">
                <Text as="p">Sweet cheezy pizza </Text>
                <div className="flex items-center gap-2.5 self-stretch">
                  <RatingBar
                    value={4}
                    isEditable={true}
                    activeColor="#438ffe"
                    size={10}
                    className="flex justify-between self-start"
                  />
                  <Text size="s" as="p" className="!font-medium !text-blue_gray-400">
                    (Review 4.5 )
                  </Text>
                </div>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="px-[35px] py-px sm:px-5">
            Product ID
          </Text>
        ),
        meta: { width: "190px" },
      }),
      tableColumnHelper.accessor("productname", {
        cell: (info) => (
          <div className="flex flex-wrap">
            <Text as="p" className="pb-[23px] pt-[33px] sm:py-5">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="pb-[23px] pt-[33px] !text-green-500 sm:py-5">
              In Stock
            </Text>
            <Text as="p" className="pb-[23px] pt-[33px] sm:py-5">
              $56.12
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-px pl-[7px]">
            Product Name
          </Text>
        ),
        meta: { width: "381px" },
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => <></>,
        header: (info) => (
          <Text as="p" className="p-px">
            Quantity
          </Text>
        ),
        meta: { width: "233px" },
      }),
      tableColumnHelper.accessor("satus", {
        cell: (info) => <></>,
        header: (info) => (
          <Text as="p" className="p-px">
            Satus
          </Text>
        ),
        meta: { width: "225px" },
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => <></>,
        header: (info) => (
          <Text as="p" className="p-px">
            Price
          </Text>
        ),
        meta: { width: "81px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Topzsix's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <Sidebar7 />
          <div className="flex flex-1 flex-col items-center gap-9 md:self-stretch md:p-5">
            <Header />
            <div className="w-[93%] md:w-full">
              <div className="flex items-center justify-between gap-5">
                <div className="flex flex-col items-start gap-1.5">
                  <Text size="xl" as="p">
                    Menu List
                  </Text>
                  <Text size="lg" as="p" className="!text-blue_gray-400">
                    Menu / Menu List
                  </Text>
                </div>
                <SelectBox
                  shape="round"
                  indicator={
                    <Img src="../../../../public/images/img_frame_11_white_a700.svg" alt="frame 11" className="h-[12px] w-[12px]" />
                  }
                  name="today"
                  placeholder={`Today`}
                  options={dropDownOptions}
                  className="w-[9%] gap-px border border-solid border-blue-A200 bg-blue-A200 text-white-A700 sm:px-5"
                />
              </div>
              <ReactTable
                bodyProps={{ className: "" }}
                headerProps={{ className: "flex-wrap" }}
                rowDataProps={{ className: "md:flex-col" }}
                className="mt-[63px] rounded-[15px] bg-white-A700 shadow-xs"
                columns={tableColumns}
                data={tableData}
              />
              <div className="mt-[15px] flex items-center justify-between gap-5">
                <Text as="p" className="self-end !font-poppins">
                  Dispalying 10 Out of 250
                </Text>
                <div className="flex items-center gap-[18px]">
                  <Text as="p">10-250</Text>
                  <div className="flex">
                    <Button
                      size="sm"
                      className="relative z-[1] w-[30px] rotate-[180deg] rounded-br-[5px] rounded-tr-[5px] bg-blue-A200"
                    >
                      <Img src="../../../../public/images/img_arrow_right_white_a700.svg" />
                    </Button>
                    <Button size="sm" className="relative ml-[-1px] w-[30px] rounded-br-[5px] rounded-tr-[5px]">
                      <Img src="../../../../public/images/img_arrow_right_blue_a200.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
