const baseUrl = 'http://localhost:8100/quickapitest/index.php/';

export const request = async (method, url, data) => {
	let result = null;
	if (method === 'GET') {
		result = fetch(`${baseUrl}${url}`);
	} else {
		result = fetch(`${baseUrl}${url}`, {
			method,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': getToken()
			},
			body: JSON.stringify(data)
		});
	}
	return result.then(responseHandler);
};

async function responseHandler(res) {
	let jsonData = await res.json();

	if (res.ok) {
		return jsonData;
	} else {
		throw jsonData;
	}
}

function getToken() {
	let user = JSON.parse(localStorage.getItem('user') ?? '{}');
	return user.accessToken ? `Bearer ${user.accessToken}` : '';
}

export const get = request.bind(null, 'GET');
export const del = request.bind(null, 'DELETE');
export const put = request.bind(null, 'PUT');
export const post = request.bind(null, 'POST');