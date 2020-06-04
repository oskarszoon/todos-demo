import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from '../imports/ui/layouts/App';
import { store } from '../imports/redux/store';
import { loadTodos } from '../imports/redux/actions';

Meteor.startup(() => {
  render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('react-target'));
});

Meteor.startup(async () => {
  store.dispatch(loadTodos);
});
