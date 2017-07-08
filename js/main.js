////////////////  Traffic Lights ////////////////
// You are required to provide the code for an application that simulates a set of traffic lights at an intersection.
// The traffic lights are designated (N, S) and (E, W) like a compass.

//////////////// Requirements ////////////////
// The lights change automatically every 5 minutes.
// When switching from green to red, the yellow light must be displayed for 30 seconds prior to it switching to red and the opposite direction switching to green from red.
// You're not required to optimize, just focus on a functional approach to requirements Provide the output for the light changes which occur during the period between 9am and 9:30am.
// You should provide unit tests for your solution.

//////////////// Execution ////////////////
// define the four different lights
// define the action of removing and adding classes

// North & South Lights
// define the turning red action
const northSouthRed = function() {
  $northRed = $("#north-red");
  $southRed = $("#south-red");
  $northRed.removeClass("white").addClass("red");
  $southRed.removeClass("white").addClass("red");
};
window.setTimeout(northSouthRed, 2000);

// define the turning green action
const northSouthGreen = function() {
  $northGreen = $("#north-green");
  $southGreen = $("#south-green");

  $northGreen.removeClass("white").addClass("green");
  $northRed.removeClass("red").addClass("white");
  $southGreen.removeClass("white").addClass("green");
  $southRed.removeClass("red").addClass("white");
};
window.setTimeout(northSouthGreen, 4000);

// define the turning yellow action
const northSouthYellow = function() {
  $northYellow = $("#north-yellow");
  $southYellow = $("#south-yellow");

  $northYellow.removeClass("white").addClass("yellow");
  $northGreen.removeClass("green").addClass("white");
  $southYellow.removeClass("white").addClass("yellow");
  $southGreen.removeClass("green").addClass("white");
};
window.setTimeout(northSouthYellow, 6000);

// East and West Lights
// define the turning red action
// const eastWestRed = function() {
//   $eastRed = $("#east-red");
//   $westRed = $("#west-red");
//
//   $eastRed.removeClass("white").addClass("red");
//   $westRed.removeClass("white").addClass("red");
// };
// window.setTimeout(eastWestRed, 6000);
//
// // define the turning green action
// const eastWestGreen = function() {
//   $eastGreen = $("#east-green");
//   $westGreen = $("#west-green");
//
//   $eastGreen.removeClass("white").addClass("green");
//   $eastRed.removeClass("red").addClass("white");
//   $westGreen.removeClass("white").addClass("green");
//   $westRed.removeClass("red").addClass("white");
// };
// window.setTimeout(eastWestGreen, 2000);
//
// // define the turning yellow action
// const eastWestYellow = function() {
//   $eastYellow = $("#east-yellow");
//   $westYellow = $("#west-yellow");
//
//   $eastYellow.removeClass("white").addClass("yellow");
//   $eastGreen.removeClass("green").addClass("white");
//   $westYellow.removeClass("white").addClass("yellow");
//   $westGreen.removeClass("green").addClass("white");
// };
// window.setTimeout(eastWestYellow, 2000);
