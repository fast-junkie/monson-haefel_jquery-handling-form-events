(() => {
  $('input, fieldset, select, textarea')
    .on('focusin', function _focusin() {
      $(this).css('background-color', 'lightyellow');
    });
  $('input, fieldset, select, textarea')
    .on('focusout', function _focusout(/* event */) {
      $(this).css('background-color', 'white');
    // event.stopImmediatePropagation();
    });
  $('#pwd2').on('focusout', () => {
    const $pwd1 = $('input[name=pwd1]');
    const $pwd2 = $('input[name=pwd2]');

    const pwd1 = $pwd1.val();
    const pwd2 = $pwd2.val();
    if (pwd1 !== pwd2) {
      $pwd1.addClass('is-invalid');
      $pwd2.addClass('is-invalid');
    } else {
      $pwd1.removeClass('is-invalid').addClass('is-valid');
      $pwd2.removeClass('is-invalid').addClass('is-valid');
    }
  });
})();
