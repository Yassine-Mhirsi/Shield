import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, TextArea, SelectBox, Img, Heading, Switch, Button1 } from "../../components";
import Header from "../../components/Header";
import Sidebar3 from "../../components/Sidebar3";
import { useAuth0 } from "@auth0/auth0-react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];


export default function SettingsPage() {
  const { user, logout } = useAuth0();
  return (
    <>
      <Helmet>
        <title>Profile | Shield</title>
        {/* <meta name="description" content="Web site created using create-react-app" /> */}
      </Helmet>
      <div className="w-full bg-gray-50">
        <div className="flex md:flex-col">
          <div className="flex flex-1 flex-col justify-center gap-[25px] md:self-stretch md:p-5 md:pb-5">
            <Header className="flex items-center bg-white-A700_01 p-2.5" />
            <div className="flex w-[96%] flex-col items-start gap-[33px] pt-[50px] pb-[170px] md:w-full p-[700px]">
              <Text size="lg" className="text-[#09090b] !font-bold">
                Settings
              </Text>
              <div className="flex gap-5 self-stretch md:flex-col">
                <div className="flex flex-1 flex-col gap-5 md:self-stretch">
                  <div className="flex flex-col items-center gap-8 rounded bg-white-A700_01 p-8 shadow-sm sm:p-5">
                    <div className="flex flex-col items-start justify-start gap-3.5">
                      <Heading className="text-[#09090b]" as="h1">Account info.</Heading>
                      <Text as="p" className="!font-normal text-[#09090b]">
                        <span className="text-blue_gray-900_01">
                          Verify your information to proctect your account.&nbsp;
                        </span>
                        <span className="font-semibold text-[#075985]">Verify now</span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 self-stretch ">
                      <div className="flex gap-5 md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="text-[#09090b]">Name</Text>
                          <Input
                            shape="round"
                            name="userName"
                            placeholder={user?.nickname}
                            className="self-stretch border-2 border-[#404040] font-semibold !text-blue_gray-800 sm:pr-5"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="text-[#09090b]">Email address</Text>
                          <Input
                            shape="round"
                            type="email"
                            name="email"
                            placeholder={user?.email}
                            className="self-stretch border-2 border-[#404040] font-semibold !text-blue_gray-800 sm:pr-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[21px] md:flex-col">
                    <div className="flex w-full flex-col items-start justify-center gap-[34px] rounded bg-white-A700_01 p-8 shadow-sm sm:p-5">
                      <Heading className="text-[#09090b]" as="h2">Password Reset</Heading>
                      <div className="flex flex-col gap-6 self-stretch">
                        <div className="flex flex-col items-start justify-center gap-[9px]">
                          <Text as="p" className="text-[#09090b]">Current password</Text>
                          <Input
                            shape="round"
                            type="password"
                            name="password"
                            placeholder={`************`}
                            className="self-stretch border-2 border-[#404040] font-semibold !text-blue_gray-800 sm:pr-5"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[9px]">
                          <Text as="p" className="text-[#09090b]">New password</Text>
                          <Input
                            shape="round"
                            type="password"
                            name="newpassword"
                            placeholder={`************`}
                            className="self-stretch border-2 border-[#404040] font-semibold !text-blue_gray-800 sm:pr-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full rounded-[24px] font-bold sm:px-5 bg-blue-200 hover:bg-blue-300">Save change</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
