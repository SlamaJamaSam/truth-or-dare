input.onButtonPressed(Button.A, function () {
    Display = randint(0, 1)
    if (Display == 0) {
        basic.showString("Truth")
    }
    if (Display == 1) {
        basic.showString("Dare")
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Arrow = randint(1, 4)
    if (Arrow == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (Arrow == 2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (Arrow == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (Arrow == 4) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
})
let Arrow = 0
let Display = 0
basic.showString("Hello! Wellcome to Truth or Dare")
