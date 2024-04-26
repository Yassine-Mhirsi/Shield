import React from "react";

const shapes = {
  square: "rounded-[0px]",
} as const;
const variants = {
  outline: {
    gray_800: "border-gray-800 border border-solid text-gray-800",
    gray_500: "border-gray-500 border-2 border-solid text-gray-500",
    blue_gray_100: "border-blue_gray-100 border border-solid text-gray-800",
  },
  fill: {
    white_800: "text-white-A700",
    white_A700: "bg-white-A700 text-gray-800",
  },
} as const;
const sizes = {
  "6xl": "h-[64px] px-[35px] text-lg",
  xs: "h-[24px] px-[5px]",
  "3xl": "h-[60px] px-[33px] text-2xl",
  md: "h-[48px] px-[34px] text-sm",
  sm: "h-[48px] px-4",
  "7xl": "h-[103px] px-[33px] text-lg",
  "4xl": "h-[60px] px-2.5",
  "5xl": "h-[60px] px-7 text-lg",
  lg: "h-[50px] px-[22px] text-lg",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
