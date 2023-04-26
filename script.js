function calculate() {
    //Get input from user
    var amount = parseFloat(document.getElementById("amount").value);
    var service = document.getElementById("service").value;
    var split = parseFloat(document.getElementById("split").value);
    const bad = 0.05 * amount;
    const fair = 0.1 * amount;
    const good = 0.15 * amount;
    const excellent = 0.20 * amount;

    //perfrom the calculation based on the operator
    if (service == "bad") {
        var result =  (bad + amount) / split;
    }  else if (service == "good") {
        var result =  (good + amount) / split;
    } else if (service == "fair") {
        var result =  (fair + amount) / split;
    } else if (service == "excellent") {
        var result =  (excellent + amount) / split;
    } else {
        var result = "Invalid service";
}

// Display the result to the user
    document.getElementById("result").innerHTML = "$" + result;

    if (split > 1) {
        var result = result + "each";
    }
     else if (split == 1) {
        var result = "$" + result;
    } else {
        var result = "$0.00";
    }

    //Display bill split
    document.getElementById("split").innerHTML = "$" + result + "each";

}