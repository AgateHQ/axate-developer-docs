# Selectively Showing Axate to specific users

To display Axate to only a select number of users, we reccomend dropping a cookie on your end, or any other feature you can quickly enable and mantain present.

An example flow would be, a user is presented with an Axate login URL such as `https://example.com/set_axate_cookie?url_from=example.com/` as soon as he hits the URL a cookie woudl be set, for example `axate_display=true` and the user would be redirected to either homepage of the site or the article he was on previously, via `url_from` parameters.

On every page a script similar to this would be checking the existence of such cookie and load the main Axate script to enable it's full functionalities.

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
