import axios, { AxiosInstance } from 'axios';
import { GetBlocksParams, GetBlocksResponse, GetTransactionsParams, GetTransactionsResponse } from './requester.type';

const getTransactionsParamsDefault: GetTransactionsParams = {
    before: 'latest',
    limit: 100,
};

const getBlocksParamsDefault: GetBlocksParams = {
    before: 'latest',
    limit: 100,
};

/**
 * The requester used to get Flashbots blocks and transactions.
 */
export class BlockRequester {
    /**
     * Axios client used to make requests.
     * @private
     */
    private client: AxiosInstance;

    /**
     * Flashbots Blocks base URL.
     * @private
     */
    private baseURL: string;

    /**
     * Builds a new requester with the given baseURL and timeout.
     * @param baseURL
     * @param timeout
     */
    constructor(baseURL = 'https://blocks.flashbots.net', timeout = 6000) {
        this.baseURL = baseURL;
        this.client = axios.create({
            baseURL: baseURL,
            timeout: timeout,
        });
    }

    /**
     * Retrieves the Flashbots transactions.
     * @param params Filter used to make the transaction request.
     */
    async GetTransactions(params = getTransactionsParamsDefault): Promise<GetTransactionsResponse> {
        const res = await this.client.get<GetTransactionsResponse>('/v1/transactions', {
            params: params,
        });

        return res.data;
    }

    /**
     * Retrieves the Flashbots blocks.
     * @param params Filter used to make the blocks request.
     */
    async GetBlocks(params = getBlocksParamsDefault) {
        const res = await this.client.get<GetBlocksResponse>('/v1/blocks', {
            params: params,
        });

        return res.data;
    }
}
