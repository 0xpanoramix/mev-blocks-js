import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
import { expect } from 'chai';
import { BlockRequester } from '../src/requester';

chai.use(chaiAsPromised);

describe('Get transactions', () => {
    it('Can get transactions with limit #1', async () => {
        const requester = new BlockRequester();

        const res = await requester.GetTransactions({
            limit: 1,
        });

        expect(res.transactions).length(1);
    });

    it('Can get transactions with limit #2', async () => {
        const requester = new BlockRequester();

        const res = await requester.GetTransactions({
            limit: 2,
        });

        expect(res.transactions).length(2);
    });

    it('Can get transactions without limit', async () => {
        const requester = new BlockRequester();

        const res = await requester.GetTransactions();

        expect(res.transactions).length(100);
    });

    it('Can not get transactions due to too high limit', async () => {
        const requester = new BlockRequester();

        await expect(
            requester.GetTransactions({
                limit: 10001,
            }),
        ).to.be.rejected;
    });
});
