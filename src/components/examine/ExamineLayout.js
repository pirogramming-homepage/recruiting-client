import React from 'react'
import { ExamineHeader } from './ExamineHeader'
import ExamineList from './ExamineList'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

export default function ExaminePage() {
  return (
    <StyledExaminPage>
      <ExamineHeader name="양원채" />
      <Outlet />
    </StyledExaminPage>
  )
}

const StyledExaminPage = styled.div`
@font-face {
  font-family: 'NanumSquareNeo-Variable';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
font-family: 'NanumSquareNeo-Variable';
`