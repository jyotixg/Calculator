let outputScreen = document.getElementById('output-screen');
function display(num) {          // here, num becomes the value i.e 1, 2, 3, +, %,etc. 
    // console.log(num);
    outputScreen.value += num;
}

function calculate() {
    outputScreen.value = eval(outputScreen.value);
}

function clears() {
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1) 
}


