function convert() {
    const c_input = document.getElementById('celsius');
    let celsius_temp = c_input.value;

    if (isNaN(Number(celsius_temp))) {
        window.alert("The temperature must be a number !");
        return;
    }
    let fahren_temp = 9 * celsius_temp / 5 + 32.0;
    const f_span = document.getElementById('fahrenheit');
    f_span.innerHTML = fahren_temp;
    f_span.style.color = getColor(celsius_temp);
}

function getColor(temp) {
    let my_color = "black";
    switch (true) {
        case (temp < 20):
            my_color = "blue";
            break;
        case (temp > 20 && temp <= 35):
            my_color = "orange";
            break;

        case (temp > 35 && temp <= 42):
            my_color = "red";
            break;
    }
    console.log("The color corresponding to the tempertaure : " + temp + " is " + my_color);
    return my_color;
}