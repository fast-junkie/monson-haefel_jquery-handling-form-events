(() => {
  $('#email')
    .on('change', function _change() {
      const $this = $(this);
      const email = $this.val();
      const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isValid = emailRegEx.test(String(email).toLowerCase());

      if (!isValid) {
        $this.removeClass('is-valid').addClass('is-invalid');
      } else {
        $this.removeClass('is-invalid').addClass('is-valid');
      }
    });
  $('#textarea')
    .on('select', (event) => {
      const { value, selectionStart, selectionEnd } = event.target;
      const selection = value.substring(selectionStart, selectionEnd);

      console.debug('selection', selection);
    });
})();
