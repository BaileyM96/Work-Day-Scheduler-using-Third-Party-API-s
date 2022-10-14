var hourOfDay = document.querySelector('#hour-ofday');
// The current day needs to displayed above the calandar
var momentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
$('#currentDay').text(momentDate);


// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

