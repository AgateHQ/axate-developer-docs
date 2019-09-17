## Axate Troubleshooting

> Please note: these docs are actively in development, and are a work in progress.

### Axate Tab/Wallet Blocking important content

If the Axate tab appears over an important piece of content, such as a header of the website, or a sidebar with a piece of important information, you can easily adjust where Axate is sitting on the left site by modyfing the CSS that sets the Axate container, to do this, feel free to adjust this code on your side.

> TBC

### Axate callbacks

Axate uses callbacks to allow you inject special functionality or internal analytics in various pre-payment or post-payment callbacks, to acess these you can use the functions:

> TBC

### Third Party Cookies

Axate relies on two cookies, one functional and one for analytics purposes, which will be set during the account creation or login.

Users can opt-out of analytics cookies on their account page, or even block it by any AdBlocker or Tracking Blocking software on their browser, but they should allow the main functional cookie to be set.

That cookie is named `agate_cookie`, and comes from `https://account.agate.io` , it is an HttpOnly cookie and always Secure to prevent any other site using it for any potentially malicous purposes.
