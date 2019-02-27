app.controller("Home", function($scope, $location) {
    $scope.testing = "Working"
    $scope.go = function() {
        $location.path("/views/marriage/index.html")
    }
})