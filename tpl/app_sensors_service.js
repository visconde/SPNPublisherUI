app.factory('SensorsService', ['$http', '$timeout',  function($http, $timeout) {

      function Instance() {

        var vm = this;
        var SPN_URL = "http://localhost:8080/";
        var PUBLISH_TEMPERATURE_URL = "/PublishTemperature";
        vm.publishTemperature = publishTemperature;
        vm.getTemperature = getTemperature;

        init();

        function init() {;
          console.log("Init app sensors service");
        }

        function publishTemperature(temperature) {
          var temperatureObject = {};
          temperatureObject.temperature = temperature;

          $http.post(SPN_URL + PUBLISH_TEMPERATURE_URL, temperatureObject)
            .then(function(resp) {

              console.log("Response Received!");
              console.log(resp);

            }, function(resp) {

              console.log("Error!");
              console.log(resp);

            });
        }

        function getTemperature() {
          return 10;
        }

      }

      return {
        Instance: Instance
      }
  }]);
