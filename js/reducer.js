import { DUMMY_ACTION } from './actions';

const initialState = {
  list: [1, 2, 3, 4, 5]
};

export default function dummyReducer(state = initialState, action) {
  switch (action.type) {
    case DUMMY_ACTION:
      return Object.assign({}, state, {
        list: []
      });
    default:
      return state;
  }
}
