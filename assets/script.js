/* Function to display the date at the top of the calendar. */
var displayDate = function () {
  var prettyDate = moment().format("[Today is] dddd, MMMM Do YYYY, ha");
  moment(prettyDate).toString;
  // console.log(prettyDate);
  var todayDiv = $("#currentDay");
  todayDiv.text(prettyDate);
};

/* Funciton to conditionally update color styles based on the current time. */
var colorChange = function () {
  $(".hour").each(function (_index, element) {
    var calendarHrString = $(this).attr('id');
    var currentHrString = moment().format("H");

    calendarHr = parseInt(calendarHrString);
    currentHr = parseInt(currentHrString);
    // console.log({ calendarHr, currentHr });

    if (currentHr > calendarHr) {
      $(element).siblings("textarea").addClass("past")
    } else if (currentHr === calendarHr) {
      $(element).siblings("textarea").addClass("present")
    } else {
      $(element).siblings("textarea").addClass("future")
    }
  })
};

/* Pull text entries from localStorage and populate them in their respective hourly rows. */
var populateCalendar = function () {
  $("#9").siblings("textarea").val(localStorage.getItem("9"));
  $("#10").siblings("textarea").val(localStorage.getItem("10"));
  $("#11").siblings("textarea").val(localStorage.getItem("11"));
  $("#12").siblings("textarea").val(localStorage.getItem("12"));
  $("#13").siblings("textarea").val(localStorage.getItem("13"));
  $("#14").siblings("textarea").val(localStorage.getItem("14"));
  $("#15").siblings("textarea").val(localStorage.getItem("15"));
  $("#16").siblings("textarea").val(localStorage.getItem("16"));
  $("#17").siblings("textarea").val(localStorage.getItem("17"));
};

/* Text content pushed to localStorage when user presses the blue button. */
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var eventText = $(this).siblings("textarea").val();
  var eventHr = $(this).siblings(".time-block").attr("id");
  // console.log(eventText, eventHr);

  localStorage.setItem(eventHr, eventText);
});

// RUN FUNCTIONS
displayDate();
colorChange();
populateCalendar();