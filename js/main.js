function loadData() {
    $.ajax({
        url: 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=b087af42-2c54-4dbf-86c8-427d788779e5&limit=100',
        type: 'get',
        dataType: 'json',
        success: function(data) {
            var dataList = data.result.results;
            var WebDataList = dataList.map(function(dataList) {
                var HTMLString = '<tr></td><td data-th="hotspotName">' + dataList.HOTSPOT_NAME + '</td><td data-th="hotspotType">' + dataList.HOTSPOT_TYPE + '</td><td data-th="area">' + dataList.AREA + '</td><td data-th="address">' + dataList.ADDRESS + '</td><td data-th="LNG">' + dataList.LNG + '</td><td data-th="LAT">' + dataList.LAT + '</td></tr>';
                var items = "";
                var HTMLString = HTMLString + items + "</ul></p><div>";
                console.log(HTMLString);
                return HTMLString;
            });
            WebDataList.forEach(function(html) {
                $(html).appendTo("#table");
            });

            $('.sk-cube-grid').css('display', 'none');

        }
    })

}
