// Fetch exchange rates from an API
async function fetchExchangeRates() {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return null;
  }
}

// Convert function
document
  .getElementById("currency-converter-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const inputValue = parseFloat(document.getElementById("input-value").value);

    if (isNaN(inputValue)) {
      document.getElementById("result").innerText =
        "Please enter a valid number!";
      return;
    }

    // Fetch exchange rates
    const exchangeRates = await fetchExchangeRates();

    if (!exchangeRates) {
      document.getElementById("result").innerText =
        "Failed to fetch exchange rates. Please try again later.";
      return;
    }

    // Check if the selected currencies are available in the exchange rates
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
      document.getElementById("result").innerText = "Currency not supported!";
      return;
    }

    // Convert input value to USD first (base currency)
    const valueInUSD = inputValue / exchangeRates[fromCurrency];
    // Convert USD to the target currency
    const convertedValue = valueInUSD * exchangeRates[toCurrency];

    // Display result
    document.getElementById(
      "result"
    ).innerText = `${inputValue} ${fromCurrency} = ${convertedValue.toFixed(
      4
    )} ${toCurrency}`;
  });
