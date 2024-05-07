import React from "react";

const sizes = {
  lg: "text-sm font-medium",
  "3xl": "text-xl font-medium",
  xl: "text-base font-medium",
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
    <Component className={`text-blue_gray-400 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
