import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Variables'

export const PiroHeader = (props) => {
    return (
        <StyledPiroHeader>
            <StyledSlogan>비전공자를 위한 웹 프로그래밍 동아리</StyledSlogan>
            <StyledLogo>PIROGRAMMING</StyledLogo>
            {props.children}
            <StyledHr />
        </StyledPiroHeader>
    )
}

const StyledPiroHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem 0;
width: 100%;
`

const StyledSlogan = styled.h3`
margin-bottom: 0.1rem;
font-weight: 400;
font-size: 1rem;
`

const StyledLogo = styled.h1`
margin-top: 0;
margin-bottom: 2rem;
font-weight: 800;
font-size: 3rem;
letter-spacing: 0.5rem;
`
const StyledHr = styled.div`
border-bottom: 1px solid black;
width: 50%;
margin: 1rem 0;
`