import './ChartSection.css'
import { PieChart } from './PieChart';
import { BarChart } from './BarChart';

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
      for (let b in buff) {
        arr.push({ id: b, label: b, value: buff[b].toFixed(2)})
      }

      return arr
  }

  const data = profitArray()




  let barData = [
    {
      "weekday": "MON",
    },
    {
      "weekday": "TUE",
    },
    {
      "weekday": "WED",
    },
    {
      "weekday": "THU",
    },
    {
      "weekday": "FRI",
    },
    {
      "weekday": "SAT",
    },
    {
      "weekday": "SUN",
    }
  ]

  const findObjByDay = (strData) => {
    let str = strData.toUpperCase()
    console.log(str)
    for (let i=0; i<barData.length; i++) {
      if (barData[i]['weekday'] === str) {
        return barData[i]
      }
    }
  }

  const dataSetter = () => {
    ticketData.forEach((ticket) => {
      // console.log(ticket['date'].split(' ')[0])
      let ticketDay = ticket['date'].split(' ')[0]
      let foundObj = findObjByDay(ticketDay)
      if (foundObj[ticket['title']] === undefined) {
        foundObj[ticket['title']] = 1
      } else {
        foundObj[ticket['title']] += 1
      }
    })
    return barData
  }

  const dataBar = dataSetter()

  const keys = data.map((a) => a.id)


    return (
        <span id="chart-section-wrapper">
            <span>
                <BarChart data={dataBar} dataKeys={keys}/>
            </span>
            <span>
                <PieChart dataPie={data}/>
            </span>
        </span>
    )
}