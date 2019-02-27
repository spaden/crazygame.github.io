app.controller('Blink', function($scope, $timeout, $interval) {

    $scope.ar = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];


    var prev = "kal";
    var prev2 = "kal";
    var count = 0;
    var flag = 0;

    var p = "";
    $scope.stopTest = function() {
        $interval.cancel(p);
        $scope.orginalCount = "Orginal count =" + count;
    }


    $scope.reset = function() {
        count = 0;
        $scope.orginalCount = "Orginal count =" + 0;
    }


    $scope.takeTest = function() {

        p = $interval(function() {


            if (prev != "kal" && flag == 0) {
                prev.style.backgroundColor = "crimson";

            } else if (prev2 != "kal" && flag == 1) {
                prev.style.backgroundColor = "crimson";
                prev2.style.backgroundColor = "crimson";
            }

            if (count > 6) {
                flag = 1
            }

            var sel = "#" + $scope.ar[Math.floor((Math.random() * 15) + 0)];
            var sel2 = "#" + $scope.ar[Math.floor((Math.random() * 15) + 0)];
            var hd = document.querySelector(sel);
            var hd2 = document.querySelector(sel2);
            hd.style.backgroundColor = "black";
            if (flag != 0) {
                hd2.style.backgroundColor = "black";
                prev2 = hd2;
            }

            prev = hd;

            if (flag == 0) {
                count++;
            } else {
                count = count + 2;
            }

        }, 500);




    }




})