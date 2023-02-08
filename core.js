const dsp = document.querySelector('#dsp');  //Display
const btn1 = document.querySelector('#btn1'); //Buttons 0....9
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btn0 = document.querySelector('#btn0');
const btnC = document.querySelector('#btnC');
const btn_frt = document.querySelector('#btn_frt'); //Button "."
const btn_res = document.querySelector('#btn_res'); // =
const btn_pls = document.querySelector('#btn_pls'); // +
const btn_mns = document.querySelector('#btn_mns'); // -
const btn_mlt = document.querySelector('#btn_mlt'); // *
const btn_dvd = document.querySelector('#btn_dvd'); // /
const btn_bsp = document.querySelector('#btn_bsp'); // <- backspace
let set_frt = false; // fractional part flag .
let a,b,res; // vars
let operation; // operation flag
function changeType(){
    a = Number(a);
    b = Number(dsp.value);
}
function setFloat(){
    if (set_frt === false && dsp.value !== '') { // not empty string and fraction?
        dsp.value += '.';
        set_frt = true;
    }
}
function showResult(){
    switch (operation) {
        case '+':
            changeType();
            res = a + b;
            dsp.value = String(res);
            break;
        case '-':
            changeType();
            res = a - b;
            dsp.value = String(res);
            break;
        case '*':
            changeType();
            res = a * b;
            dsp.value = String(res);
            break;
        case '/':
            changeType();
            if (b === 0) {
                {
                    dsp.value = 'Error:Division by zero';
                    break;
                }
            } else {
                {
                    res = a / b;
                    dsp.value = String(res);
                    break;
                }
            }
    }
}
function plus(){
    a = dsp.value;
    dsp.value = '';
    operation = '+';
    set_frt = false;
}
function minus(){
    if(dsp.value === ''){
        dsp.value = '-';
    }else {
        a = dsp.value;
        dsp.value = '';
        operation = '-';
        set_frt = false;
    }
}
function multiply() {
    a = dsp.value;
    dsp.value = '';
    operation = '*';
    set_frt = false;
}
function divide(){
    a = dsp.value;
    dsp.value = '';
    operation = '/';
    set_frt = false;
}
btn_frt.onclick = setFloat;
btn_bsp.onclick = ()=>{dsp.value = dsp.value.substring(0, dsp.value.length -1);}
btnC.addEventListener('click', ()=>{dsp.value = ''; set_frt = false; a = b = res = '0'});
btn1.addEventListener('click', ()=>{dsp.value += btn1.innerText});
btn2.addEventListener('click', ()=>{dsp.value += btn2.innerText});
btn3.addEventListener('click', ()=>{dsp.value += btn3.innerText});
btn4.addEventListener('click', ()=>{dsp.value += btn4.innerText});
btn5.addEventListener('click', ()=>{dsp.value += btn5.innerText});
btn6.addEventListener('click', ()=>{dsp.value += btn6.innerText});
btn7.addEventListener('click', ()=>{dsp.value += btn7.innerText});
btn8.addEventListener('click', ()=>{dsp.value += btn8.innerText});
btn9.addEventListener('click', ()=>{dsp.value += btn9.innerText});
btn0.addEventListener('click', ()=>{dsp.value += btn0.innerText});
btn_pls.addEventListener('click', plus);
btn_mns.addEventListener('click', minus);
btn_mlt.addEventListener('click', multiply);
btn_dvd.addEventListener('click', divide);
btn_res.addEventListener('click', showResult);



