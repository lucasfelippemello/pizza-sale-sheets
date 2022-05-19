'use strict';

let addPepp = 0;
let addMush = 0;
let addCheese = 0;

let sellPepp = 0.00;
let sellMush = 0.00;
let sellCheese = 0.00;


let btnSale = document.getElementById('sales');
let btnChargeback = document.getElementById('chargeback');
let btnSheet = document.getElementById('export');

btnSale.addEventListener('click', sale, false);
btnChargeback.addEventListener('click', chargeback, false);
btnSheet.addEventListener('click', sheet, false);

function sale(e) {
    if(document.getElementById('pepperoni').checked) {
        addPepp = addPepp + 1;
        sellPepp = sellPepp + 15.00;
        document.getElementById('resultPepp').innerHTML = addPepp;
        document.getElementById('salePepp').innerHTML = sellPepp.toFixed(2);
    } else if(document.getElementById('mushrooms').checked) {
        addMush = addMush + 1;
        sellMush = sellMush + 17.00;
        document.getElementById('resultMush').innerHTML = addMush;
        document.getElementById('saleMush').innerHTML = sellMush.toFixed(2);
    } else if(document.getElementById('cheese').checked) {
        addCheese = addCheese + 1;
        sellCheese = sellCheese + 13.00;
        document.getElementById('resultCheese').innerHTML = addCheese;
        document.getElementById('saleCheese').innerHTML = sellCheese.toFixed(2);
    }
}

function chargeback(e) {
    if(document.getElementById('pepperoni').checked) {
        addPepp = addPepp - 1;
        sellPepp = sellPepp - 15.00;
        if(addPepp < 0) {
            addPepp = 0;
            sellPepp = 0.00;
        }
        document.getElementById('resultPepp').innerHTML = addPepp;
        document.getElementById('salePepp').innerHTML = sellPepp.toFixed(2);
    } else if(document.getElementById('mushrooms').checked) {
        addMush = addMush - 1;
        sellMush = sellMush - 17.00;
        if(addMush < 0) {
            addMush = 0;
            sellMush = 0.00;
        }
        document.getElementById('resultMush').innerHTML = addMush;
        document.getElementById('saleMush').innerHTML = sellMush.toFixed(2);
    } else if(document.getElementById('cheese').checked) {
        addCheese = addCheese - 1;
        sellCheese = sellCheese - 13.00;
        if(addCheese < 0) {
            addCheese = 0;
            sellCheese = 0.00;
        }
        document.getElementById('resultCheese').innerHTML = addCheese;
        document.getElementById('saleCheese').innerHTML = sellCheese.toFixed(2);
    }
}

function sheet(e) {
    TableToExcel.convert(document.getElementById('table'));
}
