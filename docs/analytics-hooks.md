# Javascripts Hooks

Axate offers various functions to manage user interactions with the Axate wallet, both before and after login, and when premium content is accessed.

These functions can be integrated for purposes such as setting user cookies, tracking analytical data, or controlling the amount of information displayed to an Axate user.

The current flow includes the following functions:

* `axateInit()`: Triggered when the Axate script is initialized.
* `agateUserLoggedIn()`: Triggered once each time a user is logs in.
* `agateUserLoggedOut()`: Triggered when a user logs out.
* `axateUserHasAccessToContent()`: Triggered when a user gains access to content.
* `agatePremiumContentRendered()`: Triggered when a premium article is purchased.

Transaction based Hooks
* `axateUserOnFreePeriod()`: Triggered when a user has reached the free period, only once per achievement of Free Period.
* `axatePaidTransaction()`: Triggered when a user used real money to pay for transaction.
* `axateBonusReadTransaction`:Triggered when a user used bonus money to pay for transaction.
* `axateFreePeriodTransaction()`: Triggered when a user has read for free, on weekly/daily period.
* `axateAlreadyReadTransaction()`: Triggered when a user has already read the article.

Page Notices based hooks
* `axatePayNow()` - In the just read/charge automatically Page Notice, if a user chooses Pay Now and remind me later
* `axateSetChargeAutomaticallyFromNow()` - In the just read/charge automatically Page Notice, if a user chooses Pay Now and don't remind me later

  
#### Axate journey hooks 

For Axate hooks to work you have to have Axate Wallet available on every page the hook is called.

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

---

## Considerations and integrations

Some publishers may utilise third-party solutions (such as Adobe Experience Manager) to trigger and track analytics. In scenarios where the suggested code is loaded from a third-party domain, the `wallet` which is responsible for triggering these events, will not function as expected. To ensure this works as expected, the code should be integrated into the same domain where the `wallet` is accessible while on the page.

## Why can't we just use `data-` attributes?

Typical we would be able to add `data-axate-login` or something similar to allow analytics to hook onto `DOM` elements with ease, however in this context the `wallet` is within an iframe, so due to security (accessing Elements in a Cross-Origin Iframe) this is not setup.

## We’ve got a race condition, we’re waiting for Axate to load, what can we do?

There are events that can be setup to trigger once the entire page is loaded.

```js
// Capture event once the entire page is loaded
  window.onload = function() {
    console.log("Page fully loaded"); sendPageLoadEvent();
    function agateInit() {
      console.log("axate started");
    }
};

```
### MutationObserver is another technique:

```js 
function agateInit() {
  console.log("axate started");
}
```

Would be within `https://example.com/some-script.js`
    
```js
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
            if (node.tagName === 'SCRIPT' && node.src === 'https://example.com/some-script.js') {
                node.onload = function() {
                    console.log("Script loaded successfully!");
                };
            }
        });
    });
});

observer.observe(document.head, { childList: true });
```

### Promise-based approach is another technique:
This ensures scripts are loaded in order by using promises.

```js
function loadScript(src) {
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(src + ' loaded');
        script.onerror = () => reject(src + ' failed to load');
        document.head.appendChild(script);
    });
}

loadScript('https://example.com/some-script.js')
    .then(result => {
        console.log(result);
        return loadScript('https://example.com/another-script.js');
    })
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

## Can we use a data layer?

Yes you can, your development team can inject custom code on the correct domain to make use of these exposed functions.  Once that is setup the Analytics product can be linked to the events as needed.


