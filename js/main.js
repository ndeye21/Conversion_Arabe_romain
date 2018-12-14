function romain(num) {
    const nbr = [
        ["M","MM","MMM","MMMM"],
        ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
        ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
        ["I","II","III","IV","V","VI","VII","VIII","IX"]
    ];

    num = num.toString().split("");
    for (var i = num.length; i < 4; i++){
        num.unshift(0);
    }
    for (var i = 3; i >= 0; i--){
        num[i] = nbr[i][num[i] -1];
    }

    return num.join("");
}

document.getElementById("btn").addEventListener("click", function() {
    var num = document.getElementById("num").value;
    num = parseInt(num);
    var result = document.getElementById("result");
    result.innerHTML = romain(num);
});