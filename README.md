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
