import React, { useState } from 'react'
import styled from 'styled-components'
import { QuestionDiv } from './QuestionDiv'
import { TextAreaInput } from './Input'
import { SEASON } from './Variables'

export const RecruitThirdPage = (props) => {
    return (
        <ThridPage>
            정해진 글자 수 조건에 유념해서 작성해주세요.

            <QuestionDiv
                header="자기소개 및 지원동기와 목표 (공백 제외 700자 이하)"
                desc="당신은 어떤 사람인가요? 장단점은 무엇인가요? 피로그래밍에 지원하게 된 동기와 피로그래밍을 통해 얻고 싶은 것에 대해 함께 설명해주세요."
            >
                <TextAreaInput
                    required="required"
                    maxLength={700}
                    onInput={event => props.setIntroduce(event.target.value)}
                    defaultValue={props.q1_introduce}
                >
                </TextAreaInput>
            </QuestionDiv>
            <QuestionDiv
                header="프로그래밍 경험 및 수준, 학습계획 (공백 제외 500자 이하)"
                desc="이전에 프로그래밍을 접하거나 배워본 경험이 있으신가요? 있다면, 어떠한 언어를 어느 정도 공부하셨나요? 없다면, 프로그래밍을 어떻게 알게 되었고, 어떤 분야에 관심이 있으신가요? 프로그래밍과 관련하여 앞으로의 공부 계획이 있으시다면 설명해주세요."
            >
                <TextAreaInput
                    required="required"
                    maxLength={500}
                    onInput={event => props.setExperience(event.target.value)}
                    defaultValue={props.q2_experience}
                >
                </TextAreaInput>
            </QuestionDiv>
            <QuestionDiv
                header="만들고 싶은 웹 서비스 (공백 제외 400자 이하)"
                desc="피로그래밍 세션 후반부에는 팀을 짜서 직접 웹 사이트를 만들어 봅니다. 피로그래밍에서 만들어 보고 싶은 웹 서비스가 있으신가요? 있다면, 만들고자 하는 웹 서비스에 대해 자유롭게 설명해주세요."
            >
                <TextAreaInput
                    required="required"
                    maxLength={400}
                    onInput={event => props.setIdea(event.target.value)}
                    defaultValue={props.q3_idea}
                >
                </TextAreaInput>
            </QuestionDiv>
            <QuestionDiv
                header="협업 또는 팀플 경험 (공백 제외 500자 이하)"
                desc="팀원들과 협업을 해본 경험이 있으신가요? 있다면 팀에 어떻게 기여했나요? 또한 협업 과정에서 당신의 소통방식에 대해 설명해주세요. (프로그래밍과 관련 없는 협업 또는 팀플 경험이어도 괜찮습니다.)"
            >
                <TextAreaInput
                    required="required"
                    maxLength={500}
                    onInput={event => props.setPerformance(event.target.value)}
                    defaultValue={props.q4_performance}
                >
                </TextAreaInput>
            </QuestionDiv>
            <QuestionDiv
                header="무언가를 끝까지, 꾸준히 해낸 경험 (공백 제외 500자 이하)"
                desc="계획했던 일을 끝까지 해내거나 혹은 꾸준히 해본 경험이 있으신가요? 있다면 그 과정에서 어려운 점은 무엇이었고, 어떻게 극복하셨나요? 혹은 결과는 어땠고, 경험을 통해 무엇을 얻었는지 자유롭게 설명해주세요."
            >
                <TextAreaInput
                    required="required"
                    maxLength={500}
                    onInput={event => props.setPatience(event.target.value)}
                    defaultValue={props.q5_patience}
                >
                </TextAreaInput>
            </QuestionDiv>
            <QuestionDiv
                header="방학계획 (자유형식)"
                desc={`이번 ${SEASON} 계획이 어떻게 되나요? 학습 계획 혹은 이외의 계획이 있다면 자유롭게 작성해주세요.`}
            >
                <TextAreaInput
                    required="required"
                    onInput={event => props.setPlan(event.target.value)}
                    defaultValue={props.q6_plan}
                >
                </TextAreaInput>
            </QuestionDiv>
        </ThridPage>
    )
}

const ThridPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`