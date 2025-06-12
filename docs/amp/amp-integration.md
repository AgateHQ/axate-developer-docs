## Integrating Axate AMP

> Please note: these docs are actively in development, are a work in progress, and are subject to change. 

&nbsp;


### Introduction  
---

This guide is is for custom AMP integration with your pre-existing site and/or CMS.  
A WordPress plugin guide will be available in the future.

The following assumes a dynamic templating system (e.g. JSP, Twig, Mustache, Jinja2, etc) and are required for Axate AMP. 

&nbsp;


### Preparing Template for Axate Wallet  
---

Now, we'll step through each tag/code block that will need to be added.  

&nbsp;

#### Including a reference to your AMP content

> AMP allows discoverability of AMP versions of content within non-AMP pages (and vice-versa). <br />
> See "[Make your pages discoverable](https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/discovery/) for more information.

**For your standard, non-AMP template**  

Within the `<head>` section of your template and replace `INSERT_URL_TO_AMP_VERSION_OF_ARTICLE` with the URL of the AMP 

```html
<link rel="canonical" href="{{INSERT_URL_TO_AMP_VERSION_OF_ARTICLE}}" />
```

&nbsp;


#### Including Axate AMP Stylesheets

Now add the our Axate wallet stylesheet link to the `<head>` of your template.
As AMP doesn't allow linked stylesheets, you'll have to include the contents of [axate.css](https://github.com/AgateHQ/axate-amp-sample-code/blob/master/src/assets/css/axate.css) into a `<style>` tag:

```html
<style type="text/css">
/* Axate CSS */
</style>
```


&nbsp;

#### Including AMP Project Styles and Components

AMP also requires their boilerplate CSS as a `<style>` block, so add the following: 

```html
<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>

```

AMP Axate Wallet uses three AMP components: `amp-analytics`, `amp-access` and `amp-mustache`.

The following code should also be placed in the `<head>` section of your template:  

```html
<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
<script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>
<script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
```
> Note: for a full list of AMP components, please see [The AMP component catalogue](https://amp.dev/documentation/components/)

&nbsp;




#### Including AMP Access Configuration 

AMP Access to manage authorisation of paid content. 
Add the following block to the head section of your template. 


```json
<script id="amp-access" type="application/json">
  {
    "noPingback": true,
    "authorization": "https://staging.axate.io/api/authorisation?domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&premium=true",
    "login": {
      "sign-in": "https://account-staging.axate.io/my-axate/sign-in?rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER",
      "sign-out": "https://staging.axate.io/api/amp_logout?url=CANONICAL_URL&url_from=DOCUMENT_REFERRER",
      "sign-up": "https://account-staging.axate.io/my-axate/sign-up?publication_name=localhost&pub_id=localhost&url_from=CANONICAL_URL",
      "top-up": "https://account-staging.axate.io/top-up?domain=localhost&uid=339&jwt_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMzksImlhdCI6MTU1ODQzNzI3NiwianRpIjoiNmUxODNlYjAxZWExZjQyOWFhYjg1NjZjMjJjYjBlYWQifQ.Qjf92yBQ2XJ1jGpl7NtLtYZcYZhSoVMVMAx5OtoHJJ0&from=CANONICAL_URL",
      "set-threshold-yes": "https://staging.axate.io/amp/set_threshold?domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER&amount=100",
      "set-threshold-no": "https://staging.axate.io/amp/set_threshold?domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER&amount=0",
      "authorise-charge-true": "https://staging.axate.io/amp/authorise_charge?charge_automatically=true&domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER",
      "authorise-charge-false": "https://staging.axate.io/amp/authorise_charge?charge_automatically=false&domain=CANONICAL_URL&rid=READER_ID&url=CANONICAL_URL&url_from=DOCUMENT_REFERRER"
    },
    "authorizationFallbackResponse": {
      "error": true,
      "user": false
    }
  }
</script>
```

&nbsp;

For to free articles, `authorization` URL param `premium` should have the value of `false` (e.g. `premium=false`), while premium articles should have the valie of `premium=true`.  

&nbsp;





#### Wallet Code

The wallet allows users to manage payments, settings and reading preferences.
We suggest you place this at the bottom of your page template (either above, or below your AMP templates footer. 

As the code snippet is rather large:

* See this HTML code sample ([line 268](https://github.com/AgateHQ/axate-amp-sample-code/blob/master/src/example/index.html#L268) to [line 503](https://github.com/AgateHQ/axate-amp-sample-code/blob/master/src/example/index.html#L503))



#### Final Result

Visit our demo Axate AMP publication and view source as a reference working implementation.  

### [Axate AMP Demo](https://axate-amp.s3.eu-west-2.amazonaws.com/index.html)

> Please view with a mobile aspect ratio or with: [Google Chrome's Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/), [Firefox's Responsive Design Mode](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode) or [Safari's Responsive Design Mode (38min video)](https://developer.apple.com/videos/play/wwdc2015/505/)


&nbsp;


### Optional  
---

The following may be added for a better user experience for your readers

#### Anchor link to premium article section

1. Add an `id` to main article container and an anchor link above the Axate wallet: 
	* `<article id="main_article">Jump to article</article>`  
	* `<a target="_top" href="#main_article">Go to article</a>`
2. Or: add a bare/generic anchor link: `<a href="#">Go to article</a>`

