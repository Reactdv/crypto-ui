
import { createChart } from 'lightweight-charts';

import {fetchOhlc} from "./Api.js"


const [items] = fetchOhlc

const createChart = (chartData,size)=>{
  chartData.map((item,index)=> return item)
}

const chart = createChart(items,{width:400,height:300});

const lineSeries = chart.addLineSeries();


lineSeries.setData(fetchOhlc)
  