app.controller('TemperatureCtrl', ['$scope', 'SensorsService',
  function($scope, SensorsService) {



    $scope.currentTemperature = 20;
    $scope.maxTemperature = 50;
    $scope.currentPercentage = 10;
    // $scope.tempColor = '#0000ff';

    $scope.sensorsService = new SensorsService.Instance();

    $scope.increaseTemperature = function() {
      $scope.setTemperature($scope.currentTemperature + 1);
    }

    $scope.decreaseTemperature = function() {
      $scope.setTemperature($scope.currentTemperature - 1);
    }

    $scope.calculateColor = function(percent) {
      var ctx = this.renderer.getCtx();
      var canvas = this.renderer.getCanvas();
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "#ffe57e");
      gradient.addColorStop(1, "#de5900");
      return gradient;
    }
    
    $scope.setTemperature = function(newTemp) {
      $scope.currentTemperature = newTemp;

      // Calcular Percantagem
      $scope.currentPercentage = $scope.currentTemperature / $scope.maxTemperature * 100;

      //calcular cor, nao funciona
      // if ($scope.currentPercentage > 65) {
      //   $scope.tempColor = "#ff0000";
      //   console.log("red");
      // } else {
      //   console.log("#0000ff");
      //   $scope.tempColor = "#0000ff";
      // }

      $scope.sensorsService.publishTemperature($scope.currentTemperature);

    }

    //init
    $scope.setTemperature($scope.currentTemperature);
  }
]);
