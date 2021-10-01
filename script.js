
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
            var blockHour = parseInt($(this).attr("id"))
            if(currentHour < blockHour) {
                $(this).addClass("past") 
            } else if(currentHour === blockHour) {
                $(this).addClass("present")
            } else {$(this).addClass("future")}
        }
    }
    createColors();

    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage()
        var todos = JSON.parse(window.localStorage.getItem("todos")) || []
        todos.push({time, value});
        window.localStorage.setItem("todos", JSON.stringify(todos))
        

    })

})