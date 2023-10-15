import React from 'react'
import styled from 'styled-components'

export default function PageContainer(props) {
  return (
    <StyledPageContainer>{props.children}</StyledPageContainer>
  )
}

const StyledPageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`