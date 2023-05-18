import React from 'react';
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dp => dp.value)
    let totalMax = Math.max(...dataPointValues)
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar
                value={dataPoint.value}
                maxValue={totalMax}
                label={dataPoint.label}
                key={dataPoint.label} />)}
        </div>
    )
};

export default Chart;