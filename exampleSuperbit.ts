/**
 * Superbit example
 */

let b = false
let a = false

// Initialization for motors and servos
uxMotion.initializePhaseWidthModulationDriver()

// Initialization for LEDs
uxDisplays.intializeSuperbitPixels()

uxMotion.setOrangeGreenGeekservoSpeed(uxMotion.SERVO.SUPERBIT_SERVO1, 0)
uxMotion.setGreyGeekservoAngle(uxMotion.SERVO.SUPERBIT_SERVO2, 0)
uxMotion.setLargeGreyGeekservoAngle(uxMotion.SERVO.SUPERBIT_SERVO3, 0)
uxMotion.setServoPulseWidth(uxMotion.SERVO.SUPERBIT_SERVO4, 0)

// Motion example
basic.forever(function () {
    a = input.buttonIsPressed(Button.A)
    b = input.buttonIsPressed(Button.B)
    if (a && !(b)) {
        uxMotion.setMotor(uxMotion.MOTOR.SUPERBIT_M1, -4095)
        uxMotion.setMotor(uxMotion.MOTOR.SUPERBIT_M2, -4095)
    } else if (b && !(a)) {
        uxMotion.setMotor(uxMotion.MOTOR.SUPERBIT_M1, 4095)
        uxMotion.setMotor(uxMotion.MOTOR.SUPERBIT_M2, 4095)
        uxDisplays.setSuperbitAllPixels(128, 0, 0)
        uxDisplays.refreshSuperbitPixels()
    } else if (a && b) {
        uxDisplays.setSuperbitAllPixels(10, 0, 10)
        uxDisplays.refreshSuperbitPixels()
        uxMotion.setOrangeGreenGeekservoSpeed(uxMotion.SERVO.SUPERBIT_SERVO1, -1024)
        uxMotion.setGreyGeekservoAngle(uxMotion.SERVO.SUPERBIT_SERVO2, 225)
        uxMotion.setLargeGreyGeekservoAngle(uxMotion.SERVO.SUPERBIT_SERVO3, 359)
        uxMotion.setServoPulseWidth(uxMotion.SERVO.SUPERBIT_SERVO4, 2646)
    } else {
        uxDisplays.setSuperbitAllPixels(0, 10, 10)
        uxDisplays.refreshSuperbitPixels()
        uxMotion.setOrangeGreenGeekservoSpeed(uxMotion.SERVO.SUPERBIT_SERVO1, 1024)
        uxMotion.setGreyGeekservoAngle(uxMotion.SERVO.SUPERBIT_SERVO2, -45)
        uxMotion.setLargeGreyGeekservoAngle(uxMotion.SERVO.SUPERBIT_SERVO3, 0)
        uxMotion.setServoPulseWidth(uxMotion.SERVO.SUPERBIT_SERVO4, 5946)
    }
})
