// GraficoPastel.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from 'react-chartjs-2';

function GraficoPastel({ data }) {
    const chartData = {
        labels: data.map(item => item.label),
        datasets: [
            {
                label: 'Distribución',
                data: data.map(item => item.value),
                backgroundColor: data.map(item => item.color),
                borderColor: 'rgba(255, 255, 255, 0.8)',
                borderWidth: 2,
            },
        ],
    };
    return (
        <Pie data={chartData} />
    );
}