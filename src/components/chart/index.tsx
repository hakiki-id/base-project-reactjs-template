import React from "react"
import ReactApexChart from "react-apexcharts"


export default function ChartComponent() {
    const [data, setData] = React.useState({
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
      }
    )

    return (
        <div>
            <h1>Chart Component</h1>
            <ReactApexChart type="line" series={data.series} options={data.options} />
        </div>
    )
}