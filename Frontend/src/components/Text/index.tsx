import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-4xl font-normal md:text-[34px] sm:text-[32px]",
  s: "text-lg font-normal",
  xl: "text-8xl font-normal md:text-5xl",
  md: "text-2xl font-medium md:text-[22px]",
  "3xl": "text-xl font-medium",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "s",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-[#ffffff] font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
