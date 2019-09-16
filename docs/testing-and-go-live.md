## Testing & Go Live


### Testing on Staging

We can provide you with dummy credit card credentials so that you can set up user accounts on your staging environment without spending any actual real money. 

Although PayPal and Apple Pay will be available to your users when your implementation switches to live, we can’t provide dummy credentials for those.

### On Live, prior to Go Live

  1. Mark 10 - 15 articles on your staging site as premium Add the live Axate code only to those articles
  2. Provide us with the URLs of those articles

We recommend testing on the live environment prior to full go-live. To do this, mark as premium a few articles that are unlikely to be found organically (i.e. older articles or not currently topical). We recommend a sample of 10 to 15 articles for testing.
To include Axate on selected articles

  1. The Axate code needs to be added to just those articles. We suggest inserting it in the body text, so that it applies to only those articles
  2. Change the code from staging to live as follows:

The staging code is this:

``` <script async src="https://wallet-staging.agate.io/bundle.js"></script> ```

To make it like, delete word “staging” so that it appears like this:

``` <script async src="https://wallet.agate.io/bundle.js"></script> ```

You should see Agate briefly if the page is still loading.

On our side, we need to switch page notices etc over to our live database, so please let us know when you are ready to carry out the live testing.

Once you add the code, the green tab will appear in the left of the page, but no articles will be obscured until you mark them as premium.

Let us know when the implementation has passed your user acceptance testing.

### Go Live

Once we have agreed a time and date for launch, we are ready to go-live. On go-live, the Axate code needs to be applied to the whole of the site. 

To do this, move the code to the header section of your CMS template.

The green Axate tab will appear on all articles (free and premium) but the page notice will only appear on premium articles.
Please ensure that the code is inserted in priority to any ads loading.

If ads load prior to Axate, then article text will only load after the ads have finished loading, which leads to a poor user experience.
