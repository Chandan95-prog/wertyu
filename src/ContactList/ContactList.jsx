import React from "react";
import Contact from "./Contact";
function ContactList({contacts, deleteContact, EditContact}) {

  const list = () => {
    return contacts.map(contact => {
      return (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} EditContact = {EditContact} />
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