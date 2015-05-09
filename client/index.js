'use strict';
angular.module('poseidon', ['firebase', 'ui.router'])
.controller('myoCtrl', function($scope){
var myMyo = Myo.create();
var makeFist = false;
myMyo.on('connected', function () {
    myMyo.setLockingPolicy('none');
});
/*
To-Do:

1.unlock
2.implement second listener

*/
var left = 0;
var right = 0;

  myMyo.on('wave_in', function(){
    left+=1;
    if(left>=2){
      console.log('LEFT');
      left = 0;
    }
  });
  myMyo.on('wave_out', function(){
    right+=1;
    if(right>=2){
      console.log('RIGHT');
      right = 0;
    }
  });
});
