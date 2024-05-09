import React from "react";

const shapes = {
  round: "rounded-[10px]",
} as const;
const variants = {
  outline: {
    gray_700: "border-gray-700 border border-solid text-gray-900",
    gray_600_02: "border-gray-600_02 border border-solid text-gray-900",
    blue_gray_100_02: "border-blue_gray-100_02 border border-solid text-gray-900",
  },
  fill: {
    gray_900: "bg-gray-900 text-white-A700",
  },
} as const;
const sizes = {
  "4xl": "h-[60px] px-[35px] text-lg",
  lg: "h-[42px] px-6 text-base",
  xl: "h-[48px] px-6 text-base",
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
  size = "xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer rounded-[10px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
