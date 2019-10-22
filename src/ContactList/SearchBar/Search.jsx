import React, {Component} from "react";
import {Input, Icon, Form} from "semantic-ui-react"
class SearchBar extends Component {
    render(){

const {search, contact} = this.props;
        
        return (
            <Form>
            <Input
        icon={<Icon name="search" inverted circular link />}
        placeholder="Search..."
        onChange={e => search(e.target.value)}
        value={contact}
      />
      </Form>
        );
    }
}


function mapStateToProps ({contacts}) {
    return {value:contacts.value}
}

function mapDispatchToProps (dispatch) {
    return 
}



export default SearchBar;
