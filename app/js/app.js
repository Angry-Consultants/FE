;( function(){

  'use strict';

  angular.module('AMH', ['ngRoute'])

  .constant('PARSE', {
    URL: 'https://api.parse.com/1',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id' : '3bmWMbIZtEn49O1fjvCCDYdFnQwEirxkeMchcacU',
        'X-Parse-REST-API-Key' : 'Z6EHnm3il9BLyRCUSpj83A3IFkybObMj45sLm6hE'
      }
    }
  })

  .config( ['$routeProvider',
    function ($routeProvider) {

      $routeProvider.when('/', {
        templateUrl: 'js/levels/newlevel.tpl.html',
        controller: 'LevelCtrl'
      })

      .when('/register', {
        templateUrl: 'js/users/register.tpl.html',
        controller: 'RegisterCtrl'
      });

  }]);




}());
