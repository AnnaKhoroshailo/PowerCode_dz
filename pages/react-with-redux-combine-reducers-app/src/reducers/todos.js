const initialState=[
  {
    title: "Сходить в магазин",
    card: "06.04"
  },
  {
    title: "Поиграть в футбол",
    card: "07.04"
  }
];

export default function toDoList(state=initialState, action) {  
  if(action.type==="ADD_TODO") { 
    return [
      ...state,
      action.payload
    ]
  } else if(action.type==="DELETE_TODO") { 
    return state.filter(todo => todo.title !== action.payload)
  } else if(action.type==="DELETE_CARD") { 
    return state.filter(todo => todo.card !== action.payload)
  } 
  return state;
}