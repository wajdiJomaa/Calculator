const add = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => y==0 ? "dividing by 0" : Math.round(((x/y)*10000))/10000;

function operate (op,x,y)
{
    if (op === "+") return add(x,y);
    if (op === "-") return subtract(x,y);
    if (op === "*") return multiply(x,y);
    if (op === "\\") return divide(x,y);
    return "error";
}

const numbers = document.querySelectorAll(".nb");
const screen = document.querySelector(".display");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const op = document.querySelectorAll(".op");
let pressed = 0;
let operator = 0;

numbers.forEach(nb => {
    nb.addEventListener("click",(e)=>display(screen.textContent + e.target.value))});

clear.addEventListener('click',()=>{
    pressed=0;
    operator = ""
    display("");})

op.forEach(o => {
    o.addEventListener("click",(e)=>{
        pressed = screen.textContent != "" ? +screen.textContent : pressed;
        operator = e.target.value;
        display("");})
});

equal.addEventListener("click",()=>{
    if (operator == "" || screen.textContent == "" || isNaN(parseFloat(pressed))) {return};  
    display(operate(operator,pressed,+screen.textContent));
    operator = "";
})

function display(data)
{
    screen.textContent = data;
}