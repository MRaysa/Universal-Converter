// Conversion factors (relative to liters)
const conversionFactors = {
  liters: 1,
  milliliters: 1000,
  gallons: 0.264172,
  cubicMeters: 0.001,
};

// Convert function
document
  .getElementById("volume-converter-form")
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

    // Convert input value to liters first
    const valueInLiters = inputValue / conversionFactors[fromUnit];
    // Convert liters to the target unit
    const convertedValue = valueInLiters * conversionFactors[toUnit];

    // Display result
    document.getElementById(
      "result"
    ).innerText = `${inputValue} ${fromUnit} = ${convertedValue.toFixed(
      4
    )} ${toUnit}`;
  });
