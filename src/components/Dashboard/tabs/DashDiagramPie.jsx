import ReactECharts from 'echarts-for-react';
import React from 'react';

const Pie = () => {
    let option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
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
                    {value: 1048, name: 'Amazon'},
                    {value: 735, name: 'Meta'},
                    {value: 580, name: 'Apple'},
                    {value: 484, name: 'Msft'},
                    {value: 300, name: 'Google'}
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