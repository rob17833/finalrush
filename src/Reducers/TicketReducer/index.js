// 2 declare the state, give it an inicial value
// first parameter is the state
// second parameter is the action 
// action.type = generateticket generate a copy of the state plus payload
// and we return the default state
const defaultState = {}

const ticketReducer = (state=defaultState, action) => {
  switch(action.type) {
    case "GENERATETICKET":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
}

export default ticketReducer;