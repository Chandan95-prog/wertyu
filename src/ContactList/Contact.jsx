import React from "react";
import {Card, Segment, Icon, Feed, Button, Header, Image,Grid, Container, List, Label, Divider} from "semantic-ui-react";
import "./Contact.css"
import PropTypes from 'prop-types';
import EditContact from "./EditContact/EditContact";
function Contact ({contact, deleteContact}) {



 return(
  <Container>
{/* <Card>
<Segment width = {1}>
  
   <a><Icon name='mail outline'/> {contact.email}</a>
   <p><Icon name='phone'/> {contact.phone}</p>
   
       
       </Segment>
       </Card> */


/* <Grid>
<Grid.Row>
  <Grid.Column width={1}>
       <Image src='' avatar/>
      </Grid.Column>
      <Grid.Column width={2}>
      <Header as='h4'>{contact.name.first} {contact.name.last}</Header>
      </Grid.Column>
    </Grid.Row>
   
    <a><Icon name='mail outline'/> {contact.email}</a>
   <p><Icon name='phone'/> {contact.phone}</p>
   
    </Grid>  */}

{/* <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
    <Header as= "h4">{contact.name.first} {contact.name.last}

    
    </Header>  */}


 {/* <List divided selection>
    <List.Item>
      <Label>
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
      </Label>
      <h4>{contact.firstname} {contact.lastname}</h4>
      <a className = "contactEmail"><Icon name='mail outline'/> {contact.email}</a>
   <p><Icon name='phone'/> {contact.phone}</p>
    </List.Item>
</List>  */}

<List>
    <List.Item >
      <Image avatar src='/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>{contact.firstname} {contact.lastname}</List.Header>
        <List.Description>
        <a><Icon name='mail outline'/>
            <b>{contact.email}</b>
          </a>
          <p><Icon name='phone'/>{contact.phone}</p>
          <Button className="myButton" circular icon='edit' color='green' onClick = {()=> EditContact(contact)}/>
          <Button className="myButton" circular icon='trash alternate' color='google plus' onClick={() => deleteContact(contact.id)}/>  
        </List.Description>
        </List.Content>
        </List.Item>
        </List>
<hr/>

{/* <Header as='h4'>
    <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> 
    {contact.firstname} {contact.lastname}<br/>
    <a><Icon name='mail outline'/> {contact.email}</a>
    <p><Icon name='phone'/> {contact.phone}</p>
    <Divider/>
  </Header> */}
    </Container>

 );
}

export default Contact;


Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

// Contact.Prototype = {};
