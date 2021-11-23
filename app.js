var input = document.getElementById("screen");

function del(){
    var remain = input.value.slice(0,input.value.length-1)
    input.value = remain
}

function calcValue(num){
    var lastChar = input.value[input.value.length-1];
    var opr = ["+","-","*","/","%","."];
    if (opr.indexOf(lastChar) != -1 && opr.indexOf(num) != -1){
        del()
        input.value += num
    }else{
        input.value += num
    }
}

function clearScreen(){
    input.value = "";
}

function calculation(){
    var result = eval(input.value);
    input.value = result
}