let delta_time_micros: number;
let start_time_micros = 0
while (true) {
    while (Math.sqrt(Math.pow(input.acceleration(Dimension.X), 2) + Math.pow(input.acceleration(Dimension.Y), 2) + Math.pow(input.acceleration(Dimension.Z), 2)) > 400) {
        //  freefall threshold (milli-G)
        
    }
    start_time_micros = input.runningTimeMicros()
    basic.showLeds(`
    . . . . .
    # . . . #
    . # . # .
    . . # . .
    . . . . .
    `)
    while (Math.sqrt(Math.pow(input.acceleration(Dimension.X), 2) + Math.pow(input.acceleration(Dimension.Y), 2) + Math.pow(input.acceleration(Dimension.Z), 2)) < 2000) {
        //  landing threshold (milli-G)
        
    }
    delta_time_micros = input.runningTimeMicros() - start_time_micros
    while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        //  quit when A or B pressed at the end of display
        basic.showString("" + Math.idiv(delta_time_micros, 1000) + "ms")
    }
}
