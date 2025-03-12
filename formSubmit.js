/*FORM SUBMIT CODE

This code is for the form submission on the feedback page
This system uses SheetsDB to store the data from the form
The code here is almost exactly the same as the example at 
https://sheetdb.io/use-cases/submit-to-google-sheets-with-html-form

*/

var form = document.getElementById('feedback-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: 'POST',
    body: new FormData(document.getElementById('feedback-form')),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
      alert('Thank you for your feedback!');
    });
});
