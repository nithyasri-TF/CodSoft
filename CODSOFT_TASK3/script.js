window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");

    container.addEventListener("click", function(e) {
        buttonClick(e.target.id);
    });

    var calc = document.getElementById("Button=");
    calc.addEventListener("click", calculate);

    var C = document.getElementById("ButtonC");
    C.addEventListener("click", erase);

    function buttonClick(buttonId) {
        if (buttonId !== "ButtonC" && buttonId !== "Button=") {
            var button = document.getElementById(buttonId);
            var s = buttonId.replace("Button", "");
            entries(s);
        }
    }

    function entries(s) {
        if (input.value === "0" && s !== "." && s !== "(") {
            input.value = s;
        } else {
            input.value += s;
        }
    }

    function calculate() {
        try {
            input.value = eval(input.value.replace(/x/g, '*').replace(/%/g, '/100'));
        } catch (e) {
            alert("Invalid Expression");
            input.value = "";
        }
    }

    function erase() {
        input.value = "";
    }
};
