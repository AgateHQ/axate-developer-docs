# Important steps for the publishers to have

Control of your own `DNS` system, ease of creating new `CNAME`s and pointing it to our servers.

If you have any blocklist / allowlist or firewalls that restrict domains internally, please consider them before implementing this!

# Axate Step-by-Step Guide to setup first party cookie servers 

## Step #1
### On `AWS`, create a new certificate and validate it with the Publisher

---

1. Login to `AWS`, locate `AWS` Management Console. 
2. Expand All Services, look for "Certificate Manager"
3. On Certificate Manager opened, look for "Request Certificate".
4. Certificate type - "Request a public certificate"
5. Enter Domain Name "`*.publisher.com`"
6. Select validation method: "`DNS` validation - recommended"
7. Click orange button "Request"
8. Send the `DNS CNAME` settings to validate with the publisher.
 
## Step #2 
### Create same entry on heroku pointing to the `CNAME` of publisher, `axate-api.publisher.com`

---

9. Login to Heroku
10. Select Organization instead of Personal
11. Select "`agate-io`"
12. Add Domain
13. `axate-api.publisher.com`
14. Example: `axate-api.rotherhamadvertiser.co.uk`
15. Then `DNS` target value to provide to the publisher to create a subdomain to `axate-api.publisher.com`

## Step #4 
### Create cloudfront pointing our accounts page

--- 

16. Login to `AWS`, locate AWS Management Console.
17. Expand All Services, look for "CloudFront"
18. Create 3 distributions, for each pointing to the different locations.

### Live Example

![image](https://user-images.githubusercontent.com/22083512/176415866-ba9e75ff-4a52-4b35-a1da-2c3585936166.png)

18. Create a distribution
19. Origin Section
20. Enter the origin domain (this coressponds to the live example) or follow the table:

### Domains

```
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
```

21. Scroll down to the settings section on the same page
22. Locate: Custom `SSL` certificate
23. Select the corresponding publisher domain certificate, it will only show if it has been validated with the publisher from the previous steps.

IMPORTANT: (Default root object - optional) set this to "`index.html`" do not add "`/`" only "`index.html`". Otherwise, this will trigger an `XML` page with an error "`Access Denied`" 

![image](https://user-images.githubusercontent.com/22083512/194289938-f7cc42bf-d28c-45fb-b48c-c0502f3341c1.png)

24. Click orange button to "Create Distribution".
25. On sucessfully created a distribution link up it on the publisher's DNS.

`accounts.publisher.com`	`CNAME`	1 hour	`1234567x.cloudfront.net`.

## Email format to follow for the publishers/it support of DNS system

```
Dear Publisher/Support,
 
Would you please help me add a `CNAME` record to my domain's `DNS` records?

Certificate validation `TXT` name
`axate.musicomh.com`

Certificate validation `TXT` value
`ca3-564d91dc5e3s44b539a31ac17a326d560`

Hostname pre-validation `TXT` name
`_cf-custom-hostname.axate.musicomh.com`

Hostname pre-validation `TXT` value
`17a9se1fa-e464-4a5a-8f8c-0dff34a8712e`

Please setup the following `DNS` on your side to enable first party cookies with Axate, as soon as you do let us know and we can send you a few more details.

Thank you

```

## Step #5 
### Create Braintree (PayPal) Apple-pay accounts pages certificates

---

Login to `braintree > Settings > Processing`
Update the new domains to have:

- `accounts.publisher.com`

## Developer Code-Only Updates for every new Domain

- Front-end: Update `domains.json` with new `publisher.com` domains and `account/page-notices` url routes, across the following projects
  - `wallet`
  - `accounts`
  - `page-notices`
  - `account`
 
- Back-end: Update `registration/login` controller, to account for new domains, update mailer links
- Example: `https://github.com/AgateHQ/agate/commit/236f22ddf8da728b17d53ed793c4bc80bf4081e3`

- Login link on admin dashboard/ change password link 
- Email links 

- Update new domain on Google Analytics. 

## Misc

As soon as the consent event occurs, and our partner is the one that’s being chosen, we need to react to it to disable the `GA` tracking

GDPR-Transparency-and-Consent-Framework/IAB Tech Lab - CMP API v2.md at master · InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework

If possible to use this `API`, or any similar to pass an api call, to

`GET` axate.io/api/do_not_track?uuid={unique_user_id_generated_at_that_instance}

We will handle this with care and disable for that device/user
