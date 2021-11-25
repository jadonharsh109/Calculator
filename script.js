// let one = document.getElementById("1");
// let two = document.getElementById("2");
// let three = document.getElementById("3");
// let four = document.getElementById("4");
// let five = document.getElementById("5");
// let six = document.getElementById("6");
// let seven = document.getElementById("7");
// let eight = document.getElementById("8");
// let nine = document.getElementById("9");
// let zero = document.getElementById("0");
// let plus = document.getElementById("plus");
// let minus = document.getElementById("minus");
// let multiply = document.getElementById("multiply");
// let divide = document.getElementById("divide");
// let mod = document.getElementById("mod");
// let ac = document.getElementById("ac");
// let bracket = document.getElementById("bracket");
// let equal = document.getElementById("equal");
// let back = document.getElementById("back");
// let decimel = document.getElementById("decimel");
// let input = document.getElementById("input");
// let output = document.getElementById("output");



function gethistory() {
    return document.getElementById("output-history").innerText;
}
function printhistory(num) {
    document.getElementById("output-history").innerText = num;
}
function input() {
    return document.getElementById("input-value").innerText;
}
function printinput(num) {
    if (num == "") {
        document.getElementById("input-value").innerText = num;
    }
    else {
        document.getElementById("input-value").innerText = getformattednumber(num);
    }
}
function getformattednumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en")
    return value;
}
function reversenumberformat(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operators");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="erase"){
            printhistory("");
            printinput("");
        }
        else if(this.id=="back"){
            var output = reversenumberformat(input()).toString();
            output = output.substr(0,output.length-1);
            printinput(output);
        }
        else{
            var output = input();
            var history = gethistory();
            if (output!=""){
                output = reversenumberformat(output);
                history = history+output;
                if (this.id=="="){
                    var result = eval(history);
                    printinput(result);
                    printhistory("");
                }
                else{
                    history= history+ this.id;
                    printhistory(history);
                    printinput("");

                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reversenumberformat(input());
        if(output!=NaN){
            // if output is number
            output = output+this.id;
            printinput(output);
        }
    })
}
