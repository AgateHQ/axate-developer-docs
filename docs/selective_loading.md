# Enabling Selective Display of Axate

To provide a tailored experience and display Axate only to a specific subset of users, we recommend implementing a cookie-based mechanism or any other feature that can be quickly enabled and maintained.

## Example Workflow: 
1. User Interaction: A user is directed to an Axate login URL, such as https://example.com/set_axate_cookie?url_from=example.com/.
2. Cookie Creation: Upon accessing the URL, a cookie is set (e.g., axate_display=true).
3. Redirection: The user is then redirected to either the homepage of the site or the article they were previously viewing, as determined by the url_from parameters.
4. Script Execution: On every page, a script checks for the existence of the axate_display cookie.
5. Loading Axate: If the cookie is found, the main Axate script is loaded, enabling its full functionalities.

## Implementation Details

Below is a JavaScript code snippet that can be used to check for the existence of the axate_display cookie and load the main Axate script accordingly:



```javascript
if (getCookie('axate_display')) {
  var script = document.createElement('script');
  script.src = 'https://wallet.axate.io/bundle.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);
}
```

An example of getCookie method can be seen here, most frameworks would have a simpler method

```javascript
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

```
