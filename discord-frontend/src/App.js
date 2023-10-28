import React from 'react';
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegistrationPage from './authPages/RegisterPage/RegistrationPage';
import Dashboard from './Dashboard/Dashboard';

function App() {
	return (
		<Router>
		<Routes>
			<Route exact path='/login' element={<LoginPage/>} />
			<Route exact path="/registration" element={<RegistrationPage/>}/>
			<Route exact path="/dashboard" element={<Dashboard/>} />
			<Route path="/" element={<Navigate to="/dashboard" />}  />
			<Route
			path="*"
			element={<Navigate to="/" replace />}
		/>


		 {/*<Route path='/'>
			<Navigate to='/dashboard' />
		  </Route>*/}
			 </Routes>
	</Router>
	);
};

export default App;
