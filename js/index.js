var app = angular.module("pickNumbers", []);

app.controller("mainController", function($scope, $log){

    $scope.trimDigits = function(pickQuantity, digitOne, digitTwo, digitThree, digitFour){

        if(pickQuantity == 3)
            return [digitOne, digitTwo, digitThree];

        if(pickQuantity == 4)
            return [digitOne, digitTwo, digitThree, digitFour];
    }

    $scope.submit = function(){

        $log.info("pick quantity: " + $scope.pickQuantity);
        $log.info("matchType: " + $scope.matchType);

        $scope.trimmedDigits = $scope.trimDigits($scope.pickQuantity, $scope.digitOne, $scope.digitTwo, $scope.digitThree, $scope.digitFour);

        $log.info("digits: " + $scope.trimmedDigits);

        $log.info("submitting form...");
    };

});
