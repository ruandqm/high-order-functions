function readLocalStorage() {
    const storageData = JSON.parse(window.localStorage.getItem('car'))
    return (storageData)
}

//impress data on console when page is reloaded
window.onload = function () {
    if (readLocalStorage() != undefined) {
        console.log(readLocalStorage())
    }
}

function getFormData() {
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
    addCar(car)
}

function addCar(car) {
    let cars = readLocalStorage()
    if (!cars) {
        cars = []
    }
    cars.push(car)
    window.localStorage.setItem('car', JSON.stringify(cars))
}

