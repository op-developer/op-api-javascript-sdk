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

const paymentData = {
    amount: 10,
    subject: 'SDK test',
    currency: 'EUR',
    payerIban: 'FI7858400761900714',
    valueDate: '2017-11-14T22:59:34Z',
    receiverBic: 'string',
    receiverIban: 'FI1958400720090508',
    receiverName: 'string'
};

describe('Payments', () => {
    it('should fail with proper error message when x-api-key is missing', async () => {
        expect.assertions(1);
        const myHeaders = {...headers};
        delete myHeaders['x-api-key'];
        const myClient = new Client({ myHeaders });
        try {
            await myClient.postPaymentInitiate(paymentData)
        } catch(error) {
            expect(String(error)).toEqual("Error: Request failed with status code 400");
        }
    });

    it('Should initiate payment and confirm payment', done => {
        client
            .postPaymentInitiate(paymentData)
            .then(paymentInfo => {
                chai.expect(paymentInfo).to.have.property('paymentId');
                chai.expect(paymentInfo).to.have.property('amount');
                chai.expect(paymentInfo).to.have.property('payerIban');
                chai.expect(paymentInfo).to.have.property('receiverIban');
                return paymentInfo.paymentId;
            })
            .then(paymentId => {
                client
                    .postPaymentConfirm({ paymentId: paymentId })
                    .then(confirmInfo => {
                        chai
                            .expect(confirmInfo)
                            .to.have.property('paymentId');
                        chai
                            .expect(confirmInfo)
                            .to.have.property('amount');
                        chai
                            .expect(confirmInfo)
                            .to.have.property('payerIban');
                        chai
                            .expect(confirmInfo)
                            .to.have.property('receiverIban');
                        done();
                    });
            });
    });
});
