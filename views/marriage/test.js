document.writeln("fuck you bastard");
document.getElementsByClassName("fuck").onclick = function() {
    alert("hey");
};
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
    kalyan = 10;
    constructor(im, qst1) {
        this._name = "kalyan";
        this._image = im;
        this._question = qst1;
    }
    im() {
        return this._name;
    }
    get qst1() {
        return this._question;
    }
}


function setimages() {
    var imgobj = new Array();
    var img = new Array();
    img = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];
    var qs = new Array();
    qs[0] = [30, 10, 20];
    qs[1] = [10, 30, 20];
    qs[2] = [30, 20, 10];
    qs[3] = [20, 10, 30];
    qs[4] = [10, 30, 20];

    for (var i = 0; i < img.length; i++) {
        imgobj = new img(img[i], qs[i]);
    }
}


function setquestions() {
    var ob = new Array(4);
    alert("called quest");
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
var netstg = 0;

function testing() {
    alert('hey');

}