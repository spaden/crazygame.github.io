class psy {
    constructor(qst, opt, pnts) {
        this.qst = qst;
        this.opt = opt;
        this.pnts = pnts;
    }


}


app.controller("Fut", function($scope, $interval, $location) {


    var obj = [],
        sum = 0;
    var ser;

    var qst = ["Why did your parents choose the name you have now?", "How long is your name?", "What is it the first letter of your name?",
        "Is your name popular?", "Do you have a nickname?", " How do you feel about performing?",
        "How good was you at math?", "How do you usually feel when you're watching a highly emotional movie?",
        " What's the most important thing in a relationship for you?", " Have you ever been heartbroken?"
    ];

    var opt = [
        ["It sounds really good with my last name", "They named me after a family member", "My name has a beautiful meaning, so that was the main reason", "They chose this name because of their religion, it's traditional"],
        ["3 letters or less", "4 to 5 letters", "Between 6 and 7 letters", "It has 8 or 9 letters", "It's pretty long with more than 9 letters!"],
        ["A, J, K, N, X", "B, F, L, U, Z", "C, R, V, W, Y", "D, H, O, Q, S", "E, G, I, M, P, T"],
        ["Yeah, it's really popular!", "It's quite popular", "It's rather average", "It's kind of unusual", "It's really rare"],
        ["Yup, I have more than one! Actually, people rarely call me by my real name", "I have 1 or 2..", "Sure, I have one, but only a few people call me by it", "I have one, but, surprisingly, people rarely call me by it!", "No, not really..."],
        ["Love it! It's definitely something I'd love to do in the future!", "I really enjoy it, yes", "I'm not sure...", "I can do something like this, but only with my friends by my side", "Nope, that's certainly not my cup of tea"],
        ["Math comes naturally to me, so I'm pretty good at it!", "I was all right - not my strongest point but not my weakest one either", "I hated math with all my heart!"],
        ["I cry when it's sad, and I laugh when it's happy", "I definitely feel for the characters, follow the story carefully, and shed a tear from time to time", "I'm usually good at being emotionally stabe - even during the sad scenes", "I mostly appreciate the creative screenplay and amazing acting, but I rarely get emotional", "I'm not really that emotional"],
        ["Having fun together and feeling like you can be your true self around your partner", "Lifting each other up and being friends before anything else", "Having a deep understanding and creating a unit"],
        ["I get heartbroken pretty much every time I lose someone who has a special place in my heart", "Yup, and definitely more than once, twice, or even 3 times!", "Unfortunately, yes, this happened a few times", "Thankfully, I was in this situation only once", "No way! I'm good at protecting my heart"]
    ]
    var pnts = [
        [2, 5, 4, 3, 1],
        [1, 2, 3, 4, 5],
        [1, 5, 3, 4, 2],
        [1, 2, 3, 4, 5],
        [5, 4, 2, 3, 1],
        [5, 4, 2, 3, 1],
        [1, 3, 5],
        [5, 3, 4, 2, 1],
        [5, 3, 1],
        [5, 4, 3, 2, 1]
    ]

    var results = [
        ["You're pretty practical and reserved. You're independent to a fault and can do anything you put your mind to. Even though you aren't really looking for anything serious, you still wouldn't mind a partner who's as strong and responsible as you are but who can add a bit of spontaneity to your life at the same time."],
        ["You're probably a perfectionist. You like things done in a certain way and order. And your love life is the same: you know what works for you and what doesn't. All you need is someone who matches the image of the perfect man or woman in your head, someone as determined, calm, and idealistic as you are."],
        ["You’re a kind and social butterfly. Your perfect man or woman should be as laid-back as you are, someone who is witty, funny, and ready to explore the world with you."],
        ["Your love life is definitely very important to you. You know how much time and effort relationships consume, and you're willing to do everything necessary for someone who's worth it. You're also open to new people and experiences, which means you'll find your special someone in no time!"],
        ["You're highly emotional and very romantic. Your emotions are very bright and colorful: you cry easily, laugh easily, and tend to have a positive outlook on life! If anyone knows what love is, it's you. Therefore, you need someone who will treasure you and your huge, caring, kind heart."]
    ]

    for (var i = 0; i < qst.length; i++) {
        obj[i] = new psy(qst[i], opt[i], pnts[i]);
    }
    //console.log(obj);
    var nxt = 0,
        st = 0,
        idd;
    var current = obj[nxt];

    $scope.mark = function($event) {
        st = current.pnts[$event.target.value];
        idd = document.getElementById($event.target.id);
        console.log(st)
    }
    var dopt = ["one", "two", "three", "four", "five"];
    //$scope.cqst = current.qst[nxt];
    $scope.dqst = current.qst;
    $scope.go = function() {
        if (nxt == 9) {
            dresults()
        } else {
            if (idd) {
                var pt = idd;
                pt.checked = false;

            }
            //console.log("Makred")
            sum = sum + st;

            st = 0;
            nxt++;
            current = obj[nxt];
            for (var i = 0; i < current.opt.length; i++) {
                //  console.log(current.opt[nxt][i]);
                //console.log(current.opt[nxt]);
                var p = document.getElementById(dopt[i]);
                if (current.opt[i]) {
                    p.innerText = current.opt[i];
                } else {
                    p.innerHTMl = " ";
                }

                //console.log(current.qst);
            }
            if (current.opt.length == 3) {
                document.getElementById(dopt[3]).innerText = " "
                document.getElementById(dopt[4]).innerText = " "
            }
            $scope.dqst = current.qst;
            console.log(current.opt.length);
        }
        console.log("Nxt value = " + nxt)


    }

    $scope.before = function() {
        console.log(current.opt.length);
        for (var i = 0; i < current.opt.length; i++) {
            //  console.log(current.opt[nxt][i]);
            //console.log(current.opt[nxt]);
            var p = document.getElementById(dopt[i]);
            p.innerText = current.opt[i];
            //console.log(current.qst);
        }

    }
    var dresults = function() {
        var res;
        console.log(sum);
        switch (true) {
            case (sum >= 10 && sum <= 17):
                console.log(results[0]);
                res = 0;
                break;
            case (sum >= 18 && sum <= 26):
                console.log(results[1]);
                res = 1;
                break;
            case (sum >= 27 && sum <= 35):
                console.log(results[2]);
                res = 2;
                break;
            case (sum >= 36 && sum <= 44):
                console.log(results[3]);
                res = 3;
                break;
            case (sum >= 44):
                console.log(results[4]);
                res = 4;
                break;
            default:
                console.log("some error");
        }
        $location.path("/results/" + res);

    }
    var ser;
    $scope.before();
    var changeBack = function() {
        var img = ["http://localhost/img/natgirl1.jpg", "http://localhost/img/natgirl2.jpg", "http://localhost/img/natgirl3.jpg", "http://localhost/img/natgirl4.jpg", "http://localhost/img/natgirl5.jpg", "http://localhost/img/natgirl6.jpg", "http://localhost/img/natgirl7.jpg", "http://localhost/img/res1.jpg", "http://localhost/img/res2.jpg", "http://localhost/img/res3.jpg", "http://localhost/img/res4.jpg", "http://localhost/img/res5.jpg", "http://localhost/img/res6.jpg", "http://localhost/img/res7.jpg", "http://localhost/img/res8.jpg",
            "http://localhost/img/res9.jpg", "http://localhost/img/res10.jpg"
        ]
        ser = $interval(function() {
            var p = document.getElementById("backw");
            p.style.backgroundImage = `url(${img[Math.floor((Math.random() * 16) + 0)]})`
        }, 7000);


    }


    changeBack();


    console.log($location.path());

    $scope.$on('$destroy', function() {
        $interval.cancel(ser);
        // Do your cleanup here or call a function that does
    });

})