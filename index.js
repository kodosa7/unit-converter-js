/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let firstRun = true
let inputFieldEl = document.getElementById("input-field-el").defaultValue = "42"
const convertBtn = document.getElementById("convert-btn")
const errorEl = document.getElementById("error-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

let valueToConvert = [42]  // default input field value on the first run

if (firstRun) {
    showResults()
}

inputFieldEl = document.getElementById("input-field-el")
valueToConvert = []
convertBtn.addEventListener("click", function () {
    valueToConvert.unshift(Number(inputFieldEl.value))
    console.log(Number(valueToConvert[0]))
    if (Number(valueToConvert[0]) < 0) {
        alert("Error! Cannot use negative expression!")
        return
    }
    if (isNaN(Number(valueToConvert[0]))) {
        alert("Error! Can only input decimal characters!")
        return
    }
    if (valueToConvert[0] === 0) {
        alert("Error! Cannot process zero or empty field!")
    }
    showResults()
})

function showResults() {
    let value = Number(valueToConvert[0].toFixed(2))

    lengthEl.textContent = `${value} meters = ${calcMetersFeet(value)[0]} feet | ${value} feet = ${calcMetersFeet(value)[1]} meters`
    volumeEl.textContent = `${value} liters = ${calcLitersGallons(value)[0]} gallons | ${value} gallons = ${calcLitersGallons(value)[1]} liters`
    massEl.textContent = `${value} kilograms = ${calcKilogramsPounds(value)[0]} pounds | ${value} pounds = ${calcKilogramsPounds(value)[1]} kilograms`

    firstRun = false
    valueToConvert = [Number(inputFieldEl.value)]
}

function calcMetersFeet(val) {
    return [(val / 3.281).toFixed(2), (val * 3.281).toFixed(2)]  // [ meters, feet ]
}

function calcLitersGallons(val) {
    return [(val / 0.264).toFixed(2), (val * 0.264).toFixed(2)]  // [ liters, gallons ]
}

function calcKilogramsPounds(val) {
    return [(val / 2.204).toFixed(2), (val * 2.204).toFixed(2)]  // [ kilograms, pounds ]
}