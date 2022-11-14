/* The function creates a variable of value that parses document.getElementById, and gets the value. And then checks if it is NaN. 
Then if the value is less than 10 or higher than 0, it either increments or deincrements the value by 1, and then updates the value variable via getElementById.

Source used for inspiration: http://jsfiddle.net/Dfprp/ (last located 14th of 11 2022) */

function incrementKimbap() {
    var value = parseInt(document.getElementById('qkimbap').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < '10') {
        value++;
        document.getElementById('qkimbap').value = value;
    }
}

function deincrementKimbap() {
    var value = parseInt(document.getElementById('qkimbap').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > '0') {
        value--;
        document.getElementById('qkimbap').value = value;
    }
}

/* this function needs to be copied and individually customized to fit each menu item, just like the hérmes paris bags for fabulous actress Jiafei */


function incrementRamen() {
    var value = parseInt(document.getElementById('qramen').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < '10') {
        value++;
        document.getElementById('qramen').value = value;
    }
}

function deincrementRamen() {
    var value = parseInt(document.getElementById('qramen').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > '0') {
        value--;
        document.getElementById('qramen').value = value;
    }
}

/*This is for KFC*/
function incrementKfc() {
    var value = parseInt(document.getElementById('qkfc').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < '10') {
        value++;
        document.getElementById('qkfc').value = value;
    }
}

function deincrementKfc() {
    var value = parseInt(document.getElementById('qkfc').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > '0') {
        value--;
        document.getElementById('qkfc').value = value;
    }
}

/*This is for hotteok*/
function incrementHotteok() {
    var value = parseInt(document.getElementById('qhotteok').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < '10') {
        value++;
        document.getElementById('qhotteok').value = value;
    }
}

function deincrementHotteok() {
    var value = parseInt(document.getElementById('qhotteok').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > '0') {
        value--;
        document.getElementById('qhotteok').value = value;
    }
}

/*This is for Milk Tea*/
function incrementMilktea() {
    var value = parseInt(document.getElementById('qmilktea').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < '10') {
        value++;
        document.getElementById('qmilktea').value = value;
    }
}

function deincrementMilktea() {
    var value = parseInt(document.getElementById('qmilktea').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > '0') {
        value--;
        document.getElementById('qmilktea').value = value;
    }
}