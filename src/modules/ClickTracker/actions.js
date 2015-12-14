import reactor from '../../reactor';
import getters from './getters';
import {
	TRACK_CLICK,
} from './actionTypes';

const actions = {
  trackClick() {
		reactor.dispatch(TRACK_CLICK);
  },
};

export default actions;
