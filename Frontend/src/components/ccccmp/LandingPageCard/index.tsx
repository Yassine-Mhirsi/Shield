import React from "react";
import { Heading, Button, Img } from "./..";

interface Props {
  className?: string;
  imageone?: string;
  locationtext?: string;
  bedroomtext?: string;
  bathroomtext?: string;
  sqfttext?: string;
  familytext?: string;
  viewdetailsbutton?: string;
  pricetext?: string;
}

export default function LandingPageCard({
  imageone = "images/img_image_260x384.png",
  locationtext = "2861 62nd Ave, Oakland, CA 94605",
  bedroomtext = "3 Bed Room",
  bathroomtext = "1 Bath",
  sqfttext = "1,032 sqft",
  familytext = "Family",
  viewdetailsbutton = "View Details",
  pricetext = "$649,900",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      <Img
        src={imageone}
        alt="image"
        className="h-[260px] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover md:h-auto"
      />
      <div className="flex flex-col items-center justify-center gap-[25px] self-stretch rounded-bl-[10px] rounded-br-[10px] border border-solid border-red-100_01 bg-gray-50_01 p-5">
        <div className="mt-2.5 flex items-center gap-3">
          <Img src="images/img_linkedin_gray_900.svg" alt="image" className="h-[24px] w-[24px]" />
          <Heading as="h6" className="self-end">
            {locationtext}
          </Heading>
        </div>
        <div className="flex flex-col gap-[19px] self-stretch">
          <div className="flex justify-between gap-5">
            <div className="flex items-center gap-3 pr-[31px] sm:pr-5">
              <Img src="images/img_bookmark.svg" alt="3_bed_room" className="h-[20px] w-[20px] self-start" />
              <Heading as="h6" className="!text-gray-700">
                {bedroomtext}
              </Heading>
            </div>
            <div className="flex items-center gap-3">
              <Img src="images/img_user.svg" alt="1_bath" className="h-[20px] w-[20px] self-start" />
              <Heading as="h6" className="!text-gray-700">
                {bathroomtext}
              </Heading>
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="flex items-center gap-3">
              <Img src="images/img_microphone.svg" alt="1032_sqft" className="h-[20px] w-[20px] self-start" />
              <Heading as="h6" className="!text-gray-700">
                {sqfttext}
              </Heading>
            </div>
            <div className="flex items-center gap-3">
              <Img src="images/defaultNoData.png" alt="family" className="h-[20px] w-[20px] self-start" />
              <Heading as="h6" className="!text-gray-700">
                {familytext}
              </Heading>
            </div>
          </div>
        </div>
        <div className="mb-2.5 flex items-center justify-between gap-5 self-stretch pr-[47px] md:pr-5">
          <Button shape="round" className="min-w-[156px] font-semibold sm:px-5">
            {viewdetailsbutton}
          </Button>
          <Heading size="3xl" as="h4" className="tracking-[-0.48px]">
            {pricetext}
          </Heading>
        </div>
      </div>
    </div>
  );
}
