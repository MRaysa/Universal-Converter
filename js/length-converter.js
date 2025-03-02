document
  .getElementById("length-converter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const inputValue = parseFloat(document.getElementById("input-value").value);

    let result;

    // Conversion logic
    if (fromUnit === "meter") {
      if (toUnit === "kilometer") result = inputValue / 1000;
      else if (toUnit === "mile") result = inputValue * 0.000621371;
      else if (toUnit === "foot") result = inputValue * 3.28084;
      else result = inputValue; // meter to meter
    } else if (fromUnit === "kilometer") {
      if (toUnit === "meter") result = inputValue * 1000;
      else if (toUnit === "mile") result = inputValue * 0.621371;
      else if (toUnit === "foot") result = inputValue * 3280.84;
      else result = inputValue; // kilometer to kilometer
    } else if (fromUnit === "mile") {
      if (toUnit === "meter") result = inputValue * 1609.34;
      else if (toUnit === "kilometer") result = inputValue * 1.60934;
      else if (toUnit === "foot") result = inputValue * 5280;
      else result = inputValue; // mile to mile
    } else if (fromUnit === "foot") {
      if (toUnit === "meter") result = inputValue * 0.3048;
      else if (toUnit === "kilometer") result = inputValue * 0.0003048;
      else if (toUnit === "mile") result = inputValue * 0.000189394;
      else result = inputValue; // foot to foot
    }

    document.getElementById("result").innerText = `Result: ${result.toFixed(
      2
    )} ${toUnit}`;
  });
