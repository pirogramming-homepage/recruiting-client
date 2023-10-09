import { SERVER_URL } from "./Variables";

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
		return res;
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