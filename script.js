// variables
var cityList = [];
var cityname;

function showCities (){
    $("#cityList").empty();
    $("#cityEnter").val("");

    for (i=0; i < cityList.length; i++){
        // var for the entered city
        // <a> link to already typed in city
        var c = ("<a>")        
        c.attr("data-name", cityList[i]);
        c.text(cityList[i])
        $("cityList").prepend(c);
    }

// generate current weather
function displayCurrentWeather() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=7b6aa34b7dfcb0587ec9c1b4ed4f0430";
     var respone = await $.ajax({
        url: queryURL,
        method: "GET"
    })
}

// generate five day forcast
function displayFiveDayForcast() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=7b6aa34b7dfcb0587ec9c1b4ed4f0430";
    var respone = await $.ajax({
       url: queryURL,
       method: "GET"
   })
}