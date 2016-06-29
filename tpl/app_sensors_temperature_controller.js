app.controller('TemperatureCtrl', ['$scope', function($scope) {



  $scope.currentTemperature = 20;

  $scope.maxTemperature = 50;
  $scope.currentPercentage = 10;



  $scope.increaseTemperature = function() {
    $scope.setTemperature($scope.currentTemperature + 1);
  }

  $scope.decreaseTemperature = function() {
    $scope.setTemperature($scope.currentTemperature - 1);
  }

  $scope.setTemperature = function(newTemp) {
    $scope.currentTemperature = newTemp;
    $scope.currentPercentage =$scope.currentPercentage +10;// ( $scope.currentTemperature / $scope.maxTemperature)*100;
  //  console.log($scope.currentPercentage);

  }

}]);
