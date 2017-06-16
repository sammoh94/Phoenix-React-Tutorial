import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Routes from "./routes";

import store from "./store";

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("index")
  );
};

render(Routes);
