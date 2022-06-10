const http = require("http");

let configuracion = {
    method: "GET",
    host: "localhost",
    path: "/api_todo/",
    port: 80
}

let peticion = http.request(configuracion, respuesta =>{
    let tareas = "";
    respuesta.on("data", datos =>{
        tareas+=datos;
    })
    respuesta.on("end", ()=>{
        console.log(JSON.parse(tareas));
    })
});
peticion.end();