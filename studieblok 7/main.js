var app = angular.module("myApp", []);
app.controller("optionCtrl", function($scope){
  $scope.colors = [
    {name: "Geel", fruits: ["Banaan", "Stervrucht"]},
    {name: "Rood", fruits: ["Bessen", "Aardbeien"]},
    {name: "Bruin", fruits: ["Kiwi"]},
    {name: "Groen", fruits: ["Appel"]}
  ];
});
app.controller("autoCtrl", function($scope){
  $scope.autos = [
    {merk: "Mercedes", kleur: "Rood", aantaldeuren: 5, kenteken: "19-GR-LL", prijs: 35000},
    {merk: "Audi", kleur: "Groen", aantaldeuren: 3, kenteken: "15-DR-GG", prijs: 27000},
    {merk: "Volkswagen", kleur: "Wit", aantaldeuren: 5, kenteken: "05-FE-PP", prijs: 15000},
    {merk: "Tesla", kleur: "Zwart", aantaldeuren: 5, kenteken: "12-CV-BB", prijs: 89000},
    {merk: "Bugatti", kleur: "Grijs", aantaldeuren: 3, kenteken:"08-MA-02", prijs: 120000}
  ];
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
});
