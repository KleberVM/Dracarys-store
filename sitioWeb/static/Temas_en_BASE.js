// document.addEventListener("DOMContentLoaded", function () {
//     const temasElement = document.getElementById("temas");

//     const temitas = {
//         primario: temasElement.getAttribute("data-primario"),
//         secundario: temasElement.getAttribute("data-secundario"),
//         terciario: temasElement.getAttribute("data-terciario"),
//         texto: temasElement.getAttribute("data-texto"),
//         fondo: temasElement.getAttribute("data-fondo")
//     };

//     console.log(temitas);  
// });


document.addEventListener("DOMContentLoaded", function () {
    const colorData = document.getElementById("colorData");

    // Obtener los valores de color desde los atributos data-*
    const primaryColor = colorData.getAttribute("data-primary");
    const secondaryColor = colorData.getAttribute("data-secondary");
    const tertiaryColor = colorData.getAttribute("data-tertiary");
    const textColor = colorData.getAttribute("data-text");
    const backgroundColor = colorData.getAttribute("data-background");

    // Imprimir los valores en la consola
    console.log("Primary Color:", primaryColor);
    console.log("Secondary Color:", secondaryColor);
    console.log("Tertiary Color:", tertiaryColor);
    console.log("Text Color:", textColor);
    console.log("Background Color:", backgroundColor);

    // Aplicar estos valores como variables CSS en :root
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty("--secondary-color", secondaryColor);
    document.documentElement.style.setProperty("--tertiary-color", tertiaryColor);
    document.documentElement.style.setProperty("--text-color", textColor);
    document.documentElement.style.setProperty("--background-color", backgroundColor);
});
