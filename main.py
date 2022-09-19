start_time_micros = 0

while True:
    while Math.sqrt(Math.pow(input.acceleration(Dimension.X), 2)
            + Math.pow(input.acceleration(Dimension.Y), 2)
            + Math.pow(input.acceleration(Dimension.Z), 2)) > 400: # freefall threshold (milli-G)
            pass
    
    start_time_micros = input.running_time_micros()
    basic.show_leds('''
    . . . . .
    # . . . #
    . # . # .
    . . # . .
    . . . . .
    ''')

    while Math.sqrt(Math.pow(input.acceleration(Dimension.X), 2)
        + Math.pow(input.acceleration(Dimension.Y), 2)
        + Math.pow(input.acceleration(Dimension.Z), 2)) < 2000: # landing threshold (milli-G)
        pass

    delta_time_micros = input.running_time_micros() - start_time_micros
    while not (input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B)):
        # quit when A or B pressed at the end of display
        basic.show_string(str(delta_time_micros // 1000) + 'ms')