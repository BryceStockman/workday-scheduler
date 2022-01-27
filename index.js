$(document).ready(function () {
  const currentDay = document.querySelector('#currentDay');
  const currentDate = moment().format('dddd, MMMM Do yyyy');
  currentDay.innerHTML = currentDate;
  const currentTime = parseInt(moment().format('HH'));

  const appointments = [];

  const auditAppointments = function () {
    $('textarea').each(function () {
      var hour = parseInt($(this).attr('id'));

      if (hour < currentTime) {
        $(this).addClass('past');
      } else if (hour === currentTime) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  };

  const loadAppointments = function () {
    $('#9').val(localStorage.getItem('9'));
    $('#10').val(localStorage.getItem('10'));
    $('#11').val(localStorage.getItem('11'));
    $('#12').val(localStorage.getItem('12'));
    $('#1').val(localStorage.getItem('1'));
    $('#2').val(localStorage.getItem('2'));
    $('#3').val(localStorage.getItem('3'));
    $('#4').val(localStorage.getItem('4'));
    $('#5').val(localStorage.getItem('5'));
  };

  $('.saveBtn').click(function () {
    let appointmentText = $(this).siblings('.description').val();

    appointmentId = $(this).siblings('.description').attr('id');

    let appointment = {
      hour: appointmentId,
      text: appointmentText,
    };

    appointments.push(appointment);
    console.log(appointmentText);

    localStorage.setItem(appointmentId, appointmentText);
  });

  loadAppointments();
  auditAppointments();
});
