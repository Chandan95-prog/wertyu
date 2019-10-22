import actions from "./actions";
const initialState = {
  contacts:[],
  contact: "",
  search:[]
};

const reducer =  (state=initialState, action={}) => {
    switch (action.type) {
      case actions.SET_CONTACTS: 
        return {
          ...state,
          contacts: action.payload
        };

        case actions.SEARCH_CONTACT:

        return{
          ...state,
          search: state.contact.filter((contact)=>contact.includes(contact))

        };

        default:
      return state;
  }
};

export default reducer;