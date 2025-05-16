document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("input-y-boton");

    const input = document.createElement("input");
    input.placeholder = "Escribe tipo d element";

    const boton = document.createElement("button");
    boton.textContent = "Crear element";

    div.append(input, boton);

    boton.addEventListener("click", () => {
        const tipo = input.value.trim().toLowerCase();
        const contenedor = document.getElementById("container-elementos");
        const salida = document.getElementById("output");
        let nuevo;

        if (tipo === "input") {
            nuevo = document.createElement("input");
            nuevo.placeholder = "creado en codigo";
        } else if (tipo === "anchor") {
            nuevo = document.createElement("a");
            nuevo.href = "https://www.google.com";
            nuevo.target = "_blank";
            nuevo.textContent = "enlace";
        } else if (tipo === "button") {
            nuevo = document.createElement("button");
            nuevo.textContent = "escribir";
            nuevo.onclick = () => {
                salida.textContent = "hellow";
            };
        } else {
            nuevo = document.createElement("p");
            nuevo.textContent = "Texto creado";
        }

        contenedor.appendChild(nuevo);
        input.value = "";
    });
});
