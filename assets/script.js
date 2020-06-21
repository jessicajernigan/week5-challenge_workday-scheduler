

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// 1. Add div that displays current date according to user's timezone.
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// 2. Hardcode 8am - 5pm?

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// 3. Hour that reflects current time is highlighted using '.present' class; past using '.past'; future using '.future' class
// WHEN I click into a time block
// THEN I can enter an event
// 4. Text field

var displayDate = function () {
  var prettyDate = moment().format("[Today is] dddd, MMMM Do YYYY, Ha");
  moment(prettyDate).toString;
  // console.log(prettyDate);
  var todayDiv = $("#currentDay");
  todayDiv.text(prettyDate);
};

 
var colorChange = function () {
  $(".hour").each(function (_index, element) { 
    var calendarHrString = $(this).attr('id');
    var currentHrString = moment().format("H");

    calendarHr = parseInt(calendarHrString);
    currentHr = parseInt(currentHrString);

    console.log({calendarHr, currentHr});

    if (currentHr > calendarHr) {
      $(element).siblings("textarea").addClass("past")
    } else if (currentHr === calendarHr) {
      $(element).siblings("textarea").addClass("present")
    } else {
      $(element).siblings("textarea").addClass("future")
    }
  })
};


// WHEN I click the save button for that time block
// 5. Save commits change to local storage using hr ID as key, text content as text.
// 6. Bonus: prompt user when they have not saved?


// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist





// var loadTasks = function () {
//   tasks = JSON.parse(localStorage.getItem("tasks"));

//   // if nothing in localStorage, create a new object to track all task status arrays
//   if (!tasks) {
//     tasks = {
//       toDo: [],
//       inProgress: [],
//       inReview: [],
//       done: []
//     };
//   }

//   // loop over object properties
//   $.each(tasks, function (list, arr) {
//     // console.log(list, arr); // The purpose of this is to make sure the JavaScript worked when it was inherited.
//     // then loop over sub-array
//     arr.forEach(function (task) {
//       createTask(task.text, task.date, list);
//     });
//   });
// };

// var saveTasks = function () {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// // Task description was clicked.
// $(".list-group").on("click", "p", function () {
//   var text = $(this)
//     .text()
//     .trim();

//   var textInput = $("<textarea>")
//     .addClass("form-control")
//     .val(text);

//   $(this).replaceWith(textInput);

//   textInput.trigger("focus");
// });




// RUN FUNCTIONS
displayDate();
colorChange();