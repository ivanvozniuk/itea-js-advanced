/*
    Call Stack and Event Loop
*/ 

function func1() {
    func2();
}

function func2() {
    func3();
}

function func3() {
    // throw Error('oops');
    debugger;
}
func1();