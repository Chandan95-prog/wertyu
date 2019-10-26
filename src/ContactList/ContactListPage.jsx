import React, { Component } from "react";
import ContactList from "./ContactList";
import {Container,Segment} from "semantic-ui-react"
import { connect } from "react-redux";
import * as bodyActions from "../redux/actionContact";
// import {contacts} from '../constants/contacts'

class ListPage extends Component {

  componentDidMount() {
    this.props.Contact();
  }

  render() {
    return (
      <Container>
        <Segment>
        <ContactList contacts={this.props.contacts} deleteContact={this.props.deleteContact} EditContact = {this.props.EditContact}/>
        </Segment>
      </Container>
    )
  }
}


// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
       contact: state.contact,
      contacts : state.contacts
  }
}
const dispatchToProps = dispatch => {
  return {
    
    setContact: contact => {
      dispatch(bodyActions.setContact(contact))
    },

    Contact: contacts => {
      
      dispatch(bodyActions.Contact(contacts));
    },

    deleteContact: id => {
      dispatch(bodyActions.deleteContact(id))
    },

    EditContact: contacts => {
      dispatch(bodyActions.EditContact(contacts))
    }
  }
}
export default connect(
  mapStateToProps,
  dispatchToProps
)(ListPage);
