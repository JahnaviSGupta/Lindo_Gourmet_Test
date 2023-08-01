import ReactECharts from 'echarts-for-react';
import React from 'react';

const Pie = () => {
    let option = {
        title: {
            text: 'sales by category',
            left: 'center',
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: 'bottom',
            left: 'center'
        },
        series: [
            {
                name: 'Customer',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 1048, name: 'Gaming'},
                    {value: 735, name: 'Image & Video'},
                    {value: 580, name: 'Furnitures'},
                    {value: 484, name: 'Sport'},
                    {value: 300, name: 'Vehicles'}
                ]
            }
        ]
    };

  return (
    <div>
      <ReactECharts option={option} />
    </div>
  );
};
export default Pie;