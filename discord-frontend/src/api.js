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
},(exception)=>{
	return Promise.reject(exception)
})
// Public routes 
export const login = async (data) => {
	try {
		return await apiClient.post('/auth/login', data);
	} catch (exception) {
		return { error: true, exception };
	}
};
export const register = async (data) => {
	try {
		return await apiClient.post('/auth/register', data);
	} catch (exception) {
		return { error: true, exception };
	}
};

// Secured routes 
export const sendFriendInviations=async (data)=>{
   try {
	return await apiClient.post("/friend-invitation/invite",data)
	
   } catch (exception) {
	checkResponseCode(exception);
	return {
		error:true,
		exception
	}
	
   }
}

const checkResponseCode=(err)=>{
	const reponseCode=err?.response?.status;
	if(reponseCode){
		(reponseCode===401 ||reponseCode===403) && logout();
	}
}
