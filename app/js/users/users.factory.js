;( function(){

  'use strict';

  angular.module('AMH')

  .factory('UsersFactory', ['$http', function ($http) {

    var endpoint = 'http://angry-cons.herokuapp.com/users/add'
    var User = function(obj){
      this.name = obj.name;
      this.username = obj.username;
      this.password = obj.password;
      this.email = obj.email;
    };

    var addUser = function(user){

      var u = newUser(user);

      return $http.post(endpoint, u);

    };

    var logMeIn = function(user){

      return $http.post(endpoint, user);

    };

    return {

      addUser : addUser,
      logMeIn : logMeIn

    };
  }])

}());
