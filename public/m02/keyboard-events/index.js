(() => {
  $('#firstName')
    .on('keydown', (event) => {
      const { key, code } = event;
      const allowed = [
        'ArrowLeft', 'ArrowRight', 'ShiftLeft', 'ShiftRight',
        'Space', 'Minus', 'Tab', 'Enter', 'Backspace',
      ];

      console.debug(key, code);
      if ((key.length === 1 && /^[A-Za-z]+$/.test(key)) || allowed.includes(code)) {
        return true;
      }
      return false;
    });
})();
