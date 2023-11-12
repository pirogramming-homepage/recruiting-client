import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { QuestionDiv } from '../QuestionDiv'
import { RadioInput, RadioHorizontalInput, TextInput, CheckBox } from '../Input'
import { MainButton } from '../Button'
import { authoHyphen } from '../utils'
import PageContainer from '../PageContainer'
import { FIRST_RESULT, INTERVIEW_SAT, INTERVIEW_SUN } from '../Variables'

const RadioHorizontalWrapper = (props) => {
	return (
		<StyledRadioHorizontalWrapper>
			{props.children}
		</StyledRadioHorizontalWrapper>
	)
}

export const RecruitSecondPage = (props) => {
	const handleChange = (event) => {
		props.onInfoChange(event.target.name, event.target.value)
	}
	const handleCheck = (event) => {
		const value = event.target.value
		const checked = event.target.checked
		let newInterview = new Set(props.interview)
		if(checked) {
			newInterview.add(value)
			props.onInfoChange('interview', newInterview)
		} else if(!checked && props.interview.has(value)) {
			newInterview.delete(value)
			props.onInfoChange('interview', newInterview)
		}
		props.onCheckChange(value, checked)
	}

	return (
		<PageContainer>
			<QuestionDiv
				header="이메일"
				desc="작성하신 이메일로 응답 사본이 전송됩니다."
			>
				<TextInput
					type="text"
					name="email"
					value={props.email}
					maxLength={30}
					required="required"
					placeholder="pirogramming.official@gmail.com"
					onChange={handleChange}
				/>
			</QuestionDiv>
			<QuestionDiv
				header="이름"
			>
				<TextInput
					type="text"
					name="name"
					value={props.name}
					maxLength={8}
					required="required"
					placeholder="홍길동"
					onChange={handleChange}
				/>
			</QuestionDiv>
			<QuestionDiv
				header="성별"
			>
				<RadioInput
					name="gender"
					value="M"
					required="required"
					checked={props.gender === 'M'}
					onChange={handleChange}
				>
					남자
				</RadioInput>
				<RadioInput
					name="gender"
					value="W"
					checked={props.gender === 'W'}
					onChange={handleChange}
				>
					여자
				</RadioInput>
			</QuestionDiv>
			<QuestionDiv
				header="학교"
			>
				<TextInput
					type="text"
					name="university"
					value={props.university}
					maxLength={20}
					required="required"
					placeholder="한국대학교"
					onChange={handleChange}
				/>
			</QuestionDiv>
			<QuestionDiv
				header="전공 학과"
			>
				<TextInput
					type="text"
					name="major"
					value={props.major}
					maxLength={44}
					required="required"
					placeholder="한국어학과"
					onChange={handleChange}
				/>
			</QuestionDiv>
			<QuestionDiv
				header="부전공"
				desc="(복수 혹은 이중 전공인 경우)"
				required="no"
			>
				<TextInput
					type="text"
					name="minor"
					value={props.minor}
					maxLength={44}
					required="required"
					placeholder="컴퓨터공학과"
					onChange={handleChange}
				/>
			</QuestionDiv>
			<QuestionDiv
				header="부전공 이수 학기"
				desc="(컴퓨터 관련 학과를 복수, 다중 전공하는 경우)"
				required="no"
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
				<StyledResetContainer>
				<MainButton
					type="button"
					onClick={() => props.onInfoChange('course', '')}
					buttonContent="초기화"
				/>
				</StyledResetContainer>
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
			<QuestionDiv
				header="거주지"
				desc="피로그래밍 활동 기간 동안 거주하시는 곳은 어디인가요? (워크샵, 최종 프로젝트 발표와 같은 주요 행사와 일부 세션은 대면으로 서울에서 진행될 예정입니다.)"
			>
				<TextInput
					type="text"
					name="address"
					value={props.address}
					maxLength={298}
					required="required"
					placeholder="경기도 안양시 동안구"
					onChange={handleChange}
				/>
			</QuestionDiv>
			<QuestionDiv
				header="전화번호"
			>
				<TextInput
					type="text"
					name="phone"
					value={props.phone}
					maxLength={20}
					required="required"
					placeholder="010-0000-0000"
					onChange={event => {
						event.target.value = authoHyphen(event.target)
						handleChange(event)
					}}
				/>
			</QuestionDiv>
			<QuestionDiv
				header="면접 희망 시간대"
				desc={`중복 선택 가능합니다. 면접은 대면으로 진행될 예정입니다. 1차 서류 합격 여부는 ${FIRST_RESULT} 피로그래밍 홈페이지에서 확인하실 수 있습니다.`}
			>
				<CheckBox
					name="interview"
					value="토요일 오전"
					checked={props.interview.has("토요일 오전")}
					onChange={event => {
						props.onCheckChange(event.target.value, props.interview.has("토요일 오전"))
					}}
				>
					{INTERVIEW_SAT} 토요일 오전
				</CheckBox>
				<CheckBox
					name="interview"
					value="토요일 오후"
					checked={props.interview.has("토요일 오후")}
					onChange={event => {
						props.onCheckChange(event.target.value, props.interview.has("토요일 오후"))
					}}
				>
					{INTERVIEW_SAT} 토요일 오후
				</CheckBox>
				<CheckBox
					name="interview"
					value="일요일 오전"
					checked={props.interview.has("일요일 오전")}
					onChange={event => {
						props.onCheckChange(event.target.value, props.interview.has("일요일 오전"))
					}}
				>
					{INTERVIEW_SUN} 일요일 오전
				</CheckBox>
				<CheckBox
					name="interview"
					value="일요일 오후"
					checked={props.interview.has("일요일 오후")}
					onChange={event => {
						props.onCheckChange(event.target.value, props.interview.has("일요일 오후"))
					}}
				>
					{INTERVIEW_SUN} 일요일 오후
				</CheckBox>
			</QuestionDiv>
		</PageContainer>
	)
}

const StyledRadioHorizontalWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-bottom: 1rem;
width: 100%;
@media (max-width: 1300px) {
	flex-direction: column;
	align-items: start;
}
`
const StyledResetContainer = styled.div`
@media (max-width: 1300px) {
	display: flex;
	justify-content: end;
	width: 100%;
}
`