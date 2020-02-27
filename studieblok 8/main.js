var app = angular.module('myApp', []);
app.controller("blokCtrl", function($scope){
  $scope.kleur = "Geen";
  $scope.switch = true;
  $scope.roodcount = 0;
  $scope.blauwcount = 0;
  $scope.groencount = 0;
});
