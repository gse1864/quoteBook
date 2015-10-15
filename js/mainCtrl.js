var app = angular.module("quoteBook");

app.controller("mainCtrl", ["$scope", "dataService", function($scope, dataService) {
                            
    $scope.quotes = dataService.getData();
    $scope.addData = function(userInput) {
        dataService.addData(userInput);
        $scope.quotes = dataService.getData();
    }
    
}]); //end