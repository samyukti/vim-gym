var displayEMI = function(data) {
  // remove any success or danger class from results area
  $('.results').removeClass('bg-success').removeClass('bg-danger');
  // check the ajax response is a number
  // if true add a success class else a danger class to results area
  if (isNumber(data.payment)) { $('.results').addClass('bg-danger'); }
  else { $('.results').addClass('bg-success'); }
  // change the text of results area
  // with the payment attribute in ajax response
  $('.results').text(data.payment);
};

var getEMI = function (event) {
  // get the url from the form's data-action attribute
  url = $('form#form_emi').data('action')
  // get the principal input
  principal = $('input#principal').val();
  // get the rate input
  rate = $('input#rate').val();
  // get the term input
  term = $('input#term').val();
  // prepare the query string
  query = '?principal=' + principal + '&rate=' + rate + '&term=' + term
  // send an ajax request
  $.ajax(url+query)
    // invoke displayEMI upon completion of ajax request
   .done(displayEMI);
 // prevent default behavior (submit) of the button
  event.preventDefault();
};

var handleSubmit = function () {
  // add a click event handler to the object with id "get_emi"
  $('#get_emi').click(getEMI);
};

// main
handleSubmit();
