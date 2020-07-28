
function zero()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn0').innerHTML;
}
function one()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn1').innerHTML;
}
function two()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn2').innerHTML;
}
function three()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn3').innerHTML;
}
function four()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn4').innerHTML;
}
function five()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn5').innerHTML;
}
function six()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn6').innerHTML;
}
function seven()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn7').innerHTML;
}
function eight()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn8').innerHTML;
}
function nine()
{
    document.getElementById('res').innerHTML+=document.getElementById('btn9').innerHTML;
}
function sum()
{
    document.getElementById('res').innerHTML+=document.getElementById('btnSum').innerHTML;
}
function eql()
{
    document.getElementById('res').innerHTML=eval(document.getElementById('res').innerHTML);
   

}
    
function clr()
{
    document.getElementById('res').innerHTML=null;
}
function sub()
{
    document.getElementById('res').innerHTML+=document.getElementById('btnSub').innerHTML;
}
function mul()
{
    document.getElementById('res').innerHTML+=document.getElementById('btnMul').innerHTML;
}
function div()
{
    document.getElementById('res').innerHTML+=document.getElementById('btnDiv').innerHTML;
}
function base_convert(number,initbase,changebase)
{
    return parseInt(number+'',initbase).toString(changebase);
}