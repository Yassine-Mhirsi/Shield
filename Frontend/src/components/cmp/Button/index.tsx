import React from "react";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-sm",
} as const;
const variants = {
  fill: {
    green_500: "bg-green-500 text-white-A700",
    green_50: "bg-green-50 text-green-500",
    blue_50: "bg-blue-50 text-blue-A200",
    gray_50: "bg-gray-50",
  },
  outline: {
    blue_A200: "border-blue-A200 border border-solid text-blue-A200",
  },
} as const;
const sizes = {
  xs: "h-[17px] text-sm",
  "4xl": "h-[70px] px-5",
  lg: "h-[35px] px-8 text-[15px]",
  sm: "h-[30px] px-1.5",
  xl: "h-[35px] px-1.5 text-white-A700",
  md: "h-[31px] px-[19px] text-sm",
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
  size = "md",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
