var app = angular.module("myApp", ["ngRoute"]);

app.controller("updateCtrl", function($scope,$http,$location,$routeParams) {
  $scope.id = parseInt($routeParams.id);
  $scope.voornaam = $routeParams.voornaam;
  $scope.achternaam = $routeParams.achternaam;
  $scope.straat = $routeParams.straat;
  $scope.huisnummer = parseInt($routeParams.huisnummer);
  $scope.postcode = $routeParams.postcode;
  $scope.woonplaats = $routeParams.woonplaats;
  $scope.telefoonnummer = $routeParams.telefoonnummer;
  $scope.showData = function() {
    $http.get("getData.php").then(function(response){
      $scope.personen = response.data.records;
      $location.path("/");
    });
  }
  $scope.updatePerson = function() {
    $http.post("update.php", {
      'id' : $scope.id,
      'voornaam' : $scope.voornaam,
      'achternaam': $scope.achternaam,
      'straat': $scope.straat,
      'huisnummer': $scope.huisnummer,
      'postcode': $scope.postcode,
      'woonplaats': $scope.woonplaats,
      'telefoonnummer': $scope.telefoonnummer
    }).then(function() {
      $scope.showData();
    });
  }
});
app.controller("addCtrl", function($scope,$http,$location) {
  $scope.showData = function() {
    $http.get("getData.php").then(function(response){
      $scope.personen = response.data.records;
      $location.path("/");
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
      $scope.showData();
    });
  }
});
app.controller("persoonCtrl", function($scope,$http,$location,$routeParams){
  $scope.tijd = "Hover over rij"
  $scope.showData = function() {
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
      $scope.showData();
    });
  }
});
app.config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl : "./pages/overzicht.htm",
    controller: "persoonCtrl"
  })
  .when("/create", {
    templateUrl: "./pages/create.htm",
    controller: "addCtrl"
  })
  .when("/update/:id/:voornaam/:achternaam/:straat/:huisnummer/:postcode/:woonplaats/:telefoonnummer", {
    templateUrl: "./pages/update.htm",
    controller: "updateCtrl"
  })
  .when("/delete", {
    templateUrl: "./pages/delete.htm",
    controller: "persoonCtrl"
  });
});
