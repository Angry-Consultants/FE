;( function(){

  'use strict';

  angular.module('AMH')

  .factory('LevelFactory', [function () {

    var Level = function(obj){
      this.title = obj.title;
    };

    var blockFunction = function () {

    var grid = $('.grid'),
          gTop = grid.offset().top,
          gLeft = grid.offset().left,
          cloned = $('.cloned'),
          coordinates = [],
          offsetCollection = [];



    cloned.each(function() {
           offsetCollection.push($(this).offset());


    offsetCollection.forEach( function(obj) {
        var objY = (obj.top - gTop)/25 >> 0;
        var objX = (obj.left - gLeft)/25 >> 0;
        coordinates.push({x: objX, y: objY});

      });

    });







    };

    return {

    };
  }]);


}());
