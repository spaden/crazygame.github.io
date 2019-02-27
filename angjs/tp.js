app.controller('Typing', function($scope, $timeout) {

    $scope.test = document.querySelector("#train").innerHTML.split(" ");;
    $scope.check = ""
    $timeout(function() {
        alert("times up");
        $scope.evaluate();
    }, 15000);
    $scope.results = "";
    $scope.evaluate = function() {
        var ck = $scope.check.split(" ");
        var count = 0;
        var words = []
        for (var i = 0; i < ck.length; i++) {
            if (ck[i] != $scope.test[i]) {
                words.push(ck[i]);
                count++;
            }
        }
        console.log(count);
        console.log(words);

        $scope.results = "Total mistakes " + count + "    " + "Mistakes spotted= " + words;
    }
})