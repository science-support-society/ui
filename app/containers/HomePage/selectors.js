/**
 * Homepage selectors
 */

import { createSelector } from "reselect";

const selectHome = (state) => state.get("home");

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get("username")
);

const makeSelectEmail = () => createSelector(
  selectHome,
  (globalState) => globalState.get("email")
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectEmail,
};
