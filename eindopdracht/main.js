var app = angular.module("myApp", ["ngRoute"]);
app.controller("persoonCtrl", function($scope,$http,$location){
  $scope.voornaam;
  $scope.achternaam;
  $scope.straat;
  $scope.huisnummer;
  $scope.postcode;
  $scope.woonplaats;
  $scope.telefoonnummer;
  $scope.showData = function () {
    $http.get("getData.php").then(function(response){
      $scope.personen = response.data.records;
      $location.path("/");
    });
  }
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
  $scope.deletePerson = function(id) {
    id = parseInt(id);
    console.log(id);
    $http.post("delete.php", {
      'id': id,
    }).then(function() {
      console.log("reloading");
      $scope.showData();
    });
  }
  $scope.addPerson = function() {
    $http.post("add.php", {
      'voornaam': $scope.voornaam,
      'achternaam': $scope.achternaam,
      'straat': $scope.straat,
      'huisnummer': $scope.huisnummer,
      'postcode': $scope.postcode,
      'woonplaats': $scope.woonplaats,
      'telefoonnummer': $scope.telefoonnummer
    }).then(function(){
      console.log("reloading");
      $scope.showData();
    });
  }
});
app.config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl : "./pages/overzicht.htm"
  })
  .when("/create", {
    templateUrl: "./pages/create.htm"
  })
  .when("/update", {
    templateUrl: "./pages/update.htm"
  })
  .when("/delete", {
    templateUrl: "./pages/delete.htm"
  });
});
