;( function(){

  'use strict';

  angular.module('AMH', ['ngRoute'])

  .constant('RANDY', {
    URL: '',
    CONFIG: {
      headers: {
        'Content-Type' : 'application/json',
      }
    }
  })

  .config( ['$routeProvider',
    function ($routeProvider) {

      $routeProvider.when('/', {
        templateUrl: 'js/levels/newlevel.tpl.html',
        controller: 'LevelCtrl'
      })
      .when('/signup', {
        templateUrl: 'js/users/signup.tpl.html',
        controller: 'SignUpCtrl'
      })
      .when('/login', {
        templateUrl: 'js/users/login.tpl.html',
        controller: 'LoginCtrl'
      })
      .when('/play',{
        templateUrl: 'js/game/game.tpl.html',
        controller: 'GameCtrl'
      });

  }]);




}());
