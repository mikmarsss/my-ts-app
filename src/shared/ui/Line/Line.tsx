import React from "react";
import styled from "styled-components";

const StyledLine = styled.hr<LineProps>`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '1px'};
    background-color: ${({ backgroundColor }) => backgroundColor || '#DADADA'};
    border: none;
    margin:${({ margin }) => margin || '0 0 0 0'};
`

interface LineProps {
    width?: string;
    height?: string;
    backgroundColor?: string;
    margin?: string;
}

const Line: React.FC<LineProps> = ({ ...props }) => {
    return (
        <>
            <StyledLine {...props} />
        </>
    )
}

export default Line