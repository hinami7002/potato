radio.onReceivedNumber(function (receivedNumber) {
    let ReceivedNumber = 0
    Potato = ReceivedNumber
})
input.onButtonPressed(Button.AB, function () {
    Potato = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (Potato > 0) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
let Potato = 0
Potato = 0
radio.setGroup(1)
basic.forever(function () {
    if (Potato == 0) {
        basic.showIcon(IconNames.Skull)
        if (Potato < 0) {
            basic.clearScreen()
        }
        if (Potato > 0) {
            basic.showIcon(IconNames.Chessboard)
            Potato += -1
        }
    }
})
