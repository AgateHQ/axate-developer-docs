# Selectively Showing Axate to specific users

To display Axate to only a select number of users, we reccomend dropping a cookie on your end, or any other feature you can quickly enable and mantain present.


```
if (getCookie('axate_display')) {
  var script = document.createElement('script');
  script.src = 'https://wallet.axate.io/bundle.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);
}
```

An example of getCookie method can be seen here, most frameworks would have a simpler method

```
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

```
