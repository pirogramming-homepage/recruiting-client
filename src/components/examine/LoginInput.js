import React from 'react'
import { styled } from 'styled-components'
import { COLORS } from '../Variables'

export const LoginInput = (props) => (
    <StyledLoginInput
        value={props.value}
        onInput={props.onInput}
        type={props.type}
        placeholder={props.placeholder}
    />
)

export const LoginBtn = () => (
    <StyledLoginBtn>로그인</StyledLoginBtn>
)

const StyledLoginInput = styled.input`
border: 0.2rem solid ${COLORS.stroke_gray};
border-radius: 1.3rem;
line-height: 2rem;
padding: 1rem 2rem;
margin-top: 1rem;
width: 25rem;
font-size: 1.3rem;
font-family: 'NanumSquareNeo-Variable';
`
const StyledLoginBtn = styled.button`
border: 0.2rem solid ${COLORS.stroke_gray};
background-color: ${COLORS.stroke_gray};
color: white;
border-radius: 1.3rem;
outline: none;
line-height: 2rem;
padding: 1rem 2rem;
margin-top: 1rem;
width: 29rem;
font-size: 1.3rem;
font-weight: bold;
font-family: 'NanumSquareNeo-Variable';
cursor: pointer;
&:hover {
    background-color: transparent;
    color: black;
}
`