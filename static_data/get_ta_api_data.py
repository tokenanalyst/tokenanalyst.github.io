import aiohttp
import asyncio
import aiofiles
import itertools
from ta_api_variables import (
    VARIABLE_NAMES,
    ACTIVE_PARAMS,
)
from urllib import parse
import os

api_name = 'token_price_usd_window_historical'
url = f"https://api.tokenanalyst.io/analytics/private/v1/{api_name}/last"
file_format = "csv"
api_key = os.getenv('TOKENANALYST_KEY')

params_list = []


async def generate_api_names():
    for api_name in ACTIVE_PARAMS.keys():
        yield api_name


async def generate_param_list(api_name):
    active_params = ACTIVE_PARAMS[api_name]
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
            file_suffix += f'_{key}_{value}'
        filename = f'temp/{api_name}{file_suffix}'
        async for data in response.content.iter_chunked(chunk_size):
            async with aiofiles.open(filename, "ba") as f:
                await f.write(data)
        print(f"Saved file {filename}")
    except aiohttp.client_exceptions.ClientResponseError:
        print(f"{params} not on API")

async def main():
    async for api_name in generate_api_names():
        async with aiohttp.ClientSession() as session:
            async for params in generate_param_list(api_name):
                print(api_name, params)
                api_params = params.copy()
                api_params.update({"key": api_key})
                api_params.update({"format": file_format})
                response = await session.get(url, params=api_params)
                await save_file(api_name, params, response)
 
if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())