import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Variables'

export const MainButton = (props) => {
    return (
        <StyledMainButton onClick={props.onClick}>{props.buttonContent}</StyledMainButton>
    )
}

const StyledMainButton = styled.button`
padding: 0.5rem 2rem;
color: white;
background: ${COLORS.green};
border-radius: 1rem;
border: none;
text-align: center;
`