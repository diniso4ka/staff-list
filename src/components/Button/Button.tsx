import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import s from "./Button.module.scss";
import cls from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className={cls(s.Button, className)}>
      {children}
    </button>
  );
};
