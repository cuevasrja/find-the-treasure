const getRandomNumber = size => {
    return Math.floor(Math.random()*size)
}

const getDistance = (e, target) => {
    const diffx = e.offsetX - target.x
    const diffy = e.offsetY - target.y
    return Math.sqrt(diffx**2 + diffy**2)
}

const getDistanceHint = distance => {
    if(distance < 30) return "Boiling Hot"
    else if(distance < 40) return "Really Hot"
    else if(distance <= 60) return "Hot"
    else if(distance <= 100) return "Warm"
    else if(distance <= 150) return "Cold"
    else if(distance <= 200) return "Really Cold"
    else return "Freezing"
}