# Javascripts Hooks

Axate provides with various functions to coordinate the flow of the User that sees an Axate wallet, before or after he logs in and when a premium content has been displayed to him.

These functions can be plugged into, and be used to any purpose on your end, like set a user Cookie, track analytical data or simply display more or less information to an Axate user.

The current flow is:

* `agateInit()` - When Axate script is initialized we fire this event.
* `agateUserLoggedIn()` - When a user is logged in, happens once on every axate load
* `agateUserLoggedOut()` - Whe a user does log out.
* `agatePremiumContentRendered()` - When a premium article has been purchased.
* `axateUserOnFreePeriod()` - When a user is on Free Period.


Example: 

```js
function agatePremiumContentRendered() {

  document.getElementById('subscription-barrier').style.display = "none";

};
```
In this example, a subscription offer is ommited after an Axate User has purchased an article via Axate.


### Subscribed Users

* `axateUserLoggedInWithSubscription()` - When a logged in user has a subscription, returns an object via this with two parameters, `subActive` and `subExpiryDate`

Example: 

```js
function axateUserLoggedInWithSubscription() {
  console.log(this.subActive); // true
  console.log(this.subExpiryDate); // "01 April 2024"
};
```
