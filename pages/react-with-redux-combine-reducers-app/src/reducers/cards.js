const initialState=[
  "06.04",
  "07.04",
  "08.04",
  "На следующую неделю"
];
  
export default function cardsList(state=initialState, action) {  
  if(action.type==="ADD_CARD") { 
    return [
      ...state,
      action.payload
    ]
  } else if(action.type==="DELETE_CARD") { 
    return state.filter(card => card !== action.payload)
  } 
  return state;
}