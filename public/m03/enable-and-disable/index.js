(() => {
  const $input = $('input:is([type=text])');
  const $submit = $('#submitButton');
  $input
    .on('change', () => {
      let empties = false;
      $input
        .each(function _iterator() {
          if (!$(this).val()) {
            empties = true;
          }
        });
      $submit.prop('disabled', empties);
    });
})();
