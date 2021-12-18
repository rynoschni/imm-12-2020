'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM Here!  I live life one function at a time');
  const button = document.querySelector('#button');
  button.addEventListener('click', function (e) {
    e.preventDefault();
    alert("Clicked")
  })
})

//jQuery Version

$(document).ready(function () {
  console.log('JDOM Ready.  poooffff')
  $('#button2').click(function (e) {
    e.preventDefault();
    alert("Button 2 clicked");
    })
})