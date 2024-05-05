import React from "react";
import { Button, Img, Text } from "./..";

interface Props {
  className?: string;
  userimage?: string;
  username?: string;
  shippingtime?: string;
  addressline1?: string;
  addressline2?: string;
}

export default function DashboardRow({
  userimage = "../../../../public/images/img_rectangle_4099.png",
  username,
  shippingtime = "Will be shipping on 11 : 24 Am",
  addressline1 = "1111 Hex Parker Rd. Allentown,",
  addressline2 = "South Africa",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col justify-between gap-5 flex-1`}>
      <div className="flex items-center gap-1.5">
        <Img src={userimage} alt="image" className="h-[30px] w-[30px] rounded-sm object-cover" />
        <div className="flex flex-col">
          <Text as="p" className="!font-normal">
            <span className="text-gray-700_01">Mohan Cudhidi</span>
            <span className="font-medium text-blue-A200">&nbsp;(4 Iteam )</span>
          </Text>
          <Text size="s" as="p" className="!text-blue_gray-400">
            {shippingtime}
          </Text>
        </div>
      </div>
      <div className="flex gap-1 self-start">
        <div className="flex flex-col items-end self-end">
          <Text size="s" as="p">
            {addressline1}
          </Text>
          <Text size="s" as="p">
            {addressline2}
          </Text>
        </div>
        <Button size="sm" shape="circle" className="w-[30px] self-start !rounded-[15px] bg-blue-A200">
          <Img src="../../../../public/images/img_heroicons_outli.svg" />
        </Button>
      </div>
    </div>
  );
}
