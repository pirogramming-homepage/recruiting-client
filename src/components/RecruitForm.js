import React from 'react'
import styled from 'styled-components'
import { COLORS, LEVEL, SERVER_URL } from './Variables'
import { QuestionDiv } from './QuestionDiv'
import { RadioInput } from './Input'
import { PiroHeader } from './PiroHeader'
import { MainButton } from './Button'
import { RecruitFirstPage } from './RecruitFirstPage'

const handleSubmit = async(e) => {
    e.preventDefault();
    const body = {};
    body.attend = e.target.attend.value;
    body.workshop = e.target.workshop.value;
    body.personal_info = e.target.personal_info.value;
    body.deposit = e.target.deposit.value;
    await fetch(`${SERVER_URL}/recruit/save_form`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
}

export const RecruitForm = (props) => {
    return (
        <StyledRecruitForm onSubmit={handleSubmit}>
            <PiroHeader>{`${LEVEL}기 지원서`}</PiroHeader>
            <RecruitFirstPage></RecruitFirstPage>
            <MainButton
                buttonContent={"다음 페이지"}
            >
            </MainButton>
        </StyledRecruitForm>
    )
}

const StyledRecruitForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`