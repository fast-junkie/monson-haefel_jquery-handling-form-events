(() => {
  $('#regForm')
    .on('reset', (event) => {
      const confirm = window.confirm('Are you sure?');
      if (!confirm) {
        event.preventDefault();
      }
    });
  $('#regForm')
    .on('submit', (event) => {
      const gender = $('#gender input:radio:checked').val();
      if (gender === undefined) {
        alert('You must select a gender.');
        event.preventDefault();
        return false;
      }

      const fieldPairs = $('#regForm').serializeArray();
      console.debug(fieldPairs);
      $.each(fieldPairs, (index, pair) => {
        if (pair.value === '') {
          alert('The form is incomplete.');
          event.preventDefault();
          return false;
        }
        return true;
      });
      return true;
    });
})();
