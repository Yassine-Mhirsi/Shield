import React from "react";
import { Heading, Text, Img } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer
      {...props}
      className={`${props.className} flex self-stretch justify-center items-center py-[74px] md:py-5 bg-white-A700`}
    >
      <div className="container-xs mt-[5px] flex justify-center md:p-5">
        <div className="flex w-[97%] flex-col md:w-full">
          <div className="flex items-start gap-2.5">
            <Img src="images/img_home.svg" alt="home" className="h-[40px] w-[40px]" />
            <Text as="p" className="mt-[5px]">
              Relasto
            </Text>
          </div>
          <div className="relative mt-[-13px] flex items-start justify-between gap-5 md:flex-col">
            <ul className="!mt-14 flex flex-col">
              <li>
                <a href="#">
                  <Heading as="h6">59 Bervely Hill Ave, Brooklyn Town,</Heading>
                </a>
              </li>
              <li>
                <a href="#" className="mt-[52px]">
                  <Heading as="h6">New York, NY 5630, CA, US</Heading>
                </a>
              </li>
              <li>
                <a href="#" className="mt-[30px]">
                  <Heading as="h6">+(123) 456-7890</Heading>
                </a>
              </li>
              <li>
                <a href="info@mail.com" target="_blank" rel="noreferrer" className="mt-2">
                  <Heading as="h6">info@mail.com</Heading>
                </a>
              </li>
              <li>
                <a href="#" className="mt-[174px]">
                  <Heading as="h6">© 2022. All rights reserved.</Heading>
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-px">
              <Heading size="md" as="h6">
                Features
              </Heading>
              <ul className="flex flex-col gap-px">
                <li>
                  <a href="#">
                    <Heading as="h6">Home v1</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6">Home v2</Heading>
                  </a>
                </li>
                <li>
                  <a href="About" target="_blank" rel="noreferrer">
                    <Heading as="h6">About</Heading>
                  </a>
                </li>
                <li>
                  <a href="Contact" target="_blank" rel="noreferrer">
                    <Heading as="h6">Contact</Heading>
                  </a>
                </li>
                <li>
                  <a href="Search" target="_blank" rel="noreferrer">
                    <Heading as="h6">Search</Heading>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-px">
              <Heading size="md" as="h6">
                Information
              </Heading>
              <ul className="flex flex-col gap-px">
                <li>
                  <a href="#">
                    <Heading as="h6">Listing v1</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6">Listing v2</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6">Property Details</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6">Agent List</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6">Agent Profile</Heading>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-px">
              <Heading size="md" as="h6">
                Documentation{" "}
              </Heading>
              <ul className="flex flex-col gap-px">
                <li>
                  <a href="Blog" target="_blank" rel="noreferrer">
                    <Heading as="h6">Blog</Heading>
                  </a>
                </li>
                <li>
                  <a href="FAQ" target="_blank" rel="noreferrer">
                    <Heading as="h6">FAQ</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6">Privacy Policy</Heading>
                  </a>
                </li>
                <li>
                  <a href="License" target="_blank" rel="noreferrer">
                    <Heading as="h6">License</Heading>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-px">
              <Heading size="md" as="h6">
                Others
              </Heading>
              <ul className="flex flex-col items-start gap-px">
                <li>
                  <a href="#">
                    <Heading as="h6">Log in</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6">Enter OTP</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6">New Password</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6">Reset Password</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading as="h6">Create Account</Heading>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
