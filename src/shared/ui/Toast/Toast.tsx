import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Image from "../Image";
import exit from '../../../assets/images/exit.svg'
import checkBox from '../../../assets/images/checkBox.svg'
import Text from "../Text";
const StyledToast = styled.p<ToastProps>`
   width:100%;
   height:100vh;
   position: absolute;
   background-color:black;
   opacity: 0.7;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: -56px;
`

interface ToastProps {
    width?: string,
    height?: string,
    fontSize?: string,
    fontFamily?: string,
    color?: string,
    margin?: string;
    hoverColor?: string;
}


const Toast: React.FC<ToastProps & { children: React.ReactNode }> = ({ children, ...props }) => {
    return (
        <>
            <StyledToast {...props}>
                <Container width="310px" height="211px" backgroundColor="#FDFDFD" display="flex" flexDirection="column" alignItems="center">
                    <button>
                        <Container width="310px" height="20px" display="flex" justifyContent="end" margin="18px 18px 0 0">
                            <Image src={exit} />
                        </Container>
                    </button>
                    <Image src={checkBox} />
                    <Text>
                        {children}
                    </Text>

                </Container>
            </StyledToast>

        </>
    )
}

export default Toast