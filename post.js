const http = require("http");

process.stdin.on("data", datos =>{
    let tarea = datos.toString().trim();

    if(tarea == "salir"){
        process.exit();
    }
})

// let configuracion = {
//     method: "GET",
//     host: "localhost",
//     path: "/api_todo/",
//     port: 80
// }

// let peticion = http.request(configuracion, respuesta =>{
//     let tareas = "";
//     respuesta.on("data", datos =>{
//         tareas+=datos;
//     })
//     respuesta.on("end", ()=>{
//         console.log(JSON.parse(tareas));
//     })
// });
// peticion.end();