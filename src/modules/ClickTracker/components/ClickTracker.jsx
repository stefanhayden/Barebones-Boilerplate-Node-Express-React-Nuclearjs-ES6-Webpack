import React from 'react';
import getters from '../getters';
import actions from '../actions';
import reactor from '../../../reactor'

export default React.createClass({
  displayName: 'ClickTracker',

  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      clicks: getters.clicks,
    };
  },

	componentWillMount() {
		actions.init();
	},

  render() {
    let {clicks} = this.state;
    return (
      <div>
				<button onClick={actions.trackClick}>Click here</button>
				<span>Total Clicks: {clicks}</span>
      </div>
    );
  },
});
