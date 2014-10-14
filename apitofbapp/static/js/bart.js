var bartKey = "ZGLI-UTS9-IHZQ-DT35";
var startingStation = 'mont';
var travelDirection;
var formStartStation;
var formDirection;


    $('#bart_save_button').on('click', function () {
        formStartStation = $("#bart_origin option:selected").text();
        formDirection = $("#bart_dir option:selected").text();
//        alert(testStartStation);
//        alert(testDirection);

        // Can find a better way to remove this large if/else if block
        // What if instead you had a large dictionary that mapped 'verbose name' to 'abbreviated' name
        // Here's a short example
        var stations = {
            '12th St. Oakland City Center': '12th',
            '16th St. Mission (SF)': '16th'
        }
        
        // Then you can just do
        startingStation = stations[formStartStation]
        
        // ^ This reduces a lot of lines and code and is much neater!
        
        if (formStartStation == '12th St. Oakland City Center') {
            startingStation = '12th';
        }
        else if (formStartStation == '16th St. Mission (SF)') {
            startingStation = '16th';
        }
        else if (formStartStation == '19th St. Oakland') {
            startingStation = '19th';
        }
        else if (formStartStation == '24th St. Mission (SF)') {
            startingStation = '24th';
        }
        else if (formStartStation == 'Ashby (Berkeley)') {
            startingStation = 'ashb';
        }
        else if (formStartStation == 'Balboa Park (SF)') {
            startingStation = 'balb';
        }
        else if (formStartStation == 'Bay Fair (San Leandro)') {
            startingStation = 'bayf';
        }
        else if (formStartStation == 'Castro Valley') {
            startingStation = 'cast';
        }
        else if (formStartStation == 'Civic Center (SF)') {
            startingStation = 'civc';
        }
        else if (formStartStation == 'Coliseum/Oakland Airport') {
            startingStation = 'cols';
        }
        else if (formStartStation == 'Colma') {
            startingStation = 'colm';
        }
        else if (formStartStation == 'Concord') {
            startingStation = 'conc';
        }
        else if (formStartStation == 'Daly City') {
            startingStation = 'daly';
        }
        else if (formStartStation == 'Downtown Berkeley') {
            startingStation = 'dbrk';
        }
        else if (formStartStation == 'Dublin/Pleasanton') {
            startingStation = 'dubl';
        }
        else if (formStartStation == 'El Cerrito del Norte') {
            startingStation = 'deln';
        }
        else if (formStartStation == 'El Cerrito Plaza') {
            startingStation = 'plza';
        }
        else if (formStartStation == 'Embarcadero (SF)') {
            startingStation = 'embr';
        }
        else if (formStartStation == 'Fremont') {
            startingStation = 'frmt';
        }
        else if (formStartStation == 'Fruitvale (Oakland)') {
            startingStation = 'ftvl';
        }
        else if (formStartStation == 'Glen Park (SF)') {
            startingStation = 'glen';
        }
        else if (formStartStation == 'Hayward') {
            startingStation = 'hayw';
        }
        else if (formStartStation == 'Lafayette') {
            startingStation = 'layf';
        }
        else if (formStartStation == 'Lake Merritt (Oakland)') {
            startingStation = 'lake';
        }
        else if (formStartStation == 'MacArthur (Oakland)') {
            startingStation = 'mcar';
        }
        else if (formStartStation == 'Montgomery St. (SF)') {
            startingStation = 'mont';
        }
        else if (formStartStation == 'North Berkeley') {
            startingStation = 'nbrk';
        }
        else if (formStartStation == 'North Concord/Martinez') {
            startingStation = 'ncon';
        }
        else if (formStartStation == 'Orinda') {
            startingStation = 'orin';
        }
        else if (formStartStation == 'Pittsburg/Bay Point') {
            startingStation = 'pitt';
        }
        else if (formStartStation == 'Pleasant Hill') {
            startingStation = 'phil';
        }
        else if (formStartStation == 'Powell St. (SF)') {
            startingStation = 'powl';
        }
        else if (formStartStation == 'Richmond') {
            startingStation = 'rich';
        }
        else if (formStartStation == 'Rockridge (Oakland)') {
            startingStation = 'rock';
        }
        else if (formStartStation == 'San Bruno') {
            startingStation = 'sbrn';
        }
        else if (formStartStation == 'San Francisco Int\'l Airport') {
            startingStation = 'sfia';
        }
        else if (formStartStation == 'San Leandro') {
            startingStation = 'sanl';
        }
        else if (formStartStation == 'South Hayward') {
            startingStation = 'shay';
        }
        else if (formStartStation == 'South San Francisco') {
            startingStation = 'ssan';
        }
        else if (formStartStation == 'Union City') {
            startingStation = 'ucty';
        }
        else if (formStartStation == 'Walnut Creek') {
            startingStation = 'wcrk';
        }
        else if (formStartStation == 'West Dublin') {
            startingStation = 'wdub';
        }
        else if (formStartStation == 'West Oakland') {
            startingStation = 'woak';
        }
        else {
            startingStation = 'mlbr';
        }

        if (formDirection == 'North') {
            travelDirection = 'N';
        }
        else {
            travelDirection = 'S';
        }
    });

    var bartEndPoint = "http://api.bart.gov/api/sched.aspx?cmd=depart&orig=ASHB&dest=CIVC&date=now&key=" + bartKey + "&b=2&a=2&l=1";

    //Reat Time Estimate time of departure http://api.bart.gov/docs/etd/etd.aspx
    var RTInfoEndPoint = "http://api.bart.gov/api/etd.aspx?cmd=etd&orig=" + startingStation + "&key=" + bartKey + "?dir=" + travelDirection;
    var AdvisoryEndpoint = "http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=" + bartKey;

    //Stations Abbreviations http://api.bart.gov/docs/overview/abbrev.aspx
    var json_advisory = "";
    var json_RTInfo = "";

    $.ajax({
        url: AdvisoryEndpoint,
        type: "GET",
        dataType: "xml",
        success: function (data) {
            json_advisory = $.xml2json(data);
        }
    });

    $.ajax({
        url: RTInfoEndPoint,
        type: "GET",
        dataType: "xml",
        success: function (data) {
            json_RTInfo = $.xml2json(data);
//            console.log(json_RTInfo);
//            console.log(json_RTInfo.date + " " + json_RTInfo.station.name + " " + json_RTInfo.station.etd[0].destination +
//            " " + json_RTInfo.station.etd[0].estimate[0].minutes);
        }
    });
