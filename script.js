
var momentDate = moment().format("dddd, MMMM Do YYYY"); 
$('#currentDay').text(momentDate);
$('.saveBtn').on('click',function() {
    console.log('Hello');
    var hour = $(this).parent().attr('id');
    var text = $(this).siblings('textarea').val();
    localStorage.setItem(hour, text);
});



function timeBlocks() {
    var currentHour = moment().hour(); //Moment.hour displays military time
    $('.time-block').each(function () {
        var timeBlock = parseInt($(this).attr('id'));  
     console.log(timeBlock);

        if (timeBlock === currentHour) {
            $(this).addClass('present');

        }
        else if (timeBlock < currentHour) {
            $(this).addClass('past');
        }
        else {
            $(this).addClass('future');
        }
    })
    
};

timeBlocks();


$('.time-block').each(function () {
  var key =  $(this).attr('id');
  $(this).children('textarea').val(localStorage.getItem(key));
})

