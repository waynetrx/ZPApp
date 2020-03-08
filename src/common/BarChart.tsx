import React, { useState, useEffect } from 'react';
import Chart from "chart.js";


interface BarChartProps {
    Data?: Array<number>,
    ChartRef?: React.RefObject<HTMLCanvasElement>
}

export const BarChart: React.FC<BarChartProps> = ({ Data, ChartRef}) => {
    const [state, setState] = useState([])

    useEffect(() => {
        console.log("Component did mount executed")
    })

    const setCountryUniversityCount = data => {
        setState(data)
    }

    return (
    <canvas ref={ChartRef} />
    )
}