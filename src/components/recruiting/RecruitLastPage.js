import React, { useState } from 'react'
import styled from 'styled-components'
import { QuestionDiv } from '../QuestionDiv'
import { LEVEL, CODING_TEST_LINK, SERVER_URL } from '../Variables'
import { FileUpload, RadioInput, TextInput } from '../Input'
import PageContainer from '../PageContainer'
import CodeP from '../CodeP'

export const RecruitLastPage = (props) => {
    const desc1 = `코딩테스트는 앞으로 피로그래밍 활동을 얼마나 성실하게 참여할 수 있는지 🔥열정🔥을 평가하기 위한 테스트입니다
                
코딩테스트의 점수가 합불 여부의 큰 결정요인이 되지 않습니다
그러니 파이썬, 코딩테스트가 처음이더라도 끝까지 포기하지 말고 지원자분의 열정을 보여주세요!

코딩테스트 문제와 조건, 힌트는 아래 url 에서 확인 가능합니다
`

    const desc2 = `
⭐프로그래밍 언어는 python으로 제한합니다⭐
문제에 대한 답변 코드를 아래에 제출해주세요

* 만약 업로드 파일에 오류가 있다면 채점할 때 불이익을 받을 수 있으니 유의해주세요`

    const onClickUpload = (event) => {
        event.target.value = null
        props.setFilename('')
        props.setStatus('')
        props.setFileContent('')
    }

    const uploadFile = async (event) => {
        event.preventDefault()
        const reader = new FileReader()
        console.log(reader)
        reader.onload = () => {
            if (reader.readyState === 2) {
                props.setFileInfo(event.target.files[0])
                props.setFilename(event.target.files[0].name)
                props.setStatus('\0\0파일 저장 완료 ✅')
            } else {
                props.setStatus('\0\0파일 저장 실패 💔')
            }
        };
        reader.readAsDataURL(event.target.files[0])
        
        const textReader = new FileReader()
        console.log(textReader)
        textReader.onload = () => {
            if(textReader.readyState === 2) {
                console.log(event.target.files[0])
                if(!event.target.files[0].type.includes('python')) {
                    props.setFileContent(`제출하신 파일은 .py 파일이 아닙니다! 채점 시 불이익이 발생할 수 있습니다. 그대로 제출하시겠습니까?\n${textReader.result}`)
                } else {
                    props.setFileContent(textReader.result)
                }
            }
        }
        textReader.readAsText(event.target.files[0], 'utf-8')
    }
    const handleRadioChange = (event) => {
        props.setDoyouknowValue('');
        props.setDoyouknowpiro(event.target.value);
    }

    return (
        <PageContainer>
            <QuestionDiv
                header="코딩테스트"
            >
                <StyledP>
                    {desc1}
                </StyledP>
                <a href={CODING_TEST_LINK} target="_blank">
                    💻 피로그래밍 {LEVEL}기 코딩 테스트 바로가기 💻
                </a>
                <StyledP>
                    {desc2}
                </StyledP>
                <Wrapper>
                    <FileUpload
                        name="coding-test"
                        onChange={uploadFile}
                        onClick={onClickUpload}
                        filename={props.filename}
                        status={props.status}
                    />
                </Wrapper>
                {props.fileContent &&
                    <CodeP>
                        {props.fileContent}
                    </CodeP>
                }
            </QuestionDiv>
            <QuestionDiv
                header="피로그래밍을 어떻게 알게 되셨나요?"
            >
                <RadioInput
                    type="radio"
                    name="doyouknowpiro"
                    value="sns"
                    required="required"
                    checked={props.doyouknowpiro === 'sns'}
                    onChange={handleRadioChange}
                >
                    피로그래밍 공식 SNS (인스타그램, 카카오 채널)
                </RadioInput>
                <RadioInput
                    type="radio"
                    name="doyouknowpiro"
                    value="community"
                    checked={props.doyouknowpiro === 'community'}
                    onChange={handleRadioChange}
                >
                    네이버 카페 / 동아리 관련 커뮤니티 (예 - 스펙업, 링커리어, 캠퍼스픽 등)
                </RadioInput>
                <RadioInput
                    type="radio"
                    name="doyouknowpiro"
                    value="everytime"
                    checked={props.doyouknowpiro === 'everytime'}
                    onChange={handleRadioChange}
                >
                    에브리타임
                </RadioInput>
                <RadioInput
                    type="radio"
                    name="doyouknowpiro"
                    value="etc"
                    checked={props.doyouknowpiro === 'etc'}
                    onChange={() => props.setDoyouknowpiro('etc')}
                >
                    기타
                    <TextInput
                        type="text"
                        name="etc"
                        value={props.doyouknowValue}
                        maxLength={40}
                        onChange={event => {
                            props.setDoyouknowValue(event.target.value)
                            props.setDoyouknowpiro('etc')
                        }}
                    />
                </RadioInput>
            </QuestionDiv>
            <QuestionDiv
                header="지원서를 잘 확인하셨나요?"
                desc="지원서를 한 번 제출하면 수정이 불가능합니다. 신중히 검토 후 제출해주시기 바랍니다."
                required="no"
            />
            <QuestionDiv
                desc="선발 과정에서의 문의 사항은 카카오톡 플러스친구 (@피로그래밍) 혹은 인스타그램(@pirogramming_official)으로 연락 주시면 친절하게 답변 드리겠습니다."
                required="no"
            />
        </PageContainer>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
`
const StyledP = styled.p`
white-space: pre-wrap;
`