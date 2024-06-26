import React, { useState } from 'react'
import { QuestionDiv } from '../QuestionDiv'
import { RadioInput } from '../Input'
import { WORKSHOP_DATE, FULL_SCHEDULE, INTERVIEW_DATE, LEVEL } from '../Variables'
import styled from 'styled-components'
import { MainButton } from '../Button'

export default function ExamineFormFirst(props) {
	const [questionVisible, setQuestionVisible] = useState('none');

	const toggleQuestionDiv = () => {
		questionVisible === 'block' ? setQuestionVisible('none') : setQuestionVisible('block');
	}

	return (
		<>
			<MainButton
				type="button"
				onClick={toggleQuestionDiv}
				buttonContent={ questionVisible === 'block' ? "약관 동의 닫기" : "약관 동의 열기" }
			/>
			<QuestionDiv
				header="피로그래밍 모든 일정에 참여할 수 있습니까?"
				desc={`면접(${INTERVIEW_DATE}), 정규 활동 (${FULL_SCHEDULE}) 매주 화, 목, 토 (10:00 ~ 17:00 공휴일은 제외)
				*일부 세션 및 행사는 대면으로 진행되기 때문에 일정 참여 불가 시 선발이 어려울 수 있습니다.`}
				display={questionVisible}
			>
				<RadioInput
					type="radio"
					name="attend"
					value={true}
					required="required"
					checked={props.document.attend_ok === 'true'}
					disabled={true}
				>
					예
				</RadioInput>
				<RadioInput
					type="radio"
					name="attend"
					value={false}
					checked={props.document.attend_ok === 'true' ? false : props.document.attend_ok !== ''}
					disabled={true}
				>
					아니오
				</RadioInput>
			</QuestionDiv>
			<QuestionDiv
				header={`피로그래밍 워크샵(${WORKSHOP_DATE})에 참여 가능합니까?`}
				desc="워크샵은 서울에서 오프라인으로 진행될 예정입니다. 불참 시 선발이 어려울 수 있습니다. 개인사정으로 인해 불참 시 사유를 기타 란에 적어주세요."
				display={questionVisible}
			>
				<RadioInput
					type="radio"
					name="workshop"
					value={true}
					required="required"
					checked={props.document.workshop_ok === 'true'}
					disabled={true}
				>
					예
				</RadioInput>
				<RadioInput
					type="radio"
					name="workshop"
					value={false}
					checked={props.document.workshop_ok === 'true' ? false : props.document.workshop_ok !== ''}
					disabled={true}
				>
					아니오
				</RadioInput>
			</QuestionDiv>
			<QuestionDiv
				header="개인정보 이용동의"
				desc={`본 피로그래밍 ${LEVEL}기 지원서에 입력한 개인정보는 피로그래밍 신규 회원 모집 및 선발, 피로그래밍 활동에만 이용되며, 이외의 용도로 활용되지 않습니다.`}
				display={questionVisible}
			>
				<RadioInput
					type="radio"
					name="personal_info"
					value={true}
					required="required"
					checked={props.document.pi_ok === 'true'}
					disabled={true}
				>
					동의
				</RadioInput>
				<RadioInput
					type="radio"
					name="personal_info"
					value={false}
					checked={props.document.pi_ok === 'true' ? false : props.document.pi_ok !== ''}
					disabled={true}
				>
					비동의
				</RadioInput>
			</QuestionDiv>
			<QuestionDiv
				header="보증금 납부 동의"
				desc="동아리 활동에는 보증금 제도가 있습니다. 동아리 시작 시 20만 원의 보증금을 내시게 됩니다. 강의(화, 목, 토) 결석이나 과제 미제출 시 2만 원, 지각이나 늦은 과제 제출 시 1만 원이 보증금에서 차감됩니다. 방학 중 모든 활동에 정상적으로 참여하시면 활동비(8만 원)를 제외한 12만 원을 돌려드립니다. 동아리의 보증금 제도에 동의하십니까?"
				display={questionVisible}
			>
				<RadioInput
					type="radio"
					name="deposit"
					value={true}
					required="required"
					checked={props.document.deposit_ok === 'true'}
					disabled={true}
				>
					동의
				</RadioInput>
				<RadioInput
					type="radio"
					name="deposit"
					value={false}
					checked={props.document.deposit_ok === 'true' ? false : props.document.deposit_ok !== ''}
					disabled={true}
				>
					비동의
				</RadioInput>
			</QuestionDiv>
		</>
	)
}