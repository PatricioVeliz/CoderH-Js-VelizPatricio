let  parque = prompt("Bienvenidos al parque de la costa, eliga la montaña rusa a ingresar")
const  ticket = "aquí está su ticket" 

while(parque != ""){
   switch (parque.toUpperCase()) {
        case "EL DESAFIO":
            const edad = prompt("Cuantos años tiene?")
            if(edad >= 10){
              alert(ticket)
              parque = ""
            }else{
            const  Vigia = prompt("No querés ir a la montaña rusa vigia?")
              if(Vigia.toUpperCase() != "SI"){
                alert("Lo sentimos, eres muy chico para la montaña rusa el desafio.")
                parque = ""
              }else{
                alert(ticket)
                parque = ""
              }
            }
            break
        case "VIGIA":
            alert(ticket);
            parque = ""
          break
        default:
           alert("Montaña rusa no encontrada")
           parque = prompt("¿Que montaña rusa quiere ir?")
          break
   }
  
   
}