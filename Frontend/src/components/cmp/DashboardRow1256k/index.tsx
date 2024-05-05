import React from "react";
import { Text } from "./..";

interface Props {
  className?: string;
  text1?: string;
  text2?: string;
}

export default function DashboardRow1256k({ text1 = "1256K", text2 = "On Delivery ", ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex items-center`}>
      <div className="mb-[7px] flex flex-col items-start gap-1 self-end">
        <Text size="lg" as="p" className="!font-medium">
          {text1}
        </Text>
        <Text as="p" className="!font-normal !text-blue_gray-400">
          {text2}
        </Text>
      </div>
      <div className="h-full w-px bg-blue-50" />
    </div>
  );
}
