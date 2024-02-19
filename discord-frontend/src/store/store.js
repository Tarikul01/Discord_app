import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducers from './reducers/authReducers';
import alertReducers from './reducers/alertReducer'
import friendsReducer from "./reducers/friendsReducers"
import roomReducers from './reducers/roomReducer';
import chatReducer from './reducers/chatReducers';
const rootReducer = combineReducers({
	auth: authReducers,
	alert:alertReducers,
	friends:friendsReducer,
	room:roomReducers,
	chat:chatReducer
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
