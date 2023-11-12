import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Variables'

export default function CodeP(props) {
  return (
    <StyledWhiteSpaceP>{props.children}</StyledWhiteSpaceP>
  )
}

const StyledWhiteSpaceP = styled.p`
background-color: white;
padding: 1rem 1.5rem;
border-radius: 2rem;
white-space: pre-wrap;
font-size: 0.8rem;
@font-face {
  font-family: 'D2Coding';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
font-family: 'D2Coding';
`