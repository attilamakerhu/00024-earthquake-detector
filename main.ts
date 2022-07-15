radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    }
})
radio.setGroup(43)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        radio.sendValue("shake", 1)
    } else {
        radio.sendValue("shake", 0)
    }
})
