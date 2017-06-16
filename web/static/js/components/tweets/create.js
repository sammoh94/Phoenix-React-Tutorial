import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import actions from "../../actions";
import * as selectors from "../../selectors";

const mapDispatchToProps = {
  onCreate: actions.createTweet
}

function mapStateToProps(state) {
  return {
    user_id: selectors.setUserID(state),
    created: selectors.tweetCreated(state)
  }
}

class CreateTweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {"tweet": ""}

    this.onSubmit = this.onSubmit.bind(this);
    this.updateTweetValue = this.updateTweetValue.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const tweet = this.state.tweet
    this.props.onCreate({tweet: tweet, user_id: this.props.match.params.user_id});
  }

  updateTweetValue(event) {
    this.setState({"tweet": event.target.value})
  }

  render() {
    if (this.props.created) {
      this.props.history.push("/app/users/"+this.props.match.params.user_id+"/tweets");
      return null;
    } else {
      return (
        <div className="create-tweet">
          <div>
            <h2>Create Tweet</h2>
          </div>
          <form onSubmit={this.onSubmit} >
            <div className="form-group">
              <input type="text" placeholder="Enter your Tweet here" className="form-control" value={this.state.tweet} onChange={this.updateTweetValue}/>
            </div>
            <input type="submit" value="Create" className="btn btn-primary" />
          </form>
          <Link to={"/app/users/"+this.props.match.params.user_id+"/tweets"}>Back</Link>
        </div>
      )
    }
  }
}

CreateTweet.propTypes = {
  user_id: React.PropTypes.string,
  created: React.PropTypes.bool
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTweet);
