import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import actions  from "../actions";
import * as selectors from "../selectors";

const mapDispatchToProps = {
  onLogin: actions.loginUser
}

function mapStateToProps(state) {
  return {
    user: selectors.userLogin(state),
    userID: selectors.setIdUserLogin(state)
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};

    this.updateUserName = this.updateUserName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    var name = this.state.name;
    this.props.onLogin(name);
  };

  updateUserName(event) {
    this.setState({name: event.target.value});
  };

  componentWillReceiveProps(nextProps) {
    console.log("received props", nextProps);
    if (nextProps.userID) {
      this.props.history.push(`/app/users/${nextProps.userID}`);
    }
  }

  render() {
    return (
      <div className="login-container">
        <div>
          <h2>Sign In</h2>
        </div>
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <input type="text" placeholder="Name" className="form-control" value={this.state.name} onChange={this.updateUserName}/>
          </div>
          <input type="submit" value="Sign in" className="btn btn-primary" />
        </form>
        <Link to={"/app"}>Back</Link>
      </div>
    )
  }
}

Login.propTypes = {
  user: React.PropTypes.string,
  userID: React.PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
