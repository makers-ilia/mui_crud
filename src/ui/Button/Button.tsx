import React, { FC } from "react";
import { IButtonProps } from "./Button.types";

const Button: FC<IButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
