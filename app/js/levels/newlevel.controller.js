;( function(){

  'use strict';

  angular.module('AMH')

  .controller('LevelCtrl', ['$scope','$location', 'LevelFactory',

    function ($scope, $location, LevelFactory) {

      $('.box').draggable({
        grid: [25, 25],
        helper: "clone"

      });

      $('#grid').droppable({
        accept: '.box',
        drop: function(event){
          console.log(event);
        }

      });



  }]);


}());
