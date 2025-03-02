// Conversion factors (relative to seconds)
const conversionFactors = {
  seconds: 1,
  minutes: 60,
  hours: 3600,
  days: 86400,
  weeks: 604800,
};

// Convert function
document
  .getElementById("time-converter-form")
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

    // Convert input value to seconds first
    const valueInSeconds = inputValue * conversionFactors[fromUnit];
    // Convert seconds to the target unit
    const convertedValue = valueInSeconds / conversionFactors[toUnit];

    // Display result
    document.getElementById(
      "result"
    ).innerText = `${inputValue} ${fromUnit} = ${convertedValue.toFixed(
      4
    )} ${toUnit}`;
  });
