// 3 here we are going to retrieve all the data


import { combineReducers } from 'redux';
import ticketReducer from './TicketReducer';


const rootReducer = combineReducers({
  npq : ticketReducer
});

export default rootReducer;