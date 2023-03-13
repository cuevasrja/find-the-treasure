const WIDTH = 400
const HEIGTH = 400

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGTH)
}

const $map = document.getElementById("map")
const $distance = document.getElementById("distance")
let clicks = 0

$map.addEventListener('click', (e) => {
    clicks++
    let distance = getDistance(e, target)
    let distanceHint = getDistanceHint(distance);
    $distance.innerText = distanceHint
    if(distance < 20){
        alert(`Has encontrado el tesoro en ${clicks} clicks`)
        location.reload()
    }
})