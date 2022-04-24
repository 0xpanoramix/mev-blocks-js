export interface GetTransactionsParams {
    before?: number | 'latest';
    limit?: number;
}

export interface GetBlocksParams extends GetTransactionsParams {
    block_number?: number;
    miner?: string;
    from?: string;
}

export interface Transaction {
    transaction_hash: string;
    tx_index: number;
    bundle_type: 'flashbots' | 'rogue' | 'miner_payout';
    bundle_index: number;
    block_number: number;
    eoa_address: string;
    to_address: string;
    gas_used: number;
    gas_price: string;
    coinbase_transfer: string;
    total_miner_reward: string;
    is_megabundle?: boolean;
}

export interface GetTransactionsResponse {
    latest_block_number: number;
    transactions: Transaction[];
}

export interface Blocks {
    block_number: number;
    miner: string;
    miner_reward: string;
    coinbase_transfers: string;
    gas_used: number;
    gas_price: string;
    transactions: Transaction[];
}

export interface GetBlocksResponse {
    latest_block_number: number;
    blocks: Blocks[];
}
