app.controller('TemperatureCtrl', ['$scope', function($scope) {



  $scope.currentTemperature = 20;

  $scope.maxTemperature = 50;
  $scope.currentPercentage = 10;
  $scope.tempColor = '#00FF00';



  $scope.increaseTemperature = function() {
    $scope.setTemperature($scope.currentTemperature + 1);
  }

  $scope.decreaseTemperature = function() {
    $scope.setTemperature($scope.currentTemperature - 1);
  }

  $scope.setTemperature = function(newTemp) {
    $scope.currentTemperature = newTemp;
    $scope.currentPercentage = $scope.currentTemperature / $scope.maxTemperature * 100;
    console.log($scope.currentPercentage);
  if ($scope.currentPercentage > 65){
      $scope.tempColor ="#0000FF";
        console.log("blue");
  }
  else{
      console.log("#FF0055");
      $scope.tempColor = "#FF0055";
  }

  }
$scope.setTemperature(20);
}]);
