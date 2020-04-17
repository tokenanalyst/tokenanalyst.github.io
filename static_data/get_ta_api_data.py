import aiohttp
import asyncio
import aiofiles
import itertools
from ta_api_variables import (
    VARIABLE_NAMES,
    SINGLE_METRICS,
    FLOW_METRICS,
)
from urllib import parse
import os

url = f"https://www.tokenanalyst.io/api/"
file_format = "csv"
from_date = '2020-01-01'
to_date = '2020-04-16'
api_key = os.getenv('TOKENANALYST_KEY')

params_list = []


async def generate_single_metric_list():
    for single_metric, params_list in SINGLE_METRICS.items():
        yield single_metric, params_list


async def generate_flow_metrics_list():
    for flow_metric, params_list in FLOW_METRICS.items():
        yield flow_metric, params_list


async def generate_param_list(params_list):
    param_list = []
    params_as_dict = {}
    for p in params_list:
        param_list.append(VARIABLE_NAMES[p])
    for element in itertools.product(*param_list):
        for i, p in enumerate(params_list):
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


async def save_single_metrics(session):
    async for single_metric, params_list in generate_single_metric_list():
        async for params in generate_param_list(params_list):
            api_params = params.copy()
            api_params.update({"metric": single_metric})
            api_params.update({"from_date": from_date})
            api_params.update({"to_date": to_date})
            response = await session.get(f"{url}single-metric", params=api_params)
            await save_file('single-metric', api_params, response)


async def save_flow_metrics(session):
    async for flow_metric, params_list in generate_flow_metrics_list():
        async for params in generate_param_list(params_list):
            api_params = params.copy()
            api_params.update({"from_date": from_date})
            api_params.update({"to_date": to_date})
            response = await session.get(f"{url}{flow_metric}", params=api_params)
            await save_file(flow_metric, api_params, response)


async def main():
    async with aiohttp.ClientSession() as session:
        await save_single_metrics(session)
        await save_flow_metrics(session)


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
