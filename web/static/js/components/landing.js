import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions  from "../actions";

const mapDispatchToProps = {
  onLoad: actions.resetState
}

class AppContainer extends React.Component {
  componentWillMount() {
    this.props.onLoad(false);
  }

  render() {
    return (
        <div className="wrapper">
          <div className="jumbotron">
            <h2>Welcome to Fritter</h2>
          </div>

          <div className="form_container">
            <Link to={"/app/login/new"}>
              <button className="btn btn-default">Login</button>
            </Link>
            <Link to={"/app/users/new"}>
              <button className="btn btn-default">Register</button>
            </Link>
          </div>
        </div>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AppContainer)
