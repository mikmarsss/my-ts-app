import React from "react";
import styled from "styled-components";
import Image from "../../shared/ui/Image";
import logo from '../../assets/images/logo.svg'
import Container from "../../shared/ui/Container";
import Text from "../../shared/ui/Text";
import bell from '../../assets/images/bell.svg'
import heart from '../../assets/images/heart.svg'

const StyledHeader = styled.div`
    width: 100%;
    height:56px;
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: white;
`

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Container display={'flex'} width={"79.17%"} alignItems={"center"} justifyContent={"space-between"}>
                    <Container display={'flex'} alignItems={"center"} gap={"8px"}>
                        <Image src={logo} />
                        <Container display={"flex"} alignItems={"center"}>
                            <Text fontFamily="Inter-Regular" fontSize="24px">
                                at-
                            </Text>
                            <Text fontFamily="Inter-Bold" fontSize="24px">
                                work
                            </Text>
                        </Container>
                    </Container>
                    <Container display={'flex'} alignItems={"center"}>
                        <Image src={heart} />
                        <Image src={bell} />
                    </Container>
                </Container>
            </StyledHeader>
        </>
    )
}

export default Header