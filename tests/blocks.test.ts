import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
import { expect } from 'chai';
import { BlockRequester } from '../src/requester';

chai.use(chaiAsPromised);

describe('Get blocks', () => {
    it('Can get blocks with limit #1', async () => {
        const requester = new BlockRequester();

        const res = await requester.GetBlocks({
            limit: 1,
        });

        expect(res.blocks).length(1);
    });

    it('Can get blocks with limit #2', async () => {
        const requester = new BlockRequester();

        const res = await requester.GetBlocks();

        expect(res.blocks).length(100);
    });

    it('Can not get blocks due to too high limit', async () => {
        const requester = new BlockRequester();

        await expect(
            requester.GetBlocks({
                limit: 10001,
            }),
        ).to.be.rejected;
    });
});
