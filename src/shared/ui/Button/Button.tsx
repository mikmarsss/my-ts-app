import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 136px;
    height: 46px;
    font-size: 16px;
    color: #FDFDFD;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 50px; 
    font-family: 'Manrope-SemiBold';
    box-sizing: border-box;
    background-color: #161616;

    &:hover {
        background-color: #F4F4F4;
        color: #595959;
    }
`

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}


const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }) => {
    return (
        <>
            <StyledButton disabled={disabled} onClick={onClick}>
                {children}
            </StyledButton>

        </>
    )
}

export default Button