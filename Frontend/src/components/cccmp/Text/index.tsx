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
  disabled: boolean; // Add the disabled prop
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "lg",
  disabled = false, // Initialize disabled as false
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component 
      className={`text-gray-600_01 font-rubik ${className} ${sizes[size]} ${disabled ? 'opacity-50 pointer-events-none' : ''}`} 
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
