# Javascripts Hooks

Axate offers various functions to manage user interactions with the Axate wallet, both before and after login, and when premium content is accessed.

These functions can be integrated for purposes such as setting user cookies, tracking analytical data, or controlling the amount of information displayed to an Axate user.

The current flow includes the following functions:

* `agateInit()`: Triggered when the Axate script is initialized.
* `agateUserLoggedIn()`: Triggered once each time a user is logs in.
* `agateUserLoggedOut()`: Triggered when a user logs out.
* `axateUserHasAccessToContent()`: Triggered when a user gains access to content.
* `agatePremiumContentRendered()`: Triggered when a premium article is purchased.
* `axateUserOnFreePeriod()`: Triggered when a user is in a free period.

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
