"use strict"

document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);


    if (error === 0) {
      $('.modal-order').addClass('_sending')
      let order = await fetch('/wp-content/themes/vpstudionew/sendorder.php', {
        method: 'POST',
        body: formData
      });
      if (order.ok) {
        let result = await order.json();
        alert(result.message);
        // formPreview.innerHTML = '';
        form.reset();
        $('.modal-order').removeClass('_sending')
      } else {
        alert('Error');
        $('.modal-order').removeClass('_sending')
      }
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if(input.classList.contains('_email')) { 
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }

    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error')
    input.classList.add('_error')
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error')
    input.classList.remove('_error')
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

});