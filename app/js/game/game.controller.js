;( function(){

  'use strict';

  angular.module('AMH')

  .controller('GameCtrl', ['$scope',

    function ($scope) {

// $('myOjbect').css('background-image', 'url(' + imageUrl + ')');
var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);

world.createEntity({
  name: "player",
  shape: "square",
  width: 8,
  height: 8,
  image: "images/ceo.png",
  imageStretchToFit: true,
  density: 4,
  x: 0,
  onKeyDown: function(e) {
    this.applyImpulse(500, 60);
  }
});

world.createEntity({
  name: "ground",
  shape: "square",
  type: "static",
  color: "rgb(0,100,0)",
  width: 50,
  height: 0.5,
  y: 12

});

var block = {
  name: "block",
  shape: "square",
  color: "brown",
  width: 1,
  height: 5,
  image:'images/bricks.png',
  imageStretchToFit: true,
  imageOffsetY: -0.85,
  margin: 0,
  onImpact: function(entity, force) {
    if (entity.name() === "player") {
      this.color("black");
    }
  }
};

world.createEntity(block, {
  x: 15,
  imageOffsetY: -0.85
});

world.createEntity(block, {
  x: 17,
  imageOffsetY: -0.85
});

world.createEntity(block, {
  x: 15.5,
  y: 1,
  width: 4,
  height: 1,
  imageOffsetY: 0.5

});



  }])

}());
