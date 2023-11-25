import axios from 'axios';
import { logout } from './shared/utils/auth';

const apiClient = axios.create({
	baseURL: 'http://localhost:5000/api/v1',
	timeout: 1000,
});
apiClient.interceptors.request.use((config)=>{
	const userDetails=localStorage.getItem("user");
	if(userDetails){
		const token=JSON.parse(userDetails).token;
		config.headers.Authorization=`Bearer ${token}`;
	}
	return config;
},(err)=>{
	return Promise.reject(err)
})
// Public routes 
export const login = async (data) => {
	try {
		return await apiClient.post('/auth/login', data);
	} catch (err) {
		return { error: true, err };
	}
};
export const register = async (data) => {
	try {
		return await apiClient.post('/auth/register', data);
	} catch (err) {
		return { error: true, err };
	}
};

// Secured routes 
const checkResponseCode=(err)=>{
	const reponseCode=err?.response?.status;
	if(reponseCode){
		(reponseCode===401 ||reponseCode===403) && logout();
	}
}
