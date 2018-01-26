import * as chai from 'chai';
import 'mocha';

import Client from '../';

const headers = {
    'x-request-id': 'x-request-id',
    'x-session-id': 'x-session-id',
    'x-authorization': 'b6910384440ce06f495976f96a162e2ab1bafbb4',
    'x-api-key': process.env.X_API_KEY
};
const client = new Client({ headers });

describe('Holdings', () => {
    it('Should return all holdings from user', done => {
        client.getHoldings().then(holdings => {
            chai.expect(holdings.data).to.have.property('id');
            chai.expect(holdings.data).to.have.property('fundHoldings');
            chai.expect(holdings.data).to.exist;
            done();
        });
    });
});
