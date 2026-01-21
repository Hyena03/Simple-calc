let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');

let string = '';
let result = '';

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 2);
            display.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;
        } else if (e.target.innerHTML == '=') {
            try {
                result = eval(string);
                display.value = string + ' = ' + result;
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});
