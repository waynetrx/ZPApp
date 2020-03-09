import React, { useState, useEffect, useRef } from 'react'
import Chart from "chart.js"
import { CSSProperties } from '@material-ui/core/styles/withStyles';


interface BarChartProps {
    data: Array<any>,
    title: string,
    color: string
}

const chartConfig = {
    type: 'bar',
    data: {
        labels: [] as any,
        datasets: [{
            label: 'University Count By Country',
            data: [] as any,
            backgroundColor: '#112233'
        }]
    }
}

const section: CSSProperties = {
    height: "100%"
  }


export const BarChart: React.FC<BarChartProps> = ({ data, title, color}) => {
    const chartContainer: React.RefObject<HTMLCanvasElement> = useRef(null)
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        if(chartContainer && chartContainer.current){
            if(data){
                chartConfig.data.labels = Object.keys(data)
                chartConfig.data.datasets[0].data = Object.values(data)
            }
            const newChartInstance = new Chart(chartContainer.current, chartConfig)
            setChartInstance(newChartInstance)
        }
    }, [chartContainer, data])

    
    return (
        <div style={section}>
            <canvas ref={chartContainer}/>
        </div>
    
    )
}