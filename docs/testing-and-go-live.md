## Testing and Go Live

### Why this step exists

A staged rollout reduces risk and confirms premium flows before full site deployment.

## Stage 1: Test on Staging

### Do this

1. Add the staging script:

```html
<script async src="https://wallet-staging.axate.io/bundle.js"></script>
```

2. Mark a small test set of articles as premium.
3. Create test user journeys (register, top up, purchase, access premium content).
4. If needed, request test payment credentials from Axate.

### Verify

- Wallet tab appears on test pages.
- Premium notice appears only on premium pages.
- Successful purchase reveals premium content.
- Free articles continue to behave as before.

### Common failure and fix

- Premium content never reveals: verify premium selector and content API response.
- Wallet does not load: verify script host and environment URL.
- Layout shifts: move the script and wallet element so they initialize before heavy ad scripts.

## Stage 2: Pilot on Live (Limited Articles)

### Do this

1. Select 10 to 15 low-risk live articles (older or low-discovery content).
2. Apply live script only to the pilot set:

```html
<script async src="https://wallet.axate.io/bundle.js"></script>
```

3. Share pilot URLs with Axate to align live-side configuration.
4. Execute user acceptance testing on the pilot set.

### Verify

- Pilot pages load the live wallet script.
- Premium logic applies only to selected pilot pages.
- End-to-end purchase and content retrieval works on live domains.

## Stage 3: Full Go Live

### Do this

1. Move the live script into your global article template/header.
2. Keep premium tagging rules unchanged.
3. Launch at an agreed date and time with Axate support aligned.

### Verify

- Wallet appears on all article pages.
- Premium notice appears only where premium tagging exists.
- No regressions in page speed or ad rendering order.

### Common failure and fix

- Ads block article render: ensure Axate loads before heavy ad chains where possible.
- Inconsistent premium behavior across templates: confirm all article templates include the same wallet configuration.

## Done Criteria

Your integration is ready when:

- Staging and pilot UAT pass.
- Premium retrieval is secure and stable.
- Full rollout is active across all article templates.
