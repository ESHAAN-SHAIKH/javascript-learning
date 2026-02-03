function convert() {
    let temp = document.getElementById("temp").value;
    let unit = document.getElementById("unit").value;
    let output = document.getElementById("output");

    if (temp === "") {
        output.innerText = "Enter a temperature";
        return;
    }

    temp = Number(temp); // convert string to number
    let converted;

    if (unit === "CTOF") {
        converted = (temp * 9 / 5) + 32;
        output.innerText = `${temp} °C = ${converted.toFixed(2)} °F`;
    } else {
        converted = (temp - 32) * (5 / 9);
        output.innerText = `${temp} °F = ${converted.toFixed(2)} °C`;
    }
}
