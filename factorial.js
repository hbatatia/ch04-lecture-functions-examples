function calculate_factorial() {
    const num_input = document.getElementById('numberID');
    let int_value = num_input.value;

    if (isNaN(Number(int_value))) {
        window.alert("Factorial can only be calculated for integer numbers !");
        return;
    }
    let factorial_value = factorial(int_value);

    const factorial_span = document.getElementById('factorialID');
    factorial_span.innerHTML = factorial_value;
}

function factorial(n) {
    //this function is recursive
    if (n <= 2) {
        if (n == 0) {
            return 1;
        }
        return n;
    }
    return n * factorial(n - 1);
}