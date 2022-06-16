import axios from "axios"

import {useEffect,useLayoutEffect,useState}
from "react"

export const fetchTrendingCoins = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=7&page=1&sparkline=true"


export const ohlc =  "https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=php&days=365"

export const historicalData = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=php&from=1654203443&to=1654808243"


 export const orderbook = {
  method: 'GET',
  url: 'https://binance43.p.rapidapi.com/depth',
  params: {symbol: "BTCUSDT", limit: '20'},
  headers: {
    'X-RapidAPI-Key': 'fc1d0a119cmsh14dada74bd533f8p1ecab7jsn9e2a93c7dc5c',
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
  }
};