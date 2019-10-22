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
        <ContactList contacts={this.props.contacts}/>
        </Segment>
      </Container>
    )
  }
}


// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
      contacts : state.contacts
  }
}
const dispatchToProps = dispatch => {
  return {
    Contact: contacts => {
      
      dispatch(bodyActions.Contact(contacts));
    },
  }
}
export default connect(
  mapStateToProps,
  dispatchToProps
)(ListPage);
