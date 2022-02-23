(() => {
  $(window).on('load', () => {
    console.debug('Window Loaded');
  });
  $(window).on('unload', () => {
    console.debug('Window Unloaded');
  });
  $('#atomImg').on('load', () => {
    console.debug('atomImg Loaded');
  });
})();
