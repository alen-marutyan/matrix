import React from 'react';
import Chart from "react-apexcharts";

const ChartPie = () => {

    const options = {
        series: [44, 55, 41, 17, 15],
        chart: {
            type: 'donut',
        },
        legend: {
          show: false
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false,
        }
    };

    return (
        <div style={{display: "flex", alignItems: "center", width: "100%", justifyContent: "center"}}>
            <span style={{position: "absolute", fontSize: 30, color: "wheat", fontFamily: "arial", fontWeight: "bold"}}>50</span>
            <Chart width={150} height={150} options={options} series={[30,20,50]} type={'donut'}/>
        </div>
    );
};

export default ChartPie;
