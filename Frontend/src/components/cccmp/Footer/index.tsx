import React from "react";
import { Text, Button, Input, Img, Heading } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col items-center pt-10 pb-5 gap-5 sm:pt-5 border-gray-200_01 border-t border-solid`}
    >
      <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
        <div className="flex w-[22%] flex-col gap-4 md:w-full">
          <Img src="images/img_footer_logo.png" alt="footer logo" className="h-[19px] w-[129px] object-contain" />
          <div className="flex flex-col items-start gap-[17px]">
            <Text as="p" className="w-full leading-6">
              Worldwide furniture store since 2020. We sell over 1000+ branded products on our website
            </Text>
            <div className="flex gap-2">
              <Img src="images/img_linkedin.svg" alt="linkedin icon" className="h-[20px] w-[20px] self-start" />
              <Text as="p" className="self-end !font-inter">
                Sawojajar Malang, Indonesia
              </Text>
            </div>
            <div className="flex gap-2">
              <Img src="images/img_call.svg" alt="call icon" className="h-[20px] w-[20px]" />
              <Text as="p" className="!font-inter">
                +6289 456 3455
              </Text>
            </div>
            <a href="www.urbancraft.com" target="_blank" rel="noreferrer">
              <Text as="p">www.urbancraft.com</Text>
            </a>
          </div>
        </div>
        <div className="flex w-[41%] items-start justify-between gap-5 md:w-full sm:flex-col">
          <div className="flex flex-col gap-[18px]">
            <Heading as="h6">Sitemap</Heading>
            <ul className="flex flex-col gap-5">
              <li>
                <a href="Product" target="_blank" rel="noreferrer">
                  <Text as="p">Product</Text>
                </a>
              </li>
              <li>
                <a href="Services" target="_blank" rel="noreferrer">
                  <Text as="p">Services</Text>
                </a>
              </li>
              <li>
                <a href="Article" target="_blank" rel="noreferrer">
                  <Text as="p">Article</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">About Us</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[18px]">
            <Heading as="h6">Category</Heading>
            <ul className="flex flex-col gap-5">
              <li>
                <a href="#">
                  <Text as="p">Living Room</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Bed Room</Text>
                </a>
              </li>
              <li>
                <a href="Kitchen" target="_blank" rel="noreferrer">
                  <Text as="p">Kitchen</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Bath Room</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-[18px]">
            <Heading as="h6">Our company</Heading>
            <ul className="flex flex-col items-start gap-5">
              <li>
                <a href="#">
                  <Text as="p">About us</Text>
                </a>
              </li>
              <li>
                <a href="Vacancies" target="_blank" rel="noreferrer">
                  <Text as="p">Vacancies</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Contact us</Text>
                </a>
              </li>
              <li>
                <a href="Privacy" target="_blank" rel="noreferrer">
                  <Text as="p">Privacy</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Returns policy</Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-[21%] flex-col items-start gap-4 self-start md:w-full">
          <Heading as="h6">Stay Updated</Heading>
          <Input
            size="xs"
            name="Email Input"
            placeholder={`Enter your mail`}
            prefix={<Img src="images/img_checkmark.svg" alt="checkmark" className="h-[20px] w-[20px]" />}
            className="gap-1 self-stretch rounded-[18px] sm:pr-5"
          />
          <Button size="md" className="min-w-[91px] rounded-[15px] font-medium">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="container-xs h-px bg-gray-200_01 md:p-5" />
      <div className="container-xs flex justify-center md:p-5">
        <Text size="xs" as="p">
          © 2023 by Urban craft all rights reserved.
        </Text>
      </div>
    </footer>
  );
}
