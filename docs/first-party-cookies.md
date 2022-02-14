## Configure CNAMEs

1. cloudflare, create custom hostname

axate-api.publisher.com	CNAME	1 hour	 axate.customers.axate.io.

3. validate with dns on publisher side
4. create dns on heroku pointing to the cname of publisher

AWS

1. Validate certiifcate with domain of publisher

1.1 Request *.publisher.com for potential subdomains

3. Create cloudfront pointing our accounts page

4. link it up in publisher's dns system.

accounts.publisher.com	CNAME	1 hour	 1234567x.cloudfront.net.

