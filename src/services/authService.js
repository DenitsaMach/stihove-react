import * as request from './requester';

export const register = (email, password, firstName, lastName) => request.post(`users`, { email, firstName, lastName, password });
export const login = (email, password) => request.post(`users/login`, { email, password });
export const logout = () => request.post(`users/logout`);