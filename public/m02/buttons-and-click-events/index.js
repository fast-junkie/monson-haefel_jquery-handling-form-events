(() => {
  $('.btn-group-one')
    .on('click', '#nextPage', () => {
      window.location.href = './step-02.html';
    });

  $('.btn-group-two')
    .on('click', '#backPage', () => {
      window.location.href = './';
    })
    .on('click', '#nextPage', () => {
      window.location.href = './step-03.html';
    });

  $('.btn-group-three')
    .on('click', '#backPage', () => {
      window.location.href = './step-02.html';
    })
    .on('click', '#submitButton', (event) => {
      event.preventDefault();
      console.debug('the end...');
    });
})();
