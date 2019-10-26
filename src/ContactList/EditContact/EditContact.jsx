import React, {Component} from "react";
import {Form, Modal, Button, Image} from "semantic-ui-react";
import { connect } from "react-redux";
import * as bodyActions from "../../redux/actionContact";
class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        firstname: props.contact.firstname,
        lastname: props.contact.lastname,
        email: props.contact.email,
        phone: props.contact.phone
      };
    
      this.show = dimmer => () => this.setState({ dimmer, open: true });
      this.close = () => this.setState({ open: false });
    
      this.changeHandler = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
      };
    
     this.update = event => {
        event.preventDefault();
        const updateContact = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          phone: this.state.phone
        };

    
        this.props.EditContact(updateContact);
      };
    }  
      render() {
        const { open, dimmer } = this.state;
        return (
          <div>
            <Button circular icon="edit" color="green" onClick={this.show(true)} />
            <Modal dimmer={dimmer} open={open} onClose={this.close}>
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content image>
                <Image
                  wrapped
                  size="small"
                  src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                />
                <Form>
                  <Form.Field inline widths='equal'>
                    <label>First name</label>
                    <Form.Input
                      fluid
                      type="text"
                      className="txtBox"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.changeHandler}
                    />
                    <label>Last name</label>
                    <Form.Input
                      fluid
                      type="text"
                      className="txtBox"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.changeHandler}
                    />
                    <Form.Input
                      fluid
                      label="Phone Number"
                      type="number"
                      className="txtBox"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.changeHandler}
                    />
                    <Form.Input
                      fluid
                      label="Email"
                      type="email"
                      className="txtBox"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </Form.Field>
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={this.close}>
                  Cancel
                </Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  content="Edit"
                  onClick={this.update}></Button>
              </Modal.Actions>
            </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    contacts: state.contacts
  }
}

const mapDispatchToProps = (disptach) => {
  return{
    EditContact: updateContact => dispatchEvent(bodyActions.EditContact(updateContact))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);