import React, { Component } from "react";
import ListPage from "./ContactList/ContactListPage";
import './styles.css'
import { Container, Grid, Segment} from "semantic-ui-react";
import AddContact from "./ContactList/AddContact/AddContact";
import Search from "./ContactList/SearchBar/Search"
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container fluuid>
        <Grid>
          {/* <Grid.Row columns={2}>
            <Grid.Column as={Link} to="/">
              Contacts List
            </Grid.Column>
            <Grid.Column>
              <AddContact/>
            </Grid.Column>
          </Grid.Row> */}

<Grid.Row>
            <Grid.Column width={4} />
            <Segment className="myContact">
              <Grid.Column as="h4" width={4}>
                Contacts
              </Grid.Column>
              <AddContact />
              <Search onSearch={this.handleSearch} />
              <ListPage/>

            </Segment>
          
          </Grid.Row>



        </Grid>
        {/* <Route exact path="/" component={ListPage} /> */}
      </Container>
    );
  }
}
export default App;
