var app = angular.module("myApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider.when("/", {
            templateUrl: 'views/home.htm',
            controller: "Home"
        })
        .when("/typinggame", {
            templateUrl: 'views/typing.htm',
            controller: "Typing"
        })
        .when("/blink", {
            templateUrl: 'views/blink.htm',
            controller: "Blink"
        })
        .when("/fut", {
            templateUrl: 'views/fut.htm',
            controller: "Fut"
        })
        .when("/results/:which", {
            templateUrl: 'views/res.htm',
            controller: "Res"
        })

})