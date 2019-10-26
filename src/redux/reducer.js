import actions from "./actions";
const initialState = {
  contacts:[],
contact: {},
  searchItem: [],
  value: ""
  
};

const reducer =  (state=initialState, action={}) => {
    switch (action.type) {

      case actions.SET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
      case actions.SET_CONTACTS: 
        return {
          ...state,
          contacts: action.payload
        };


        case actions.SEARCH_CONTACT:
          const value = action.payload;
        return{
          ...state,
          value: value,
          searchItem: state.contacts.filter((val) => val.includes(value))
        };
         
        case actions.ADD_CONTACT:
          return {
            ...state,
            contacts: state.contacts.concat(action.payload)
          }

         case actions.REMOVE_CONTACT:
           return{
             ...state,
             contacts: state.contacts.filter(item => action.payload !== item.id)
           } 

         case actions.EDIT_CONTACT:
           return{
            ...state,
            contacts: state.contacts.map(item => {
              if (item.id === action.payload.id) {
                return action.payload
              } else {
                return item
              }
            })
           }  
        default:
      return state;
  }
};

export default reducer;