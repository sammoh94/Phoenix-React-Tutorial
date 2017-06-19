import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from "../actions";
import * as selectors from "../selectors";
import resetState from "../../../util-actions";

const mapDispatchToProps = {
  getUserTweets: actions.getUserTweets,
  resetState: resetState,
  deleteTweet: actions.deleteTweet
}

function mapStateToProps(state) {
  return {
    tweets: selectors.getUserTweets(state)
  }
}

class ShowUserTweets extends React.Component {
  constructor(props) {
    super(props)

    this.deleteTweet = this.deleteTweet.bind(this);
    this.renderTweet = this.renderTweet.bind(this);
  }

  deleteTweet(event) {
    const id = event.target.name
    this.props.deleteTweet({user_id: this.props.match.params.user_id, id: id});
  }

  componentWillMount() {
    this.props.resetState(false)
    this.props.getUserTweets(this.props.match.params.user_id)
  }

  renderTweet(tweet, idx) {
    if (this.props.match.params.user_id !== tweet.user_id.toString()) return null;

    var editUrl = `/app/users/${tweet.user_id}/tweets/${tweet.id}/edit`;
    return (
      <p key={idx}>{tweet.tweet}
        <Link to={editUrl} className="btn btn-default btn-xs">Edit</Link>
        <Link to={"/app/users/"+this.props.match.params.user_id+"/tweets"} className="btn btn-danger btn-xs" onClick={this.deleteTweet} name={tweet.id}>Delete</Link>
      </p>
    );
  }
  render() {
    const userID = this.props.match.params.user_id
    return (
      <div className="tweet_container">
        <h1> My Tweets </h1>
        {this.props.tweets.map(this.renderTweet)}
          <Link to={`/app/users/${userID}`}>Back</Link><br />
          <Link to={`/app/users/${userID}/tweets/new`}>Create New</Link>
      </div>
    )
  }
}

ShowUserTweets.propTypes = {
  tweets: React.PropTypes.array,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowUserTweets);
