class qp {
    constructor(qst, colr) {
        this._question = qst;
        this._colors = colr;
    }
    get colors() {
        return this._colors;
    }
    get question() {
        return this._question;
    }


}
class img {

    constructor(im, qst1) {

        this._image = im;
        this._question = qst1;
    }
    get images() {
        return this._image;
    }
    get qst() {
        return this._question;
    }
}

var imgobj;

function setimages() {
    imgobj = new Array(4);
    var img = new Array(4);

    img = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];



    for (var i = 0; i < img.length; i++) {
        imgobj[i] = new img(img[i], qs[i]);
    }
    var l = imgobj[0].qst;
    alert(l[0]);


}

var ob;
var st1 = 0,
    st2 = 0;

function setquestions() {
    ob = new Array(4);

    var a = new Array(4);
    var p = new Array(4);

    a[0] = "Choose your blue";
    a[1] = "Choose your Red";
    a[2] = "Choose your yellow";
    a[3] = "Choose your Violet";
    a[4] = "Choose your Orange";
    p[0] = ["#97FBEC", "#2486FB", "#122EF9"];
    p[1] = ["#E3451B", "#FF5733", "#C91F09"];
    p[2] = ["#FCE104", "#DFD264", "#AD9E24"];
    p[3] = ["#BF09FC", "#BF79D6", "#6C2A82"];
    p[4] = ["#EF8224", "#F2A349", "#F76E0F"];
    for (var i = 0; i < a.length; i++) {
        ob[i] = new qp(a[i], p[i]);
    }



}
var sum = 0;

function test() {


    if (st1 <= 4) {
        setquestions();
        var tocolor = ob[st1].colors;
        document.getElementById("question").innerHTML = ob[st1].question;
        document.getElementById("op1").style.backgroundColor = tocolor[0];

        document.getElementById("op2").style.backgroundColor = tocolor[1];
        document.getElementById("op3").style.backgroundColor = tocolor[2];

        setone();
        st1++;


    } else {

        settwo();


    }

}

function settwo() {
    document.getElementById("hd1").style.display = "none";

    document.getElementById("hd2").style.display = "block";
    //document.getElementById("question").innerHTML = "Do you like the Picture?";
    // document.getElementById("h").style.display = "none";
    //document.getElementById("h1").style.display = "none";
    //document.getElementById("h2").style.display = "none";
    //document.getElementById("whats").style.display = "block";
    document.getElementById("toimg").src = "one.jpg";


    // document.getElementsByClassName("whats").style.display = "block";

}



function setone() {

    if (document.getElementById("one").checked) {
        sum = sum + 10;
        document.getElementById("one").checked = false;
    } else if (document.getElementById("two").checked) {
        sum = sum + 20;
        document.getElementById("two").checked = false;
    } else if (document.getElementById("three").checked) {
        sum = sum + 30;
        document.getElementById("three").checked = false;
    }

}
var stl = 0;

function setnet() {
    var qs = new Array(4);
    qs[0] = [30, 10, 20];
    qs[1] = [10, 30, 20];
    qs[2] = [30, 20, 10];
    qs[3] = [20, 10, 30];
    qs[4] = [10, 30, 20];


    var t = qs;
    if (document.getElementById("choiceone").checked) {
        sum += t[stl][0];
        document.getElementById("choiceone").checked = false;
    } else if (document.getElementById("choicetwo").checked) {
        sum += t[stl][1];
        document.getElementById("choicetwo").checked = false;
    } else if (document.getElementById("choicethree").checked) {
        sum += t[stl][2];
        document.getElementById("choicethree").checked = false;
    }
    //  alert(sum);
    stl++;
}

document.getElementById("nex").onclick = function() {

    test();


};
var k = 0;
document.getElementById("nex1").onclick = function() {
    var ret = new Array();
    ret[0] = ["You will be married between 18 to 25 years of your age", "The colors that you have choosen shows that you have a burning desire to get married. For you getting married and raising babies is one of your main priorities."];
    ret[1] = ["You will be married between 26 to 35 years", "The colors that you have choosen shows that you see marriage as something normal and natural that everybody fucking does. You do not want to get married way too early, you wanna discover new things and enjoy life instead of cleaning the damn diapers."];
    ret[2] = ["You will be married between 36 to 45 years", "The colors that you have choosen shows that you are someone who is looking for wisdom, experience and stability before embarking on this fucking borzwasi shit. You certainly have other priorities in life, like realizing your dreams first, getting your hands on business with new ideas. Then marriage will come later."];
    ret[3] = ["You will be married between over 45 years", "The colors you have choosen show that you only wish to marry later in life because you see marriage as a prison and you still want to enjoy your freedom."];
    ret[4] = ["You will never marry sorry for that dude@@@", "The colors you have choosen shows that you see marriage in a very negative way. It doesn't fucking mean that you will not find your soulmate, instead you just don't want to get fucking married."];
    k++;
    setnet();

    var img = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];
    if (k <= 4) {
        document.getElementById("toimg").src = img[k];
    } else {
        document.getElementById("toshit1").style.display = "none";
        document.getElementById("toshit").style.display = "block";
        var sry = document.getElementById("result");
        var sry2 = document.getElementById("rt1");
        document.body.style.backgroundImage = "url('hot.jpg')";
        if (sum >= 100 && sum <= 120) {
            sry.innerHTML = ret[0][0];
            sry2.innerHTML = ret[0][1];
        } else if (sum >= 130 && sum <= 170) {
            sry.innerHTML = ret[1][0];
            sry2.innerHTML = ret[1][1];
        } else if (sum >= 180 && sum <= 220) {
            sry.innerHTML = ret[2][0];
            sry2.innerHTML = ret[2][1];
        } else if (sum >= 230 && sum <= 260) {
            sry.innerHTML = ret[3][0];
            sry2.innerHTML = ret[3][1];
        } else if (sum >= 270 && sum <= 300) {
            sry.innerHTML = ret[4][0];
            sry2.innerHTML = ret[4][1];
        }


    }



    //  setnet();

};
window.onload = function() {
    document.getElementById("nex").click();
};