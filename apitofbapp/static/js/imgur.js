/**
 * Created by Badmuthafucker on 10/10/14.
 */

var imgCID = "e10240a96a1443e";
var imgur_json;

$.ajax({
    url: 'https://api.imgur.com/3/gallery/hot/viral/0.json',
    headers: {
        'Authorization': imgCID
    },
    type: 'GET',
    success: function(data) {
        imgur_json = data;
        //returns 172
        console.log(data.data.length)
        console.log(imgur_json.data[0].link)
        console.log(imgur_json.data[0].title)
    }
});