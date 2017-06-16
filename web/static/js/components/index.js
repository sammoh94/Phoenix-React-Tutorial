import React from "react";
import { Link } from 'react-router-dom';

export default class AppContainer extends React.Component {
  render() {
    return (
      <div className="main_cOntainer">
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
