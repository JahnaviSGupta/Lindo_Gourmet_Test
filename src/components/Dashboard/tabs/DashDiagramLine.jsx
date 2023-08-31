import ReactECharts from 'echarts-for-react';
import React from 'react';

const Line = () => {
	const option = {
		title: {
			text: 'sales over a week',
			left: 'center',
		},
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		},
		yAxis: {
			type: 'value',
		},
		series: [
			{
				data: [820, 932, 901, 934, 1290, 1330, 1320],
				type: 'line',
				smooth: true,
			},
		],
	};

	return (
		<div>
			<ReactECharts option={option} />
		</div>
	);
};
export default Line;
