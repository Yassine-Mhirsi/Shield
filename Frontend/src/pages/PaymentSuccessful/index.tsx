import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";

export default function SigninResetPasswordSuccessfulPage() {
  return (
    <>
      <Helmet>
        <title>Report Screen</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-red-50 py-[90px] md:py-5">
        <div className="container-xs my-[140px] flex justify-center px-[355px] md:p-5 md:px-5">
          <div className="flex w-full flex-col gap-[60px] rounded-[20px] bg-white-A700_01 p-12 shadow-xs md:p-5 sm:gap-[30px]">
            <div className="mt-[11px] flex flex-col items-center gap-12">
              <Img src="images/img_completed_1.svg" alt="completedone" className="h-[180px] w-[180px]" />
              <div className="flex">
                <Heading as="h1">Password has been recovered</Heading>
              </div>
            </div>
            <div className="mb-[5px] flex flex-col items-center gap-12">
              <Button size="6xl" className="w-full rounded-[28px] font-bold sm:px-5">
                LOGIN
              </Button>
              <div className="flex items-center gap-[7px]">
                <Img src="images/img_arrow_left_indigo_400_01.svg" alt="arrowleft" className="h-[20px] w-[20px]" />
                <Text as="p" className="self-end !text-indigo-400_01">
                  Back to Sign in
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
