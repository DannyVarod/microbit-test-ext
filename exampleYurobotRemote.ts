/**
 * Joystick example
 */

// Initialize remote
uxRemotes.initializeYurobotRemote()

// Show user that the remote is on and ready
basic.showIcon(IconNames.Pitchfork)

basic.forever(function () {
    let yx: string = Math.round(uxRemotes.joystickY(512)) + ',' + Math.round(uxRemotes.joystickX(512))
    basic.showString(yx)
})

input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    uxDisplays.setAllOnboardPixels(0, 0, 0)
    uxDisplays.setOnboardPixel1D(0, 0, 0, 100)
    uxDisplays.refreshOnboardPixels()
})

input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    uxDisplays.setAllOnboardPixels(0, 0, 0)
    uxDisplays.setOnboardPixel1D(1, 100, 0, 0)
    uxDisplays.refreshOnboardPixels()
})

uxRemotes.onRemoteButton(uxRemotes.REMOTE_BUTTON.YUROBOT_C_GREEN, uxRemotes.BUTTON_STATE.PRESSED, function () {
    basic.showString("C")
    uxDisplays.setAllOnboardPixels(0, 0, 0)
    uxDisplays.setOnboardPixel1D(2, 0, 100, 0)
    uxDisplays.refreshOnboardPixels()
})

uxRemotes.onRemoteButton(uxRemotes.REMOTE_BUTTON.YUROBOT_D_YELLOW, uxRemotes.BUTTON_STATE.PRESSED, function () {
    basic.showString("D")
    uxDisplays.setAllOnboardPixels(0, 0, 0)
    uxDisplays.setOnboardPixel1D(3, 100, 100, 0)
    uxDisplays.refreshOnboardPixels()
})

uxRemotes.onRemoteButton(uxRemotes.REMOTE_BUTTON.YUROBOT_JOYSTICK_Z, uxRemotes.BUTTON_STATE.PRESSED, function () {
    basic.showString("Z")
    uxDisplays.setAllOnboardPixels(0, 0, 0)
    uxDisplays.setOnboardPixel1D(4, 100, 100, 100)
    uxDisplays.refreshOnboardPixels()
})

input.onButtonPressed(Button.AB, function () {
    basic.showString("AB")
    uxDisplays.setAllOnboardPixels(0, 0, 0)
    uxDisplays.setOnboardPixel1D(5, 100, 0, 100)
    uxDisplays.refreshOnboardPixels()
})
