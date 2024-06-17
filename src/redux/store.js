import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const reducer = (state=initialState, action) => {
    return state
}

export const store = createStore(reducer, composeWithDevTools());