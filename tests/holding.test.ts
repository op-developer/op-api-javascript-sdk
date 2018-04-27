import { Client } from '../';

const headers = {
    'x-authorization': 'b6910384440ce06f495976f96a162e2ab1bafbb4',
    'x-api-key': process.env.X_API_KEY
};
const client = new Client({ headers });

describe('Holdings', () => {
    it('Should return all holdings from user', done => {
        client.getHoldings().then(holdings => {
            expect(holdings).toBeDefined();
            expect(holdings).toHaveProperty('id');
            expect(holdings).toHaveProperty('sumOfAllHoldings');
            expect(holdings).toHaveProperty('fundHoldings');
            done();
        });
    });
});
