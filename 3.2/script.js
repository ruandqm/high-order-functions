window.onload = function () {
    const readStorage = window.localStorage.getItem('car')
    if (readStorage != null) {
        console.log(JSON.parse(readStorage))
    }
}

function getData() {
    //Capture inputs values
    const brand = document.getElementById('brand').value
    const model = document.getElementById('model').value
    const year = document.getElementById('year').value
    const color = document.getElementById('color').value
    let automatic

    if (document.getElementById('yes').checked) {
        automatic = 'true'
    } else if (document.getElementById('not').checked) {
        automatic = 'false'
    }

    //create object car
    let car = {
        brand: brand,
        model: model,
        year: year,
        color: color,
        automatic: automatic
    }
    //save on local storage
    window.localStorage.setItem('car', JSON.stringify(car))
}
