(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + "").replace(",", "").replace(" ", "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

var labelArr = [
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
  "19:21:18",
];
const createLabels = (chart) => {
  chart.data.labels.shift();

  chart.data.labels.push(
    new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds()
  );
};

var arr;

const fetchData = () => {
  fetch("/getData", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((datas) => {
      arr = [...datas];
    })
    .catch((err) => console.error(err));
};

let tempData = [
  8, 7, 6, 8, 10, 12, 11, 10, 12, 12, 8, 10, 4, 12, 15, 12, 16, 20, 29, 30,
];
const getTemp = (temp) => {
  // arr.forEach((data) => {
  //   temp.push(data.temperature);
  // });
  tempData.shift();
  tempData.push(temp);
  // tempText = temp[19].toString();
  document.getElementById("temp").textContent = tempData[19] + "°C";
  document.documentElement.style.setProperty("--widthTemp", tempData[19] + "%");
  return tempData;
};

let humData = [
  40, 30, 20, 15, 50, 46, 10, 15, 18, 19, 40, 30, 20, 15, 50, 46, 10, 15, 18,
  19,
];
const getHum = (humid) => {
  // arr.forEach((data) => {
  //   hum.push(data.humidity);
  // });
  humData.shift();
  humData.push(humid);
  document.getElementById("hum").textContent = humData[19] + "%";
  document.documentElement.style.setProperty("--widthHum", humData[19] + "%");
  return humData;
};

let lightData = [
  70, 80, 75, 76, 50, 60, 10, 23, 15, 56, 70, 80, 75, 76, 50, 60, 10, 23, 15,
  56,
];
const getLight = (light) => {
  // arr.forEach((data) => {
  //   light.push(data.light);
  // });
  lightData.shift();
  lightData.push(light);
  document.getElementById("light").textContent = lightData[19] + "Lux";
  document.documentElement.style.setProperty(
    "--widthLight",
    lightData[19] + "%"
  );
  return lightData;
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var loop = setInterval(() => {
  // fetchData();
  let temp = getRandomNumber(1, 100);
  let humid = getRandomNumber(1, 100);
  let light = getRandomNumber(1, 100);

  var ctx1 = document.getElementById("myAreaChart1");
  var myLineChart1 = new Chart(ctx1, {
    type: "line",
    data: {
      labels: labelArr,
      datasets: [
        {
          label: "Temperature",
          lineTension: 0.3,
          backgroundColor: "rgba(0,0,0,0.01",
          borderColor: "rgba(234, 43, 43, 1)",
          borderWidth: 2,
          pointRadius: 0,
          pointBackgroundColor: "rgba(234, 43, 43, 1)",
          pointBorderColor: "rgba(234, 43, 43, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(234, 43, 43, 1)",
          pointHoverBorderColor: "rgba(234, 43, 43, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          data: getTemp(temp),
          yAsixID: "yLeft",
        },
        {
          label: "Humdity",
          lineTension: 0.3,
          backgroundColor: "rgba(0,0,0,0.01",
          borderColor: "rgba(45, 236, 148, 1)",
          pointRadius: 0,
          borderWidth: 2,
          pointBackgroundColor: "rgba(45, 236, 148, 1)",
          pointBorderColor: "rgba(45, 236, 148, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(45, 236, 148, 1)",
          pointHoverBorderColor: "rgba(45, 236, 148, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          data: getHum(humid),
          yAxisID: "left",
        },
        {
          label: "Light",
          lineTension: 0.3,
          backgroundColor: "rgba(0,0,0,0.01",
          borderColor: "rgba(218, 246, 45, 1)",
          pointRadius: 0,
          borderWidth: 2,
          pointBackgroundColor: "rgba(218, 246, 45, 1)",
          pointBorderColor: "rgba(218, 246, 45, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(218, 246, 45, 1)",
          pointHoverBorderColor: "rgba(218, 246, 45, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          data: getLight(light),
          yAxisID: "right",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      animation: {
        duration: 0,
      },
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 50,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            time: {
              unit: "date",
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 10,
            },
          },
        ],
        yAxes: [
          {
            id: "left",
            position: "left",
            ticks: {
              maxTicksLimit: 5, // số lượng đưởng kẻ ngang ( chia tỉ lệ)
              padding: 10,
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return number_format(value);
              },
            },
            gridLines: {
              // đường kẻ ngang
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [3],
              zeroLineBorderDash: [3],
            },
          },
          {
            id: "right",
            position: "right",
            ticks: {
              maxTicksLimit: 6, // số lượng đưởng kẻ ngang ( chia tỉ lệ)
              padding: 10,
              callback: function (value, index, values) {
                return number_format(value);
              },
            },
            gridLines: {
              // đường kẻ ngang
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [3],
              zeroLineBorderDash: [3],
            },
          },
        ],
      },
      legend: {
        //chủ thích
        display: true,
      },
      tooltips: {
        //chi tiết dữ liệu trên line
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: "#6e707e",
        titleFontSize: 14,
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: "index",
        caretPadding: 10,
        callbacks: {
          label: function (tooltipItem, chart) {
            var datasetLabel =
              chart.datasets[tooltipItem.datasetIndex].label || "";
            return datasetLabel + " : " + number_format(tooltipItem.yLabel);
          },
        },
      },
    },
  });

  createLabels(myLineChart1);
}, 3000);
