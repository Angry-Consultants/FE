;( function(){

  'use strict';

  angular.module('AMH')

  .controller('LevelCtrl', ['$scope','$location', 'LevelFactory',

    function ($scope, $location, LevelFactory) {
      $('.box').draggable({
       snap: '#grid, div',
       snapMode: 'inner',
       helper: 'clone',
       revert: "invalid"

       });




      $('#grid').droppable({
        accept: '.box',
        drop: function(e, ui){

          if ($(ui.helper).hasClass('cloned')){
            
          }
            var stuff = $(ui.helper).clone();
            stuff.addClass('cloned');
            stuff.draggable({
              snap: '#grid, div',
              snapMode: 'inner'

          });
         $(this).append(stuff);

        }

      });

      $scope.postLevel = function (lvl) {
        LevelFactory.newLevel(lvl).success(
          function (data) {
            console.log(data);
          });
      };




  }]);


}());
