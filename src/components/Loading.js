import React from 'react'
import styled from 'styled-components'
import Spinner from '../images/loading.gif'

export const Loading = (props) => {
    return (
        <StyledLoading>
            <LoadingText>잠시만 기다려 주세요</LoadingText>
            <img src={Spinner} alt="로딩중" width="10%" />
        </StyledLoading>
    )
}

const StyledLoading = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`
const LoadingText = styled.h1`
text-align: center;
font-size: 1rem;
font-weight: 600;
margin: 1rem;
`