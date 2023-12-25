const amountInput = document.querySelector("#amount");
const selectFirstCurrency = document.querySelector("#first-currency-option");
const selectSecondCurrency = document.querySelector("#second-currency-option");
const resultInput = document.querySelector("#result");
const convertBtn = document.querySelector("#convert-btn");

convertBtn.addEventListener("click", function() {
    
    const amount = Number(amountInput.value.trim());

    const firstOptionValue = selectFirstCurrency.options[selectFirstCurrency.selectedIndex].textContent;

    const secondOptionValue = selectSecondCurrency.options[selectSecondCurrency.selectedIndex].textContent;

fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_aLxkj46Qjjo0F5NgMaTqkC20NJwkNvx1ZMxcXwRx&base_currency=${firstOptionValue}`)



.then((response) => response.json())
.then((data)=> {
    resultInput.value = (amount * data.data[secondOptionValue]).toFixed(3)
})
.catch((err) => console.log(err))
 })
