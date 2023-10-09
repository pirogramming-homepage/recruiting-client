import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../Variables'

export default function ExaminePreview(props) {
  return (
    <StyledPreviewContainer style={{border: props.isChecked ? `0.2rem solid ${COLORS.green}` : `none`}}>
      <StyledPreviewTitle>{props.title}</StyledPreviewTitle>
      <StyledPreviewContent>{props.content}</StyledPreviewContent>
    </StyledPreviewContainer>
  )
}

const StyledPreviewContainer = styled.div`
padding: 1rem 3rem;
width: 80vw;
background-color: ${COLORS.bg_gray};
border-radius: 2rem;
cursor: pointer;
&:hover {
  & > p:first-child {
    color: lightgray;
  }
}
@media (max-width: 768px) {
  width: 80%;
}
`
const StyledPreviewTitle = styled.p`
font-weight: bold;
font-size: 1.3rem;
@media (max-width: 768px) {
  font-size: 1rem;
}
`
const StyledPreviewContent = styled.p`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
@media (max-width: 768px) {
  font-size: 0.8rem;
}
`