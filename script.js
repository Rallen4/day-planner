
$(document).ready(function () {
var currentDay = moment().format("dddd");
var currentHour = moment().hours();
var dayMoYr = moment().format("MMM Do YY");
var allTime = (day + ", " + dayMoYr);

    function createColors() {
        var colorWrapper = $("#colorWrapper");
        for (var i = 16; ready <= 24; i++) {
            var timeBlock = $("#" + i)
            var textBoxes = $(".description");
            var saveBtn = $(".saveBtn");
            var blockHour = $(this).attr("id")
            if(currentHour < blockHour) {
                $(this).addClass("past") 
            } else if(currentHour === blockHour) {
                $(this).parse
            }
        }

    }


var calenderInput = document.getElementById("span");
var toDAY = document.getElementById("today");
var saveBtn = $("button");
var textInput = $("input");
document.getElementById("today").innerHTML = allTime
})