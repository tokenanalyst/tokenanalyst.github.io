import urllib.request
# token_pair = 'btc-usd'
# exchange = 'drbt'

pair_combos = [
    {
        "instrument": "bat-usd",
        "exchange": "bfnx"
    },
    {
        "instrument": "bat-usd",
        "exchange": "bnce"
    },
    {
        "instrument": "bat-usdt",
        "exchange": "bnce"
    },
    {
        "instrument": "bnt-usdt",
        "exchange": "bnce"
    },
    {
        "instrument": "btc-usd",
        "exchange": "btmx"
    },
    {
        "instrument": "btc-usd",
        "exchange": "krkn"
    },
    {
        "instrument": "btc-usd",
        "exchange": "stmp"
    },
    {
        "instrument": "btc-usdt",
        "exchange": "bfnx"
    },
    {
        "instrument": "btc-usdt",
        "exchange": "bnce"
    },
    {
        "instrument": "btc-usdt",
        "exchange": "btrx"
    },
    {
        "instrument": "btc-usdt",
        "exchange": "huob"
    },
    {
        "instrument": "btc-usdt",
        "exchange": "kcon"
    },
    {
        "instrument": "btc-usdt",
        "exchange": "okex"
    },
    {
        "instrument": "btc-usdt",
        "exchange": "polo"
    },
    {
        "instrument": "cvc-usdt",
        "exchange": "bnce"
    },
    {
        "instrument": "eth-usd",
        "exchange": "gmni"
    },
    {
        "instrument": "eth-usd",
        "exchange": "krkn"
    },
    {
        "instrument": "eth-usd",
        "exchange": "stmp"
    },
    {
        "instrument": "eth-usdt",
        "exchange": "bfnx"
    },
    {
        "instrument": "eth-usdt",
        "exchange": "bnce"
    },
    {
        "instrument": "eth-usdt",
        "exchange": "btrx"
    },
    {
        "instrument": "eth-usdt",
        "exchange": "huob"
    },
    {
        "instrument": "eth-usdt",
        "exchange": "kcon"
    },
    {
        "instrument": "eth-usdt",
        "exchange": "okex"
    },
    {
        "instrument": "eth-usdt",
        "exchange": "polo"
    },
    {
        "instrument": "fet-usdt",
        "exchange": "bnce"
    },
    {
        "instrument": "gnt-usd",
        "exchange": "bfnx"
    },
    {
        "instrument": "knc-usd",
        "exchange": "bfnx"
    },
    {
        "instrument": "link-usdt",
        "exchange": "bnce"
    },
    {
        "instrument": "loom-usd",
        "exchange": "bfnx"
    },
    {
        "instrument": "mana-usd",
        "exchange": "bfnx"
    },
    {
        "instrument": "omg-usdt",
        "exchange": "bnce"
    },
    {
        "instrument": "omni-btc",
        "exchange": "bfnx"
    },
    {
        "instrument": "omni-btc",
        "exchange": "polo"
    },
    {
        "instrument": "omni-usd",
        "exchange": "bfnx"
    },
    {
        "instrument": "rlc-usd",
        "exchange": "bfnx"
    },
    {
        "instrument": "snt-usd",
        "exchange": "bfnx"
    },
    {
        "instrument": "zil-usdt",
        "exchange": "bnce"
    },
    {
        "instrument": "zrx-usdt",
        "exchange": "bnce"
    }
]


month = {"start_date": "2020-03-01", "end_date": "2020-03-31"}

for pair in pair_combos:
    url_params = f"instrument={pair['instrument']}&instrument_class=spot&interval=1d&start_time={month['start_date']}T00:00:00.000Z&end_time={month['end_date']}T23:59:59.999Z&exchange={pair['exchange']}&commodity=trades&page_size=1000"
    filename = f"api/kaiko-historical-aggregates&commodity=trades&exchange={pair['exchange']}&instrument={pair['instrument']}&instrument_class=spot&interval=1d"
    urllib.request.urlretrieve(f"https://www.tokenanalyst.io/api/kaiko-historical-aggregates?{url_params}",
                            filename)
