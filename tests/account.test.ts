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

describe('Accounts', () => {
    it('Should return more than 1 account.', done => {
        client.getAllAccounts(undefined, headers).then(accounts => {
            let accountLength = JSON.parse(JSON.stringify(accounts)).length;
            chai.expect(accountLength).to.be.above(1);
            done();
        });
    });
    it('Should return account with id "4270acb4db4a8b82c954ff93e5c81f2f38fd5a2f".', done => {
        client
            .getAccountById(
                '4270acb4db4a8b82c954ff93e5c81f2f38fd5a2f',
                undefined,
                headers
            )
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
    it('Should return transactions from accouuntId "5189f37b439bd02462e196e206d0318f094fca82"', done => {
        done();
    });
});
