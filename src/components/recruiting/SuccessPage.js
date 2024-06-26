import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocation } from "react-router";
import { COLORS } from '../Variables'
import { PiroHeader } from '../PiroHeader'
import { Checkmark } from 'react-checkmark'
import { TextButton } from '../Button';
import { StyledRecruitForm } from './RecruitForm';

export const SuccessPage = (props) => {
    const { state } = useLocation();

    return (
        <StyledRecruitForm>
            <PiroHeader />
            <Checkmark size='xxLarge' />
            <Header>제출이 정상적으로 완료되었습니다</Header>
            {state?.message === '' ? (
                <>
                    <Description>작성하신 이메일 { state?.emailAddress } 로 응답 사본이 전송되었습니다</Description>
                    <Description>피로그래밍에 지원해 주셔서 감사합니다!</Description>
                </>
            ):(
                <>
                    <Description>{ state?.message }</Description>
                    <Description>피로그래밍에 지원해 주셔서 감사합니다!</Description>
                </>
            )}
            <StyledDiv>
            <a href="https://pirogramming.com/">
                <TextButton
                    type="button"
                    buttonContent="Pirogramming"
                    />
            </a>
            </StyledDiv>
        </StyledRecruitForm>
    )
}

const StyledSuccessPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
hight: 100%;
padding: 3rem 2rem;
@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
font-family: 'NanumSquareNeo-Variable';
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
const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`