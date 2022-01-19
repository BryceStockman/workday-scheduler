const currentDay = document.querySelector('#currentDay');
const currentDate = moment().format('dddd, MMMM Do yyyy');
currentDay.innerHTML = currentDate;

const currentTime = moment().format('HH:mm:ss a');
console.log(currentTime);

// QUESTION: NOT SURE IF THIS IS HOW I NEED TO DO THIS?
const firstTimeBlock = $('#9am').text();
console.log(firstTimeBlock);
const secondTimeBlock = $('#10am').text();
const thirdTimeBlock = $('#11am').text();
const fourthTimeBlock = $('#12pm').text();
const fifthTimeBlock = $('#1pm').text();
const sixthTimeBlock = $('#2pm').text();
const seventhTimeBlock = $('#3pm').text();
const eighthTimeBlock = $('#4pm').text();
const ninethTimeBlock = $('#5pm').text();

// QUESTION: should this be an array or object?
let events = {};

// QUESTION: How do I target the text and loop through each instance?
const timeBlock = $('.time-block').html();

const auditEventTime = function () {
  // for (var i = 0; i < timeBlock.length; i++) {
  //   events = timeBlock[i];
  //   console.log(events);
  // }

  if (timeBlock <= currentTime) {
    $(timeBlock).addClass('past');
  } else if (timeBlock == currentTime) {
    $(timeBlock).addClass('preset');
  } else if (timeBlock >= currentTime) {
    $(timeBlock).addClass('future');
  }
};

auditEventTime();

const createEvent = function (eventText) {
  const description = $('.description');

  const eventP = $('<p>')
    .addClass('event-text')
    .addClass('m-1')
    .text(eventText);

  description.append(eventP);
};

$('.description').click(function (e) {
  e.preventDefault();
  addEvent = e.target;

  let text = $(this).text().trim();
  let textInput = $('<textarea>').addClass('event-input').val(text);
  $(this).html(textInput);
  textInput.trigger('focus');
});

$('.description').on('blur', 'textarea', function () {
  let text = $(this).val().trim();

  // QUESTION: When this is in an array, it overrides the previous instance
  // QUESTION: When I put this in an object it adds every instance and doesn't replace the old instance
  let event = text;
  events.push(event);
  saveEvents();
});

const saveEvents = function () {
  localStorage.setItem('events', JSON.stringify(events));
};

$('.description').trigger('blur');
