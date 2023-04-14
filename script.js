alert("hola mundo")

let preguntas = [
    {
        Nombre: "Atmósfera",
        Preguntas: [
            {
                FormName: "entry.1145032404",
                Type: "RadioButton",
                Options: [
                    "a", "b", "c", "d", "e", "f"
                ]
            }
        ]
    }
]

function crearPreguntas(preguntas) {
    
    let formulario = document.getElementById("formulario");
    formulario.innerHTML="";
    preguntas.forEach(pregunta => {
        formulario.innerHTML += `
        <div class="sections">
        <div>
            <h2>Atmósfera</h2>
        </div>
                </div>`

    
            })
            pregunta.Preguntas.forEach(opciones )
}

crearPreguntas(preguntas);
