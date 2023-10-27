# Javascripts Hooks

Axate provides with various functions to coordinate the flow of the User that sees an Axate wallet, before or after he logs in and when a premium content has been displayed to him.

These functions can be plugged into, and be used to any purpose on your end, like set a user Cookie, track analytical data or simply display more or less information to an Axate user.

The current flow is:

* `agateInit()` - When Axate script is initialized we fire this event.
* `agateUserLoggedIn()` - When a user is logged in, happens once on every axate load
* `agateUserLoggedOut()` - Whe a user does log out.
* `axateUserHasAccessToContent()` - When a user has access to content
* `agatePremiumContentRendered()` - When a premium article has been purchased.
* `axateUserOnFreePeriod()` - When a user is on Free Period.

Axate journey hooks - For Axate hooks to work you have to have Axate Wallet available on every page the hook is called.

In order to use use it, you use the JavaScript window object.

Example: window.axateContribute()

* `axateContribute()` - Contribution journey
* `axateDayPass()` - Day Pass Journey
* `axateRegister()` - Registration Journey
* `axateSubscribe()` - Subscription Journey
* `axateSignOn()` - Login Journey

The above is equivalent to clicking a button on the Axate paywall UI which
will direct you on the Axate journey to make a payment with all the required parameters for Axate to function as normal. 

Example: 

```js
function agatePremiumContentRendered() {

  document.getElementById('subscription-barrier').style.display = "none";

};
```
In this example, a subscription offer is ommited after an Axate User has purchased an article via Axate.

Example: 

```js

let userHasAxateAccount = false;

function agateUserLoggedIn() {

  userHasAxateAccount = true;

};
```


### Subscribed Users

* `axateUserLoggedInWithSubscription()` - When a logged in user has a subscription, returns an object via this with two parameters, `subActive` and `subExpiryDate`

Example: 

```js
function axateUserLoggedInWithSubscription() {
  console.log(this.subActive); // true
  console.log(this.subExpiryDate); // "01 April 2024"
};
```

TODO: 
 - click on topup




```js
function loginBaylissUser() {
  openLoginPopup("user@user.com");
};
```
