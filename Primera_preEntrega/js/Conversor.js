function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 108.70;
    var yenes = 0.94;
    var euro = 120.32;
    if(document.getElementById("dolar").checked){
        resultado = valore / dolar;
        alert("Usted tiene: $"+resultado.toFixed(4));
    }
    else if (document.getElementById("yene").checked){
        resultado = valore / yenes;
        alert("Usted tiene: ¥" + resultado.toFixed(4));
    }
    else if (document.getElementById("euro").checked){
        resultado = valore / yenes;
        alert("Usted tiene: £" + resultado.toFixed(4));
    }
    else{
        alert("Usted no ingreso nada");
    }
}