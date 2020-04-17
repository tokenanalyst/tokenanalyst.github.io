SINGLE_METRICS = {
    'Volume': ['token', 'window'],
    'Transactions': ['token', 'window'],
    'Addresses': ['token', 'window'],
    'NewAddress': ['token', 'window'],
    'AddressBalances': ['token', 'window'],
    'Supply': ['token', 'window'],
    'Nvt': ['token', 'window'],
    'Fees': ['token', 'window'],
    'Utxo': ['token', 'window'],
    'Hashrate': ['token', 'window'],
    'HashrateBtc': ['token', 'window'],
    'Rewards': ['token', 'window'],
    'RewardsBtc': ['token', 'window'],
    'Sopr': ['token', 'window'],
    'ExchangeBalance': ['token', 'exchange', 'window'],
    'MinerHashrate': ['token', 'miner', 'window'],
    'MinerBalances': ['token', 'miner', 'window'],
    'MinerRewards': ['token', 'miner', 'window'],
}

FLOW_METRICS = {
    'exchange-flows': ['token', 'exchange', 'timeWindow'],
    'miner-flows': ['token', 'miner', 'timeWindow']
}


tokens = ['bat',
          'bch',
          'bnb',
          'bnt',
          'btc',
          'btcb',
          'bznt',
          'cvc',
          'dai',
          'etc',
          'eth',
          'fet',
          'ftm',
          'gnt',
          'gusd',
          'icx',
          'knc',
          'link',
          'loom',
          'ltc',
          'mana',
          'matic',
          'mith',
          'mkr',
          'nmr',
          'omg',
          'one',
          'pax',
          'rep',
          'rlc',
          'snt',
          'storj',
          'tkn',
          'tusd',
          'usdc',
          'usdsb',
          'usdt_erc20',
          'xmr',
          'xrp',
          'zec',
          'zrx',
          ]

windows = [
    '1h',
    '1d'
]
exchanges = [
    'binance',
    'bitfinex',
    'bittrex',
    'bitmex',
    'gemini',
    'deribit',
    'bitstamp',
    'poloniex',
    'huobi',
    'okex',
    'kraken',
    'kucoin'
]
miners = [
    'antpool',
    'btc-top',
    'btc-com',
    'bitfury',
    'f2pool',
    'huobi-pool',
    'poolin',
    'slushpool',
    'viabtc',
    '1thash%2658coin',
    'others',
    'unknown',
    'bitclubpool',
    'coinotron3',
    'dwarfpool1',
    'ethermine',
    'ethpool2',
    'f2pool2',
    'miningpoolhub',
    'nanopool',
    'sparkpool',
    'zhizhu-top',
]

directions = [
    'inflow',
    'outflow'
]

metrics = [
    'avg_age',
    'avg_value',
    'count',
    'median_age',
    'total_value',
    'weighted_avg_age',
    'supply_pct'
]

VARIABLE_NAMES = {
    'token': tokens,
    'window': windows,
    'direction': directions,
    'metric': metrics,
    'exchange': exchanges,
    'miner': miners,
    'timeWindow': windows,
}
