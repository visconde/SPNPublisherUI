app.controller('TemperatureCtrl', ['$scope', 'SensorsService', '$interval',
  function ($scope, SensorsService, $interval) {



        $scope.currentTemperature = 0;;
        $scope.currentPercentage = 0;  
        $scope.maxTemperature = 50;
        $scope.dangerTemperature = 35;
     
        // $scope.tempColor = '#0000ff';

        $scope.sensorsService = new SensorsService.Instance();
        $scope.currentTemperature = $scope.sensorsService.currentTemperature;

        $scope.increaseTemperature = function () {
            $scope.setTemperature($scope.currentTemperature + 1);
        }

        $scope.decreaseTemperature = function () {
            $scope.setTemperature($scope.currentTemperature - 1);
        }

        $scope.getTemperature = function () {
            $scope.sensorsService.getTemperature()
                .then(function () {
                    $scope.currentTemperature = $scope.sensorsService.currentTemperature;
                    $scope.currentPercentage = $scope.currentTemperature / $scope.maxTemperature * 100;

                });

        }


        $interval(function () {
            $scope.getTemperature();

        }, 2000);

      
      
      
        $scope.setTemperature = function (newTemp) {
            $scope.currentTemperature = newTemp;

            // Calcular Percantagem
            $scope.currentPercentage = $scope.currentTemperature / $scope.maxTemperature * 100;

           $scope.sensorsService.publishTemperature($scope.currentTemperature);

        }



        //init
        //$scope.setTemperature($scope.currentTemperature);
        $scope.getTemperature();
  }
]);