const $currencyOne = document.getElementById("currency-one");
const $amount_one = document.getElementById("amount-one");
const $currencyTwo = document.getElementById("currency-two");
const $amount_two = document.getElementById("amount-two");

const $rate = document.getElementById("rate");
const $swap = document.getElementById("swap");

function calculator() {
    const currencyOne = $currencyOne.value;
    const currencyTwo = $currencyTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(resp => resp.json())
        .then(data => {
            const rate = data.rates[currencyTwo];

            $amount_two.value = ($amount_one.value * rate).toFixed(3);
            $rate.innerHTML = `1 ${currencyOne} = ${rate.toFixed(2)} ${currencyTwo}`;
        });
}

$currencyOne.addEventListener("change", calculator);
$amount_one.addEventListener("input", calculator);
$currencyTwo.addEventListener("change", calculator);
$amount_two.addEventListener("input", calculator);

$swap.addEventListener("click", () => {
    const temp = $currencyOne.value;
    
    $currencyOne.value = $currencyTwo.value;
    $currencyTwo.value = temp;

    calculator();
});
