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
        const myHeaders = { ...headers };
        delete myHeaders['x-api-key'];
        const myClient = new Client({ headers: myHeaders });
        try {
            await myClient.postPaymentInitiate(paymentData);
        } catch (error) {
            expect(String(error.errors[0].message)).toEqual('Invalid ApiKey');
        }
    });

    it('Should initiate payment and confirm payment', done => {
        client
            .postPaymentInitiate(paymentData)
            .then(paymentInfo => {
                expect(paymentInfo).toHaveProperty('paymentId');
                expect(paymentInfo).toHaveProperty('amount');
                expect(paymentInfo).toHaveProperty('payerIban');
                expect(paymentInfo).toHaveProperty('receiverIban');
                return paymentInfo.paymentId;
            })
            .then(paymentId => {
                client
                    .postPaymentConfirm({ paymentId: paymentId })
                    .then(confirmInfo => {
                        expect(confirmInfo).toHaveProperty('paymentId');
                        expect(confirmInfo).toHaveProperty('amount');
                        expect(confirmInfo).toHaveProperty('payerIban');
                        expect(confirmInfo).toHaveProperty('receiverIban');
                        done();
                    });
            })
            .catch(err => {
                console.log(err);
                done();
            });
    });
});
