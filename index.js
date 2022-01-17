const currentDay = document.querySelector('#currentDay');
const currentDate = moment().format('dddd, MMMM Do yyyy');
currentDay.innerHTML = currentDate;

const timeBlock = $('.time-block').text();

// for (var i = 0; i < timeBlock.length; i++) {
//   console.log(timeBlock[i]);
// }

let events = {};

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

  events = text;
  saveEvents();
  console.log(events);
});

const saveEvents = function () {
  localStorage.setItem('events', JSON.stringify(events));
};

$('.description').trigger('blur');
