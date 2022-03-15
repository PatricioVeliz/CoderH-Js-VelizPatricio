function convertir(){
    var valore =parserint(document.getElementById("valor").value);
    var de = document.getElementById("de").value;
    var a = document.getElementById("a").value;

    var resultado = 0;
    var dolar = 108.70;
    var euro = 120.32;
    var yenes = 0.94;
    // De pesos a 
    if(de==1 && a==2){
        resultado = valore / dolar;
    }

    else if(de==1 && a ==3){
        resultado = valore / euro;
    }

    else if(de==1 && a==4){
        resultado = valore / yenes;
    }
    // De dolar a 
    else if(de==2 && a==1){
        resultado = valore * dolar;
    }

    else if(de==2 && a==3){
        resultado = valore * (dolar/euro);
    }

    else if(de==2 && a==4){
        resultado = valore * (dolar/yenes);
    }
    // De euro a
    else if(de==3 && a==1){
        resultado = valore * euro;
    }
    
    else if(de==3 && a==2){
        resultado = valore * (euro/dolar);
    }

    else if(de==3 && a==4){
        resultado = valore * (euro/yenes);
    }
    
    //de yenes a
    else if(de==4 && a==1){
        resultado = valore * yenes;
    }
    
    else if(de==4 && a==2){
        resultado = valore * (yenes/dolar);
    }

    else if(de==4 && a==3){
        resultado = valore * (yenes/euro);
    }

    else{
        resultado = valore;
    }

    document.getElementById("hbo").innerHTML="resultado: $ " +resultado.toFixed(2);

}