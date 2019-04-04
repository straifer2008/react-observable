import { ajax } from 'rxjs/ajax';
import queryString from 'query-string';

export const getDefaultHeaders = () => {
	let defaultHeaders = {};
	//Todo its bad, need other way to get token
	const token = localStorage.getItem('persist:root');
	const data = JSON.parse(token);
	const auth = JSON.parse(data.auth);

	if (auth.token) defaultHeaders = {Authorization: `Bearer ${auth.token}`};

	return defaultHeaders;
};

export const get = (url, params, headers) => {
	const defaultHeaders = getDefaultHeaders();
	const stringified = queryString.stringify(params);
	const modifiedUrl = params ? `${url}?${stringified}` : url;

	return ajax.get(modifiedUrl, { ...headers, ...defaultHeaders })
};

export const post = (url, body, headers) => {
	const defaultHeaders = getDefaultHeaders();
	return ajax.post(url, body, { ...headers, ...defaultHeaders });
};

export const put = (url, body, headers) => {
	const defaultHeaders = getDefaultHeaders();
	return ajax.put(url, body, { ...headers, ...defaultHeaders });
};

export const remove = (url, params, headers) => {
	const defaultHeaders = getDefaultHeaders();
	const stringified = queryString.stringify(params);
	const modifiedUrl = params ? `${url}?${stringified}` : url;

	return ajax.delete(modifiedUrl, { ...headers, ...defaultHeaders })
};
