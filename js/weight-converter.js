// Conversion factors (relative to kilograms)
const conversionFactors = {
  kilograms: 1,
  pounds: 2.20462,
  ounces: 35.274,
  grams: 1000,
};

// Convert function
document
  .getElementById("weight-converter-form")
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

    // Convert input value to kilograms first
    const valueInKilograms = inputValue / conversionFactors[fromUnit];
    // Convert kilograms to the target unit
    const convertedValue = valueInKilograms * conversionFactors[toUnit];

    // Display result
    document.getElementById(
      "result"
    ).innerText = `${inputValue} ${fromUnit} = ${convertedValue.toFixed(
      4
    )} ${toUnit}`;
  });
