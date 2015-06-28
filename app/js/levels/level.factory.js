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
          gLeft = grid.offset().left;
          cloned = $('.cloned');


    var offsetCollection = [];
    cloned.each(function() {
         offsetCollection.push(
           $(this).offset()
         );
    });
    var coordinates = [];

    offsetCollection.forEach( function(obj) {
      var yy = (obj.top - gTop)/25 >> 0;
      var xx = (obj.left - gLeft)/25 >> 0;
      coordinates.push({x: xx, y: yy})

    });




    };

    return {

    };
  }]);


}());
