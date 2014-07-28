'use strict';

angular
  .module('docsGeneratorApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
<<<<<<< HEAD
        templateUrl: 'function/main.html',
        controller: 'MainCtrl'
      })
      .when('/main', {
        templateUrl: 'main/main.html',
=======
        templateUrl: 'views/main.html',
>>>>>>> 4ac1921fb235734ce7a888231a3c12ebe12b4c07
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
