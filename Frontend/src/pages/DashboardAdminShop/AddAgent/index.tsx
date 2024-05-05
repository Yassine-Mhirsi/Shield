import React from "react";
import { Helmet } from "react-helmet";
import { Button, SelectBox, Img, Text, Input } from ".../../components/cmp";
import Header from ".../../components/cmp/Header";
import Sidebar6 from ".../../components/cmp/Sidebar6";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AddAgent() {
  return (
    <>
      <Helmet>
        <title>Topzsix's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <Sidebar6 />
          <div className="flex flex-1 flex-col items-center gap-[35px] md:self-stretch md:p-5">
            <Header />
            <div className="flex w-[93%] flex-col gap-[35px] md:w-full">
              <div className="flex items-center justify-between gap-5">
                <div className="flex flex-col items-start gap-[7px]">
                  <Text size="xl" as="p">
                    Add Agent
                  </Text>
                  <Text size="lg" as="p" className="!text-blue_gray-400">
                    Add Menu / Menu List / Categories
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
              <div className="flex flex-col items-start justify-center gap-[26px] rounded-[15px] bg-white-A700 p-5 shadow-xs">
                <Text size="lg" as="p" className="mt-1.5 !font-medium">
                  Choose Better Menu Type
                </Text>
                <div className="flex flex-col gap-[25px] self-stretch">
                  <div className="flex items-start gap-[30px] md:flex-col">
                    <div className="flex w-full flex-col gap-[18px]">
                      <div className="flex flex-col items-start gap-2">
                        <Text size="lg" as="p">
                          Food Name
                        </Text>
                        <Input
                          size="sm"
                          type="text"
                          name="name"
                          placeholder={`Enter Name `}
                          className="self-stretch rounded-[5px] border-gray-200 sm:pr-5"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1.5">
                        <Text size="lg" as="p">
                          Upload
                        </Text>
                        <div className="flex justify-center self-stretch rounded-[5px] border border-dashed border-gray-200 bg-gray-50_01 p-[38px] sm:p-5">
                          <div className="flex flex-col items-center gap-2.5">
                            <Img src="../../../../public/images/img_bookmark.svg" alt="bookmark" className="h-[32px] w-[32px]" />
                            <Text as="p" className="!font-normal !text-blue_gray-400">
                              <span className="font-medium text-gray-700_01">Drop your imges here</span>
                              <span className="font-medium text-gray-700_01">,</span>
                              <span className="text-blue_gray-400">&nbsp;</span>
                              <span className="text-blue-A200">or browes</span>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-[18px]">
                      <div className="flex flex-col items-start gap-2">
                        <Text size="lg" as="p">
                          Food Price
                        </Text>
                        <Input
                          size="sm"
                          name="price"
                          placeholder={`Enter Price`}
                          className="self-stretch rounded-[5px] border-gray-200 sm:pr-5"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1.5">
                        <Text size="lg" as="p" className="!text-blue_gray-400">
                          Categories
                        </Text>
                        <SelectBox
                          size="sm"
                          variant="fill"
                          indicator={
                            <Img src="../../../../public/images/img_arrowdown.svg" alt="arrow_down" className="h-[6px] w-[12px]" />
                          }
                          name="select"
                          placeholder={`Select`}
                          options={dropDownOptions}
                          className="gap-px self-stretch rounded-[5px] border border-solid border-gray-200 sm:pr-5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[21px]">
                    <Button
                      size="lg"
                      shape="round"
                      className="min-w-[112px] bg-blue-A200 font-medium text-white-A700 sm:px-5"
                    >
                      Submit
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      shape="round"
                      color="undefined_undefined"
                      className="min-w-[112px] font-medium sm:px-5"
                    >
                      Cancel
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
