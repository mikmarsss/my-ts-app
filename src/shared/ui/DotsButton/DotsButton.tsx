import React from 'react';
import styled from 'styled-components';

const DotsContainer = styled.div<DotsProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: 2px;
    width: 24px;
    height:24px;
    &:hover {
        .dot {
            background-color: #22A0BC;
        }
    }

     .dot {
        background-color: ${({ isShow }) => (isShow ? '#595959' : 'black')};
    }

`;

const Dot = styled.div`
    width: 4px;
    height: 4px;
    background-color: black;
    border-radius: 50%;
   
`;

interface DotsProps {
    isShow?: boolean;
}



const VerticalDots: React.FC<DotsProps> = ({ ...props }) => {

    return (
        <DotsContainer {...props}>
            <Dot className="dot" />
            <Dot className="dot" />
            <Dot className="dot" />
        </DotsContainer>
    );
};

export default VerticalDots;