var parcial, parcial2, promedio;
parcial = parseFloat (prompt("ingrese nota del parcial:"));
parcial2 = parseFloat (prompt("ingrese 2da nota:"));
promedio = (parcial+parcial2)/2;

if(promedio >= 7){
    document.write ("el promedio es "+promedio+" APROBADO, Nos vemos en el final");
}else{
    document.write ("el promedio es "+promedio+" DESAPROBADO, usted va a recuperatorio");
}