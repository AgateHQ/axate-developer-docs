### Setup or provide API access to retrieve content


> If you’re on WordPress, WP-REST JSON Api would be that API, you can go directly to [Using WP-REST API](./wordpress-api.md)


This step is to prevent tech-savvy users from being able to circumvent Axate. 

We do this by accessing your content behind the scenes by you providing us with an API. 

This part is a little more technical, please just contact us if you need help.

This API allows us to request the premium content of the article, which is requested by the client-side JavaScript and served, via Axate servers only. 

If you already have an API ready to serve articles via JSON feel free to provide the details.

The “premium” tag therefore specifies the content that is served by the API. 

An example of this would be requesting an article through its id: https://yourpublication.com/api/v1/posts?id=12

#### Light Integration

If you are unable to provide an API, you can implement a “light” version of Axate, using this codepen's simple CSS trick, to hide the premium content.

* https://codepen.io/justalex/pen/erZGqm

However, although this is simpler, we don’t recommend it because it can potentially be circumvented by savvy users – and for most publishers the API method above is easy.

In both these steps, we will work with you to make Axate work with your system and API without any issues


### Next Steps

4. [Incorporating Subscribtions](./subscriptions-api.md)
