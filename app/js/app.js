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
      });

  }]);




}());
