import * as chai from 'chai';
import 'mocha';

import { Client } from '../';

const headers = {
    'x-request-id': 'x-request-id',
    'x-session-id': 'x-session-id',
    'x-authorization': 'b6910384440ce06f495976f96a162e2ab1bafbb4',
    'x-api-key': 'm9itG31Vm68B8fHhtKjszRCdt8WzC04j'
};
const client = new Client({ headers });

var transactionId: String;

describe('Accounts', () => {
    it('Should return more than 1 account.', done => {
        client.getAllAccounts().then(accounts => {
            let accountLength = JSON.parse(JSON.stringify(accounts)).length;
            chai.expect(accountLength).to.be.above(1);
            done();
        });
    });
    it('Should return account with id "4270acb4db4a8b82c954ff93e5c81f2f38fd5a2f".', done => {
        client
            .getAccountById('4270acb4db4a8b82c954ff93e5c81f2f38fd5a2f')
            .then(account => {
                let accountbyId = JSON.parse(JSON.stringify(account));
                chai.expect(accountbyId).to.exist;
                chai.expect(accountbyId.length).to.equal(1);
                chai
                    .expect(accountbyId[0]['accountId'])
                    .to.equal('4270acb4db4a8b82c954ff93e5c81f2f38fd5a2f');
                done();
            });
    });
    it('Should return transactions from accountId "5189f37b439bd02462e196e206d0318f094fca82"', done => {
        client
            .getAccountsTransactions('5189f37b439bd02462e196e206d0318f094fca82')
            .then(transactions => {
                let transactionsFromAccount = JSON.parse(
                    JSON.stringify(transactions)
                );
                chai.expect(transactionsFromAccount.length).to.be.above(0);
                chai.expect(transactionsFromAccount[0]['transactionId']).to
                    .exist;
                done();
            });
    });
    it('Should return transaction with id "77302960-fb2b-11e7-a10a-b5588c376575"', done => {
        client
            .getAccountsTransactionsById(
                '5189f37b439bd02462e196e206d0318f094fca82',
                '77302960-fb2b-11e7-a10a-b5588c376575'
            )
            .then(transaction => {
                let transactionById = JSON.parse(JSON.stringify(transaction));
                chai.expect(transactionById['transaction'][0]).to.exist;
                chai
                    .expect(transactionById['transaction'][0]['payer'])
                    .to.equal('Teppo Tulppu');
                done();
            });
    });
});
