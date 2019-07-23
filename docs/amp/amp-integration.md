# Integrating Axate AMP

_Work in Progress_


## Introduction



## [STUB TITLE] Code


#### [STUB TITLE] External Resources


**Fonts used by Axate**

```html
<link href='https://fonts.googleapis.com/css?family=Georgia|Open+Sans|Roboto' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
```

**AMP Project Plugins**  

```html
<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
<script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>
<script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
```


**[STUB TITLE]**


**[STUB] location `<head>`**  


```html
<link rel="canonical" href="amp-access-agate.html">
```

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
    "authorise-charge-true": "https://staging.agate.io/amp/authorise_charge?domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER&charge_automatically=true",
    "authorise-charge-false": "https://staging.agate.io/amp/authorise_charge?domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER&charge_automatically=false"
  },
  "authorizationFallbackResponse": {
    "error": true,
    "user": false
  }
}
</script>
```
