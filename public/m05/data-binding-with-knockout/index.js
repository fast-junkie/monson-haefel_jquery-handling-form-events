(() => {
  const viewModel = {
    firstName: ko.observable(),
    lastName: ko.observable(),
  };

  viewModel.firstName = 'Fast';

  ko.applyBindings(viewModel);
})();
