const scriptURL = 'https://script.google.com/macros/s/AKfycbzLWtr6yxot0ZkXYRnTdvqfnI5KIq0xwS63upiq4up7pUqoyJ2nNMfpBKewE9j38-Kp/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing!";
        setTimeout(function () {
            msg.innerHTML = "";
        }, 2000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })