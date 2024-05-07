import React from "react";
import { Sidebar } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar3({ ...props }: Props) {
  return (
    <Sidebar
      width="300px !important"
      backgroundColor="white" // Change the background color to white
      css={{ borderRight: 'none' }} // Remove the vertical line
      {...props} // Pass other props to the Sidebar component
    >
    </Sidebar>
  );
}
