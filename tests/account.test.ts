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

describe('Accounts', () => {
    it('Should return more than 1 account.', done => {
        client.getAllAccounts().then(accounts => {
            chai.expect(accounts.data).length.to.be.above(1);
            chai
                .expect(accounts.data)
                .to.have.nested.property('[0]')
                .with.property('accountId');
            done();
        });
    });
    it('Should return account with id "4270acb4db4a8b82c954ff93e5c81f2f38fd5a2f".', done => {
        client
            .getAccountById('4270acb4db4a8b82c954ff93e5c81f2f38fd5a2f')
            .then(account => {
                chai.expect(account.data).to.exist;
                chai
                    .expect(account.data)
                    .to.have.nested.property('[0]')
                    .with.property('accountId')
                    .to.equal('4270acb4db4a8b82c954ff93e5c81f2f38fd5a2f');
                done();
            });
    });
    it('Should return transactions from accountId "5189f37b439bd02462e196e206d0318f094fca82"', done => {
        client
            .getAccountTransactions('5189f37b439bd02462e196e206d0318f094fca82')
            .then(transactions => {
                chai.expect(transactions.data).length.to.be.above(0);
                chai
                    .expect(transactions.data)
                    .to.have.nested.property('[0]')
                    .with.property('transactionId');
                done();
            });
    });
    it('Should return transaction with id "77302960-fb2b-11e7-a10a-b5588c376575"', done => {
        client
            .getAccountsTransactionById(
                '5189f37b439bd02462e196e206d0318f094fca82',
                '77302960-fb2b-11e7-a10a-b5588c376575'
            )
            .then(transaction => {
                chai.expect(transaction.data).to.have.property('transaction');
                done();
            });
    });
});
