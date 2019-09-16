## Integrating with Axate

### Adding the Axate script

To get Axate to work on your site you need to add an Axate script to your web templates. This is what causes the Axate tab to appear on your pages.

With most publishers we start off by testing Axate on a staging version of their site (one they keep for internal development and testing and which isn’t available to the public). This allows us to test the integration with dummy accounts and data before we move to the live environment.

This should be identical to your live site in terms of architecture and code

If you don’t have a staging site, then select 10 to 15 old / obsolete articles on your live site that are unlikely to be the subject of Google searches.

Adding the script is easy, there are two parts that ideally will go into the body tag, somewhere above your article: the configuration and the JavaScript bundle.
```
<script async src="https://wallet-staging.agate.io/bundle.js"></script>

<div id="agate-wallet" 
 data-selector-premium-content=".premium" 
 data-selector-in-page-notice=".agate-notice">
</div>
```
*Please note that the script uses the word “agate” not “axate”*
