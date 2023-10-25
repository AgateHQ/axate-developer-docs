## Wordpress API Integration

Current Wordpress versions come with a REST API enabled by default, and can be consumed easily by any developer application, such as Axate.

Let’s take for example this article,
 - https://en-gb.wordpress.org/2019/01/15/glasgow-meetup-1st-quarter-2019/
 
If this article is behind a paywall, the main content would be hidden from the user, and Axate would still be able to access it via an API.

We usually find the main API on the paths such as: 
  - https://en-gb.wordpress.org/wp-json/wp/v2/


The previous example post would be https://en-gb.wordpress.org/wp-json/wp/v2/posts/1030 Which can also be retrieved the same way by using its slug, since this is the one most likely to be
visible to the reader/user.

https://en-gb.wordpress.org/wp-json/wp/v2/posts?slug=glasgow-meetup-1st-quarter-2019 

When an Axate user pays for an article, we would fire a call to the API as above, and retrieve the content of the article so that we can replace the Paywall/Agate Notice section.

Since you would not want a tech-savvy user to have access to this API publicly, we recommend setting up basic authentication, an example plugin such as ( https://github.com/WP-API/Basic-Auth ) would be enough to secure your API with a password and username.


One middle step is to ensure, the content is not present on the Template that is responsible for printing it out to normal users. 
That means within the single.php we will remove the wp-content tag that 


There can be further steps to secure API access, so that it can be private only to Agate servers and therefore guarantee that only a request from us would be treated as a condition to reveal content, but these require custom development, feel free to get in touch with us and we can always work on a solution together.
