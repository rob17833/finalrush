// 1 generate action: dispatch action to the reducer
// and take data as parameters to modify the state
// data is wathever you want

export const generateTicket = (data) => (
  {
    type: "GENERATETICKET", 
    payload : data
  }

)