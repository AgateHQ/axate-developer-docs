# Important steps for the publishers to have

Control of your own DNS system, ease of creating new CNAMEs and pointing it to our servers.


# Axate Step-by-Step Guide to setup first party cookie servers 

1. Go to Cloudflare, create custom hostname for publisher.com, pointing to axate.customers.axate.io

axate-api.publisher.com	CNAME	1 hour	 axate.customers.axate.io.

2. validate with publisher on their DNS system

3. Create same entry on heroku pointing to the CNAME of publisher, axate-api.publisher.com



4. On AWS, Crete new certificate and validate them.

1.1 Request *.publisher.com

3. Create cloudfront pointing our accounts page

4. link it up in publisher's DNS system.

accounts.publisher.com	CNAME	1 hour	 1234567x.cloudfront.net.

