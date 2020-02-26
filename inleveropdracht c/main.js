var app = angular.module("myApp", []);
app.controller("bedrijfCtrl", function($scope,$http){
  $http.get("auto.php").then(function(response){
    $scope.bedrijven = response.data.records;
  });
});
