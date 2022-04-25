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

=== 

Dear 'Publisher',

Please setup the following DNS on your side to enable first party cookies with Axate, as soon as you do let us know and we can send you a few more details.

Certificate validation TXT name
axate.musicomh.com

Certificate validation TXT value
ca3-564d91dc5e344b539a31ac17a326d560



Hostname pre-validation TXT name
_cf-custom-hostname.axate.musicomh.com

Hostname pre-validation TXT value
17a9e1fa-e464-4a5a-8f8c-0dff34a8712e


Thank you
