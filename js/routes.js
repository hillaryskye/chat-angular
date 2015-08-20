app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })

      .otherwise({
        templateUrl: 'partials/calculator.html',
        controller: 'CalculatorController'
      })
      // // use the HTML5 History API
        // $locationProvider.html5Mode(true);
});
