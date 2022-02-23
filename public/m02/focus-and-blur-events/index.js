(() => {
  $('input, select, textarea')
    .on('focus', function _focus() {
      const $this = $(this);
      const { type } = $this[0];
      switch (type) {
        case 'reset':
        case 'submit':
        case 'button':
          $this
            .removeClass('btn-dark')
            .addClass('btn-success');
          break;
        default:
          $this.addClass('is-valid');
      }
    });
  $('input, select, textarea')
    .on('blur', function _blur() {
      const $this = $(this);
      const { type } = $this[0];
      switch (type) {
        case 'reset':
        case 'submit':
        case 'button':
          $this
            .removeClass('btn-success')
            .addClass('btn-dark');
          break;
        default:
          $(this).removeClass('is-valid');
      }
    });

  $(':radio').on('focus', () => {
    $('#gender').addClass('alert alert-success');
  });

  $(':radio').on('blur', () => {
    $('#gender').removeClass('alert alert-success');
  });
})();
