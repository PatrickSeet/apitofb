/**
 * Created by Badmuthafucker on 10/11/14.
 */
var nprKey = "MDE3MDE4MjMxMDE0MTMwNjEwODBmN2YwNw001";
var nprEndpoint = "http://api.npr.org/query?id=1001,1019,1003,1004&output=JSON&apiKey=" + nprKey;
//1001: news, 1019: tech, 1003: us, 1004: world
var npr_json;

$.ajax({
    url: nprEndpoint,
    type: "GET",
    dataType: "json",
    success: function (data) {
        npr_json = data;
    }
});