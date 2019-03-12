/**************************************************************
                    WEB TRAFFIC  CHART                         
****************************************************************/
let webTrafficWeeklyLabels = ['9-15', '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17'];
let webTrafficWeeklyData = ['1', '8', '10', '10', '9', '7', '5', '6', '8', '3'];

let webTrafficMonthlyLabels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Nov', 'Dec'];
let webTrafficMonthlyData = ['1', '8', '10', '10', '9', '7', '5', '6', '8', '3', '6', '13', '6'];

const webTrafficChartCanvas = document.getElementById("web-traffic-chart__figure").getContext('2d');
let webTrafficChartConfig = {
    type: 'bar',
    data: {
        labels: webTrafficWeeklyLabels,
        datasets: [{
            type: 'line',
            label: "Temperature (Celsius)",
            data: webTrafficWeeklyData
        }]
    },
    options: {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        }
    }
};
const webTrafficChart = new Chart(webTrafficChartCanvas, webTrafficChartConfig);
console.log(webTrafficChart);
$("#monthly").click(function() {
    let data = webTrafficChart.config.data;
    data.labels = webTrafficMonthlyLabels
    data.datasets[0].data = webTrafficMonthlyData
    webTrafficChart.update();
});

/*
$("#hourly").click(function() {
    let oldData = webTrafficChart.config.data;
    console.log(oldData)
    //data.datasets[0].data = temp_dataset;
    //data.datasets[1].data = rain_dataset;
    //data.labels = chart_labels;
    //forecast_chart.update();
});  

*/

/**************************************************************
                     MOBILE USESERS CHART
***************************************************************/
let usersDeviceTypeLabels = ["Phone", "Tablets", "Desktop"]
let usersDeviceTypeData =[5, 10, 25]
let mobileUsersChartBackgroundColor =  ['rgba(255, 0, 0)', 'rgba(0, 255, 0)', 'rgba(0, 0, 255)']
let mobileUsersChartCanvas = document.getElementById("mobile-users-chart__figure").getContext('2d');
let mobileUsersChartConfig = {
    type: 'doughnut',
    data: {
        labels: usersDeviceTypeLabels,
        datasets: [{
            data: usersDeviceTypeData,
            backgroundColor: mobileUsersChartBackgroundColor
        }]
    },
    options: {
        legend: {
            position: 'right'
        }
    }
}
/*** Create new instance of chart using mobileUsersCanvas and mobileUsersChartConfig object  ***/
let mobileUsersChart = new Chart(mobileUsersChartCanvas, mobileUsersChartConfig);

/**************************************************************
                     DAILY TAFFIC CHART
***************************************************************/
let dayOfWeek = ["S", "M", "T", "W", "T", "F", "S"]
let dailyData =[50, 100, 75, 80, 60, 40, 90]
let dailyTrafficChartBackgroundColor =  ['rgb(0, 0, 255)', 
                                        'rgb(0, 0, 255)', 
                                        'rgb(0, 0, 255)', 
                                        'rgb(0, 0, 255)', 
                                        'rgb(0, 0, 255)', 
                                        'rgb(0, 0, 255)',
                                        'rgb(0, 0, 255)']
let dailyTrafficChartCanvas = document.getElementById("daily-traffic-chart__figure").getContext('2d');
/**** Options settings for dailyTrafficChartOption ****/
let dailyTrafficChartOptionsSettings = {
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 20
            }
        }],
        xAxes: [{
            barPercentage: 0.6
        }]
    }
}
let dailyTrafficChartConfig = {
    type: 'bar',
    data: {
        labels: dayOfWeek,
        datasets: [{
            data: dailyData,
            backgroundColor: dailyTrafficChartBackgroundColor
        }]
    },
    options: dailyTrafficChartOptionsSettings
}
/*** Create new instance of chart using dailyTrafficChartCanvas and dailyTrafficChartConfig object  ***/
let dailyTrafficChart = new Chart(dailyTrafficChartCanvas, dailyTrafficChartConfig);