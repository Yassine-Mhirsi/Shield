import React from "react";
import { Heading, Img, RatingBar } from "./..";

interface Props {
  className?: string;
  descriptiontext?: string;
  reviewcountertext?: string;
  datetext?: string;
  usernametext?: string;
  userroletext?: string;
}

export default function AgentProfileTwo({
  descriptiontext = "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
  reviewcountertext = "4.5 review",
  datetext = "02 June 2022",
  usernametext = "Taylor Wilson",
  userroletext = "Product Manager - Static Mania",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col justify-center gap-10 p-[30px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 flex-1 rounded-[20px]`}
    >
      <Heading size="3xl" as="h4" className="mt-[9px] w-full !font-semibold leading-[165%] !text-gray-600_02">
        {descriptiontext}
      </Heading>
      <div className="mb-[9px] flex flex-col gap-6 self-stretch">
        <div className="flex gap-[50px] sm:flex-col">
          <div className="flex w-[23%] items-center justify-center gap-2.5 sm:w-full">
            <RatingBar
              value={1}
              isEditable={true}
              size={24}
              starCount={4}
              className="flex flex-1 justify-between self-start"
            />
            <Heading size="xl" as="h5" className="tracking-[-0.40px] !text-gray-600_02">
              {reviewcountertext}
            </Heading>
          </div>
          <Heading size="xl" as="h5" className="tracking-[-0.40px] !text-gray-600_02">
            {datetext}
          </Heading>
        </div>
        <div className="flex items-center gap-4">
          <Img src="images/img_ellipse_2695.png" alt="taylor_wilson" className="h-[80px] w-[80px] rounded-[50%]" />
          <div className="flex flex-col items-start gap-[5px]">
            <Heading size="4xl" as="h3" className="tracking-[-0.56px]">
              {usernametext}
            </Heading>
            <Heading size="md" as="h6" className="!font-semibold">
              {userroletext}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
