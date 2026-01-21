let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button')

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);   //eval simply calculate values
            input.value = string;
        }
         else if (e.target.innerHTML == 'AC') {
            //setting AC button to clear input box
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            //setting DEL button to delete last character
            string = string.slice(0, -1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});