import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducers from './reducers/authReducers';
import alertReducers from './reducers/alertReducer'

const rootReducer = combineReducers({
	auth: authReducers,
	alert:alertReducers,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
