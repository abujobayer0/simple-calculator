function data(number){
    const display=document.getElementById('display');
    const displayValue=display.value;
    display.value += number;

}
document.getElementById('clear').addEventListener('click',function(){
    const display=document.getElementById('display');
    const displayValue=display.value;
    display.value='';
})
document.getElementById('result').addEventListener('click',function(){
    const display=document.getElementById('display');
    const displayValue=display.value;
    const evall = eval(displayValue);
    display.value=evall;
})