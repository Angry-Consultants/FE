;( function(){

  'use strict';

  angular.module('AMH', ['ngRoute'])

  .config( ['$routeProvider',
    function ($routeProvider) {

      $routeProvider.when('/', {
        templateUrl: 'js/levels/newlevel.tpl.html',
        controller: 'LevelCtrl'
      });

  }]);




}());
