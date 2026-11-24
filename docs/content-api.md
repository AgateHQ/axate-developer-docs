## Provide API Access for Premium Content

> If you are on WordPress, go directly to [Using WP-REST API](./wordpress-api.md).

### Why this step exists

Without API retrieval, users can sometimes bypass client-side hiding. API retrieval is the secure integration path because Axate fetches premium content from your backend after a valid purchase flow.

### Do this

1. Expose a JSON endpoint that returns full premium content for a single article.
2. Ensure the endpoint can be queried by article ID or slug.
3. Protect the endpoint with authentication (for example basic auth, token auth, or allowlist controls).
4. Share endpoint format and auth requirements with the Axate team.

Example endpoint patterns:

- `https://yourpublication.com/api/v1/posts?id=12`
- `https://yourpublication.com/api/v1/posts?slug=story-slug`

Example response shape:

```json
{
	"id": 12,
	"slug": "story-slug",
	"title": "Story Title",
	"content": "<p>Full premium HTML content</p>",
	"updated_at": "2026-07-23T09:30:00Z"
}
```

### Verify

- An authenticated request to the endpoint returns premium article body content.
- An unauthenticated request is rejected.
- Returned `content` matches the article body expected on page.
- Response time is acceptable for production use.

### Common failure and fix

- Endpoint returns excerpt only: update API serializer to include full body HTML.
- Endpoint is publicly accessible: enforce authentication before go-live.
- Slug lookups fail: confirm slug normalization and routing behavior in your CMS.
- HTML is sanitized too aggressively: allow required article tags while keeping security controls.

## Light Integration (Fallback)

If you cannot expose an API yet, you can run a light integration that hides premium content client-side.

- Demo approach: https://codepen.io/justalex/pen/erZGqm

This is faster to deploy but less secure than API retrieval. Use it only as a temporary path.

## Next Step

1. [Incorporating Subscriptions](./subscriptions-api.md)
