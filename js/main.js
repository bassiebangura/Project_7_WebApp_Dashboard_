/**************************************************************
                    WEB TRAFFIC  CHART                         
****************************************************************/
let WebTrafficWeeklyLabels = ['9-15', '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17'];
let WebTrafficWeeklyData = ['1', '8', '10', '10', '9', '7', '5', '6', '8', '3'];
//var rain_dataset = ['0', '0', '6', '32', '7', '2'];
const webTrafficChartCanvas = document.getElementById("web-traffic-chart__figure").getContext('2d');
let webTrafficChartConfig = {
    type: 'bar',
    data: {
        labels: WebTrafficWeeklyLabels,
        datasets: [{
            type: 'line',
            label: "Temperature (Celsius)",
            data: WebTrafficWeeklyData,
        }]
    }
};
let webTrafficChart = new Chart(webTrafficChartCanvas, webTrafficChartConfig);
/*$("#0").click(function() {
    var data = forecast_chart.config.data;
    data.datasets[0].data = temp_dataset;
    data.datasets[1].data = rain_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});
$("#1").click(function() {
    var chart_labels = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
    var temp_dataset = ['5', '3', '4', '8', '10', '11', '10', '9'];
    var rain_dataset = ['0', '0', '1', '4', '19', '19', '7', '2'];
    var data = forecast_chart.config.data;
    data.datasets[0].data = temp_dataset;
    data.datasets[1].data = rain_dataset;
    data.labels = chart_labels;
    forecast_chart.update();
});   **/
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