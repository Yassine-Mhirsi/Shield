import React from "react";

const sizes = {
  xs: "text-[10px] font-normal",
  lg: "text-base font-normal",
  s: "text-xs font-normal",
  xl: "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
  md: "text-sm font-medium",
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
  size = "md",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700_01 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
