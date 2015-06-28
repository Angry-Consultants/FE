;( function(){

  'use strict';

  angular.module('AMH')

  .factory('LevelFactory', ['$rootScope', '$http', 'RANDY',
   function ($rootScope, $http, RANDY) {

    var lvlEndpoint = 'http://10.0.0.177:3000/levels';
    
    $rootScope.coordinates = [];
    
    var newLevel = function (lvl) {

    var grid = $('.grid'),
          gTop = grid.offset().top,
          gLeft = grid.offset().left,
          cloned = $('.cloned'),
          offsetCollection = [];

    cloned.each(function() {
           offsetCollection.push($(this).offset());
      });


   offsetCollection.forEach( function(obj) {
        var objY = (obj.top - gTop)/25 >> 0;
        var objX = (obj.left - gLeft)/25 >> 0;
        $rootScope.coordinates.push({x: objX, y: objY, width: 2, height: 2});

      });

   var level = {
    title : lvl.title,
    blocks : $rootScope.coordinates
   };

    return $http.post(lvlEndpoint, level, RANDY.CONFIG);

    };

    return {

      newLevel : newLevel

    };
  }]);


}());
