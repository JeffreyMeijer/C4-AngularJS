var app = angular.module('myApp', []);
app.controller("testCtrl", function($scope){
$scope.names = [
  {Name: "Jeffrey", Country:"Netherlands"},
  {Name: "Dylan", Country:"Netherlands"},
  {Name: "Jeffrey S", Country:"Netherlands"}
]
});
var routing = angular.module('routing', ["ngRoute"]);
routing.config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl : "./home.htm"
  })
  .when("/overmij", {
    templateUrl: "./overmij.htm"
  })
  .when("/hobby", {
    templateUrl: "./hobby.htm"
  });
});
