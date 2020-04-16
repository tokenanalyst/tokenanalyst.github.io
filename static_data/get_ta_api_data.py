import aiohttp
import asyncio
import aiofiles
import itertools
from ta_api_variables import (
    VARIABLE_NAMES,
    ACTIVE_PARAMS,
    SINGLE_METRICS,
)
from urllib import parse
import os

url = f"https://www.tokenanalyst.io/api/single-metric/"
file_format = "csv"
from_date = '2020-01-01'
api_key = os.getenv('TOKENANALYST_KEY')

params_list = []


async def generate_single_metric_list():
    for single_metric in SINGLE_METRICS.keys():
        yield single_metric


async def generate_param_list(metric_name):
    active_params = SINGLE_METRICS[metric_name]
    param_list = []
    params_as_dict = {}
    for p in active_params:
        param_list.append(VARIABLE_NAMES[p])
    for element in itertools.product(*param_list):
        for i, p in enumerate(active_params):
            params_as_dict.update({p: element[i]})
        yield params_as_dict


async def fetch(session, url):
    async with session.get(url) as response:
        return await response


async def save_file(api_name, params, response):
    chunk_size = 1024
    try:
        response.raise_for_status()
        file_suffix = ''
        for key, value in params.items():
            file_suffix += f'&{key}={value}'
        filename = f'api/{api_name}{file_suffix}'
        async for data in response.content.iter_chunked(chunk_size):
            async with aiofiles.open(filename, "ba") as f:
                await f.write(data)
        print(f"Saved file {filename}")
    except aiohttp.client_exceptions.ClientResponseError:
        print(f"{params} not on API")


async def main():
    async with aiohttp.ClientSession() as session:
        async for single_metric in generate_single_metric_list():
            async for params in generate_param_list(single_metric):
                api_params = params.copy()
                api_params.update({"metric": single_metric})
                api_params.update({"from_date": from_date})
                response = await session.get(url, params=api_params)
                await save_file('single-metric', api_params, response)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
