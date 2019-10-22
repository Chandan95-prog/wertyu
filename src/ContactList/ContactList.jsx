import React from "react";
import Contact from "./Contact"
function ContactList({contacts}) {

  const list = () => {
    return contacts.map(contact => {
      return (
        <Contact key={contact.id} contact={contact}/>
      )
    })
  }
  return (
    <div>
      {list()}
    </div>
  );
}
export default ContactList;
