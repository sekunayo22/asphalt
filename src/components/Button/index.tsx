import type {JSX} from "react";
import { StyledButton } from "./styles";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
    type: ButtonType;
    children?: JSX.Element | JSX.Element[] | string;
    label?: string;
    variant?: ButtonVariant;
    onClick?: () => void;
}

const Button = ({type, children, label, variant = "primary", onClick}: ButtonProps) => {
  return (
    <StyledButton type={type} variant={variant} onClick={onClick}>
      {children || label}
    </StyledButton>
  )
}

export default Button