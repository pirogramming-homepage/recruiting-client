import React from 'react'
import { styled } from 'styled-components'
import { PiroHeader } from '../PiroHeader'
import { COLORS } from '../Variables'
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <StyledLoginPage>
        <PiroHeader>지원서 검토 시스템</PiroHeader>
        <StyledWarningText>본인은 지원자의 개인정보를 유출하지 않으며 공정히 서류를 검토할 것을 약속합니다.</StyledWarningText>
        <LoginForm />
    </StyledLoginPage>
  )
}

const StyledLoginPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3rem 2rem;
@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
font-family: 'NanumSquareNeo-Variable';
`
const StyledWarningText = styled.h1`
font-size: 1.5rem;
color: ${COLORS.dark_red};
text-align: center;
word-break: keep-all;
`