app.controller("Res", function($scope, $routeParams, $interval) {
    var results = [
        ["You're pretty practical and reserved. You're independent to a fault and can do anything you put your mind to. Even though you aren't really looking for anything serious, you still wouldn't mind a partner who's as strong and responsible as you are but who can add a bit of spontaneity to your life at the same time."],
        ["You're probably a perfectionist. You like things done in a certain way and order. And your love life is the same: you know what works for you and what doesn't. All you need is someone who matches the image of the perfect man or woman in your head, someone as determined, calm, and idealistic as you are."],
        ["You’re a kind and social butterfly. Your perfect man or woman should be as laid-back as you are, someone who is witty, funny, and ready to explore the world with you."],
        ["Your love life is definitely very important to you. You know how much time and effort relationships consume, and you're willing to do everything necessary for someone who's worth it. You're also open to new people and experiences, which means you'll find your special someone in no time!"],
        ["You're highly emotional and very romantic. Your emotions are very bright and colorful: you cry easily, laugh easily, and tend to have a positive outlook on life! If anyone knows what love is, it's you. Therefore, you need someone who will treasure you and your huge, caring, kind heart."]
    ]

    var soulmates = [
        "A, K, J, R, or B", "F, H, T, S and O", "E, C, L, X, V or W", "D, I, M, P or Q", "G, U, Y, N or Z "
    ]

    $scope.final = results[$routeParams.which].toString();
    $scope.name = soulmates[$routeParams.which]
    var img = ["http://localhost/img/res1.jpg", "http://localhost/img/res2.jpg", "http://localhost/img/res3.jpg", "http://localhost/img/res4.jpg", "http://localhost/img/res5.jpg", "http://localhost/img/res6.jpg", "http://localhost/img/res7.jpg", "http://localhost/img/res8.jpg",
        "http://localhost/img/res9.jpg", "http://localhost/img/res10.jpg"
    ]
    var elem = [document.getElementById("hpimg1"), document.getElementById("hpimg2"), document.getElementById("hpimg3")]
    var p = $interval(function() {
        elem[0].src = img[Math.floor((Math.random() * 9) + 0)]
        elem[1].src = img[Math.floor((Math.random() * 9) + 0)]
        elem[2].src = img[Math.floor((Math.random() * 9) + 0)]

    }, 6000)

    $scope.$on('$destroy', function() {
        $interval.cancel(p);
        // Do your cleanup here or call a function that does
    });

})