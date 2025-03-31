/*FORM SUBMIT CODE

This code is for the form submission on the feedback page
This system uses SheetsDB to store the data from the form
The code here is almost exactly the same as the example at 
https://sheetdb.io/use-cases/submit-to-google-sheets-with-html-form

I would recommend a bit of caution when starting to open up forms to the public. 
Sadly, some people are malicious on the internet and will try to break/ruin things.
Please look into input sanitiation and validation if you are going to open this up to the public.
You can also set up a reCAPTCHA to help prevent spam.

*/

var form = document.getElementById('feedback-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  //Some basic "sanitization" of the input - preventing the simple injection attacks. We'll just remove any "=" or "&" characters from the input.
  //This is NOT a complete solution, but it will help prevent some of the more basic attacks.

  var formData = new FormData(document.getElementById('feedback-form'));

  // data[feedback] is the name of the field
  var feedback = formData.get('data[feedback]');
  feedback = feedback.replace(/=/g, '');
  feedback = feedback.replace(/&/g, '');
  console.log('feedback', feedback);
  formData.set('data[feedback]', feedback);

  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then(() => {
      alert('Thank you for your feedback!');
    });
});
