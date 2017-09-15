var ctx = document.getElementById("myChart").getContext('2d');

dataSet = [1, 1, 1];

var config = {
  type: 'bar',
  data: {
    labels: ["Harry", "Hermonine", "Ron"],
    datasets: [{
      label: '# of Votes',
      data: dataSet,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}

var myChart = new Chart(ctx, config);
$("#hp").click(function() {
  var data = myChart.config.data;
  var temp = dataSet
  temp = temp[0]++;
  data.datasets.data = temp;
  myChart.update();
});
$("#hg").click(function() {
  var data = myChart.config.data;
  var temp = dataSet
  temp = temp[1]++;
  data.datasets.data = temp;
  myChart.update();
});
$("#rw").click(function() {
  var data = myChart.config.data;
  var temp = dataSet
  temp = temp[2]++;
  data.datasets.data = temp;
  myChart.update();
});
