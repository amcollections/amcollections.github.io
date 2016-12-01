    google.charts.load('current');
    google.charts.setOnLoadCallback(drawVisualization);

    function drawVisualization() {
      var wrapper = new


        google.visualization.ChartWrapper({
        chartType: 'PieChart',
        dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1PzmQ1IlplTBZiEftG7tHTAaJyA1yyoZjJGBDjCfGMtE/edit#gid=0',
        query: 'SELECT G,H',
        options: {
          title: 'Collection Size',
        },
        containerId: 'collsize'
      });

      wrapper.draw()

    }