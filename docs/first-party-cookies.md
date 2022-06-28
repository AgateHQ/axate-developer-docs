# Important steps for the publishers to have

Control of your own DNS system, ease of creating new CNAMEs and pointing it to our servers.


# Axate Step-by-Step Guide to setup first party cookie servers 

1. Go to Cloudflare, select domain axat.eio and on the right select SSL/TSL feature and then "custom hostnames" create custom hostname for publisher.com, pointing to axate.customers.axate.io

An example may look like this: axate-api.publisher.com	CNAME	1 hour	 axate.customers.axate.io.

--- Provided screenshots here .... 

![image](https://user-images.githubusercontent.com/22083512/176175970-f590125a-df4e-4326-a908-69d5fa8416e6.png)

----

2. Validate with publisher on their DNS system

SEND THE TXT validation from cloudflare 

After successful validation from the publisher's side continue on:

1. On AWS, create a new certificate and validate them with Publisher

--- Login to AWS - Search for Certificate Manager
-- Request a certificate
-- 
1.1 Request *.publisher.com

Then send the DNS CNAME settings to validate with the publisher.
--- 

3. Create same entry on heroku pointing to the CNAME of publisher, axate-api.publisher.com

????

Login to Heroku, select the organization repo instead personal, then go to agate-io app 


Add domain 

axate-api.{{publisher.com}}
Example: axate-api.rotherhamadvertiser.co.uk
Then DNS target value to provide to the publisher to create a subdomain to axate-api.publisher.com 



3. Create cloudfront pointing our accounts page

Go to AWS -> CloudFront -> and create the three different distributions for each poiting to the different locations.

![image](https://user-images.githubusercontent.com/22083512/176179750-13ea99fd-9b7d-4a9a-a9da-2ba6cc32bd4c.png)


4. link it up in publisher's DNS system.

accounts.publisher.com	CNAME	1 hour	 1234567x.cloudfront.net.

=== 

MUST DO
---- Create a dynamic code on the app side to change between domains. 



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

Also AWS certificatae validation values should go here


Thank you
