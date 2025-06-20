function enviar() {
    const nombre = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const resultado = document.getElementById("enviar");
    const btnEnviar = document.querySelector("button[onclick='enviar()']");
    const btnLimpiar = document.querySelector("button[onclick='limpiar()']");

    resultado.textContent = "";
    resultado.style.color = "red";

    // Validación de campos vacíos
    if (nombre === "" || age === "") {
        resultado.textContent = "Por favor, completa todos los campos.";
        return;
    }

    const edad = Number(age);

    // Validación no numérica
    if (isNaN(edad) || age.match(/[a-zA-Z]/)) {
        console.error("Error: Por favor, ingresa una edad válida en números.");
        resultado.textContent = "Error: Por favor, ingresa una edad válida en números.";
        return;
    }

    // Validación de rango
    if (edad < 0 || edad > 120) {
        resultado.textContent = "La edad debe estar entre 0 y 120 años.";
        return;
    }

    // Mensaje según edad
    if (edad < 18) {
        resultado.textContent = `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    } else {
        resultado.textContent = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    }

    resultado.style.color = "green";

    // Cambiar botones
    btnEnviar.style.display = "none";
    btnLimpiar.style.display = "inline-block";
}

function limpiar() {
    // Limpiar campos
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("enviar").textContent = "";

    // Restaurar visibilidad de botones
    const btnEnviar = document.querySelector("button[onclick='enviar()']");
    const btnLimpiar = document.querySelector("button[onclick='limpiar()']");
    btnEnviar.style.display = "inline-block";
    btnLimpiar.style.display = "none";
}
