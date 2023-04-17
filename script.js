const tipoInput = {
  radioButton: 'radioButton',
  textArea: 'textArea',
};

const preguntas = [
  {
    categoriaNombre: 'Atmósfera',
    categoriaPreguntas: [
      {
        formName: 'entry.1145032404',
        inputType: tipoInput.radioButton,
        options: [
          'Atmósfera de trabajo relajada, facilita la interacción.',
          'Atmósfera de trabajo varía, hay veces que la interacción es fluida y otras veces dificultosa.',
          'Atmósfera de trabajo tensa, dificulta la interacción.',
        ],
      },
      {
        formName: 'entry.11450324sddsdf',
        inputType: tipoInput.radioButton,
        options: [
          'Atmósfera de trabajo relajada, facilita la interacción.',
          'Atmósfera de trabajo varía, hay veces que la interacción es fluida y otras veces dificultosa.',
          'Atmósfera de trabajo tensa, dificulta la interacción.',
        ],
      },
      {
        formName: 'entry.11450324asd4',
        inputType: tipoInput.textArea,
        message: 'Comentarios sobre la Atmósfera del equipo (opcional)',
      },
    ],
  },
  {
    categoriaNombre: 'Ejecución del plan',
    categoriaPreguntas: [
      {
        formName: 'entry.1145032404',
        inputType: tipoInput.radioButton,
        options: [
          'Atmósfera de trabajo relajada, facilita la interacción.',
          'Atmósfera de trabajo varía, hay veces que la interacción es fluida y otras veces dificultosa.',
          'Atmósfera de trabajo tensa, dificulta la interacción.',
        ],
      },
      {
        formName: 'entry.11450324sddsdf',
        inputType: tipoInput.radioButton,
        options: [
          'Atmósfera de trabajo relajada, facilita la interacción.',
          'Atmósfera de trabajo varía, hay veces que la interacción es fluida y otras veces dificultosa.',
          'Atmósfera de trabajo tensa, dificulta la interacción.',
        ],
      },
      {
        formName: 'entry.11450324asd4',
        inputType: tipoInput.textArea,
        message: 'Comentarios sobre la Atmósfera del equipo (opcional)',
      },
    ],
  },
];

function mostrarPreguntas(datos = []) {
  const formulario = document.getElementById('formulario');
  formulario.innerHTML = '';

  // Por cada categoria...
  datos.forEach((categoria) => {
    const section = crearElementoClase('div', ['sections']);

    // seteamos nombre de categoria
    section.innerHTML = `<h2>${categoria.categoriaNombre}</h2>`;

    // Por cada pregunta...
    categoria.categoriaPreguntas.forEach((pregunta) => {
      // Si la pregunta es de tipo: RadioButton
      if (pregunta.inputType === tipoInput.radioButton) {
        const preguntaContainer = crearElementoClase('div', ['flex-container']);
        const indicator = crearElementoClase('div', ['indicator']);

        //Adjuntamos el indicador
        preguntaContainer.appendChild(indicator);
        // Por cada opción...
        pregunta.options.forEach((opcion, indice) => {
          const card = crearElementoClase('div', ['card']);
          card.innerHTML = `
                        <div>
                            <input type="radio" id="${pregunta.formName}-${indice}" name="${pregunta.formName}" value="${opcion}">
                        </div>
                        <label for="${pregunta.formName}-${indice}"><span>${opcion}</span>
                        
                        </label>
                    `;
          // Añadimos la opcion a su container
          preguntaContainer.appendChild(card);
        });

        //Añadimos la pregunta con sus opciones a la sección
        section.appendChild(preguntaContainer);
      }

      // Si la pregunta es de tipo: TextArea
      if (pregunta.inputType === tipoInput.textArea) {
        const cardComment = crearElementoClase('div', ['card_comment']);
        cardComment.innerHTML = `
            <div class="textareaField">
                <label for="${pregunta.formName}">${pregunta.message}</label>
                <textarea name="${pregunta.formName}" id="${pregunta.formName}" placeholder=" " wrap="soft"></textarea>
            </div>
            `;
        //Añadimos el text area a la sección
        section.appendChild(cardComment);
      }
    });

    // Añadimos la sección al formulario
    formulario.appendChild(section);
  });

  const enviarContainer = crearElementoClase('div');

  const buttonSubmit = crearElementoClase('button', ['btnSubmit']);
  buttonSubmit.setAttribute('type', 'submit');
  buttonSubmit.innerText = 'Enviar';

  enviarContainer.appendChild(buttonSubmit);
  formulario.appendChild(enviarContainer);
}

function crearElementoClase(tipoElemento, clasesArray = []) {
  const elemento = document.createElement(tipoElemento);
  clasesArray.forEach((clase) => {
    elemento.classList.add(clase);
  });
  return elemento;
}

mostrarPreguntas(preguntas);
