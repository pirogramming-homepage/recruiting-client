import React from 'react'
import { QuestionDiv } from '../QuestionDiv'
import { CheckBox, RadioHorizontalInput, RadioInput, TextInput } from '../Input'
import styled from 'styled-components'

const RadioHorizontalWrapper = (props) => {
	return (
		<StyledRadioHorizontalWrapper>
			{props.children}
		</StyledRadioHorizontalWrapper>
	)
}

export default function ExamineFormSecond(props) {
  return (
    <>
      <QuestionDiv
        header="이메일"
        desc="작성하신 이메일로 응답 사본이 전송됩니다."
      >
        <TextInput
          type="text"
          name="email"
          value={props.document.email}
          maxLength={30}
          required="required"
          placeholder="pirogramming.official@gmail.com"
          disabled={true}
        />
      </QuestionDiv>
      <QuestionDiv
        header="이름"
      >
        <TextInput
          type="text"
          name="name"
          value={props.document.name}
          maxLength={8}
          required="required"
          placeholder="홍길동"
          disabled={true}
        />
      </QuestionDiv>
      <QuestionDiv
        header="성별"
      >
        <RadioInput
          name="gender"
          value="M"
          required="required"
          checked={props.document.gender === 'M'}
          disabled={true}
        >
          남자
        </RadioInput>
        <RadioInput
          name="gender"
          value="W"
          checked={props.document.gender === 'W'}
          disabled={true}
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
          value={props.document.university}
          maxLength={20}
          required="required"
          placeholder="한국대학교"
          disabled={true}
        />
      </QuestionDiv>
      <QuestionDiv
        header="전공 학과"
      >
        <TextInput
          type="text"
          name="major"
          value={props.document.major}
          maxLength={44}
          required="required"
          placeholder="한국어학과"
          disabled={true}
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
          value={props.document.minor}
          maxLength={44}
          required="required"
          placeholder="컴퓨터공학과"
          disabled={true}
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
            checked={props.document.minor_course === 1}
            disabled={true}
          >
            1학기
          </RadioHorizontalInput>
          <RadioHorizontalInput
            name="course"
            value={2}
            checked={props.document.minor_course === 2}
            disabled={true}
          >
            2학기
          </RadioHorizontalInput>
          <RadioHorizontalInput
            name="course"
            value={3}
            checked={props.document.minor_course === 3}
            disabled={true}
          >
            3학기
          </RadioHorizontalInput>
          <RadioHorizontalInput
            name="course"
            value={4}
            checked={props.document.minor_course === 4}
            disabled={true}
          >
            4학기
          </RadioHorizontalInput>
          <RadioHorizontalInput
            name="course"
            value={5}
            checked={props.document.minor_course === 5}
            disabled={true}
          >
            5학기
          </RadioHorizontalInput>
          <RadioHorizontalInput
            name="course"
            value={6}
            checked={props.document.minor_course === 6}
            disabled={true}
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
            checked={props.document.level === 1}
            disabled={true}
          >
            1학년
          </RadioHorizontalInput>
          <RadioHorizontalInput
            name="level"
            value={2}
            checked={props.document.level === 2}
            disabled={true}
          >
            2학년
          </RadioHorizontalInput>
          <RadioHorizontalInput
            name="level"
            value={3}
            checked={props.document.level === 3}
            disabled={true}
          >
            3학년
          </RadioHorizontalInput>
          <RadioHorizontalInput
            name="level"
            value={4}
            checked={props.document.level === 4}
            disabled={true}
          >
            4학년
          </RadioHorizontalInput>
          <RadioHorizontalInput
            name="level"
            value={5}
            checked={props.document.level === 5}
            disabled={true}
          >
            5학년 이상
          </RadioHorizontalInput>
          <RadioHorizontalInput
            name="level"
            value={6}
            checked={props.document.level === 6}
            disabled={true}
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
          value={props.document.address}
          maxLength={298}
          required="required"
          placeholder="경기도 안양시 동안구"
          disabled={true}
        />
      </QuestionDiv>
      <QuestionDiv
        header="전화번호"
      >
        <TextInput
          type="text"
          name="phone"
          value={props.document.phone}
          maxLength={20}
          required="required"
          placeholder="010-0000-0000"
          disabled={true}
        />
      </QuestionDiv>
      <QuestionDiv
        header="면접 희망 시간대"
        desc="중복 선택 가능합니다. 면접은 대면으로 진행될 예정입니다. 1차 서류 합격 여부는 피로그래밍 홈페이지에서 확인하실 수 있습니다."
      >
        <CheckBox
          name="interview"
          value="토요일 오전"
          checked={props.document.interview?.includes("토요일 오전")}
          disabled={true}
        >
          토요일 오전
        </CheckBox>
        <CheckBox
          name="interview"
          value="토요일 오후"
          checked={props.document.interview?.includes("토요일 오후")}
          disabled={true}
        >
          토요일 오후
        </CheckBox>
        <CheckBox
          name="interview"
          value="일요일 오전"
          checked={props.document.interview?.includes("일요일 오전")}
          disabled={true}
        >
          일요일 오전
        </CheckBox>
        <CheckBox
          name="interview"
          value="일요일 오후"
          checked={props.document.interview?.includes("일요일 오후")}
          disabled={true}
        >
          일요일 오후
        </CheckBox>
      </QuestionDiv>
    </>
  )
}

const StyledRadioHorizontalWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: left;
margin-bottom: 1rem;
width: 100%;
@media (min-width: 768px) {
	flex-direction: row;
	align-items: center;
}
`