(() => {
  const $street = $('#street');
  const $city = $('#city');
  const $state = $('#state');
  const $zip = $('#zip');
  const $country = $('#country');
  const dataUri = 'https://api.myptv.com/geocoding/v1/locations/by-address';
  const ptvApiKey = 'ZDA1YjFjZGJlNjFkNDg0OGJmNWZjOTExZmEyNWQ1OGE6YjVlMTJhMGMtMzI1Yy00Mzc2LWI3ZGItZGNmZTVmN2U4ZWRk';

  $street
    .autocomplete({
      source(request, response) {
        $.ajax({
          data: {
            country: 'United States',
            street: request.term,
          },
          // dataType: 'jsonp',
          headers: { apiKey: ptvApiKey, 'Content-Type': 'application/json' },
          url: dataUri,
        })
          .done((responseData, textStatus) => {
            console.debug('done', textStatus);
            const { locations } = responseData;
            const streets = [];
            $.each(locations, (i, item) => {
              const { address } = item;
              const stringify = `${address.houseNumber} ${address.street},${address.city},${address.state},${address.postalCode},${address.countryName}`;
              streets.push(stringify.trim());
            });
            response(streets);
          })
          .fail((jqXhr, textStatus) => {
            console.debug('fail', textStatus);
            $street.autocomplete('destroy');
          });
      },
      minLength: 5,
      select(event, ui) {
        const { value } = ui.item;
        const [street, city, state, zip, country] = value.split(',');
        $street.val(street);
        $city.val(city);
        $state.val(state);
        $zip.val(zip);
        $country.val(country);
        return false;
      },
    });
})();
