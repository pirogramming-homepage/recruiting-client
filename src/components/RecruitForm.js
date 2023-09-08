import React from 'react'
import styled from 'styled-components'
import { COLORS, LEVEL } from './Variables'
import { QuestionDiv } from './QuestionDiv'
import { RadioInput } from './Input'
import { PiroHeader } from './PiroHeader'
import { MainButton } from './Button'

export const RecruitForm = (props) => {
    return (
        <StyledRecruitForm>
            <PiroHeader>{`${LEVEL}기 지원서`}</PiroHeader>
            <QuestionDiv
                header="피로그래밍 모든 일정에 참여할 수 있습니까?"
                desc="면접(12/10 (토) or 12/11 (일)), 정규 활동 (2022/12/27 ~ 2023/2/21) 매주 화, 목, 토 (10:00 ~ 17:00 공휴일은 제외)
                *일부 세션 및 행사는 대면으로 진행되기 때문에 일정 참여 불가 시 선발이 어려울 수 있습니다."
            >
                <RadioInput type="radio" name="agree">{'예'}</RadioInput>
                <RadioInput type="radio" name="agree">{'아니오'}</RadioInput>
            </QuestionDiv>
            <QuestionDiv
                header="피로그래밍 워크샵(12/23)에 참여 가능합니까?"
                desc="워크샵은 서울에서 오프라인으로 진행될 예정입니다. 불참 시 선발이 어려울 수 있습니다. 개인사정으로 인해 불참 시 사유를 기타 란에 적어주세요."
            >
                <RadioInput type="radio" name="agree">{'예'}</RadioInput>
                <RadioInput type="radio" name="agree">{'아니오'}</RadioInput>
            </QuestionDiv>
            <QuestionDiv
                header="개인정보 이용동의"
                desc="본 피로그래밍 18기 지원서에 입력한 개인정보는 피로그래밍 신규 회원 모집 및 선발, 피로그래밍 활동에만 이용되며, 이외의 용도로 활용되지 않습니다."
            >
                <RadioInput type="radio" name="agree">{'동의'}</RadioInput>
                <RadioInput type="radio" name="agree">{'비동의'}</RadioInput>
            </QuestionDiv>
            <QuestionDiv
                header="보증금 납부 동의"
                desc="동아리 활동에는 보증금 제도가 있습니다. 동아리 시작 시 20만 원의 보증금을 내시게 됩니다. 강의(화, 목, 토) 결석이나 과제 미제출 시 2만 원, 지각이나 늦은 과제 제출 시 1만 원이 보증금에서 차감됩니다. 방학 중 모든 활동에 정상적으로 참여하시면 활동비(8만 원)를 제외한 12만 원을 돌려드립니다. 동아리의 보증금 제도에 동의하십니까?"
            >
                <RadioInput type="radio" name="agree">{'동의'}</RadioInput>
                <RadioInput type="radio" name="agree">{'비동의'}</RadioInput>
            </QuestionDiv>
            <MainButton
                onClick={async () => {
                    let response = await fetch('/save_form', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        }
                    });
                    let data = await response.json();
                    console.log(data);
                }}
                buttonContent={"다음 페이지"}
            >
            </MainButton>
        </StyledRecruitForm>
    )
}

const StyledRecruitForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3rem 0;
`