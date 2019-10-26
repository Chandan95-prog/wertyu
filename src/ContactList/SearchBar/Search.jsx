import React, {Component} from "react";
import {Input, Icon} from "semantic-ui-react";
import { connect } from "react-redux";
import * as bodyActions from "../../redux/actionContact";
class SearchBar extends Component {
  

    render(){

        const {search, value} = this.props;

        
        return (
            
            <Input
        icon={<Icon name="search" inverted circular link />}
        placeholder="Search..."
        // onChange={(e) => search(e.target.value)}
          value={value}
      />
     
        );
    }
}


function mapStateToProps (state) {
    return {
        value:state.value
    }
}

function mapDispatchToProps (dispatch) {
    return {
        SearchContact: (search) => {
            dispatch(bodyActions.SearchContact(search))
          },
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar);
