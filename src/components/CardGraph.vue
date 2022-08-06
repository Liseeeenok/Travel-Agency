<template>
    <div class="container__graph">
        <div>
            <Line :chart-data="createdChartData()" :chart-options="chartOptions" :width="800"/>
        </div>
    </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, Filler} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, Filler)
export default {
    components: {
        Line,
    },
    data() {
        return {
            myFoo: 'world',
            testArr: [-100, 2, 3],
            chartData: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                datasets: [{
                    radius: 5,
                    pointStyle: 'circle',
                    label: 'Test',
                    data: [1, 3, 4, 2, 3, 1, 4, 5, 2],
                    fill: true,
                    pointBackgroundColor: 'rgba(0, 0, 0, 0.5)',
                    BackgroundColor: 'rgba(75, 192, 92, 0.5)',
                    borderColor: 'rgb(75, 192, 92)',
                    pointHoverRadius: '10',
                }]
            },
            chartOptions: {
                scales: {
                    
                    y: {
                        beginAtZero: false, //Начинать ли график с 0
                    }
                },
                responsive: true,
            }
        }
    },
    methods: {
        createdChartData() {
            const newChartData = this.chartData;
            const minArg = Math.min(...this.chartData.datasets[0].data);
            const maxArg = Math.max(...this.chartData.datasets[0].data);
            this.chartOptions.scales.y.min = minArg - 1;
            this.chartOptions.scales.y.max = maxArg + 1;
            return newChartData;
        }
    }
}
</script>

<style scoped>
.container__graph {
    margin-bottom: 100px;
}
</style>