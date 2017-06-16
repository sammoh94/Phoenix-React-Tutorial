import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from "../../actions";
import * as selectors from "../../selectors";

const mapDispatchToProps = {
  getUserTweets: actions.getUserTweets,
  resetState: actions.resetState,
  deleteTweet: actions.deleteTweet
}

function mapStateToProps(state) {
  return {
    user: selectors.setUser(state),
    userID: selectors.setUserID(state),
    tweets: selectors.getUserTweets(state)
  }
}

class ShowUserTweets extends React.Component {
  constructor(props) {
    super(props)

    this.deleteTweet = this.deleteTweet.bind(this);
  }

  deleteTweet(event) {
    const id = event.target.name
    this.props.deleteTweet({user_id: this.props.match.params.user_id, id: id});
  }

  componentWillMount() {
    this.props.resetState(false)
    this.props.getUserTweets(this.props.match.params.user_id)
  }

  render() {
    let tweets = []
    let userTweets = this.props.tweets;
    for (var i=0; i<userTweets.length; i++) {
      if (this.props.userID === userTweets[i].user_id.toString()) {
        tweets.push(<p key={userTweets[i].id}>{userTweets[i].tweet}
          <Link to={"/app/users/"+userTweets[i].user_id+"/tweets/"+userTweets[i].id+"/edit"} className="btn btn-default btn-xs">Edit</Link>
          <Link to={"/app/users/"+this.props.userID+"/tweets"} className="btn btn-danger btn-xs" onClick={this.deleteTweet} name={userTweets[i].id}>Delete</Link>
        </p>);
      }
    }
    return (
      <div className="tweet_container">
        <h1> My Tweets </h1>
        {tweets}
        <Link to={"/app/users/"+this.props.userID}>Back</Link><br />
        <Link to={"/app/users/"+this.props.userID+"/tweets/new"}>Create New</Link>
      </div>
    )
  }
}

ShowUserTweets.propTypes = {
  user: React.PropTypes.string,
  userID: React.PropTypes.string,
  tweets: React.PropTypes.array,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowUserTweets);
