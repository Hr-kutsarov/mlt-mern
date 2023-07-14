import './ChartSection.css'
import { Link } from 'react-router-dom'
import Chart from "react-apexcharts";
import { useEffect } from 'react';
import { Try } from './Try';

export function ChartSection({ticketData}) {

    const profitArray = () => {
        let buff = {};
        let arr = []
        ticketData.forEach((t) => {
            if (buff.hasOwnProperty(t.title)) {
                buff[t.title] = buff[t.title] + t.price
            } else {
                buff[t.title] = t.price
            }
        })

        for (let prop in buff) {
            arr.push({ id: prop , label: buff[prop], value: buff[prop]})
        }

        return arr.map((a) => a.value)
    }

    const pieOptions = {
      options: {
      },
      series: [12, 23],
      labels: ['asd', 'aa', 'aaa'],
    }

    const ss = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: ['asd'],
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };


    // const data = [
    //     {
    //         "id": "scala",
    //         "label": "scala",
    //         "value": 434,
    //         "color": "hsl(321, 70%, 50%)"
    //     },
    //     {
    //         "id": "java",
    //         "label": "java",
    //         "value": 268,
    //         "color": "hsl(304, 70%, 50%)"
    //     },
    //     {
    //         "id": "php",
    //         "label": "php",
    //         "value": 225,
    //         "color": "hsl(102, 70%, 50%)"
    //     },
    //     {
    //         "id": "css",
    //         "label": "css",
    //         "value": 370,
    //         "color": "hsl(292, 70%, 50%)"
    //     },
    // ]

    const data = profitArray()
    // useEffect(() => {
    //     asd()
    // })

    return (
        <span id="chart-section-wrapper">
            <span className='donut'>
                <Chart options={pieOptions.options} series={pieOptions.series} type="donut" width="380" />
            </span>
            <span>
                <Try data={data}/>
            </span>
        </span>
    )
}