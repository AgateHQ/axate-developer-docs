# Integrating with Axate

This page is the fastest path to a working Axate integration.

## Quickstart (15 Minutes)

### Why this step exists

Axate needs one script and one configuration element to render the wallet and control premium content behavior.

### Prerequisites

- A staging site (preferred) or a small test set of low-traffic live articles (10 to 15)
- Access to your page template or CMS article template
- A CSS selector for premium content (example: `.premium`)
- A CSS selector for in-page notice placement (example: `.axate-notice`)

### Do this

1. Add this snippet to your article template, near article content:

```html
<link rel="preload" href="https://wallet-staging.axate.io/bundle.js" as="script">
<script async src="https://wallet-staging.axate.io/bundle.js"></script>

<div
  id="axate-wallet"
  data-selector-premium-content=".premium"
  data-selector-in-page-notice=".axate-notice"
></div>
```

2. Mark premium article content with your premium selector:

```html
<div class="premium">
  Premium article content goes here.
</div>
<div class="axate-notice"></div>
```

3. Leave non-premium articles without the premium selector.

### Verify

- The Axate wallet tab appears on page load.
- Premium content is recognized only where the premium selector exists.
- The in-page notice renders where `.axate-notice` is placed.
- The page remains non-blocking while loading (script uses `async`).

### Common failure and fix

- Wallet tab does not appear: verify script URL and that the script is present on the rendered page.
- Premium article is not detected: confirm the selector in `data-selector-premium-content` matches the article markup exactly.
- Notice appears in wrong place: move `.axate-notice` element to the desired location in the template.

## Choose Your Path

- Standard sites: continue to [Providing an API for Content Retrieval](./content-api.md)
- WordPress sites: continue to [Using WP-REST API](./wordpress-api.md)
- AMP sites: continue to [AMP Integration](./amp/amp-integration.md)

## Optional Configuration

Add these attributes to `#axate-wallet` when needed:

```html
<div
  id="axate-wallet"
  data-selector-premium-content=".premium"
  data-selector-article-content=".article"
  data-selector-in-page-notice=".axate-notice"
  data-selector-disable-hide="true"
  data-selector-pricing-variant="2"
  data-selector-tags="sports,athletics,football"
  data-selector-must-pay="false"
  data-selector-subscriber-only="false"
></div>
```

- `data-selector-disable-hide="true"`: keeps Axate from hiding premium content automatically, useful if your own paywall already handles hiding.

## WordPress Example

If your content model uses tags, this example wraps premium-tagged posts and injects the wallet:

```php
function add_content_after($content) {
  if (has_tag('premium')) {
    $before_content = '<div class="premium">';
    $after_content = '</div><div class="axate-notice"></div>';
    return $before_content . $content . $after_content;
  }

  return $content;
}
add_filter('the_content', 'add_content_after');

function add_axate() {
  ?>
  <script async src="https://wallet.axate.io/bundle.js"></script>
  <div id="axate-wallet" data-selector-premium-content=".premium" data-selector-article-content=".article" data-selector-in-page-notice=".axate-notice"></div>
  <?php
}
add_action('wp_head', 'add_axate');
```

## Next Step

1. [Providing an API for Content Retrieval](./content-api.md)
2. [Using WP-REST API (WordPress)](./wordpress-api.md)
3. [Incorporating Subscriptions](./subscriptions-api.md)
