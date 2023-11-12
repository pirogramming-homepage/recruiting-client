import React, { useState } from 'react'
import styled from 'styled-components'
import { QuestionDiv } from '../QuestionDiv'
import { TextAreaInput } from '../Input'
import { SEASON } from '../Variables'
import PageContainer from '../PageContainer'
import GapV from '../GapV'

export const RecruitThirdPage = (props) => {
    return (
        <PageContainer>
            정해진 글자 수 조건에 유념해서 작성해주세요.

            <GapV />

            <QuestionDiv
                header="본인의 가치관, 성격 등을 포함한 자기소개 (공백포함 500자 이내)"
                desc="자신의 장단점은 무엇인가요? 해당 장단점으로 피로그래밍 활동 속에서 기여 할 수 있는 점은 무엇인가요?"
            >
                <TextAreaInput
                    required="required"
                    maxLength={700}
                    onChange={event => props.setIntroduce(event.target.value)}
                    value={props.q1_introduce}
                >
                </TextAreaInput>
            </QuestionDiv>
            <QuestionDiv
                header="지원동기와 목표(공백포함 500자 이내)"
                desc="피로그래밍에 지원하게 된 동기와 왜 웹개발을 선택했는지, 피로그래밍 활동을 통해 얻고자 하는 것에 대해 함께 작성해 주시면 더 좋습니다."
            >
                <TextAreaInput
                    required="required"
                    maxLength={500}
                    onChange={event => props.setExperience(event.target.value)}
                    value={props.q2_experience}
                >
                </TextAreaInput>
            </QuestionDiv>
            <QuestionDiv
                header="평소에 관심을 가졌던 웹 서비스가 있나요? 혹은 만들고 싶은 웹 서비스에 대해서 작성해주세요. (공백포함 350자 이내)"
            >
                <TextAreaInput
                    required="required"
                    maxLength={400}
                    onChange={event => props.setIdea(event.target.value)}
                    value={props.q3_idea}
                >
                </TextAreaInput>
            </QuestionDiv>
            <QuestionDiv
                header="협업을 진행하며 함께 성장한 경험에 대해 이야기해주세요. 자신이 팀 내에서 맡았던 역할과 협업 과정을 통해 배우고 느낀 점에 대해 구체적으로 설명해주세요. 웹 개발 경험이 아니어도 좋습니다. (공백포함 500자 이내)"
                desc="협업과정에서 자신의 강점/약점은 무엇이라고 느꼈는지 적어주시면 더 좋습니다."
            >
                <TextAreaInput
                    required="required"
                    maxLength={500}
                    onChange={event => props.setPerformance(event.target.value)}
                    value={props.q4_performance}
                >
                </TextAreaInput>
            </QuestionDiv>
            <QuestionDiv
                header="목표를 정하고 노력한 경험 (공백포함 500자 이내)"
                desc="도전 계기와 도전 과정의 어려움 및 극복/노력 과정을 구체적으로 설명해주세요"
            >
                <TextAreaInput
                    required="required"
                    maxLength={500}
                    onChange={event => props.setPatience(event.target.value)}
                    value={props.q5_patience}
                >
                </TextAreaInput>
            </QuestionDiv>
            <QuestionDiv
                header="방학 계획 및 학습계획 (자유형식)"
                desc={`이번 ${SEASON} 계획이 어떻게 되나요? 학습 계획 혹은 이외의 계획이 있다면 자유롭게 작성해주세요.`}
            >
                <TextAreaInput
                    required="required"
                    onChange={event => props.setPlan(event.target.value)}
                    value={props.q6_plan}
                >
                </TextAreaInput>
            </QuestionDiv>
        </PageContainer>
    )
}