import React from "react";
import { Helmet } from "react-helmet";
import { Button, CheckBox, Input, Text, Heading } from "../../components/ccmp";
import Header from "../../components/Header";
import Sidebar3 from "../../components/ccmp/Sidebar3";

export default function Report() {
  return (
    <>
      <Helmet>
        <title>Report Screen</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100_06">
      <Header className="flex items-center justify-center self-stretch bg-white-A700 py-6 sm:py-5" />
        <div className="flex md:flex-col">
          <Sidebar3 />
          <div className="flex flex-1 flex-col gap-8 pb-[90px] md:self-stretch md:p-5 md:pb-5">
            <div className="px-6 sm:px-5">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col items-center gap-12 rounded bg-white-A700_01 p-12 shadow-sm md:p-5">
                  <div className="flex flex-col items-center gap-3">
                    <Heading as="h1" className="!text-blue_gray-900_01">
                      Confirm Information
                    </Heading>
                    <Text as="p" className="!font-normal">
                      Make sure that all your information are precise
                    </Text>
                  </div>
                  <div className="flex w-[66%] flex-col items-center gap-12 md:w-full">
                    <div className="flex flex-col gap-9 self-stretch">
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="!text-blue_gray-800">
                            <span className="text-blue_gray-800">Full name&nbsp;</span>
                            <span className="text-red-600">*</span>
                          </Text>
                          <Input
                            shape="round"
                            name="fullName"
                            placeholder={`Mustermann Galer`}
                            className="self-stretch border-indigo-50_03 font-semibold !text-blue_gray-800 sm:pr-5"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="!text-blue_gray-800">
                            <span className="text-blue_gray-800">ID number&nbsp;</span>
                            <span className="text-red-600">*</span>
                          </Text>
                          <Input
                            shape="round"
                            type="number"
                            name="frame18249"
                            placeholder={`12345678`}
                            className="self-stretch border-indigo-50_03 font-semibold !text-blue_gray-800 sm:pr-5"
                          />
                        </div>
                        <div className="flex flex-col gap-6">
                          <div className="flex gap-5 md:flex-col">
                            <div className="flex w-full flex-col items-start justify-center gap-2.5">
                              <Text as="p" className="!text-blue_gray-800">
                                <span className="text-blue_gray-800">Gender&nbsp;</span>
                                <span className="text-red-600">*</span>
                              </Text>
                              <Input
                                shape="round"
                                name="gender"
                                placeholder={`Female`}
                                className="self-stretch border-indigo-50_03 font-semibold !text-blue_gray-800 sm:pr-5"
                              />
                            </div>
                            <div className="flex w-full flex-col items-start justify-center gap-[9px]">
                              <Text as="p" className="!text-blue_gray-800">
                                <span className="text-blue_gray-800">Nationality&nbsp;</span>
                                <span className="text-red-600">*</span>
                              </Text>
                              <Input
                                shape="round"
                                name="deitsch"
                                placeholder={`Deitsch`}
                                className="self-stretch border-indigo-50_03 font-semibold !text-blue_gray-800 sm:pr-5"
                              />
                            </div>
                          </div>
                          <div className="flex gap-5 md:flex-col">
                            <div className="flex w-full flex-col items-start justify-center gap-2.5">
                              <Text as="p" className="!text-blue_gray-800">
                                <span className="text-blue_gray-800">Date of birth&nbsp;</span>
                                <span className="text-red-600">*</span>
                              </Text>
                              <Input
                                shape="round"
                                name="dateOfBirth"
                                placeholder={`12.08.1983`}
                                className="self-stretch border-indigo-50_03 font-semibold !text-blue_gray-800 sm:pr-5"
                              />
                            </div>
                            <div className="flex w-full flex-col items-start justify-center gap-2.5">
                              <Text as="p" className="!text-blue_gray-800">
                                <span className="text-blue_gray-800">Place of birth&nbsp;</span>
                                <span className="text-red-600">*</span>
                              </Text>
                              <Input
                                shape="round"
                                name="berlin"
                                placeholder={`Berlin`}
                                className="self-stretch border-indigo-50_03 font-semibold !text-blue_gray-800 sm:pr-5"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <CheckBox
                        name="iconcheck_empty"
                        label="By clicking button ‘Confirm’, I take all responsibility of the information above"
                        id="iconcheckempty"
                        className="gap-2 pb-px pr-[35px] pt-[5px] text-sm text-blue_gray-400 sm:pr-5"
                      />
                    </div>
                    <Button className="min-w-[270px] rounded-[24px] font-bold sm:px-5">Confirm</Button>
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
