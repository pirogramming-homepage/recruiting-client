import React, { useEffect, useState } from 'react'
import { fetchGetApi } from '../utils'
import { useParams } from 'react-router-dom';
import ExamineFormFirst from './ExamineFormFirst';
import styled from 'styled-components';
import ExamineFormSecond from './ExamineFormSecond';
import ExamineFormThird from './ExamineFormThird';

export default function ExamineDetail() {
  const [documentData, setDocumentData] = useState([]);
  const { document_id } = useParams(0);

  useEffect(() => {
    const fetchData = async (document_id) => {
      const res = await fetchGetApi(`/examine/read/${document_id}`);
      const { document } = await res.json();
      console.log(document);
      setDocumentData(document);
    }
    fetchData(document_id);
  }, []);

  return (
    <FormWrapper>
      <ExamineFormFirst document={documentData} />
      <ExamineFormSecond document={documentData} />
      <ExamineFormThird document={documentData} />
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 10rem;
`