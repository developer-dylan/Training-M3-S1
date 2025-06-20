function enviar() {
    // Obtener los elementos del DOM
    const nombre = document.getElementById("name").value.trim;
    const age = document.getElementById("age").value.trim;
    const enviar = document.getElementById("enviar");

    enviar.className = "enviar"; // Reiniciar clase del botón
    let message = ""; // Variable para almacenar el mensaje

    // Validación de campos vacíos
    if (nombre === "" || age === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Convertir a número
    const edad = Number(age);

    // Validación de tipo numérico y rango
     if (isNaN(edad)) {
        alert("Por favor, ingresa una edad válida.");
        return;
    } else if (edad < 0 || edad > 120) {
        alert("La edad debe estar entre 0 y 120 años.");
        return;
    } else if (edad < 18) {
        message = `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    } else if (edad >= 18) {
        message = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    }

    enviar.textContent = message;
}
