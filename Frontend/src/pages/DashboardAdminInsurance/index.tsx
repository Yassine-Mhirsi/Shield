import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../components/cmp";
import Header from "../../components/cmp/Header";
import DashboardRowmegaphone from "components/cmp/DashboardRowmegaphone";
import SidebarInsurance from "components/cmp/SidebarInsurance";


export default function DashboardAdminInsurance() {
  return (
    <>
      <Helmet>
        <title>Dashboard Admin Insurance</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50 pb-[68px] md:pb-5">
        <div className="flex items-start md:flex-col">
          <SidebarInsurance />
          <div className="flex flex-1 flex-col items-center gap-[37px] md:self-stretch md:p-5">
            <Header />
            <div className="flex w-[93%] flex-col gap-[30px] md:w-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col items-start gap-[7px]">
                  <Text size="xl" as="p">
                    Dashboard
                  </Text>
                  <Text size="lg" as="p" className="!text-blue_gray-400">
                    Wellcome to Lojusa Admin
                  </Text>
                  <div className="flex gap-[30px] md:flex-col">
                  <DashboardRowmegaphone
                    zipcodetext="2560"
                    totalmenustext="Total Menus"
                    className="w-full justify-center sm:p-5"
                  />
                  <DashboardRowmegaphone zipcodetext="$87,256" totalmenustext="Total Revenew" className="sm:p-5" />
                  <DashboardRowmegaphone zipcodetext="2560k" totalmenustext="Total Customer" className="sm:p-5" />
                  <DashboardRowmegaphone
                    zipcodetext="2560"
                    totalmenustext="Total Oders"
                    className="w-full justify-center sm:p-5"
                  />
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
