import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../actions";
import * as selectors from "../selectors";

const mapDispatchToProps = {
  onUpdate: actions.requestTweetUpdate
}

function mapStateToProps(state) {
  return {
    updated: selectors.getNewTweetContent(state),
    submitted: selectors.updateRequestSent(state)
  }
}

class EditTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"tweet": ""};

    this.onSubmit = this.onSubmit.bind(this);
    this.updateTweetValue = this.updateTweetValue.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const tweet = this.state.tweet;
    this.props.onUpdate({tweet: tweet, id: this.props.match.params.id, user_id: this.props.match.params.user_id});
  }

  updateTweetValue(event) {
    this.setState({tweet: event.target.value});
  }

  componentWillReceiveProps(props, nextProps) {
    console.log("component will receive props", nextProps);
    // if (nextProps.requestState === "success"){
    //   this.props.history.push(url);
    // }
  }

  render() {
    if (this.props.submitted && !this.props.updated) {
      console.log("UPDATING TWEET");
      return (
        <div>
          <h2>Updating Tweet...</h2>
        </div>
      )
    } else if (this.props.submitted && this.props.updated) {
      this.props.history.push("/app/users/"+this.props.match.params.user_id+"/tweets");
      return null;
    } else {
      return (
        <div className="editTweet">
          <h2>Edit Tweet</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Tweet Content" className="form-control" onChange={this.updateTweetValue} />
            </div>
            <input type="submit" value="Update" className="btn btn-primary" />
          </form>
          <Link to={"/app/users/"+this.props.match.params.user_id+"/tweets"}> Back </Link>
        </div>
      )
    }
  }
}

EditTweet.propTypes = {
  udpated: React.PropTypes.bool,
  submitted: React.PropTypes.bool
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTweet);
