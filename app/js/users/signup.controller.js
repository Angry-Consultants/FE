;( function(){

  'use strict';

  angular.module('AMH')

  .controller('SignUpCtrl', ['$scope', '$location', 'UsersFactory',

    function ($scope, $location, UsersFactory) {

      $scope.newUser= function(user){
        UsersFactory.addUser(user).success( function(data){
          console.log(data);
        });
      };


  }]);


}());
