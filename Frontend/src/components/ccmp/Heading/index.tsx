import React from "react";

const sizes = {
  "2xl": "text-2xl font-bold md:text-[22px]",
  s: "text-xs font-bold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "2xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
