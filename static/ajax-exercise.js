"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    //
    // This is the body of the callback function for $.get!
    // TODO: use `response` to update the text in `div#fortune-text`
    //
    const fortuneText = document.querySelector('div#fortune-text');
    fortuneText.innerHTML = response;
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    // TODO: select the zipcode input
    zipcode: $('input#zipcode-field').val()
  };

  // TODO: choose a request method (GET or POST) by uncommenting one of
  // these blocks of code

  $.get('/weather', formData, (response) => {
    // Fill in the callback function
    const weatherInfo = document.querySelector('div#weather-info');
    weatherInfo.innerHTML = response['forecast'];
  });

  // $.post('/replaceMe', formData, (response) => {
  //   // Fill in the callback function
  // });
});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  // TODO: create an object to store key-value pairs that'll be sent to
  // the server

  // TODO: make a request to /order-melons
  //
  // In the callback function, use the response from the server to
  // update #order-status. IMPORTANT: if the result code is 'ERROR',
  // make it show up in red.
});
