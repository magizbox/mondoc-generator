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
        templateUrl: 'function/main.html',
        controller: 'MainCtrl'
      })
      .when('/main', {
        templateUrl: 'main/main.html',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
