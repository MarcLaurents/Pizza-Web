'use strict'

/* 
VARIABLES
*/

let sumMussarela = 0
let sumMix = 0
let sumPepperoni = 0
let saleMussarela = 0.0
let saleMix = 0.0
let salePpperoni = 0.0
let priceMussarela = 25.0
let priceMix = 30.0
let pricePepperoni = 35.0

let buttonSell = document.getElementById('sellButton')
let buttonRetrive = document.getElementById('retriveButton')
let buttonSheet = document.getElementById('exportButton')

/*
EVENTS
*/

buttonSell.addEventListener('click', sellFunction, false)
buttonRetrive.addEventListener('click', retriveFunction, false)
buttonSheet.addEventListener('click', sheetFunction, false)

/*
FUNCTIONS
*/

function sellFunction(e) {
  if (document.getElementById('mussarela').checked) {
    sumMussarela++
    saleMussarela += priceMussarela
    document.getElementById('quantityMussarela').innerHTML = sumMussarela
    document.getElementById('soldMussarela').innerHTML =
      saleMussarela.toFixed(2)
  } else if (document.getElementById('mix').checked) {
    sumMix++
    saleMix += priceMix
    document.getElementById('quantityMix').innerHTML = sumMix
    document.getElementById('soldMix').innerHTML = saleMix.toFixed(2)
  } else if (document.getElementById('pepperoni').checked) {
    sumPepperoni++
    salePpperoni += pricePepperoni
    document.getElementById('quantityPepperoni').innerHTML = sumPepperoni
    document.getElementById('soldPepperoni').innerHTML = salePpperoni.toFixed(2)
  }
}

function retriveFunction(e) {
  if (document.getElementById('mussarela').checked) {
    sumMussarela--
    saleMussarela -= priceMussarela
    if (sumMussarela < 0) {
      sumMussarela = 0
      saleMussarela = 0.0
    }
    document.getElementById('quantityMussarela').innerHTML = sumMussarela
    document.getElementById('soldMussarela').innerHTML = saleMussarela
  } else if (document.getElementById('mix').checked) {
    sumMix--
    saleMix -= priceMix
    if (sumMix < 0) {
      sumMix = 0
      saleMix = 0.0
    }
    document.getElementById('quantityMix').innerHTML = sumMix
    document.getElementById('soldMix').innerHTML = saleMix
  } else if (document.getElementById('pepperoni').checked) {
    sumPepperoni--
    salePpperoni -= pricePepperoni
    if (sumPepperoni < 0) {
      sumPepperoni = 0
      salePpperoni = 0.0
    }
    document.getElementById('quantityPepperoni').innerHTML = sumPepperoni
    document.getElementById('soldPepperoni').innerHTML = salePpperoni
  }
}

function sheetFunction(e) {
  TableToExcel.convert(document.getElementById('table'))
}
