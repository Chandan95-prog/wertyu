import actions from "./actions"
import {contacts} from '../constants/contacts'


export function setContact(contact) {
  return function(dispatch) {
    dispatch({ type: actions.SET_CONTACT, payload: contact });
};
}

 export function Contact() {
  return function(dispatch) {
    dispatch({ type: actions.SET_CONTACTS, payload: contacts });
  };
}

export function SearchContact(value){
  return function(dispatch){
    dispatch({type: actions.SEARCH_CONTACT, payload: value})
  }
}

export function addContact(contacts){
  return function(dispatch){
    dispatch({type: actions.ADD_CONTACT, payload: contacts})
  }
}
export function deleteContact (id){
  return function(dispatch) {
    dispatch({type: actions.REMOVE_CONTACT, payload: id})
  }
}

export function EditContact (contacts){
  return function (dispatch) {
    dispatch ({type: actions.EDIT_CONTACT, payload: contacts})
  }
}