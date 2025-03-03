// Conversion factors (relative to square meters)
const conversionFactors = {
  squareMeters: 1,
  squareFeet: 10.7639,
  acres: 0.000247105,
  hectares: 0.0001,
};

// Convert function
document
  .getElementById("area-converter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const inputValue = parseFloat(document.getElementById("input-value").value);

    // Check if the input value is a valid number
    if (isNaN(inputValue)) {
      document.getElementById("result").innerText =
        "Please enter a valid number!";
      return;
    }

    // Convert input value to square meters first
    const valueInSquareMeters = inputValue * conversionFactors[fromUnit];
    // Convert square meters to the target unit
    const convertedValue = valueInSquareMeters / conversionFactors[toUnit];

    // Display result with up to 4 decimal places
    document.getElementById(
      "result"
    ).innerText = `Result: ${convertedValue.toFixed(4)} ${toUnit}`;
  });
