// Conversion functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}

function kelvinToFahrenheit(kelvin) {
  return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

// Convert function
document
  .getElementById("temperature-converter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const inputValue = parseFloat(document.getElementById("input-value").value);

    if (isNaN(inputValue)) {
      document.getElementById("result").innerText =
        "Please enter a valid number!";
      return;
    }

    let result;
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      result = celsiusToFahrenheit(inputValue);
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      result = fahrenheitToCelsius(inputValue);
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
      result = celsiusToKelvin(inputValue);
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
      result = kelvinToCelsius(inputValue);
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      result = fahrenheitToKelvin(inputValue);
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      result = kelvinToFahrenheit(inputValue);
    } else {
      result = inputValue; // Same unit
    }

    // Display result
    document.getElementById(
      "result"
    ).innerText = `${inputValue} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
  });
