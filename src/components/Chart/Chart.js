import React from 'react';
import ChartBar from './ChartBar';
import './Chart.scss';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((chartData) => (
        <ChartBar
          key={chartData.label}
          value={chartData.value}
          maxValue={totalMax}
          label={chartData.label}
        />
      ))}
    </div>
  );
};

export default Chart;
