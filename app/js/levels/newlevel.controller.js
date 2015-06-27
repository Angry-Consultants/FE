;( function(){

  'use strict';

  angular.module('AMH')

  .controller('LevelCtrl', ['$scope','$location', 'LevelFactory',

    function ($scope, $location, LevelFactory) {

      $('.box').draggable({ grid: [20, 20], containment: '.grid'});




  }]);


}());
