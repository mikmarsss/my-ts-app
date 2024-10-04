import React from "react";
import styled from "styled-components";

const StyledInput = styled.input<InputProps>`
    width: ${({ width }) => width || 'auto'};
    height: 42px;
    font-size: 16px;
    color: #161616;
    padding: 10px 8px 10px 16px;
    border-radius: 50px; 
    font-family: 'Manrope-Medium';
    border: solid 2px #DADADA;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`

interface InputProps {
    width?: string,
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}


const Input: React.FC<InputProps> = ({ ...props }) => {
    return (
        <>
            <StyledInput {...props}>

            </StyledInput>

        </>
    )
}

export default Input