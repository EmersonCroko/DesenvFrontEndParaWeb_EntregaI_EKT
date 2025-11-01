// masks.js — máscara simples para CPF, telefone e CEP (sem libs)
(function(){
function setInputFilter(textbox, inputFilter) {
textbox.addEventListener('input', function() {
if (inputFilter(this.value)) this.oldValue = this.value;
else if (this.hasOwnProperty('oldValue')) this.value = this.oldValue;
else this.value = '';
});
}


function onlyDigits(v){return v.replace(/\D/g,'')}


// CPF: 000.000.000-00
var cpf = document.getElementById('cpf');
if(cpf){
cpf.addEventListener('input', function(){
var v = onlyDigits(this.value).slice(0,11);
v = v.replace(/(\d{3})(\d)/,'$1.$2');
v = v.replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3');
v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/,'$1.$2.$3-$4');
this.value = v;
});
}


// Telefone: (00) 90000-0000 or (00) 0000-0000
var tel = document.getElementById('telefone');
if(tel){
tel.addEventListener('input', function(){
var v = onlyDigits(this.value).slice(0,11);
if(v.length>10){
v = v.replace(/(\d{2})(