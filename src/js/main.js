function send() {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const result = document.getElementById("send");
    const btnSend = document.querySelector("button[onclick='send()']");
    const btnClear = document.querySelector("button[onclick='clear()']");

    result.textContent = "";
    result.style.color = "red";

    // Validación de campos vacíos
    if (name === "" || age === "") {
        result.textContent = "Por favor, completa todos los campos.";
        return;
    }



    // Validación no numérica
    if (isNaN(age) || age.match(/[a-zA-Z]/)) {
        console.error("Error: Por favor, ingresa una edad válida en números.");
        result.textContent = "Error: Por favor, ingresa una edad válida en números.";
        return;
    }

    // Validación de rango
    if (age < 0 || age > 120) {
        result.textContent = "La edad debe estar entre 0 y 120 años.";
        return;
    }

    // Mensaje según edad
    if (age < 18) {
        result.textContent = `Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    } else {
        result.textContent = `Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    }

    result.style.color = "green";

    // Cambiar botones
    btnSend.style.display = "none";
    btnClear.style.display = "inline-block";
}

function clear() {
    // Limpiar campos
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("send").textContent = "";

    // Restaurar visibilidad de botones
    const btnSend = document.querySelector("button[onclick='send()']");
    const btnClear = document.querySelector("button[onclick='clear()']");
    btnSend.style.display = "inline-block";
    btnClear.style.display = "none";
}
