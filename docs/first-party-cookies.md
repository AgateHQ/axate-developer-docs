# Important steps for the publishers to have

Control of your own DNS system, ease of creating new CNAMEs and pointing it to our servers.

If you have any blacklist/whitelist or firewalls that restrict domains internally, please consider them before implementing this!

# Axate Step-by-Step Guide to setup first party cookie servers 


Step #1 - On AWS, create a new certificate and validate it with the Publisher
============================================================================================

2. Login to AWS, locate AWS Management Console. 
3. 
4.1. Expand All Services, look for "Certificate Manager"

2.2. On Certificate Manager opened, look for "Request Certificate".

 2.2.1. Certificate type - "Request a public certificate"
 
 2.2.2. Enter Domain Name "*.publisher.com"
 
 2.2.3. Select validation method: "DNS validation - recommended"
 
 2.2.4. Click orange button "Request"
 
 2.2.5. Send the DNS CNAME settings to validate with the publisher.
 

Step #2 Create same entry on heroku pointing to the CNAME of publisher, axate-api.publisher.com
=============================================================================================

3. Login to Heroku
  3.1. Select Organization instead of Personal
  3.2. Select "agate-io"
  3.3. Add Domain 
      axate-api.publisher.com
      Example: axate-api.rotherhamadvertiser.co.uk
      Then DNS target value to provide to the publisher to create a subdomain to axate-api.publisher.com 

Step #4 Create cloudfront pointing our accounts page
=============================================================================================

4. Login to AWS, locate AWS Management Console. 
4.1. Expand All Services, look for "CloudFront"
4.2. Create 3 distributions, for each pointing to the different locations.

### LIVE EXAMPLE ###

![image](https://user-images.githubusercontent.com/22083512/176415866-ba9e75ff-4a52-4b35-a1da-2c3585936166.png)

4.3 Create a distribution
4.3.1 Origin Section
4.3.1.1 Enter the origin domain (this coressponds to the live example) or follow the table:

Domains

<table>
  <tr>
    <th>account.{publisher.com}</th>
    <td>account.axate.io.s3.eu-west-2.amazonaws.com</td>
  </tr>
  <tr>
    <th>accounts.{publisher.com}</th>
    <td>accounts.axate.io.s3-website.eu-west-2.amazonaws.com</td>
  </tr>
  <tr>
    <th>page-notices.{publisher.com}</th>
    <td>page-notices-production.s3.eu-west-2.amazonaws.com</td>
  </tr>
</table>

- 4.3.1.2. Scroll down to the settings section on the same page
- 4.3.1.3. Locate: Custom SSL certificate - optional
- 4.3.1.4. Select the corresponding publisher domain certificate, it will only show if it has been validated with the publisher from the previous steps.

IMPORTANT: (Default root object - optional) set this to "index.html" do not add "/" only "index.html". Otherwise, this will trigger an XML page with an error "Access Denied" 

![image](https://user-images.githubusercontent.com/22083512/194289938-f7cc42bf-d28c-45fb-b48c-c0502f3341c1.png)

- 4.3.2. Click orange button to "Create Distribution".
- 4.3.3. On sucessfully created a distribution link up it on the publisher's DNS.

accounts.publisher.com	CNAME	1 hour	 1234567x.cloudfront.net.





## Email format to follow for the publishers/it support of DNS system; 

Dear Publisher/Support,
 
Would you please help me add a CNAME record to my domain's DNS records?
 


Certificate validation TXT name
axate.musicomh.com

Certificate validation TXT value
ca3-564d91dc5e3s44b539a31ac17a326d560


Hostname pre-validation TXT name
_cf-custom-hostname.axate.musicomh.com

Hostname pre-validation TXT value
17a9se1fa-e464-4a5a-8f8c-0dff34a8712e

Please setup the following DNS on your side to enable first party cookies with Axate, as soon as you do let us know and we can send you a few more details.


Thank you



Step #5 Create Braintree apple-pay accounts pages certificates
=============================================================================================
Login to braintree > Settings > Processing
Update the new domains to have:


- accounts.publisher.com


## Developer Code-Only Updates for every new Domain

- Front-end: Update file.json with new publisher.com domains and account/page-notices url routes.
  - Wallet
  - Auth views
  - Page Notices
  - Account
 
- Back-end: Update registration/login controller, to account for new domains, update mailer links

- Login link on admin dashboard/ change password link 
- Email links 


- Update new domain on Google Analytics. 







Remove:


Step #1  Create a custom hostname
=========================================================================================

1. Go to Cloudflare https://www.cloudflare.com
2. Login with provided credentials
3. Select Domain "axate.io"
4. On the left side bar, select "SSL/TSL" feature.
5. Select "custom hostnames"
6. Create a custom hostname for publisher.com, pointing to axate.customers.axate.io
 
### Example ###

Add Custom Hostname 
- Enter the publisher domain and click "save"

![image](https://user-images.githubusercontent.com/22083512/176407582-e227c19d-3052-480e-940b-18e9b06e4185.png)

1.5. Validate TXT with publisher on their DNS system

Now take the DNS TXT fields provided on creation and send it over to the publisher to verify.
