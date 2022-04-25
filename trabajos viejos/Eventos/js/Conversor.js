function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 108.70;
    var yenes = 0.94;
    var euro = 120.32;
    if(document.getElementById("dolar").checked){
        resultado = valore / dolar;
       document.getElementById("resultado").innerHTML = "Resultado $" + resultado.toFixed(2);
    }
    else if (document.getElementById("yene").checked){
        resultado = valore / yenes;
        document.getElementById("resultado").innerHTML = "Resultado ¥" + resultado.toFixed(2);
    }
    else if (document.getElementById("euro").checked){
        resultado = valore / euro;
        document.getElementById("resultado").innerHTML = "Resultado £" + resultado.toFixed(3);
    }
    else{
        alert("Usted no eligio ninguna moneda.");
    }


}
    var btn = document.getElementById('transformar');
    var caja = document.getElementById('caja');
    var contador = 0;

    function cambiar(){
        if(contador==0){
            caja.classList.add('modificado');
            contador=1;
        }
        else{
            caja.classList.remove('modificado');
            contador=0;
        }
    }

    btn.addEventListener('click',cambiar,true)