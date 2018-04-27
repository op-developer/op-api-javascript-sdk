import { Client } from '../';

const headers = {
    'x-authorization': 'b6910384440ce06f495976f96a162e2ab1bafbb4',
    'x-api-key': process.env.X_API_KEY
};
const client = new Client({ headers });

describe('Accounts', () => {
    it('Should return more than 1 account.', done => {
        client.getAllAccounts().then(accounts => {
            expect(accounts.length).toBeGreaterThan(1);
            expect(accounts[0]).toHaveProperty('accountId');
            expect(accounts[0]).toHaveProperty('iban');
            expect(accounts[0]).toHaveProperty('accountName');
            expect(accounts[0]).toHaveProperty('balance');
            done();
        });
    });
    it('Should return account with id "4270acb4db4a8b82c954ff93e5c81f2f38fd5a2f".', done => {
        client
            .getAccountById('4270acb4db4a8b82c954ff93e5c81f2f38fd5a2f')
            .then(account => {
                console.log(account);
                expect(account).toBeDefined();
                expect(account[0]).toBeDefined();
                expect(account[0]['accountId']).toBeDefined();
                expect(account[0]['accountId']).toEqual(
                    '4270acb4db4a8b82c954ff93e5c81f2f38fd5a2f'
                );
                done();
            });
    });
    it('Should return transactions from accountId "adee9e7d34d8ffb3a3ef96dda5be37a63673b23c"', async () => {
        const transactions = await client.getAccountTransactions(
            'adee9e7d34d8ffb3a3ef96dda5be37a63673b23c'
        );
        console.log(
            'Transactions from account with id adee9e7d34d8ffb3a3ef96dda5be37a63673b23c: ',
            transactions
        );
        expect(transactions[0]).toBeDefined();
        expect(transactions[0]).toHaveProperty('transactionId');
        const transactionId = transactions[0].transactionId;
        const transaction = await client.getAccountsTransactionById(
            'adee9e7d34d8ffb3a3ef96dda5be37a63673b23c',
            transactionId
        );
        console.log(
            `Transaction with transactionId ${
                transaction.transaction[0].transactionId
            }`,
            transaction
        );
        expect(transaction).toHaveProperty('transaction');
        expect(Array.isArray(transaction.transaction)).toBe(true);
        const receivedTransaction = transaction.transaction[0];
        expect(receivedTransaction).toHaveProperty(
            'transactionId',
            receivedTransaction.transactionId
        );
        expect(receivedTransaction).toHaveProperty(
            'accountId',
            'adee9e7d34d8ffb3a3ef96dda5be37a63673b23c'
        );
    });
});
