// DOM VARIABLES
var formModal = $("#form-modal");
var openModalButton = $("#open-modal-button");
var currentDateTimeSpan = $("#current-date-time");

// JAVASCRIPT VARIABLES

// FUNCTION DEFINITIONS
function updateCurrentTime() {
  currentDateTimeSpan.text(moment().format("MMMM Do YYYY, hh:mm:ss"));
}

function checkTime() {
  var timer = setInterval(function () {
    updateCurrentTime();
  }, 1000);
}

// EVENT LISTENERS
openModalButton.on("click", function () {
  formModal.modal("show");
});

// FUNCTION CALLS
console.log(moment().format("MMMM Do YYYY, hh:mm:ss"));
// updateCurrentTime();
checkTime();
