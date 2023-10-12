import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../Variables'
import useExamine from './use-examine';

export default function ExamineRank(props) {
  const colorList = [COLORS.dark_red, COLORS.dark_red, COLORS.stroke_gray, COLORS.green, COLORS.green];

  const {
    onClickRankBtn,
    selectedIndex
  } = useExamine();

  return (
    <ExamineRankWrapper>
      <StyledStandard>{props.standard}</StyledStandard>
      <RankWrapper>
        <label>1점</label>
        {colorList.map((color, index) => (
          <StyledRankBtn
            key={index}
            onClick={() => onClickRankBtn(index)}
            isSelected={selectedIndex == index}
            color={color}
          />
        ))}
        <label>5점</label>
      </RankWrapper>
    </ExamineRankWrapper>
  )
}

const ExamineRankWrapper = styled.div`
padding: 1rem;
margin-bottom: 2rem;
width: 50%;
@media (max-width: 768px) {
  width: 70%;
}
`
const StyledStandard = styled.p`
font-weight: bold;
font-size: 1rem;
text-align: center;
`
const RankWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const StyledRankBtn = styled.div`
background-color: ${(props) => props.isSelected ? props.color : 'none'};
border: 0.2rem solid ${(props) => props.color};
border-radius: 50%;
padding: 0.2rem;
width: 3rem;
height: 3rem;
cursor: pointer;
@media (max-width: 768px) {
  width: 1.5rem;
  height: 1.5rem;
}
`