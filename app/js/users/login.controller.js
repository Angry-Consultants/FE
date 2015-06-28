;( function(){

  'use strict';
  angular.module('AMH')

  .controller('LoginCtrl', ['$scope', '$location', 'UsersFactory',
    function ($scope, $loction, UsersFactory) {

      $scope.login = function(user){

        UsersFactory.logMeIn(user).success( function(data){
          $location.path('/');

        });

      };

  }])

}());
