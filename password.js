const pwEl  = document.getElementById('pw');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl  = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

// write four random functions to figure whats the length
// so that it can generate based on number requested

function getLowercase() {
return lowerLetters[Math.floor(Math.random() * 
    lowerLetters.length)]
};

function getUppercase () {
return upperLetters[Math.floor(Math.random() * 
    upperLetters.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * 
    numbers.length)];
};

function getSymbols () {
   return symbols[Math.floor(Math.random() * 
    symbols.length)];
}
function generatePassword() {
    // we need to get the input value which tells us how long the password will be generated;

    const len = lenEl.value;
    let password = '';
    for(let i = 0; i < len; i++ ) {
        const x = generateX();
        password += x ;
    }

pwEl.innerText = password;
}


function generateX() {
    const xs = [];
    if(upperEl.checked) {
     xs.push(getUppercase());
    }
    
    if(lowerEl.checked) {
     xs.push(getLowercase());
    }
    if(numberEl.checked) {
     xs.push(getNumber());
    }
    if(symbolEl.checked) {
     xs.push(getSymbols());
    }
    if(xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];
}
generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;
    if(!password) { return;}
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied to clipboard');



})
