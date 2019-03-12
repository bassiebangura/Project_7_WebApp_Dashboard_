/**************************************************************
                     MOBILE USESER CHART
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

/*** Create new instance of chart using mobile users canvas and mobile users config object  ***/
let mobileUsersChart = new Chart(mobileUsersChartCanvas, mobileUsersChartConfig);