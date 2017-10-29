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
import * as firebase from "firebase";
import { CHANGE_AMOUNT, SUBSCRIBE_EMAIL } from "./actions";

const initialState = fromJS({
  email: "",
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBE_EMAIL:
      firebase.database().ref("subscribers").push({
        email: action.email,
      }).then(() => {
        firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).update({
          email: action.email,
        });
      });
      return state.set("email", action.email);
    case CHANGE_AMOUNT:
      firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).update({
        amount: action.amount,
      });
      return state.set("amount", action.amount);
    default:
      return state;
  }
}

export default homeReducer;
