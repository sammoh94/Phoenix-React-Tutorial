import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../actions";
import * as selectors from "../selectors";

const mapDispatchToProps = {
  getUsers: actions.loadUsers,
  deleteUser: actions.deleteUser
}

function mapStateToProps(state) {
  return {
    users: selectors.loadUsers(state)
  }
}

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(event) {
    const idForUserToDelete = event.target.name
    this.props.deleteUser(idForUserToDelete);
  }

  componentWillMount() {
    this.props.getUsers()
  }

  render() {
    let all_users = this.props.users;
    let userHtmlElements = []
    for (var i = 0; i < all_users.length; i++) {
      userHtmlElements.push(<tr key={all_users[i].id}>
        <td>{all_users[i].name}</td>
        <td className="text-right"><Link to={"/app/users/"+all_users[i].id} className="btn btn-default btn-xs">Show</Link>
        <Link to={"/app/users"} className="btn btn-xs btn-danger" name={all_users[i].id} onClick={this.deleteUser}>Delete</Link></td></tr>);
    }
    return (
      <div className="users_list">
        <h2> Listing users </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {userHtmlElements}
          </tbody>
        </table>
        <Link to={"/app"}>Back</Link>
      </div>
    );
  }
}

UserList.propTypes = {
  users: React.PropTypes.array
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserList)
