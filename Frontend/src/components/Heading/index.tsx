import React from "react";

const sizes = {
  xl: "text-[64px] font-bold md:text-5xl",
  s: "text-2xl font-bold md:text-[22px]",
  md: "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  lg: "text-[56px] font-bold md:text-5xl sm:text-[42px]",
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
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
