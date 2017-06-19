import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../actions";
import * as selectors from "../selectors";

const mapDispatchToProps = {
  getUser: actions.getUser
}

function mapStateToProps(state) {
  return {
    currentUser: selectors.setUser(state),
    currentUserID: selectors.setUserID(state)
  }
}

class ShowUser extends React.Component {

  componentWillMount() {
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    if (!this.props.currentUser) {
      return (
        <div>
          <h2> Loading User Details...</h2>
        </div>
      );
    } else {
      return (
        <div className="show-user-container">
          <div><h2>Show User</h2></div>
          <ul>
            <li>
              <strong> Name: </strong>
              {this.props.currentUser}
            </li>
          </ul>
          <Link to={"/app"}>Back to Home</Link>
          <br />
          <Link to={"/app/users"}>View Users</Link>
          <br />
          <Link to={"/app/users/"+this.props.currentUserID+"/tweets"}>My Posts</Link>
        </div>
      )
    }
  }
}

ShowUser.propTypes = {
  currentUser: React.PropTypes.string,
  currentUserID: React.PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowUser);
