(() => {
  const $city = $('#city');
  const $state = $('#state');
  const $country = $('#country');
  const dataUri = 'http://gd.geobytes.com/AutoCompleteCity?callback=?&filter=US,CA&q=';

  $city
    .autocomplete({
      source(request, response) {
        $.ajax({
          url: dataUri + request.term,
          dataType: 'jsonp',
          success(data) {
            response(data);
          },
        });
      },
      minLength: 3,
      select(event, ui) {
        const { value } = ui.item;
        const [city, state, country] = value.split(',');
        $city.val(city);
        $state.val(state);
        $country.val(country);
        return false;
      },
    });
})();
