# op-api-javascript-sdk

[![Build Status](https://travis-ci.org/op-developer/op-api-javascript-sdk.svg?branch=master)](https://travis-ci.org/op-developer/op-api-javascript-sdk)

## Description

    Simple universal SDK for easy consumption of OP APIs.

## Installation

    npm install @op/api-sdk

## Usage

    import SDK from "@op/api-sdk";

    const options = {
        headers: {
            'x-api-key': 'your-api-key',
        }
    }

    const client = new SDK.Client(options)

See [requests](https://op-developer.fi/docs/#user-content-requests) for required headers.

You can set request options for client instance, and also for each request function call, which is useful because you can then use global instance of SDK client, with globally defined x-api-key, but still give x-authorization key per user of your app:

    const userOptions = {
        headers: {
            'x-authorization': userSession.getAuthorizationKey({bank: "OP"})
        }
    }

    const accounts = await client.getAllAccounts(userOptions);

For further reading, please see our API [documentation](https://op-developer.fi/docs/)


## Developing

### Running tests
- register at https://op-developer.fi/developers/register
- create an app that has access to all sandbox products (Mobility, Banking, etc)
- run tests with ```X_API_KEY=<your api key> npm run test```
