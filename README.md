# MicroX

An experimental (beta) unofficial extension for MakeCode (pxt) environment for micro:bit hardware supporting multiple hardware modules, e.g. boards, sensors, motors, servos, enabling combining the different modules together in one project which is simpler to use than original extensions and clearly states what **should** work (test it yourself and decide) and what still does not (i.e. still hasn't passed my own tests).

This repository is **NOT affiliated with** BBC, Microsoft, KittenBot, Yahboom, Geekservo, keyestudio, Ywrobot or any other company. It is completely **unofficial**!

All company and product names are owned by their owners and are mentioned here only for sake of clarification of what this code may work with (test it yourself!).

**Absolutely no warranty, guarantee or support are provided, use at your own risk!**

I will list which hardware modules worked for me, however, your hardware may produce different results. Use at your own risk, I take no responsibilty for any potential damange to your hardware.

If you would like to see support for your hardware here, you are welcome to send hardware for development and testing of this extension. No guarantee for if and when support will be added, depends on existence, clarity and correctness of documentation of the hardware and on if and when I have time to spare.

## Usage:

1. Run [MakeCode for micro:bit from here](https://makecode.microbit.org/) or [download offline version](https://makecode.microbit.org/offline-app)
2. Create a new project (or open an existing one)
3. Click on "Advanced" --> "Extensions"
4. Copy the URL of this repository [https://github.com/DannyVarod/pxt-microbit-microx/](https://github.com/DannyVarod/pxt-microbit-microx/) into the "Search or enter project URL..." box
5. This extension has now been added to your project, you can find the commands under  (uxRemotes, uxMotion, uxSensors,  uxDisplays, ...).

## Currently includes functionality (in development) for:

### Boards:

* Yahboom remote (Game handle)
* KittenBot Powerbrick (aka Armourbit)
* KittenBot Robotbit (aka "robot:bit")
* Yahboom Superbit (aka "Super:bit")
* Ywrobot remote (Ywrobot (looks more like Yurobot) m:bit JoyStick Extension Board) - see comments on usage in exampleYwrobotRemote.ts

### Sensors:

* Line tracker with 2 channels or 3 channels (2 channel line tracker / 3 channel line tracker)
    * Tested with "Tracker Sensor V2.1" (a red board), 3 channels, worked
    * Tested with keyestudio, 3 channels - 1st board had a faulty channel, replacement board works well - comes with potentiometers for adjusting sensitivity
    * Tested with Powerbrick sensor - 2 channels, sensor was over sensitive, couldn't use with paper
* Ultrasonic distance
    * Tested with Powerbrick sensor
    * Tested with KittenBot "Ultrasonic Sensor V1.0"

### Motors and Servos:

* Geekservo small red motor
* Geekservo small grey servo / gray servo / 270 degree angle servo
* Geekservo small green servo / orange servo / speed servo
* Geekservo large red motor / 2Kg motor
* Geekservo large grey servo / 2Kg servo / 360 degree angle servo

### Displays:

* Powerbrick 8*8 RGB pixel display
* Robotbit RGB 4 pixel display
* Superbit RGB 4 pixel display

### In development / parially working or not working:

* Yahboom Remote
    - Buttons (B1, B2, B3, B4) and joystick press (Z) not working with micro:bit V2
    - Vibration feedback not working
    - Buzzer not working

* Ywrobot Remote
    - Joystick press (Z) not working with micro:bit V2

* Powerbrick
    - color and gesture sensor partially working
    - MP3 player not working

## Join project:

If you want to volenteer to help with the writing or documenting of this extension and have your own hardware for testing it yourself, let me know.
Requirements:
* High level of English (grammar and spelling)
* Have your own hardware and want to get it working smoothly using this extension
* Have time to spare for free
* Either an experienced programmer or experienced as both a tester and a technical writer

## Development environment:

```
npm install -g pxt
pxt target microbit
pxt install
```
