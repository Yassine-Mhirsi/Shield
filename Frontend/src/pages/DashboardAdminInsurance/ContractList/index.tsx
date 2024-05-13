import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text } from ".../../components/cmp";
import Header from ".../../components/cmp/Header";
import SidebarInsurance from "components/cmp/SidebarInsurance";
import { ContractTable } from "components/cmp/ContractTable";


export default function MenuListPage() {

  return (
    <>
      <Helmet>
        <title>Dashboard Admin Insurance | Contract List</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <SidebarInsurance />
          <div className="flex flex-1 flex-col items-center gap-9 md:self-stretch md:p-5">
            <Header />
            <div className="w-[93%] md:w-full">
              

              <ContractTable/>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
