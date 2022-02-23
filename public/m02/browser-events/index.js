(() => {
  $(window).on('resize', () => {
    console.debug('Window Resize');
  });
  $(window).on('scroll', () => {
    console.debug('Window Scrolled');
  });

  $('#textarea').on('scroll', () => {
    console.debug('text area scroll');
  });
  $('#atomImg').on('error', () => {
    console.debug('img error');
  });
  $(window).on('click', () => {
    console.debug('click event');
    const $img = $('#atomImg');
    $img.attr('src', '"junnk"');
    setTimeout(() => {
      $img.attr('src', 'https://bestanimations.com/Fantasy/Dragons/dragon-animated-gif-55.gif');
    }, 3e3);
  });
})();
