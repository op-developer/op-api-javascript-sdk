import * as chai from 'chai';
import 'mocha';

import { Client } from '../';

const headers = {
    'x-request-id': 'x-request-id',
    'x-session-id': 'x-session-id',
    'x-authorization': 'b6910384440ce06f495976f96a162e2ab1bafbb4',
    'x-api-key': process.env.X_API_KEY
};
const client = new Client({ headers });

const subscription = {
    amount: 10,
    accountNumber: 'FI7858400761900714'
};

const accountId = '07618ad83d7c5d5f2db8908d33b6a9272c5e8d96';

describe('Funds', () => {
    it('Should get all funds', done => {
        client.getFunds().then(funds => {
            chai.expect(funds.data).to.be.an('array');
            chai
                .expect(funds.data)
                .to.have.nested.property('[0]')
                .with.property('isinCode');
            chai
                .expect(funds.data)
                .to.have.nested.property('[0]')
                .with.property('unitPrice');
            chai
                .expect(funds.data)
                .to.have.nested.property('[0]')
                .with.property('nameOfFund');
            done();
        });
    });
    it('Should post a subscription to fund', done => {
        client
            .postSubscription(subscription, 'FI0008800248')
            .then(subscriptionInfo => {
                chai
                    .expect(subscriptionInfo.data)
                    .to.have.property('subscription')
                    .and.to.have.nested.property('orderIdentifier');
                done();
            });
    });
    it('Should post a redemption to fund', done => {
        client
            .postRedemption(subscription, 'FI0008800248')
            .then(redemptionInfo => {
                chai
                    .expect(redemptionInfo.data)
                    .to.have.property('subscription')
                    .and.to.have.nested.property('redemptionIdentifier');
                done();
            });
    });
});
