function getData() {

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

    let car = {
        brand: brand,
        model: model,
        year: year,
        color: color,
        automatic: automatic
    }
    console.log(car)
}
