// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - 42)

}
function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264

}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
    }
    else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * .02
    }
    else if (distance > 2001 && distance <= 2499) {
        return 25
    }
    else {
        return "cannot travel that far"
    }

}