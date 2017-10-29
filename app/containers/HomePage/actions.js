/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

export const SUBSCRIBE_EMAIL = "sciencesupport/EmailSubscription/SUBSCRIBE";
export const CHANGE_AMOUNT = "sciencesupport/HomeContainer/CHANGE_AMOUNT";

export function subscribe(email) {
  return {
    type: SUBSCRIBE_EMAIL,
    email,
  };
}

export function changeAmount(amount) {
  console.log("amount", amount);
  return {
    type: CHANGE_AMOUNT,
    amount,
  };
}
