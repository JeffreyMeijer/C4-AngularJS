var app = angular.module("myApp", []);
app.controller("optionCtrl", function($scope){
  $scope.colors = [
    {name: "Geel", fruits: ["Banaan", "Stervrucht"]},
    {name: "Rood", fruits: ["Bessen", "Aardbeien"]},
    {name: "Bruin", fruits: ["Kiwi"]},
    {name: "Groen", fruits: ["Appel"]}
  ];
});
