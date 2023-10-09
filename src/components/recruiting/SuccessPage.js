import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocation } from "react-router";
import { COLORS } from '../Variables'
import { PiroHeader } from '../PiroHeader'
import { Checkmark } from 'react-checkmark'
import { MainButton } from '../Button';

export const SuccessPage = (props) => {
    const { state } = useLocation();

    return (
        <StyledSuccessPage>
            <PiroHeader />
            <Checkmark size='xxLarge' />
            <Header>제출이 정상적으로 완료되었습니다</Header>
            <Description>작성하신 이메일 { state.emailAddress } 로 응답 사본이 전송되었습니다</Description>
            <Description>피로그래밍에 지원해 주셔서 감사합니다!</Description>
            <a href="https://pirogramming.com/">
                <MainButton
                    type="button"
                    buttonContent="Pirogramming"
                />
            </a>
        </StyledSuccessPage>
    )
}

const StyledSuccessPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
hight: 100%;
padding: 3rem 2rem;
`
const Header = styled.h1`
text-align: center;
font-size: 2rem;
font-weight: 600;
margin-top: 3rem;
`
const Description = styled.h3`
text-align: center;
font-size: 1rem;
font-weight: 400;
margin: 0;
margin-bottom: 1rem;
`
