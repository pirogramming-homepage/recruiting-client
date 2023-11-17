export const COLORS = {
    green: '#6DC300',
    stroke_gray: '#959595',
    bg_gray: '#F9F9F9',
    dark_red: '#8A0000'
}

export const SERVER_URL =
	process.env.NODE_ENV === 'production'
	? '/api'
	: '//localhost:3333/api';

export const HOME_SERVER_URL =
	process.env.NODE_ENV === 'production'
	? '//pirogramming.com'
	: '//localhost:8000';

/* 서류 변수 수정 */
// 리크루팅 시작, 종료 날짜
export const RECRUIT_YEAR = 2023
export const RECRUIT_START_MONTH = 11
export const RECRUIT_START_DAY = 21
export const RECRUIT_END_MONTH = 12
export const RECRUIT_END_DAY = 2

// firstPage
export const WORKSHOP_DATE = "12/22"
export const INTERVIEW_DATE = "12/09 (토) or 12/10 (일)"
export const FULL_SCHEDULE = "2023/12/26 ~ 2024/2/20"
export const LEVEL = 20
export const SEASON = "겨울방학"

// secondPage
export const FIRST_RESULT = "12월 06일 23시 이후"
export const INTERVIEW_SAT = "12/09"
export const INTERVIEW_SUN = "12/10"

// lastPage
export const CODING_TEST_LINK = "https://naver.com"
