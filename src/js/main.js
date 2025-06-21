function send() {
    // Get user input values
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const result = document.getElementById("send");
    const btnSend = document.querySelector("button[onclick='send()']");
    const btnClean = document.querySelector("button[onclick='clean()']");

    // Clear previous result
    result.textContent = "";
    result.style.color = "red";

    // Check if name or age is empty
    if (name === "" || age === "") {
        result.textContent = "Por favor, completa todos los campos.";
        return;
    }

    const year = Number(age); // Convert age to number

    // Check if age is not a number
    if (isNaN(year)) {
        result.textContent = "Error: Por favor, ingresa una edad válida en números.";
        return;
    }

    // Check if age is in a valid range
    if (year < 0 || year > 120) {
        result.textContent = "La edad debe estar entre 0 y 120 años.";
        return;
    }

    // Show message depending on age
    if (year < 18) {
        result.textContent = `Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    } else {
        result.textContent = `Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    }

    result.style.color = "green";

    // Hide "Enviar" button and show "Limpiar" button
    btnSend.style.display = "none";
    btnClean.style.display = "inline-block";
}

function clean() {
    // Clear input fields and result
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("send").textContent = "";

    // Show "Enviar" button and hide "Limpiar" button
    const btnSend = document.querySelector("button[onclick='send()']");
    const btnClean = document.querySelector("button[onclick='clean()']");
    btnSend.style.display = "inline-block";
    btnClean.style.display = "none";
}
