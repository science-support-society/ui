/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set("yourStateVariable", true);
 */
import { fromJS } from "immutable";
import { CHANGE_AMOUNT, SUBSCRIBE_EMAIL } from "./actions";

// The initial state of the App
const initialState = fromJS({
  email: "",
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBE_EMAIL:
      // TODO: fetch here
      return state.set("email", action.email);
    case CHANGE_AMOUNT:
    // TODO: fetch here
      return state.set("amount", action.amount);
    default:
      return state;
  }
}

export default homeReducer;
