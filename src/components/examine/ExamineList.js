import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ExaminePreview from './ExaminePreview'
import { Link } from 'react-router-dom'
import { fetchPostApi } from '../utils'

export default function ExamineList() {
  const [applies, setApplies] = useState([]);
  const [checkedIdList, setCheckedIdList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchPostApi('/examine/read_applies', {executive_id: 1});
      const {documents: applies, documentIdList} = await res.json();
      setApplies(applies);
      // checkedIdList 만들기
      let list = [];
      documentIdList.map((element) => list.push(element.document_fk));
      setCheckedIdList(list);
    }
    fetchData();
  }, []);
  
  return (
    <StyledContainer>
      {applies.map((apply) => {
        const isChecked = checkedIdList.find((element) => element === apply.document_id);
        return (
          <StyledPreview key={apply.document_id}>
          <StyledLink to={`/examine/statistics/${apply.document_id}`}>
            <StyledIcon>
              <i class="ri-bar-chart-2-fill ri-xl"></i>
            </StyledIcon>
          </StyledLink>
          <StyledLink to={`/examine/read/${apply.document_id}`}>
            <ExaminePreview title={`${apply.name} | ${apply.phone}`} content={`${apply.q1_introduce}`} isChecked={isChecked} />
          </StyledLink>
          </StyledPreview>
        )
      })}
    </StyledContainer>
  )
}

const StyledLink = styled(Link)`
color: black;
outline: none;
text-decoration: none;
`
const StyledContainer = styled.div`
padding: 10rem 2rem 0 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
  padding: 13rem 2rem 0 2rem;
}
`
const StyledPreview = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1.5rem;
`
const StyledIcon = styled.span`
margin-right: 1rem;
cursor: pointer;
&:hover {
  color: lightgray;
}
`