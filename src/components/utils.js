import { RECRUIT_END_DAY, RECRUIT_END_MONTH, RECRUIT_START_DAY, RECRUIT_START_MONTH, RECRUIT_YEAR, SERVER_URL } from './Variables'

export const authoHyphen = (target) => {
	return target.value
		.replace(/[^0-9]/g, '')
		.replace(/^(\d{0,3})(\d{0,4})(\d{0,4}){0,11}$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
}

export const fetchPostApi = async (url, body) => {
	const res = await fetch(SERVER_URL+url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body)
	});

	if (res.ok) {
		const result = await res.json()
		return result;
	}
}

export const fetchGetApi = async (url) => {
	const res = await fetch(SERVER_URL+url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (res.ok) {
		return res;
	}
}

export function dateCheck() {
  // 접속 시간 리크루팅이 종료되었다면
  const now = new Date()
  const recruitStartDate = new Date(RECRUIT_YEAR, RECRUIT_START_MONTH - 1, RECRUIT_START_DAY)
  const recruitEndDate = new Date(RECRUIT_YEAR, RECRUIT_END_MONTH - 1, RECRUIT_END_DAY)
	// console.log('now', now)
	// console.log('recruitStartDate', recruitStartDate)
	// console.log('recruitEndDate', recruitEndDate)
  if (now < recruitStartDate) {
    return 'before' // 리크루팅 시작 전
  }
  else if (now > recruitEndDate) {
    return 'after' // 리크루팅 종료 후
  }
	return 'ok'
}

export async function addApplicantToHome(
	name,
	phone,
	level,
	major,
) {
	const body = {
		name: name,
		phone: phone,
		level: level,
		major: major,
	}
	const res = await fetch('https://pirogramming.com/recruit/api/add_applicant/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body)
	});

	if (res.ok) {
		const result = await res.json()
		return result;
	}
}