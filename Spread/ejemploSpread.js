const personaje = {
    nombre: "pato",
    apellido: "veliz",
    gustos: {
        estudiar: false,
        jugar: true,
    },
};

const direccion = {
    calle: "Avenida siempre viva 1223",
    localidad: "Shupanki",
    pasi: "Madagascar"
};



const persona = {
    ...personaje,
    ...direccion,
    edad: 45,
};

console.log(persona);