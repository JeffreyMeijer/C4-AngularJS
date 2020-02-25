var app = angular.module("myApp", []);
app.directive("hr", function() {     return {         template : "<h1>Made by a directive!</h1>"     }; });
app.controller("myCtrl", function($scope) {
  $scope.firstName = "Jeffrey";
  $scope.lastName = "Meijer";
});
