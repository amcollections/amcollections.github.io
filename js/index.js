// Removed:
// Chart 2: Rank at Death
// Chart 3: Collection Sizes
// Chart 4: Natural Sciences tree (old version)

google.charts.load("visualization", "1", {
  packages: ["corechart", "treemap", "timeline", "calendar"]
});
google.charts.setOnLoadCallback(drawChart1); // age at death
google.charts.setOnLoadCallback(drawChart4); // elistment dates
google.charts.setOnLoadCallback(drawChart6); // troopship cargo
google.charts.setOnLoadCallback(drawChart7); // MS timeline
google.charts.setOnLoadCallback(drawChart8); // calendar of death dates
//google.charts.setOnLoadCallback(drawChart9); // new NS tree

// Chart 1: Age at Death
function drawChart1() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=A:B&headers=1&gid=0');
  query.send(handleQueryResponse);

  function handleQueryResponse(response) {
    var data = response.getDataTable();
    var options = {
      title: 'Age at Death',
      'hAxis': {
        'title': 'age',
        ticks: [25, 40, 65, 90]
      },
      'legend': {
        position: 'none'
      },
      'vAxis': {
        format: 'short',
        title: 'deaths'
      }
    }
    var chart = new google.visualization.ColumnChart(document.getElementById('ageAtDeath'));
    chart.draw(data, options);
  }
}

// Chart 4: Enlistment Date
function drawChart4() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=R:S&headers=1&gid=0');
  query.send(handleQueryResponse);

  function handleQueryResponse(response) {
    var data = response.getDataTable();
    var options = {
      title: 'Enlistment Date WW1',
      legend: {
        position: 'none'
      },
      vAxis: {
        ticks: [0, 30, 60, 90],
      },
      hAxis: {
        ticks: [new Date(1914, 6, 28), new Date(1916, 11, 28), new Date(1918, 4, 11)]
      },
      colors: ['Crimson']
    }
    var chart = new google.visualization.ColumnChart(document.getElementById('enlistdate'));
    chart.draw(data, options);
  }
}

// Chart 6: Troopship Cargo
function drawChart6() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=U:X&headers=1&gid=0');
  query.send(handleQueryResponse);

  function handleQueryResponse(response) {
    var data = response.getDataTable();
    var options = {
      title: 'Troopship Cargo',
      'isStacked': 'percent',
      legend: {
        position: 'right'
      },
      fontSize: '14',
      hAxis: {
        ticks: []
      },
      colors: ['DarkGray', 'LightSlateGray', 'Sienna']
    }
    var chart = new google.visualization.BarChart(document.getElementById('cargo'));
    chart.draw(data, options);
  }
}

// Chart 7: Manuscripts Timeline
function drawChart7() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=Z:AC&headers=1&gid=0');
  query.send(handleQueryResponse);

  function handleQueryResponse(response) {
    var data = response.getDataTable();
    var options = {
      timeline: {
        showRowLabels: false
      },
      // avoidOverlappingGridLines: 'false',
      height: 730,
      tooltip: {
        isHtml: false
      }
    };
    var chart = new google.visualization.Timeline(document.getElementById('manuscripts'));
    chart.draw(data, options);
  }
}

// chart 8: Calendar of deaths ('cal')
function drawChart8() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=AF:AG&headers=1&gid=0');
  query.send(handleQueryResponse);

  function handleQueryResponse(response) {
    var data = response.getDataTable();
    var options = {
      title: 'Fatalities by Date',
      height: 860,
      calendar: {
        cellSize: 18,
        dayOfWeekRightSpace: 10,
        underMonthSpace: 20,
      },
      tooltip: {
        isHtml: false,
      },
      colorAxis: {
        minValue: 1,
        colors: ['PeachPuff', 'OrangeRed'],
        maxValue: 849,
      },
      noDataPattern: {
        // backgroundColor: 'white',
        color: '#F7F7F7'
      },
      daysOfWeek: ''
    }
    var chart = new google.visualization.Calendar(document.getElementById('calendar'));
    chart.draw(data, options);
  }
}

// chart 9: New NS tree ('tree')
function drawChart9() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/gviz/tq?range=AI1:AK16604&headers=1&gid=0');
  query.send(handleQueryResponse);

  function handleQueryResponse(response) {
    var data = response.getDataTable();
    var options = {
      highlightOnMouseOver: true,
      maxDepth: 1,
      maxPostDepth: 2,
      minHighlightColor: '#8c6bb1',
      midHighlightColor: '#9ebcda',
      maxHighlightColor: '#edf8fb',
      minColor: '#009688',
      midColor: '#f7f7f7',
      maxColor: '#ee8100',
      headerHeight: 15,
      showScale: true,
      height: 500,
      useWeightedAverageForAggregation: true
    };
    var chart = new google.visualization.TreeMap(document.getElementById('tree'));
    chart.draw(data, options);
  }
}

$(window).resize(function() {
  drawChart1();
  drawChart4();
  drawChart6();
  drawChart7();
  drawChart8();
  drawChart9();
});
