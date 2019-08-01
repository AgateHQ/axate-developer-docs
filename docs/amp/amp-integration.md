## Integrating Axate AMP

> Please note: these docs are actively in development, and are a work in progress



### Introduction

This guide is is for custom AMP integration with your pre-existing site and/or CMS.  
A WordPress plugin guide will be available in the future.

The following assumes a templating system (e.g. JSP, Groovy, Twig, Mustache, etc).

### Preparing Template for Axate Wallet


#### Including Canonical Reference

> TODO - Explantion(s)

```html
<link rel="canonical" href="amp-access-agate.html">
```


#### Including Fonts 

AMP Axate Wallet uses the following fonts: `Source Sans Pro`, `Georgia`, `Open Sans` and `Roboto`.

Place the following code in the `<head>` section of your template:  

```html
<link href="https://fonts.googleapis.com/css?family=https://fonts.googleapis.com/css?family=Source+Sans+Pro|Georgia|Open+Sans|Roboto" rel="stylesheet" type="text/css">
```




#### Including AMP Project Components

> Note: for a full list of AMP components, please see [The AMP component catalogue](https://amp.dev/documentation/components/)

AMP Axate Wallet uses for AMP components: `amp-analytics`, `amp-access`, `amp-mustache` and `amp-form`.

The following code should also be placed in the `<head>` section of your template:  

```html
<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
<script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>
<script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>

```


### Including AMP Access Configuration 

> TODO - Explantion(s)


```json
<script id="amp-access" type="application/json">
{
"noPingback": true,
"authorization": "https://staging.agate.io/api/authorisation?domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&premium=true",
"login": {
  "sign-in": "https://account-staging.agate.io/my-agate/sign-in?rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER",
  "sign-out": "https://staging.agate.io/api/amp_logout?url=CANONICAL_URL&url_from=DOCUMENT_REFERRER",
  "sign-up": "https://account-staging.agate.io/my-agate/sign-up?publication_name=localhost&pub_id=localhost&url_from=CANONICAL_URL",
  "top-up": "https://account-staging.agate.io/top-up?domain=localhost&uid=339&jwt_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMzksImlhdCI6MTU1ODQzNzI3NiwianRpIjoiNmUxODNlYjAxZWExZjQyOWFhYjg1NjZjMjJjYjBlYWQifQ.Qjf92yBQ2XJ1jGpl7NtLtYZcYZhSoVMVMAx5OtoHJJ0&from=CANONICAL_URL",
  "set-threshold-yes": "https://staging.agate.io/amp/set_threshold?domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER&amount=100",
  "set-threshold-no": "https://staging.agate.io/amp/set_threshold?domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER&amount=0",
  "authorise-charge-true": "https://staging.agate.io/amp/authorise_charge?charge_automatically=true&domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER",
  "authorise-charge-false": "https://staging.agate.io/amp/authorise_charge?charge_automatically=false&domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER"
},
"authorizationFallbackResponse": {
    "error": true,
    "user": false
}
}
</script>
```
