import urllib.request
token_pair = 'btc-usdt'
exchange = 'bnce'

months = [{"start_date": "2020-01-01", "end_date": "2020-01-31"},
          {"start_date": "2020-02-01", "end_date": "2020-02-31"},
          {"start_date": "2020-03-01", "end_date": "2020-03-31"},
          {"start_date": "2020-04-01", "end_date": "2020-04-31"}]

for month in months:
    url_params = f"instrument={token_pair}&instrument_class=spot&interval=1d&start_time={month['start_date']}T00:00:00.000Z&end_time={month['end_date']}T23:59:59.999Z&exchange={exchange}&commodity=trades&page_size=1000"
    urllib.request.urlretrieve(f"https://www.tokenanalyst.io/api/kaiko-historical-aggregates?{url_params}",
                               f"api/kaiko-historical-aggregates&{url_params}")
