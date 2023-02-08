const dsp = document.querySelector('#dsp');  //дисплей калькулятора
const btn1 = document.querySelector('#btn1'); //массив кнопок
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
const btn_frt = document.querySelector('#btn_frt'); //кнопка дробной части
const btn_res = document.querySelector('#btn_res'); //кнопка равно
const btn_pls = document.querySelector('#btn_pls'); //кнопка сложение
const btn_mns = document.querySelector('#btn_mns'); //кнопка минус
const btn_mlt = document.querySelector('#btn_mlt'); //кнопка умножить
const btn_dvd = document.querySelector('#btn_dvd'); //кнопка делить
const btn_bsp = document.querySelector('#btn_bsp'); //кнопка стереть
let set_frt = false; // флаг установки дробной части
let a,b,res; // переменые вычислений
let operation; //флаг действия
function changeType(){
    a = Number(a);
    b = Number(dsp.value);
}
function setFloat(){
    if (set_frt === false && dsp.value !== '') { // Флаг не установлен и не пустая строка?
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
    set_frt = false; // Разрешаем дробь во 2м операнде
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



