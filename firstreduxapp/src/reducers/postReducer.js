import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('Reducer dispatched')
      return {
        ...state,//return current state
      items: action.payload//payload
      };
    case NEW_POST:
      return {
        ...state,//return current state
        item: action.payload
      };
    default:
      return state;
  }
}
