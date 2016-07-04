app.factory('SensorsService', ['$http', '$timeout','$q' , function ($http, $timeout,$q) {

    function Instance() {

        var vm = this;
        var SPN_URL = "http://192.168.2.108:8080/SPNDemo";
        var PUBLISH_TEMPERATURE_URL = "/Temperature";
        vm.publishTemperature = publishTemperature;
        vm.getTemperature = getTemperature;
        vm.currentTemperature = 10;

        init();

        function init() {;
            console.log("Init app sensors service");
        }

        function publishTemperature(temperature) {
            var temperatureObject = {};
            temperatureObject.temperature = temperature;

            $http.post(SPN_URL + PUBLISH_TEMPERATURE_URL, temperatureObject)
                .then(function (resp) {

                    console.log("POST Response Received!");

                    console.log(resp);

                }, function (resp) {

                    console.log("Error!");
                    console.log(resp);

                });
        }

        function getTemperature() {
            var q = $q.defer();

            $http.get(SPN_URL + PUBLISH_TEMPERATURE_URL)
                .then(function (resp) {
                    vm.currentTemperature = resp.data.temperature;


                    console.log("GET Reponse - new temp:" + vm.currentTemperature)

                    console.log(resp.data);
                    q.resolve(resp.data.temperature);

                }, function (resp) {
                    console.log("Error!");
                    console.log(resp);
                    q.reject(resp)

                });
            return q.promise;
        }

    }

    return {
        Instance: Instance
    }
  }]);