let grades = 0
input.onGesture(Gesture.Shake, function () {
    grades = randint(80, 100)
    basic.showNumber(grades)
    if (grades >= 90) {
        basic.showString("A+")
    } else if (grades >= 85) {
        basic.showString("A")
    } else if (grades >= 80) {
        basic.showString("A-")
    }
})
basic.forever(function () {
	
})
