////////////////  Traffic Lights ////////////////
// You are required to provide the code for an application that simulates a set of traffic lights at an intersection.
// The traffic lights are designated (N, S) and (E, W) like a compass.

//////////////// Requirements ////////////////
// The lights change automatically every 5 minutes.
// When switching from green to red, the yellow light must be displayed for 30 seconds prior to it switching to red and the opposite direction switching to green from red.
// You're not required to optimize, just focus on a functional approach to requirements Provide the output for the light changes which occur during the period between 9am and 9:30am.
// You should provide unit tests for your solution.

//////////////// Execution ////////////////

// NORTH & SOUTH LIGHTS
const trafficLights = function() {
  // define the turning red action
  const $northSouthRed = function() {
    $northRed = $("#north-red");
    $southRed = $("#south-red");
    $northRed.removeClass("white").addClass("red");
    $southRed.removeClass("white").addClass("red");
  };
  // define the second iteration of turning red
  const $northSouthRedTwo = function() {
    $northRed = $("#north-red");
    $southRed = $("#south-red");
    $northYellow = $("#north-yellow");
    $southYellow = $("#south-yellow");

    $northRed.removeClass("white").addClass("red");
    $northYellow.removeClass("yellow").addClass("white");
    $southRed.removeClass("white").addClass("red");
    $southYellow.removeClass("yellow").addClass("white");
  };
  // define the turning green action
  const $northSouthGreen = function() {
    $northGreen = $("#north-green");
    $southGreen = $("#south-green");
    $northGreen.removeClass("white").addClass("green");
    $northRed.removeClass("red").addClass("white");
    $southGreen.removeClass("white").addClass("green");
    $southRed.removeClass("red").addClass("white");
  };
  // define the turning yellow action
  const $northSouthYellow = function() {
    $northYellow = $("#north-yellow");
    $southYellow = $("#south-yellow");
    $northYellow.removeClass("white").addClass("yellow");
    $northGreen.removeClass("green").addClass("white");
    $southYellow.removeClass("white").addClass("yellow");
    $southGreen.removeClass("green").addClass("white");
  };

  // EAST & WEST LIGHTS
  // define the turning red action
  const $eastWestRed = function() {
    $eastRed = $("#east-red");
    $westRed = $("#west-red");
    $eastYellow = $("#east-yellow");
    $westYellow = $("#west-yellow");
    $eastRed.removeClass("white").addClass("red");
    $eastYellow.removeClass("yellow").addClass("white");
    $westRed.removeClass("white").addClass("red");
    $westYellow.removeClass("yellow").addClass("white");
  };

  // define the turning green action
  const $eastWestGreen = function() {
    $eastGreen = $("#east-green");
    $westGreen = $("#west-green");
    $eastGreen.removeClass("white").addClass("green");
    $westGreen.removeClass("white").addClass("green");
  };
  // define the second iteration of turning green
  const $eastWestGreenTwo = function() {
    $eastGreen = $("#east-green");
    $westGreen = $("#west-green");
    $eastRed = $("#east-red");
    $westRed = $("#west-red");

    $eastGreen.removeClass("white").addClass("green");
    $eastRed.removeClass("red").addClass("white");
    $westGreen.removeClass("white").addClass("green");
    $westRed.removeClass("red").addClass("white");
  };

  // define the turning yellow action
  const $eastWestYellow = function() {
    $eastYellow = $("#east-yellow");
    $westYellow = $("#west-yellow");
    $eastYellow.removeClass("white").addClass("yellow");
    $eastGreen.removeClass("green").addClass("white");
    $westYellow.removeClass("white").addClass("yellow");
    $westGreen.removeClass("green").addClass("white");
  };

  const lightsAction = function() {
    $(document).ready($northSouthRed);
    $(document).ready($eastWestGreen);

    window.setTimeout($eastWestYellow, 3000);

    window.setTimeout($northSouthGreen, 6000);
    window.setTimeout($eastWestRed, 6000);
    // northSouthYellow && eastWestRed => .5 minutes
    window.setTimeout($northSouthYellow, 9000);
    // northSouthRed && eastWestGreen =>
    window.setTimeout($northSouthRedTwo, 12000);
    window.setTimeout($eastWestGreenTwo, 12000);
  };
  lightsAction();
};

trafficLights();

// NEXT STEPS
// set the timer in real time like so:
//// north & south red => 5 minutes (300000) && east & west green => 4.5 minutes (270000)
// ---
//// east & west yellow => .5 minutes (30000)
// ---
//// east & west red => 5 minutes && north & south green => 4.5 minutes
// --
//// north & south yellow => .5 minutes
// --
//// north & south red => 5 minutes (300000) && east & west green => 4.5 minutes (270000)

// create a loop to iterate the action to last 30 minutes (1800000)
