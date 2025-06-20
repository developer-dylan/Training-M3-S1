function enviar() {
    // Obtener los elementos del DOM
    const nombre = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const enviar = document.getElementById("enviar");

    enviar.className = "enviar"; // Reiniciar clase
    let message = ""; // Mensaje a mostrar

    // Validación de campos vacíos
    if (nombre === "" || age === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Verificar si la edad es un número válido
    const edad = Number(age);
    if (isNaN(edad) || age.match(/[a-zA-Z]/)) {
        console.error("Error: Por favor, ingresa una edad válida en números.");
        enviar.textContent = "Error: Por favor, ingresa una edad válida en números.";
        enviar.style.color = "red";
        return;
    }

    // Validación de rango
    if (edad < 0 || edad > 120) {
        enviar.textContent = "La edad debe estar entre 0 y 120 años.";
        enviar.style.color = "red";
        return;
    }

    // Mensaje según edad
    if (edad < 18) {
        message = `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    } else {
        message = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    }

    // Mostrar mensaje final
    enviar.textContent = message;
    enviar.style.color = "green";
}
