import React from "react";
import { Text, Img, Radio, RadioGroup } from "./..";

interface InsuranceType {
  type: string;
  price: number;
}

interface Props {
  className?: string;
  companyName?: string;
  phoneNumber?: string;
  email?: string;
  picture?: string;
  insurancetypes?: InsuranceType[]; // Update the prop type for insurancetypes
  unchecked?: string;
  checked?: string;
  onSelectInsurance?: (insuranceType: string) => void; // Callback function for selecting insurance type
}

export default function AddressColumnjack({
  className,
  companyName,
  phoneNumber,
  email,
  picture,
  insurancetypes,
  unchecked,
  checked,  
  onSelectInsurance, // Include the new prop
}: Props) {
  const handleInsuranceSelect = (insuranceType: string) => {
    if (onSelectInsurance) {
      onSelectInsurance(insuranceType);
      console.log('test');
    }
  };

  return (
    <div className={`${className} flex flex-col w-full pt-5 pb-[19px] gap-[19px] border-solid rounded-[16px]`}>
      <div className="flex justify-between gap-5 self-stretch">
        <div className="flex items-center gap-3">
          <RadioGroup name="radiogroup" className="flex self-stretch">
            <Radio
              value="insurance"
              label={companyName}
              className="w-full gap-2 rounded-[24px] bg-white-A700 py-[15px] pr-[35px] text-sm text-lime-900 sm:pr-5"
              onSelect={() => handleInsuranceSelect(companyName)} 
            />
          </RadioGroup>
        </div>
        <div className="flex items-center gap-3">
          <Img src={picture} alt="menuicon" className="h-[35px] w-[35px]" />
        </div>
      </div>
      <div className="flex flex-col gap-[11px] self-stretch">
        <div className="flex flex-col items-start gap-1">
          <Text size="s" as="p">
            Email : {email}
          </Text>
        </div>
        <div className="flex flex-col items-start gap-1">
          <Text size="s" as="p">
            Phone : {phoneNumber}
          </Text>
        </div>
      </div>
    </div>
  );
}
