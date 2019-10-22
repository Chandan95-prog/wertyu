import React, { Component } from "react";
import { Button, Modal, Image, Form } from "semantic-ui-react";
class AddContact extends Component {
  state = {
    open: false,
    firstname: "",
    lastname: "",
    email: "",
    phone: ""
  };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  changeHandler = ({ target }) => {
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };

  addContact = event => {
    event.preventDefault();
    const newContact = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone
    };

    if (
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.email === "" ||
      this.state.phone === ""
    ) {
      alert("Both fields are required.");
      return;
    }

    this.setState(prevState => ({
      phoneBook: prevState.phoneBook.concat(newContact),
      firstname: "",
      lastname: "",
      email: "",
      phone: ""
    }));
  };

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
              content="Save"
              onClick={this.addContact}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
export default AddContact;
