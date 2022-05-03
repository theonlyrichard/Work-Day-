//Display Day of Week and Current Date
var todaysDate = moment();
$("#currentDay").text(todaysDate.format("dddd, MMMM Do, YYYY"));
console.log(currentDay);


var auditTasks = function () {

    //Get current hour
    var currentHour = moment().hour();
    $(".task-info").each(function () {
        var elementHour = parseInt($(this).attr("id"));

        //Check for past, present, future
        if (elementHour < currentHour) {
            $(this).removeClass(["present", "future"]).addClass("past");
        }
        else if (elementHour === currentHour) {
            $(this).removeClass(["past", "future"]).addClass("present");
        }
        else {
            $(this).removeClass(["past", "present"]).addClass("future");
        }
    })
};