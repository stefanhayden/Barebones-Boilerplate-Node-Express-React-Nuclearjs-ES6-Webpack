require('babel-polyfill');

import { render } from 'react-dom';
import React from 'react';
import reactor from './reactor';
import ClickTracker from './modules/ClickTracker'


const App = React.createClass({
  statics: {
    init() {
      render(<App />, document.getElementById('app-container'));
    },
  },

  displayName: 'App',

  render() {
    return (
      <div>
				REACT!
				<ClickTracker /> 
      </div>
    );
  },
});

App.init();

export default App;
