import actions from "./actions"
import {contacts} from '../constants/contacts'


 export function Contact() {
  return function(dispatch) {
    dispatch({ type: actions.SET_CONTACTS, payload: contacts });
  };
}

export function SearchContact(){
  return function(dispatch){
    dispatch({type: actions.SEARCH_CONTACT, payload: contacts})
  }
}