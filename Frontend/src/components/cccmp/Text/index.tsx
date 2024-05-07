import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-base font-normal",
  s: "text-sm font-normal",
  "3xl": "text-2xl font-medium md:text-[22px]",
  xl: "text-lg font-medium",
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
  size = "lg",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600_01 font-rubik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
