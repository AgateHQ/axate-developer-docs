## Data Sharing API

Current API for retrieval of users data

email is md5 encrypted

```ruby

{
  id: "182",
  type: "publication_x_user",
  attributes: {
  uid: "4dQ",
  email: "9e6e83bcfd444fd114611c2300a52f7ce93",
  has_axate_wallet: false,
  registration_date: "2018-09-28T16:06:18.423+01:00",
  brand: 2,
  purchased_article_count: 0,
  last_purchased_date: "2019-02-20T15:44:51.978+00:00",
  brand_purchased_on: 2,
  number_passes: 0
  }
},
{
  id: "179",
  type: "publication_x_user",
  attributes: {
  uid: "ypv",
  email: "17be278d466e21227d5e51b02e45f04e1d",
  has_axate_wallet: false,
  registration_date: "2018-09-28T12:06:10.287+01:00",
  brand: 2,
  purchased_article_count: 0,
  last_purchased_date: "2018-12-03T15:27:25.300+00:00",
  brand_purchased_on: 2,
  number_passes: 0
  }
}
```

Current object being sent after every user interaction to specific publishers API

```ruby

    Email: "test@email.com",
    Publication: "XYZ",
    UID: "hashed_id",
    RegistrationDate: "2018-09-28T12:06:10.287+01:00",
    HasAxateWallet: "2018-09-28T12:06:10.287+01:00",
    PaymentDetails: {
      PurchasedArticleCount: "21",
      LastPurchasedDate: "2018-09-28T12:06:10.287+01:00",
      BrandPurchasedOn: "XYZ",
      NumberPasses: "2"
    }
        
```

