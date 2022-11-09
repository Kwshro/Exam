function incrementValue()
{
    var value = parseInt(document.getElementById('quantity-kimbap').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < '10') {
    value++;
    document.getElementById('quantity-kimbap').value = value;
    }
}

function deincrementValue()
{
    var value = parseInt(document.getElementById('quantity-kimbap').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > '0') {
    value--;
    document.getElementById('quantity-kimbap').value = value;
    }
}

/* this function needs to be copied and individually customized to fit each menu item, just like the hérmes paris bags for fabulous actress Jiafei */