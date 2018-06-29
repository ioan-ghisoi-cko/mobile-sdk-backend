# mobile-sdk-backend

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


# Demo Backend for the frames-andoid SDK

This is a example of a backed server that you cna use to test the [frames-android](https://github.com/ioan-ghisoi-cko/frames-android) SDK.

## Instructions

Click the "Deploy to Heroku" button.


> You will need to place your Secret Key when doing the deployment. **Make sure** this secret key matched the public key that you are using in the frames-andoid SDK


## Endpoints
### /charge
> Here you simply need to do a POST request with the card token:

```json
{
  "token": "card_tok_XXXX"
}
```
The response will have the following form:
```json
{
  "id": "charge_test_XXXX",
  "responseMessage": "Approved",
  "status": "Authorised",
}
```

### /charge3d
> Here you simply need to do a POST request with the card token:

```json
{
  "token": "card_tok_XXXX"
}
```
The response will have the following form:
```json
{
  "url": "https://sandbox.checkout.com/api2/v2/3ds/acs/XXXXXX",
}
```

### /zerodollar
> Here you simply need to do a POST request with the card token:

This request will create a customer and add the card to that customer.
```json
{
  "token": "card_tok_XXXX"
}
```
The response will have the following form:
```json
{
  "customerId": "cust_XXXXXX"
}
```

### /cardlist
> Here you simply need to do a GET request.

The response will have the following form:
```json
{
  "cardList" : [
      {
        "paymentMethod" : "Visa",
        "last4" : "4242",
        "cardId" : "card_XXXX",
      },
        {
        "paymentMethod" : "Mastercard",
        "last4" : "9399",
        "cardId" : "card_XXXX",
      }
   ]
}
```
>This request will return a list of cards for a specific customer. For simplicity the customer id needed in the request is allready added. If you want to test with your own keys make sure you update the customer id in the **server.js** file, and redeploy.
