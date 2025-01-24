let lastState = 0;

basic.forever(function () {
    let currentState = input.buttonIsPressed(Button.A) ? 1 : 0;
    if (lastState == 0 && currentState == 1) {
        basic.showString("Edge!");
    }
    lastState = currentState;
});

