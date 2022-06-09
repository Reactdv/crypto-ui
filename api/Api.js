import axios from "axios"



export const fetchTrendingCoins = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=7&page=1&sparkline=true"