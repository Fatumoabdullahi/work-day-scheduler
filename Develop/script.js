$(document).ready(function () {
    $("#currentDay").text(moment ().format("MMMM Do YYYY, h:mm:ss a"));
    $(".saveBtn").on("click" function () {
        console.log(this);
        var text = $(this).siblings(".descriptions").val();
        var time = $(this).parent().attr("id");
//items set in local storage
        localStorage.setItem (time, text);
    })

//loading saved data from the localStorage
    $("#hour8.description").val(localStorage.getItem("hour8"));
    $("#hour9.description").val(localStorage.getItem("hour9"));
    $("#hour10.description").val(localStorage.getItem("hour10"));
    $("#hour11.description").val(localStorage.getItem("hour11"));
    $("#hour12.description").val(localStorage.getItem("hour12"));
    $("#hour13.description").val(localStorage.getItem("hour13"));
    $("#hour14.description").val(localStorage.getItem("hour14"));
    $("#hour15.description").val(localStorage.getItem("hour15"));
    $("#hour16.description").val(localStorage.getItem("hour16"));
    $("#hour17.description").val(localStorage.getItem("hour17"));

    function hourTracker () {
        //collect current hours
        var currentHour = moment().hour();
    }
})