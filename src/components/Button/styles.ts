import styled from "@emotion/styled";
import { colBlack1, colPrimary1, colWhite, Poppins } from "../../styles/abstracts/variables";
import type { ButtonVariant } from ".";

export const StyledButton = styled.button<{variant: ButtonVariant}>`
    background-color: ${({variant}) => variant === "secondary" ?  colPrimary1 : variant === "outline" ? "transparent" : colBlack1};
    color: ${colWhite};
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-family: ${Poppins};
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: ${({variant}) => variant === "secondary" ?  colBlack1 : variant === "outline" ? "transparent" : colBlack1};
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(244, 131, 34, 0.3);
    }
`