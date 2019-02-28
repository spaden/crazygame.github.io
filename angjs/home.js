app.controller("Home", function($scope, $location, $interval) {
    var ser1;
    $scope.testing = "Working"
    $scope.go = function() {
        $location.path("/views/marriage/index.html")
    }

    var img = ["http://localhost/img/natgirl1.jpg", "http://localhost/img/natgirl2.jpg", "http://localhost/img/natgirl3.jpg", "http://localhost/img/natgirl4.jpg", "http://localhost/img/natgirl5.jpg", "http://localhost/img/natgirl6.jpg", "http://localhost/img/natgirl7.jpg", "http://localhost/img/res1.jpg", "http://localhost/img/res2.jpg", "http://localhost/img/res3.jpg", "http://localhost/img/res4.jpg", "http://localhost/img/res5.jpg", "http://localhost/img/res6.jpg", "http://localhost/img/res7.jpg", "http://localhost/img/res8.jpg",
        "http://localhost/img/res9.jpg", "http://localhost/img/res10.jpg"
    ]
    var changeBack = function() {
        var img = ["http://localhost/img/natgirl1.jpg", "http://localhost/img/natgirl2.jpg", "http://localhost/img/natgirl3.jpg", "http://localhost/img/natgirl4.jpg", "http://localhost/img/natgirl5.jpg", "http://localhost/img/natgirl6.jpg", "http://localhost/img/natgirl7.jpg", "http://localhost/img/res1.jpg", "http://localhost/img/res2.jpg", "http://localhost/img/res3.jpg", "http://localhost/img/res4.jpg", "http://localhost/img/res5.jpg", "http://localhost/img/res6.jpg", "http://localhost/img/res7.jpg", "http://localhost/img/res8.jpg",
            "http://localhost/img/res9.jpg", "http://localhost/img/res10.jpg"
        ]
        ser1 = $interval(function() {
            var p = document.getElementById("backw");
            p.style.backgroundImage = `url(${img[Math.floor((Math.random() * 16) + 0)]})`
        }, 7000);


    }


    changeBack();

    console.log($location.path());

    $scope.$on('$destroy', function() {
        $interval.cancel(ser1);
        // Do your cleanup here or call a function that does
    });

})