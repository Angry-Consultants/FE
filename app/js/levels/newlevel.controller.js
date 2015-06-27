;( function(){

  'use strict';

  angular.module('AMH')

  .controller('LevelCtrl', ['$scope','$location', 'LevelFactory',

    function ($scope, $location, LevelFactory) {

      $('.box').draggable();
      var area = $('.grid');

for ( var i = 0; i < 400; i ++) {
  area.append('<div class="block"></div>');
}



  }]);


}());
