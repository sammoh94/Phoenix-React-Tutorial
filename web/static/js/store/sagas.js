import { call, put, takeEvery, all } from 'redux-saga/lib/effects';
import "regenerator-runtime/runtime";
import actions from "../actions";

function* onRegisterUser() {
  yield takeEvery("USER_REGISTER", registerUser);
}

function* registerUser(action) {
  let userID = null
  const requestParams = {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ "user": { "name" : action.payload }}),
  }
  yield fetch('/api/users', requestParams).then(function (response) {
      if (!response.ok) {
        window.alert("Error: Could not register User");
      } else {
        return response.json().then(function (data) {
          userID = data.id.toString();
        });
      }
  });
  if (userID) {
    yield put(actions.setUserIdOnRegister(userID))
  }
}

function* onLoginUser() {
  yield takeEvery("USER_LOGIN", loginUser);
}

function* loginUser(action) {
  let userID = null
  const requestParams = {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': 'application/json' },
    body: JSON.stringify({ "name": action.payload }),
  }
  yield fetch('/api/login', requestParams).then(function (response) {
    console.log(response);
    if (!response.ok) {
      window.alert("Please enter a valid username");
    } else {
      return response.json().then(function (data) {
        userID = data.id
      });
    }
  });
  if (userID) {
    yield put(actions.setUserIdOnLogin(userID.toString()))
  }
}

function* onAllUsersGet() {
  yield takeEvery("GET_ALL_USERS", getAllUsers);
}

function* getAllUsers() {
  let users = []
  const requestParams = {
    method: "GET",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json" }
  }
  yield fetch("/api/users", requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not retrieve list of users");
    } else {
      return response.json().then(function (data) {
        users = data;
      });
    }
  });
  if (users) {
    yield put(actions.setUsers(users));
  }
}

function* onGetUser() {
  yield takeEvery("GET_USER", getThisUser);
}

function* getThisUser(action) {
  let user = null
  const requestParams = {
    method: "GET",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json"}
  }
  yield fetch("/api/users/"+action.payload, requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not retrieve User with given ID");
    } else {
      return response.json().then(function (data) {
        user = data
      });
    }
  });
  if (user) {
    yield put(actions.setUser(user));
  }
}

function* onUserTweetsGet() {
  yield takeEvery("GET_USER_TWEETS", getTweetsForUser);
}

function* getTweetsForUser(action) {
  let tweets = []
  const requestParams = {
    method: "GET",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json"}
  }
  yield fetch("/api/users/"+action.payload+"/tweets", requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not load Tweets for given User ID");
    } else {
      return response.json().then(function (data) {
        tweets = data.tweets
      });
    }
  });
  if (tweets.length > 0) {
    yield put(actions.setUserTweets(tweets));
  }
}

function* updateTweet() {
  yield takeEvery("UPDATE_TWEET", updateGivenTweet);
}

function* updateGivenTweet(action) {
  let tweet_updated = null
  const requestParams = {
    method: "PUT",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json"},
    body: JSON.stringify({"tweet": {"tweet": action.payload.tweet}, "user_id": action.payload.user_id, "id": action.payload.id})
  }
  const url = `/api/users/${action.payload.user_id}/tweets/${action.payload.id}`;
  yield fetch(url, requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not Update Tweet")
      tweet_updated = false;
    } else {
      tweet_updated = true;
    }
  });
  if (tweet_updated !== null) {
    yield put(actions.tweetUpdated(tweet_updated));
  }
}

function* createTweet() {
  yield takeEvery("CREATE_TWEET", createNewTweet);
}

function* createNewTweet(action) {
  let created_tweet = false;
  const requestParams = {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json" },
    body: JSON.stringify({
      "tweet": {"tweet": action.payload.tweet},
      "user_id": action.payload.user_id})
  }
  const url = "/api/users/"+action.payload.user_id+"/tweets";
  yield fetch(url, requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error generating new tweet");
    } else {
      return response.json().then(function (data) {
        console.log(data);
        created_tweet = true
      });
    }
  });
  if (created_tweet) {
    yield put(actions.tweetCreated());
  }
}

function* deleteTweet() {
  yield takeEvery("DELETE_TWEET", deleteThisTweet);
}

function* deleteThisTweet(action) {
  let tweet_deleted = false;
  const user_id  = action.payload.user_id;
  const tweet_id = action.payload.id;
  const url      = "/api/users/"+user_id+"/tweets/"+tweet_id;
  const requestParams = {
    method: "DELETE",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json"}
  }
  yield fetch(url, requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not delete tweet");
    } else {
      tweet_deleted = true;
      return response;
    }
  });
  if (tweet_deleted) {
    yield put(actions.tweetDeleted(tweet_id));
  }
}

function* deleteUser() {
  yield takeEvery("DELETE_USER", deleteGivenUser);
}

function* deleteGivenUser(action) {
  let userDeleted = false;
  const userId  = action.payload;
  const url     = "/api/users/"+userId;
  const requestParams = {
    method: "DELETE",
    credentials: "same-origin",
    headers: { Accept: "application/json", 'Content-Type': "application/json"}
  }
  yield fetch(url, requestParams).then(function (response) {
    if (!response.ok) {
      window.alert("Error: Could not delete user");
    } else {
      userDeleted = true;
      return response;
    }
  });
  if (userDeleted) {
    yield put(actions.userDeleted(userId));
  }
}

export default function* rootSaga () {
  yield all([
    onRegisterUser(),
    onLoginUser(),
    onAllUsersGet(),
    onGetUser(),
    onUserTweetsGet(),
    updateTweet(),
    createTweet(),
    deleteTweet(),
    deleteUser()
  ])
}
