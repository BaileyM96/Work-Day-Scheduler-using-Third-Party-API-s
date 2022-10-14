var hourOfDay = document.querySelector('#hour-ofday');
var hours = ['9', '10', '11', '12', '1', '2', '3', '4', '5'];
var hoursMath = Math.floor( hours.length);
// The current day needs to displayed above the calandar
var momentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
$('#currentDay').text(momentDate);


// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// Use a if statement for changing colors of the time 
// if 9am is true make color red else if that is not true make it gray

