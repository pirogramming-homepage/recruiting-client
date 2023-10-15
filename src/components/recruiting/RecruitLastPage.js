import React, { useState } from 'react'
import styled from 'styled-components'
import { QuestionDiv } from '../QuestionDiv'
import { LEVEL, CODING_TEST_LINK, SERVER_URL } from '../Variables'
import { FileUpload, RadioInput, TextInput } from '../Input'
import PageContainer from '../PageContainer'

export const RecruitLastPage = (props) => {
const desc1 = `코딩테스트는 앞으로 피로그래밍 활동을 얼마나 성실하게 참여할 수 있는지 🔥열정🔥을 평가하기 위한 테스트입니다
                
코딩테스트의 점수가 합불 여부의 큰 결정요인이 되지 않습니다
그러니 파이썬, 코딩테스트가 처음이더라도 끝까지 포기하지 말고 지원자분의 열정을 보여주세요!

코딩테스트 문제와 조건, 힌트는 아래 url 에서 확인 가능합니다
⚠️코딩 테스트는 면접 평가의 참고 자료로 사용됩니다

`

const desc2 = `
⭐프로그래밍 언어는 python으로 제한합니다⭐
문제에 대한 답변 코드를 아래에 제출해주세요

* 만약 업로드 파일에 오류가 있다면 채점할 때 불이익을 받을 수 있으니 유의해주세요`

    const [filename, setFilename] = useState('')
    const [status, setStatus] = useState('')
    const [doyouknowpiro, setDoyouknowpiro] = useState('')

    const uploadFile = async(event) => {
        event.preventDefault()
        
        const data = new FormData()
        const file = event.target.files[0]
        data.append('coding-test', file)
        data.append('name', props.name)
        
        setFilename(file.name)
        props.setFilename(file.name)
        const response = await fetch(`${SERVER_URL}/recruit/save_file`, {
            method: 'POST',
            body: data
        })
        const {status: result} = await response.json();
        if(result === true) {
            setStatus('\0\0파일 저장 완료 ✅')
            props.setStatus('\0\0파일 저장 완료 ✅')
        } else {
            setStatus('\0\0파일 저장 실패 💔')
            props.setStatus('\0\0파일 저장 실패 💔')
        }
    }
    const handleRadioChange = (event) => {
        props.setDoyouknowValue('');
        props.handleChange(event.target.value);
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
                        onChange={event => uploadFile(event)}
                        filename={props.filename}
                        status={props.status}
                    />
                </Wrapper>
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
					onChange={handleRadioChange}
				>
					기타
                    <TextInput
                        type="text"
                        name="etc"
                        value={props.doyouknowValue}
                        onChange={event => {
                            props.setDoyouknowValue(event.target.value)
                            props.handleChange('etc');
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