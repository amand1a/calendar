import React, {FC, useState} from 'react';
import style from "./day.module.scss";
import 'chartjs-adapter-date-fns';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS,BarElement, CategoryScale, Legend, LinearScale, TimeScale, Title, Tooltip} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    TimeScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    indexAxis: "x" as const,

    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            align: 'end',
            anchor: 'end',
            backgroundColor: function (context: any) {
                return context.dataset.backgroundColor;
            },
            borderRadius: 4,
            color: 'white',
            formatter: function (value: any) {
                return value + ' (100%) ';
            }
        }
    },
    scales: {
        y: {
            type: 'time' as const,
            reverse:true,
            time: {
                displayFormats:{
                    hour: 'HH:mm' as any
                },
                tooltipFormat: 'HH:mm',
                unit:"hour" as const,


            },
            min: new Date('2021-09-18T00:00:00.000') as any,
            max: new Date('2021-09-19T00:00:00.000') as any,

        },
        x: {
            stacked: true
        }
}};


export const data = {
    labels: ["Day 1"],
    datasets: [{
        label: 'working',
        data: [
            [new Date('2021-09-18T04:00:00'), new Date('2021-09-18T06:30:00')],

        ],
        backgroundColor: "#ff7171",
    },
        {
            label: 'sleep',
            data: [
                [new Date('2021-09-18T07:00:00'), new Date('2021-09-18T12:00:00')],

            ],
            backgroundColor:"#b0caff",
        },
        {
            label: 'sleeping',
            data: [
                [new Date('2021-09-18T20:30:00'), new Date('2021-09-18T23:59:59')],

            ],
            backgroundColor: "#ffc17c",
        },
    ]
};



const Day:FC =()=>  {

    const [value, setValue] = useState(new Date())

    return(  <div  className={style.body}>

        <Bar  options={options} data={data} />
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div><div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div><div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>





        </div>
       );
};

export default Day;