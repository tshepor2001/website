$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "sn-sl",
            "value": 189
        },
        {
            "hc-key": "sn-th",
            "value": 2
        },
        {
            "hc-key": "sn-680",
            "value": 1300
        },
        {
            "hc-key": "sn-zg",
            "value": 499
        },
        {
            "hc-key": "sn-tc",
            "value": 210
        },
        {
            "hc-key": "sn-kd",
            "value": 10
        },
        {
            "hc-key": "sn-6976",
            "value": 800
        },
        {
            "hc-key": "sn-6978",
            "value": 720
        },
        {
            "hc-key": "sn-6975",
            "value": 8
        },
        {
            "hc-key": "sn-dk",
            "value": 9
        },
        {
            "hc-key": "sn-db",
            "value": 430
        },
        {
            "hc-key": "sn-fk",
            "value": 11
        },
        {
            "hc-key": "sn-1181",
            "value": 12
        },
        {
            "hc-key": "sn-lg",
            "value": 13
        }
    ];

    // Initiate the chart
    $('#stuff').highcharts('Map', {

        title : {
            text : ''
        },

        subtitle : {
            text : 'Source map: <a href="https://code.highcharts.com/mapdata/countries/sn/sn-all.js">Senegal</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/sn/sn-all'],
            joinBy: 'hc-key',
            name: 'Incidents',
            states: {
                hover: {
                    color: '#a4edba'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
