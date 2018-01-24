# OP-developer SDK

## Installation

    npm install

## Usage

You need to use headers on every request. See [requests](https://op-developer.fi/docs/#user-content-requests)

    const SDK = require('path_to_root')

    const options = {
        headers: {
            'x-request-id': 'your-request-id',
            'x-session-id': 'your-session-id',
            'x-api-key': 'your-api-key',
            'x-authorization': 'your-authorization-token'
        }
    }

You can set request options to client instance.

    const client = new SDK.Client(options)

    client.getAllAccounts().then(accounts => {
            console.log(accounts.data);
        }).catch(error => {
            console.log(error);
        })

You can also set request options to each function individually

    const client = new SDK.Client()

    client.getAllAccounts(options).then(accounts => {
            console.log(accounts.data)
        }).catch(error => {
            console.log(error);
        }

For further reading, please see our API [documentation](https://op-developer.fi/docs/)
