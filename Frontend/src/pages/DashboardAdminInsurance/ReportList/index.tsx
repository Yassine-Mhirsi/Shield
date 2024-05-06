import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text } from ".../../components/cmp";
import Header from ".../../components/cmp/Header";
import { ReactTable } from ".../../components/cmp/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import SidebarInsurance from "components/cmp/SidebarInsurance";

const table1Data = [
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Double Table",
    tablefloor: "Floor G-05",
    amount: "$82.48",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Single Table",
    tablefloor: "Floor G-04",
    amount: "$83.48",
    satusorder: "Booked",
  },
  {
    tableidone: "#01236556",
    bookdate: "24 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor S-03",
    amount: "$82.46\t",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor S-02",
    amount: "$87.46",
    satusorder: "Booked",
  },
  {
    tableidone: "#01236556",
    bookdate: "24 June 2020, 12:42 AM",
    tabletype: "Single Table",
    tablefloor: "Floor G-05",
    amount: "$82.46",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "24 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor G-05",
    amount: "$90.46",
    satusorder: "Available",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Double Table ",
    tablefloor: "Floor S-03",
    amount: "$12.46",
    satusorder: "Booked\n\n",
  },
  {
    tableidone: "#01236556",
    bookdate: "21 June 2020, 12:42 AM",
    tabletype: "Single Table",
    tablefloor: "Floor S-01",
    amount: "$92.46",
    satusorder: "Available\n\n",
  },
  {
    tableidone: "#01236556",
    bookdate: "23 June 2020, 12:42 AM",
    tabletype: "Spcial Table",
    tablefloor: "Floor S-03",
    amount: "$32.46",
    satusorder: "Booked",
  },
  {
    tableidone: "#01236556",
    bookdate: "218 June 2020, 12:42 AM",
    tabletype: "Brooklyn Simmons",
    tablefloor: "Floor G-05",
    amount: "$82.46",
    satusorder: "Booked",
  },
];

type Table1RowType = {
  tableidone: string;
  bookdate: string;
  tabletype: string;
  tablefloor: string;
  amount: string;
  satusorder: string;
};

export default function TableListPage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();
    return [
      table1ColumnHelper.accessor("tableidone", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-px pl-[26px] sm:pl-5">
            Table ID{" "}
          </Text>
        ),
        meta: { width: "137px" },
      }),
      table1ColumnHelper.accessor("bookdate", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Book Date
          </Text>
        ),
        meta: { width: "213px" },
      }),
      table1ColumnHelper.accessor("tabletype", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Table Type
          </Text>
        ),
        meta: { width: "196px" },
      }),
      table1ColumnHelper.accessor("tablefloor", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Table Floor
          </Text>
        ),
        meta: { width: "191px" },
      }),
      table1ColumnHelper.accessor("amount", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Amount
          </Text>
        ),
        meta: { width: "137px" },
      }),
      table1ColumnHelper.accessor("satusorder", {
        cell: (info) => (
          <div className="flex flex-1 items-end justify-between gap-5 md:self-stretch">
            <Button shape="round" className="mt-[18px] min-w-[99px] font-medium">
              {info?.getValue?.()}
            </Button>
            <Img src="../../../../public/images/img_settings.svg" alt="settings" className="mb-[5px] mr-2.5 h-[20px] w-[20px]" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Satus Order
          </Text>
        ),
        meta: { width: "236px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | Products</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <SidebarInsurance />
          <div className="flex flex-1 flex-col items-center gap-[35px] md:self-stretch md:p-5">
            <Header />
            <div className="flex w-[93%] flex-col items-start md:w-full">
              <div className="flex flex-row justify-between items-center gap-[1500px]">
                <div>
                  <Text size="xl" as="p">
                    Product List
                  </Text>
                  <Text size="lg" as="p" className="!text-blue_gray-400">
                    Add Product / Product List
                  </Text>
                </div>
                <div>
                  <Link to="/dashboardadminshop/addtable" className="flex items-center">
                    <Button className="rounded-lg bg-blue-500 text-white px-[40px] py-6">Add Product</Button>
                  </Link>
                </div>
              </div>

              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{ className: "flex-wrap" }}
                rowDataProps={{ className: "md:flex-col" }}
                className="mt-16 self-stretch rounded-[15px] bg-white-A700 shadow-xs"
                columns={table1Columns}
                data={table1Data}
              />
              <div className="mt-[30px] flex items-center justify-between gap-5 self-stretch">
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
