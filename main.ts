input.onPinPressed(TouchPin.P0, function () {
    serial.writeNumber(1)
    control.waitMicros(1)
    serial.writeNumber(0)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    serial.writeNumber(0)
})
input.onPinPressed(TouchPin.P2, function () {
    serial.writeNumber(3)
    control.waitMicros(1)
    serial.writeNumber(0)
})
input.onPinPressed(TouchPin.P1, function () {
    serial.writeNumber(2)
    control.waitMicros(1)
    serial.writeNumber(0)
})
serial.setBaudRate(BaudRate.BaudRate9600)
