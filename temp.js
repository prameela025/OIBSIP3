function tempConvert() {
    var from = document.getElementById("in").value;
    var to = document.getElementById("out").value;
    var input = parseFloat(document.getElementById("inp").value);
    var output;
    if(from == to){
        output = input;
    }
    else if (from=="celsius"){
        if (to=="kelvin"){
            output = input + 273.15;
        }
        else{
            output = (input * 9/5) + 32;
        }
    }
    else if (from == "kelvin"){
        if (to == "celsius"){
            output = input - 273.15;
        }
        else{
            output = (input - 273.15) * 9/5 + 32;
        }
    }
    else if (from == "fahrenheit"){
        if (to == "celsius"){
            output = (input - 32) * 5/9;
        }
        else if (to == "kelvin"){
            output = (input - 32) * 5/9 + 273.15;
        }
    }
    document.getElementById("outp").innerHTML = output.toFixed(2);
}