import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import actions   from "../actions";
import * as selectors from "../selectors";

const mapDispatchToProps = {
  onRegister: actions.registerUser
}

function mapStateToProps(state) {
  return {
    user: selectors.userRegister(state),
    userID: selectors.setIdUserRegister(state)
  }
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};

    this.onSubmit = this.onSubmit.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    var name = this.state.name;
    this.props.onRegister(name);
  }

  updateUserName(event) {
    this.setState({name: event.target.value});
  }

  render() {
    if (this.props.userID) {
      this.props.history.push("/app/users/" + this.props.userID);
      return null;
    } else {
    return (
      <div className="register-container">
      <div>
        <h2>Register</h2>
      </div>
      <form onSubmit={this.onSubmit} >
        <div className="form-group">
          <input type="text" placeholder="Name" className="form-control" value={this.state.name} onChange={this.updateUserName}/>
        </div>
        <input type="submit" value="Submit" className="btn btn-primary"/>
      </form>
      <Link to={"/app"}>Back</Link>
      </div>
    );
  }
  }
}


Register.propTypes = {
  user: React.PropTypes.string,
  userID: React.PropTypes.string
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
