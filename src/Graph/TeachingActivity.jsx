import React from 'react';
import ReactApexChart from 'react-apexcharts';
const TeacherActivity = ()=>{
    const options = {
        series:[
        {
            name:'series1',
            data:[31,40,28,51,109,100]
        },
        {
            name:'series2',
            data:[11,32,45,34,52,41],
        },
        ],
        chart:{
            height:350,
            type:'area',
        },
        dataLabels:{
            enabled:false,
        },
        stroke:{
            curve:'smooth',
        },
        xaxis:{
            type:'datetime',
            categories:[
                '2018-09-19T00:00:00.000Z',
                '2018-09-19T01:30:00.000Z',
                '2018-09-19T02:30:00.000Z',
                '2018-09-19T03:30:00.000Z',
                '2018-09-19T04:30:00.000Z',
                '2018-09-19T05:30:00.000Z',
                '2018-09-19T06:30:00.000Z',
            ],
        },
        tooltip:{
            x:{
                format:'dd/MM/yy HH:mm',
            },
        },
    };
    return(
        <div id='chart'>
            <h1>Teaching Activity</h1>
            <ReactApexChart options={options} series={options.series} type='area' height={350} width={750} />
        </div>
    )
}

export default TeacherActivity;