// Conversion factors (relative to km/h)
const conversionFactors = {
  kmh: 1, // Kilometers per hour (base unit)
  mph: 0.621371, // Miles per hour
  ms: 0.277778, // Meters per second
  knots: 0.539957, // Knots
};

// Convert function
document
  .getElementById("speed-converter-form")
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

    // Convert input value to km/h first
    const valueInKmh = inputValue / conversionFactors[fromUnit];
    // Convert km/h to the target unit
    const convertedValue = valueInKmh * conversionFactors[toUnit];

    // Display result
    document.getElementById(
      "result"
    ).innerText = `${inputValue} ${fromUnit} = ${convertedValue.toFixed(
      4
    )} ${toUnit}`;
  });
