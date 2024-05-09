import React from "react";

const sizes = {
  "3xl": "text-2xl font-bold md:text-[22px]",
  xl: "text-xl font-semibold",
  "4xl": "text-[28px] font-extrabold md:text-[26px] sm:text-2xl",
  s: "text-base font-semibold",
  md: "text-lg font-bold",
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
  size = "s",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
