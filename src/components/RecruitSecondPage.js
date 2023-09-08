import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS, LEVEL, SERVER_URL } from './Variables'
import { QuestionDiv } from './QuestionDiv'
import { RadioHorizontalInput, TextInput } from './Input'

const SecondPage = (props) => {
	return <StyledSecondDiv>{props.children}</StyledSecondDiv>
}
const RadioHorizontalWrapper = (props) => {
	return (
		<StyledRadioHorizontalWrapper>
			{props.children}
		</StyledRadioHorizontalWrapper>
	)
}

export const RecruitSecondPage = (props) => {
	const [name, setName] = useState(props.name)
	const [university, setUniversity] = useState(props.university)
	const [major, setMajor] = useState(props.major)
	const [minor, setMinor] = useState(props.minor)
	const [course, setCourse] = useState(props.course)

	const handleChange = (event) => {
		props.onInfoChange(event.target.name, event.target.value);
	}

	return (
		<SecondPage>
			<QuestionDiv
				header="이름"
			>
				<TextInput
					type="text"
					name="name"
					value={name}
					required="required"
					placeholder="홍길동"
					onChange={event => {
						setName(event.target.value)
						handleChange(event)
					}}
				/>
			</QuestionDiv>
			<QuestionDiv
				header="학교"
			>
				<TextInput
					type="text"
					name="university"
					value={university}
					required="required"
					placeholder="한국대학교"
					onChange={event => {
						setUniversity(event.target.value)
						handleChange(event)
					}}
				/>
			</QuestionDiv>
			<QuestionDiv
				header="전공 학과"
			>
				<TextInput
					type="text"
					name="major"
					value={major}
					required="required"
					placeholder="한국어학과"
					onChange={event => {
						setMajor(event.target.value)
						handleChange(event)
					}}
				/>
			</QuestionDiv>
			<QuestionDiv
				header="부전공"
				desc="(복수 혹은 이중 전공인 경우)"
			>
				<TextInput
					type="text"
					name="minor"
					value={minor}
					required="required"
					placeholder="컴퓨터공학과"
					onChange={event => {
						setMinor(event.target.value)
						handleChange(event)
					}}
				/>
			</QuestionDiv>
			<QuestionDiv
				header="해당 전공 이수 학기"
				desc="(컴퓨터 관련 학과를 복수, 다중 전공하는 경우)"
			>
				<RadioHorizontalWrapper>
				<RadioHorizontalInput
					name="course"
					value={1}
					required="required"
					checked={props.course === '1'}
					onChange={handleChange}
				>
					1학기
				</RadioHorizontalInput>
				<RadioHorizontalInput
					name="course"
					value={2}
					checked={props.course === '2'}
					onChange={handleChange}
				>
					2학기
				</RadioHorizontalInput>
				<RadioHorizontalInput
					name="course"
					value={3}
					checked={props.course === '3'}
					onChange={handleChange}
				>
					3학기
				</RadioHorizontalInput>
				<RadioHorizontalInput
					name="course"
					value={4}
					checked={props.course === '4'}
					onChange={handleChange}
				>
					4학기
				</RadioHorizontalInput>
				<RadioHorizontalInput
					name="course"
					value={5}
					checked={props.course === '5'}
					onChange={handleChange}
				>
					5학기
				</RadioHorizontalInput>
				<RadioHorizontalInput
					name="course"
					value={6}
					checked={props.course === '6'}
					onChange={handleChange}
				>
					6학기 이상
				</RadioHorizontalInput>
				</RadioHorizontalWrapper>
			</QuestionDiv>
			<QuestionDiv
				header="학년"
				desc="휴학 중인 경우, 수료한 학년을 기준으로 선택해주세요."
			>
				<RadioHorizontalWrapper>
				<RadioHorizontalInput
					name="level"
					value={1}
					required="required"
					checked={props.level === '1'}
					onChange={handleChange}
				>
					1학년
				</RadioHorizontalInput>
				<RadioHorizontalInput
					name="level"
					value={2}
					checked={props.level === '2'}
					onChange={handleChange}
				>
					2학년
				</RadioHorizontalInput>
				<RadioHorizontalInput
					name="level"
					value={3}
					checked={props.level === '3'}
					onChange={handleChange}
				>
					3학년
				</RadioHorizontalInput>
				<RadioHorizontalInput
					name="level"
					value={4}
					checked={props.level === '4'}
					onChange={handleChange}
				>
					4학년
				</RadioHorizontalInput>
				<RadioHorizontalInput
					name="level"
					value={5}
					checked={props.level === '5'}
					onChange={handleChange}
				>
					5학년 이상
				</RadioHorizontalInput>
				<RadioHorizontalInput
					name="level"
					value={6}
					checked={props.level === '6'}
					onChange={handleChange}
				>
					대학원생
				</RadioHorizontalInput>
				</RadioHorizontalWrapper>
			</QuestionDiv>
		</SecondPage>
	)
}

const StyledSecondDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`
const StyledRadioHorizontalWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: left;
width: 100%;
@media (min-width: 768px) {
	flex-direction: row;
	align-items: center;
}
`