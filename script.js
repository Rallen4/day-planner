
$(document).ready(function () {
// var currentDay = moment().format("dddd");
var currentHour = moment().hours();
// var dayMoYr = moment().format("MMM Do YY");
// var allTime = (day + ", " + dayMoYr);

    function createColors() {
        var colorWrapper = $("#colorWrapper");
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id"))
            $(this).children(".hours").text(blockHour)
            console.log(blockHour, currentHour)
            if(currentHour < blockHour) {
                $(this).addClass("past") 
            } else if(currentHour === blockHour) {
                $(this).addClass("present")
            } else {$(this).addClass("future")}
        })
    }
    createColors();

    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        var todos = JSON.parse(window.localStorage.getItem("todos")) || []
        todos.push({time, value});
        window.localStorage.setItem("todos", JSON.stringify(todos))
        var savedData = JSON.parse(window.localStorage.getItem("todos"))
        console.log(savedData)
        for (let i = 0; i < savedData.length; i++) {
            var id = parseInt($(this).attr("id"))
            var element = savedData[i]
            if(id = element.time) {
                $(this).text(element.value)
            }
        }

    })
})