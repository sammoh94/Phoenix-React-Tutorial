import React from "react";
import { Route, Redirect, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

const history = createHistory();

// import components
import AppContainer   from "../components";
import Landing        from "../components/landing"
import Login          from "../components/login";
import Register       from "../components/register";
import ShowUser       from "../components/show_user";
import UserList       from "../components/users";
import ShowUserTweets from "../components/tweets/";
import EditTweet      from "../components/tweets/edit";
import CreateTweet    from "../components/tweets/create";

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/app">
          <AppContainer>
            <Switch>
              <Route exact path="/app" component={Landing} />
              <Route exact path="/app/login/new" component={Login} />
              <Route exact path="/app/users" component={UserList} />
              <Route exact path="/app/users/new" component={Register} />
              <Route exact path="/app/users/:id" component={ShowUser} />
              <Route exact path="/app/users/:user_id/tweets" component={ShowUserTweets} />
              <Route exact path="/app/users/:user_id/tweets/:id/edit" component={EditTweet} />
              <Route exact path="/app/users/:user_id/tweets/new" component={CreateTweet} />
            </Switch>
          </AppContainer>
        </Route>
      </Router>
    )
  }
}
